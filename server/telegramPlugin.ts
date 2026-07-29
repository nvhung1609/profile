import type { Plugin, ViteDevServer } from 'vite';
import https from 'https';

export function telegramApiPlugin(): Plugin {
  return {
    name: 'vite-plugin-telegram-api',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/send-telegram', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 455;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, contact, message } = data;

            if (!name || !contact || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            // Get bot token and chat id from server environment variables
            const botToken = process.env.TELEGRAM_BOT_TOKEN;
            const chatId = process.env.TELEGRAM_CHAT_ID;

            if (!botToken || !chatId || botToken.includes('YOUR_TELEGRAM')) {
              // Log warning on server
              console.warn('[Telegram API] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in .env file.');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                warning: 'Telegram environment variables not set. Form received locally.',
              }));
              return;
            }

            // Format message for Telegram
            const text = `🔔 *THÔNG BÁO LIÊN HỆ MỚI TỪ PORTFOLIO* 🔔\n\n` +
              `👤 *Họ tên:* ${name}\n` +
              `📞 *Liên hệ:* ${contact}\n` +
              `💬 *Nội dung:* ${message}\n\n` +
              `⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`;

            // Secure server-side call to Telegram API
            const postData = JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'Markdown',
            });

            const url = new URL(`https://api.telegram.org/bot${botToken}/sendMessage`);
            const options = {
              hostname: url.hostname,
              port: 443,
              path: url.pathname,
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData),
              },
            };

            const telegramReq = https.request(options, telegramRes => {
              let responseString = '';
              telegramRes.on('data', chunk => {
                responseString += chunk;
              });
              telegramRes.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, response: JSON.parse(responseString || '{}') }));
              });
            });

            telegramReq.on('error', err => {
              console.error('[Telegram Error]', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed to dispatch Telegram message', details: err.message }));
            });

            telegramReq.write(postData);
            telegramReq.end();
          } catch (e: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal Server Error', details: e.message }));
          }
        });
      });
    },
  };
}
