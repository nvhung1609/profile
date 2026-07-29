const readline = require('readline');
const fs = require('fs');
const path = require('path');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n======================================================');
console.log('🤖 TELEGRAM BOT SECURITY CONFIGURATION & TEST TOOL 🤖');
console.log('======================================================\n');
console.log('1. Open Telegram app and search for @BotFather');
console.log('2. Send /newbot to create your bot, and copy the HTTP API Token.');
console.log('3. Search for @userinfobot or @raw_data_bot on Telegram to get your CHAT_ID.\n');

rl.question('👉 Enter your Telegram BOT_TOKEN: ', botToken => {
  if (!botToken.trim()) {
    console.log('❌ Token empty. Aborting.');
    rl.close();
    return;
  }

  rl.question('👉 Enter your Telegram CHAT_ID: ', chatId => {
    if (!chatId.trim()) {
      console.log('❌ Chat ID empty. Aborting.');
      rl.close();
      return;
    }

    const envContent = `# SECURE TELEGRAM BOT CONFIGURATION\nTELEGRAM_BOT_TOKEN=${botToken.trim()}\nTELEGRAM_CHAT_ID=${chatId.trim()}\n`;
    fs.writeFileSync(path.join(__dirname, '.env'), envContent, 'utf8');
    console.log('\n✅ Saved .env file securely!');

    console.log('\n📡 Sending test message to your Telegram...');
    const postData = JSON.stringify({
      chat_id: chatId.trim(),
      text: '🚀 *XÁC NHẬN KẾT NỐI BOT TELEGRAM THÀNH CÔNG!*\n\nBot Telegram cho Portfolio Kỹ sư Nhúng Nguyễn Việt Hưng đã được kết nối an toàn bảo mật qua Server Proxy API!',
      parse_mode: 'Markdown',
    });

    const url = new URL(`https://api.telegram.org/bot${botToken.trim()}/sendMessage`);
    const req = https.request({
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('🎉 THÀNH CÔNG! Kiểm tra tin nhắn Telegram của bạn ngay bây giờ!');
        } else {
          console.log('⚠️ Telegram API response:', body);
        }
        rl.close();
      });
    });

    req.on('error', err => {
      console.error('❌ Network error:', err.message);
      rl.close();
    });

    req.write(postData);
    req.end();
  });
});
