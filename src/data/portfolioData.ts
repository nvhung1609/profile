// ========== TYPE DEFINITIONS ==========
export type Language = 'vi' | 'en' | 'ja';
export type Theme = 'dark' | 'light';

export interface Translation {
 vi: string;
 en: string;
 ja?: string;
}

export function getLangText(obj: any, lang: Language): string {
 if (!obj) return '';
 if (typeof obj === 'string') return obj;
 if (obj[lang]) return obj[lang];
 if (obj.en) return obj.en;
 if (obj.vi) return obj.vi;
 return '';
}

export interface PersonalInfo {
 name: string;
 title: Translation;
 subtitle: Translation;
 bio: Translation;
 aboutText: Translation;
 avatar: string;
 location: Translation;
 email: string;
 phone: string;
 github: string;
 facebook: string;
 zalo: string;
 linkedin: string;
 website: string;
 domains: string[];
 yearsExp: number;
 productsCount: number;
 pcbCount: number;
 communityMembers: number;
 status: Translation;
 educationBg: Translation;
 interests: Translation;
 goal: Translation;
 expertise: Translation;
}

export interface AchievementItem {
  vi: string;
  en: string;
  ja?: string;
  projectName?: Translation;
  role?: Translation;
  startDate?: string;
  endDate?: string;
  note?: Translation;
}

export interface WorkExperience {
 id: string;
 company: Translation | string;
 companyJapanese?: Translation | string;
 companyTaxUrl?: string;
 role: Translation;
 period: string;
 location: Translation;
 description: Translation;
 achievements: AchievementItem[];
 techStack: string[];
 companyUrl?: string;
}

export interface ServiceItem {
 id: string;
 icon: string;
 title: Translation;
 description: Translation;
}

export interface Project {
 id: string;
 title: Translation | string;
 category: string;
 period: string;
 summary: Translation;
 description: Translation;
 longDescription: Translation;
 techStack: string[];
 features: Translation[];
 liveUrl?: string;
 githubUrl?: string;
 publicationUrl?: string;
 image?: string;
 gallery?: string[];
 highlight?: boolean;
}

export interface TechCategory {
 title: Translation;
 icon: string;
 items: string[];
}

export interface Education {
 school: Translation;
 degree: Translation;
 period: string;
 description: Translation;
}

// ========== TRANSLATIONS (CLEAN PLAIN TEXT, NO SPAN TAGS) ==========
export const translations = {
 nav: {
 home: { vi: 'Trang chủ', en: 'Home' },
 about: { vi: 'Giới thiệu', en: 'About' },
 services: { vi: 'Dịch vụ & Năng lực', en: 'Services' },
 techStack: { vi: 'Kỹ năng & Công nghệ', en: 'Technical Stack' },
 projects: { vi: 'Dự án', en: 'Projects' },
 experience: { vi: 'Kinh nghiệm', en: 'Experience' },
 contact: { vi: 'Liên hệ', en: 'Contact' },
 },
 hero: {
 badge: { vi: 'Embedded & IoT Engineer', en: 'Embedded & IoT Engineer' },
 greeting: { vi: 'Xin chào, tôi là', en: "Hi, It's" },
 rolePrefix: { vi: '', en: '' },
 roleName: { vi: 'Computer Engineering - specializing in embedded systems', en: 'Computer Engineering - specializing in embedded systems' },
 downloadCv: { vi: 'Tải CV PDF', en: 'Download CV' },
 contactMe: { vi: 'Liên Hệ Ngay', en: 'Contact Me' },
 aboutMe: { vi: 'Về bản thân', en: 'About Me' },
 backgroundLabel: { vi: 'Học vấn:', en: 'Background:' },
 interestsLabel: { vi: 'Sở thích:', en: 'Interests:' },
 goalLabel: { vi: 'Mục tiêu:', en: 'Goal:' },
 expertiseLabel: { vi: 'Thế mạnh:', en: 'Expertise:' },
 years: { vi: 'Năm kinh nghiệm R&D', en: 'Years R&D Exp' },
 products: { vi: 'Sản phẩm IoT/AIoT thương mại', en: 'Commercial IoT Products' },
 community: { vi: 'Thành viên AI Box Community', en: 'Community Members' },
 },
 about: {
 title: { vi: 'Về Bản Thân', en: 'About Me' },
 subtitle: { vi: 'Hành trình R&D và định hướng trở thành Embedded Architect', en: 'My R&D journey and vision to become an Embedded System Architect' },
 readMore: { vi: 'Xem chi tiết CV', en: 'Read Full CV' },
 },
 services: {
 title: { vi: 'Dịch Vụ & Năng Lực R&D', en: 'Services & Capabilities' },
 subtitle: { vi: 'Cung cấp giải pháp phần cứng & phần mềm nhúng toàn diện từ ý tưởng đến sản xuất hàng loạt', en: 'Providing end-to-end hardware & firmware engineering solutions from concept to mass production' },
 },
 techStack: {
 title: { vi: 'Kỹ Năng & Công Nghệ', en: 'Technical Stack' },
 subtitle: { vi: 'Hệ sinh thái vi điều khiển, phần cứng, giao thức và công cụ phát triển thành thạo', en: 'Mastered MCU platforms, hardware design tools, communication protocols, and Edge AI' },
 },
 projects: {
 title: { vi: 'Dự Án Nổi Bật', en: 'Featured Projects' },
 subtitle: { vi: 'Các sản phẩm IoT, AIoT và thiết bị công nghiệp thực tế đã triển khai thành công', en: 'Real-world commercial IoT, AIoT, and industrial hardware deployed in production' },
 all: { vi: 'Tất cả', en: 'All' },
 viewDetail: { vi: 'Xem chi tiết', en: 'View Details' },
 liveDemo: { vi: '🔗 Live Web / Demo', en: '🔗 Live Web / Demo' },
 sourceCode: { vi: '💻 Mã nguồn GitHub', en: '💻 GitHub Repo' },
 features: { vi: 'Tính năng & Thông số kỹ thuật:', en: 'Key Features & Engineering Specs:' },
 techUsed: { vi: 'Công nghệ & Kỹ thuật sử dụng:', en: 'Technologies & Engineering Stack:' },
 },
 experience: {
 title: { vi: 'Lịch Sử Làm Việc', en: 'Work Experience' },
 subtitle: { vi: 'Quá trình công tác và nghiên cứu tại doanh nghiệp', en: 'Professional career history & corporate R&D accomplishments' },
 achievements: { vi: 'Đóng góp & Thành tựu nổi bật:', en: 'Key Contributions & Achievements:' },
 },
 contact: {
 title: { vi: 'Liên Hệ Trực Tiếp', en: 'Contact Me' },
 subtitle: { vi: 'Gửi tin nhắn trực tiếp cho tôi', en: 'Send me a direct message' },
 name: { vi: 'Họ và tên của bạn', en: 'Your Full Name' },
 contactInfo: { vi: 'Email / Số điện thoại liên hệ', en: 'Your Email / Phone Number' },
 message: { vi: 'Nội dung tin nhắn', en: 'Your Message' },
 send: { vi: '🚀 Gửi Tin Nhắn', en: '🚀 Send Message' },
 sending: { vi: '⏳ Đang gửi tin nhắn...', en: '⏳ Sending message...' },
 sendSuccess: { vi: '✅ Tin nhắn đã được gửi thành công!', en: '✅ Message successfully delivered!' },
 sendError: { vi: '❌ Gửi thất bại. Vui lòng liên hệ qua Zalo/Email!', en: '❌ Failed to send. Please contact via Zalo or Email!' },
 or: { vi: 'Kênh liên hệ khác', en: 'Other Contact Channels' },
 },
 commandPalette: {
 placeholder: { vi: 'Gõ từ khóa tìm kiếm (ESP32, STM32, CAN Bus, EcoCare, ...)', en: 'Type to search (ESP32, STM32, CAN Bus, EcoCare, ...)' },
 title: { vi: '⌨️ Bảng điều khiển nhanh', en: '⌨️ Quick Command Palette' },
 noResults: { vi: 'Không tìm thấy kết quả phù hợp', en: 'No matching results' },
 switchLang: { vi: '🌐 Switch to English', en: '🌐 Chuyển sang Tiếng Việt' },
 toggleTheme: { vi: '🌙 Đổi màu giao diện', en: '🌙 Toggle Theme' },
 downloadCv: { vi: '📄 Xem & Tải CV', en: '📄 View & Download CV' },
 },
 cv: {
 title: { vi: '📄 Hồ Sơ Năng Lực (CV) - Nguyễn Việt Hưng', en: '📄 Curriculum Vitae - Nguyen Viet Hung' },
 print: { vi: '🖨️ In / Tải PDF CV', en: '🖨️ Print / Download PDF' },
 close: { vi: 'Đóng', en: 'Close' },
 },
 footer: {
 madeWith: { vi: 'Thiết kế & Lập trình bởi', en: 'Designed & Engineered by' },
 role: { vi: 'Senior Embedded Engineer', en: 'Senior Embedded Engineer' },
 rights: { vi: 'Bảo lưu mọi quyền.', en: 'All rights reserved.' },
 },
};

// ========== PERSONAL DATA ==========
export const personalInfo: PersonalInfo = {
 name: 'NGUYỄN VIỆT HƯNG',
 title: {
 vi: 'Senior Embedded Engineer',
 en: 'Senior Embedded Engineer',
 },
 subtitle: {
 vi: 'R&D Embedded Firmware & Hardware Design Engineer • Edge AI • IoT/AIoT Systems',
 en: 'R&D Embedded Firmware & Hardware Design Engineer • Edge AI • IoT/AIoT Systems',
 },
 bio: {
 vi: 'Tôi là Kỹ sư R&D Hệ thống Nhúng & Thiết kế Phần cứng Điện tử (Embedded Firmware & Hardware Engineer) với 4+ năm kinh nghiệm chủ trì R&D toàn trình (End-to-End R&D) từ thiết kế sơ đồ nguyên lý (Schematic), đi dây PCB 2/4-Layer chuẩn EMI/EMC trên Altium Designer đến phát triển firmware nhúng cấp Production (C/C++, FreeRTOS, Edge AI) trên STM32 (ARM Cortex-M), ESP SoC, CH32 (RISC-V), MSP430, PIC, Quectel 4G EC800M/EC200U và SBC Linux (Raspberry Pi, Orange Pi) cho 16+ sản phẩm thương mại triển khai thành công tại Nhật Bản và Việt Nam.',
 en: 'R&D Embedded Systems & Electronic Hardware Engineer with 4+ years of end-to-end R&D experience—from schematic capture and multi-layer PCB layout (2/4-Layer EMI/EMC compliance on Altium) to production-grade embedded firmware (C/C++, FreeRTOS, Edge AI) across STM32 (ARM Cortex-M), ESP SoC, CH32 (RISC-V), MSP430, PIC, Quectel 4G LTE, and SBC Linux (Raspberry Pi, Orange Pi) for 16+ commercial IoT/AIoT products deployed in Japan and Vietnam.',
 },
 aboutText: {
 vi: 'Chuyên sâu trong thiết kế phần cứng điện tử và lập trình nhúng công nghiệp; thành thạo thiết kế PCB, tối ưu BOM, kiểm soát Impedance, EMI/EMC và phát triển firmware trên FreeRTOS. Có kinh nghiệm với các giao thức CAN Bus, RS485/Modbus, LoRa, MQTT và định hướng phát triển trở thành Embedded & Hardware System Architect.',
 en: 'Specialized in electronic hardware design and industrial embedded programming; proficient in PCB design, BOM optimization, Impedance control, EMI/EMC, and firmware development on FreeRTOS. Experienced with CAN Bus, RS485/Modbus, LoRa, and MQTT protocols, with a career focus on becoming an Embedded & Hardware System Architect.',
 },
 avatar: 'assets/img/pic1-hero-cutout.png',
 location: {
 vi: 'Cần Thơ / TP. Hồ Chí Minh, Việt Nam',
 en: 'Can Tho / Ho Chi Minh City, Vietnam',
 },
 email: 'nvhung16092000@gmail.com',
 phone: '+84 338 812 063',
 github: 'https://github.com/nvhung1609',
 facebook: 'https://www.facebook.com/nvhung1609/',
 zalo: 'https://zalo.me/0338812063',
 linkedin: 'https://linkedin.com/in/nvhung1609',
 website: 'https://musenplus.com',
 domains: ['musenplus.com', 'care.musenplus.com', 'sensor.musenplus.com', 'ai-box-plus.com'],
 yearsExp: 4,
 productsCount: 16,
 pcbCount: 25,
 communityMembers: 5000,
 status: {
 vi: '⚡ Kỹ sư R&D (Hardware & Firmware Engineer) @ JV TECH (HQ Nhật Bản: MUSEN PLUS)',
 en: '⚡ R&D Engineer (Hardware & Firmware Engineer) @ JV TECH (Japan HQ: MUSEN PLUS)',
 },
 educationBg: {
 vi: 'Can Tho University — Computer Engineering - specializing in embedded systems',
 en: 'Can Tho University — Computer Engineering (Embedded Systems)',
 },
 interests: {
 vi: 'Embedded Systems, IoT/AIoT, Edge AI, Industrial Automation, CAN Bus/RS485, UAV/Drone, PCB Design',
 en: 'Embedded Systems, IoT/AIoT, Edge AI, Industrial Automation, CAN Bus/RS485, UAV/Drone, PCB Design',
 },
 goal: {
 vi: 'Trở thành Embedded/Hardware System Architect và phát triển các sản phẩm phần cứng công nghiệp đẳng cấp quốc tế',
 en: 'Become an Embedded/Hardware System Architect building world-class industrial electronic products',
 },
 expertise: {
 vi: 'STM32 (ARM Cortex-M), ESP (SoC), CH32 (RISC-V), MSP430, PIC, EC800M/EC200U 4G, SBC/Linux (Raspberry Pi, Orange Pi), FreeRTOS, Altium 2/4-Layer PCB, CAN Bus, RS485/Modbus, LoRa, Edge AI, C/C++',
 en: 'STM32 (ARM Cortex-M), ESP (SoC), CH32 (RISC-V), MSP430, PIC, EC800M/EC200U 4G, SBC/Linux (Raspberry Pi, Orange Pi), FreeRTOS, Altium 2/4-Layer PCB, CAN Bus, RS485/Modbus, LoRa, Edge AI, C/C++',
 },
};

// ========== WORK EXPERIENCE ==========
export const workExperiences: WorkExperience[] = [
 {
 id: 'jv-tech',
 company: 'JV TECH',
 companyJapanese: {
 vi: '(HQ Nhật Bản: MUSEN PLUS Co., Ltd. / 無線プラス製作所)',
 en: '(Japan HQ: MUSEN PLUS Co., Ltd. / 無線プラス製作所)',
 ja: '(日本本社: 無線プラス製作所 / MUSEN PLUS Co., Ltd.)',
 },
 role: {
 vi: 'Kỹ sư R&D (Hardware & Firmware Engineer)',
 en: 'R&D Engineer (Hardware & Firmware Engineer)',
 },
 period: '15/08/2024 - Hiện tại',
 location: {
 vi: 'TP. HCM (JV TECH) • Osaka, Nhật Bản (MUSEN PLUS HQ)',
 en: 'Ho Chi Minh City (JV TECH) • Osaka, Japan (MUSEN PLUS HQ)',
 },
 description: {
 vi: 'Chủ trì R&D phần cứng điện tử và phát triển firmware nhúng cấp production tại JV TECH thuộc công ty MUSEN PLUS Co., Ltd. (HQ Osaka, Nhật Bản). Trực tiếp thiết kế toàn trình cho 16+ sản phẩm IoT/AIoT thương mại triển khai thực tế tại hệ thống viện dưỡng lão Nhật Bản, nhà máy sản xuất công nghiệp và thiết bị điện tử thông minh.',
 en: 'Leading electronic hardware R&D & production firmware engineering at JV TECH under parent company MUSEN PLUS Co., Ltd. (Osaka HQ, Japan). Primary R&D engineer delivering 16+ commercial IoT/AIoT products deployed across Japanese nursing facilities, industrial plants, and smart devices.',
 },
 achievements: [
    {
        "projectName": {
            "vi": "Nền Tảng Y Tế EcoCare AI",
            "en": "EcoCare AI Medical Platform",
            "ja": "EcoCare AI スマート医療プラットフォーム"
        },
        "role": {
            "vi": "Kỹ sư R&D Lead",
            "en": "R&D Lead",
            "ja": "R&D リード"
        },
        "startDate": "08/2024",
        "endDate": "Hiện tại",
        "vi": "Xây dựng và triển khai hệ thống phát hiện té ngã & Gọi Y tá không dây (Nurse Call) cho nền tảng EcoCare AI — đang vận hành thực tế tại các viện dưỡng lão ở Osaka, Nhật Bản (care.musenplus.com).",
        "en": "Built and deployed a fall detection & wireless Nurse Call system for the EcoCare AI platform — currently operating in nursing homes across Osaka, Japan (care.musenplus.com).",
        "ja": "EcoCare AIプラットフォームの転倒検知＆ワイヤレスナースコールシステムを構築・導入 — 大阪の有料老人ホームにて実稼働中 (care.musenplus.com)。"
    },
    {
        "projectName": {
            "vi": "Hệ Thống Bo Mạch Xe Nâng EcoLift",
            "en": "EcoLift Forklift Safety System",
            "ja": "EcoLift フォークリフト安全管理基板"
        },
        "role": {
            "vi": "Kỹ sư R&D",
            "en": "R&D Engineer",
            "ja": "R&D エンジニア"
        },
        "startDate": "09/2024",
        "endDate": "09/2025",
        "vi": "Phát triển giải pháp an toàn xe nâng công nghiệp EcoLift — tích hợp xác thực sinh trắc học, cảnh báo khoảng cách Radar, phát hiện va đập và tự động ngắt động cơ khi có sự cố.",
        "en": "Developed an industrial forklift safety solution (EcoLift) — integrating biometric authentication, Radar proximity warning, impact detection, and automatic engine cutoff on hazard events.",
        "ja": "EcoLift産業用フォークリフト安全ソリューションを開発 — 生体認証、レーダー接近警報、衝撃検知、緊急エンジン自動停止機能を統合。"
    },
    {
        "projectName": {
            "vi": "Nền Tảng Cảm Biến EcoSen",
            "en": "EcoSen Sensor Platform",
            "ja": "EcoSen センサープラットフォーム"
        },
        "role": {
            "vi": "Kỹ sư R&D",
            "en": "R&D Engineer",
            "ja": "R&D エンジニア"
        },
        "startDate": "08/2024",
        "endDate": "11/2024",
        "vi": "Thiết kế nền tảng thu thập dữ liệu đa cảm biến EcoSen phục vụ giám sát công nghiệp và nông nghiệp chính xác — hỗ trợ giao thức CAN Bus, RS485/Modbus RTU, LoRaWAN và MQTT Cloud (sensor.musenplus.com).",
        "en": "Designed a multi-sensor data acquisition platform (EcoSen) for industrial monitoring and precision agriculture — supporting CAN Bus, RS485/Modbus RTU, LoRaWAN, and MQTT Cloud protocols (sensor.musenplus.com).",
        "ja": "精密農業および産業モニタリング向けマルチセンサーデータ収集プラットフォームEcoSenを設計 — CAN Bus、RS485/Modbus RTU、LoRaWAN、MQTT Cloudをサポート (sensor.musenplus.com)。"
    },
    {
        "projectName": {
            "vi": "Bo Mạch RGB LED Matrix HUB75",
            "en": "RGB LED Matrix HUB75 Controller",
            "ja": "RGB LED マトリクス HUB75 基板"
        },
        "role": {
            "vi": "Kỹ sư R&D",
            "en": "R&D Engineer",
            "ja": "R&D エンジニア"
        },
        "startDate": "09/2024",
        "endDate": "06/2026",
        "vi": "Phát triển bo mạch điều khiển màn hình LED Matrix RGB HUB75 tốc độ cao bằng DMA — hỗ trợ hiển thị đa ngôn ngữ, hiệu ứng động và cấu hình từ xa qua Wi-Fi Web Server.",
        "en": "Developed a high-speed DMA-driven RGB LED Matrix HUB75 display controller — supporting multi-language rendering, dynamic effects, and remote configuration via Wi-Fi Web Server.",
        "ja": "DMA駆動による高速RGB LEDマトリクスHUB75コントローラ基板を開発 — 多言語表示、動的エフェクト、Wi-Fi Web Server経由のリモート設定に対応。"
    },
    {
        "projectName": {
            "vi": "Hệ Thống Khách Sạn EcoHotel",
            "en": "EcoHotel Smart Hotel System",
            "ja": "EcoHotel スマートホテルシステム"
        },
        "role": {
            "vi": "Kỹ sư R&D",
            "en": "R&D Engineer",
            "ja": "R&D エンジニア"
        },
        "startDate": "10/2024",
        "endDate": "07/2026",
        "vi": "Thiết kế trọn bộ phần cứng IoT cho hệ thống khách sạn thông minh EcoHotel — bao gồm khóa cửa RFID, cảm biến phát hiện người trong phòng, Gateway và Web App quản lý (hotel.musenplus.com).",
        "en": "Designed a complete IoT hardware suite for the EcoHotel smart hotel system — including RFID door locks, occupancy detection sensors, Room Gateways, and a management Web App (hotel.musenplus.com).",
        "ja": "EcoHotelスマートホテル向けIoTハードウェア一式を設計 — RFIDドアロック、室内在室検知センサー、ゲートウェイ、管理Web Appに対応 (hotel.musenplus.com)。"
    },
    {
        "projectName": {
            "vi": "Kit AI Voice Box Xiaozhi",
            "en": "Xiaozhi AI Voice Box Kit",
            "ja": "Xiaozhi AI 音声アシスタントキット"
        },
        "role": {
            "vi": "Kỹ sư R&D",
            "en": "R&D Engineer",
            "ja": "R&D エンジニア"
        },
        "startDate": "11/2024",
        "endDate": "09/2025",
        "vi": "Phát triển firmware cho bộ kit trợ lý giọng nói AI Xiaozhi tích hợp ChatGPT/DeepSeek — phục vụ cộng đồng 5.000+ lập trình viên nhúng, xử lý luồng thoại thời gian thực.",
        "en": "Developed firmware for the Xiaozhi AI voice assistant kit integrating ChatGPT/DeepSeek — serving a community of 5,000+ embedded developers with real-time voice streaming.",
        "ja": "ChatGPT/DeepSeek統合のXiaozhi AI音声アシスタントキット用ファームウェアを開発 — 5,000人以上の組込み開発者コミュニティ向けにリアルタイム音声ストリーミング処理を実装。"
    }

  ],
 techStack: [
 'Embedded C/C++ & FreeRTOS for real-time IoT/AIoT systems',
 'MCU platforms: ESP32, STM32 (ARM Cortex-M), CH32 (RISC-V), MSP430, PIC',
 'Multi-layer PCB design (Altium Designer) compliant with EMI/EMC standards',
 'Industrial protocols: CAN Bus, RS485/Modbus RTU, LoRaWAN, MQTT',
 '4G cellular modules: EC800M / EC200U for remote IoT connectivity',
 'Linux SBC integration: Raspberry Pi, Orange Pi as Edge Gateways',
 'Sensor fusion: Radar 60GHz, ToF, IMU, biometric & environmental sensors',
 'Edge AI inference & Cloud IoT architecture',
 ],
 companyUrl: 'https://care.musenplus.com',
 },
 {
 id: 'hasu-herbal',
 company: {
    vi: 'CÔNG TY CỔ PHẦN THẢO DƯỢC HASU',
    en: 'HASU HERBAL JOINT STOCK COMPANY',
    ja: 'HASU HERBAL 株式会社'
  },
 role: {
 vi: 'Kỹ sư R&D (Hardware & Firmware Engineer)',
 en: 'R&D Engineer (Hardware & Firmware Engineer)',
 },
 period: '01/09/2022 - 01/09/2025',
 location: {
 vi: 'Cần Thơ, Việt Nam',
 en: 'Can Tho, Vietnam',
 ja: 'ベトナム カントー',
 },
 description: {
 vi: 'Nghiên cứu và phát triển toàn trình (Thiết kế phần cứng PCB & lập trình Firmware nhúng) các thiết bị quang trắc phục vụ nông nghiệp công nghệ cao và các nhà màng/nhà kính trồng trọt. Chuyên làm các thiết bị IoT đóng ngắt tải động lực công suất lớn bằng Contactor, máy bơm, quạt thông gió và hệ thống chiếu sáng.',
 en: 'End-to-end R&D (PCB Hardware Design & Embedded Firmware Development) for agricultural telemetry & optical monitoring devices across high-tech greenhouses. Specialized in IoT controllers for high-power industrial load switching via AC Contactors, heavy motors, pumps, and lighting systems.',
 },
 achievements: [
 {
 vi: 'Nghiên cứu và thiết kế các thiết bị giám sát môi trường chuyên dụng cho nhà màng/nhà kính nông nghiệp công nghệ cao — đo đạc ánh sáng quang hợp (PAR), nhiệt độ, độ ẩm và chỉ số pH/EC đất.',
 en: 'Researched and designed specialized environmental monitoring devices for high-tech agricultural greenhouses — measuring PAR light, temperature, humidity, and soil pH/EC levels.',
 },
 {
 vi: 'Thiết kế sơ đồ nguyên lý và layout PCB (Altium Designer) cho các bo mạch điều khiển công suất lớn — đóng ngắt Contactor, máy bơm, quạt thông gió và hệ thống chiếu sáng cách ly an toàn, chống nhiễu công nghiệp.',
 en: 'Designed schematics and PCB layouts (Altium Designer) for high-power control boards — switching AC Contactors, pumps, ventilation fans, and lighting systems with industrial-grade isolation and noise immunity.',
 },
 {
 vi: 'Phát triển firmware nhúng C/C++ điều khiển đóng ngắt tải động lực an toàn — xây dựng thuật toán máy trạng thái bảo vệ quá dòng/quá áp và truyền dữ liệu giám sát theo thời gian thực.',
 en: 'Developed embedded C/C++ firmware for safe high-power load switching — implementing overcurrent/overvoltage protection state machines and real-time telemetry data transmission.',
 },
 {
 vi: 'Trực tiếp vận hành và thử nghiệm thực tế tại các nhà trồng — đo đạc EMI/EMC, tối ưu hóa nguyên mẫu phần cứng và hoàn thành các dự án R&D mở rộng theo yêu cầu công ty.',
 en: 'Conducted on-site field testing at greenhouse facilities — performing EMI/EMC measurements, optimizing hardware prototypes, and delivering extended R&D projects as assigned.',
 },
 ],
 techStack: [
 'Embedded C/C++ firmware for agricultural monitoring & control systems',
 'PCB schematic & layout design (Altium Designer) for high-power applications',
 'High-power AC Contactor switching with safety isolation & noise immunity',
 'Agricultural sensors: PAR light, temperature, humidity, soil pH/EC',
 'FreeRTOS-based state machines for overcurrent/overvoltage protection',
 ],
 },
];

// ========== SERVICES / CAPABILITIES ==========
export const services: ServiceItem[] = [
 {
 id: 'firmware',
 icon: 'fa-code',
 title: {
 vi: 'Phát Triển Firmware Nhúng Cấp Production',
 en: 'Production-Grade Firmware Engineering',
 },
 description: {
 vi: 'Lập trình C/C++ đa nền tảng vi xử lý & máy tính nhúng: STM32 (ARM Cortex-M), ESP (SoC), CH32 (RISC-V), MSP430, PIC, Quectel 4G EC800M/EC200U, nRF52840, Raspberry Pi, Orange Pi. Sử dụng FreeRTOS đa nhiệm, Linux nhúng, quản lý bộ nhớ, DMA, ngắt và máy trạng thái tiết kiệm năng lượng.',
 en: 'Multi-platform C/C++ MCU & SBC programming: STM32 (ARM Cortex-M), ESP (SoC), CH32 (RISC-V), MSP430, PIC, Quectel 4G EC800M/EC200U, nRF52840, Raspberry Pi, Orange Pi. FreeRTOS, Embedded Linux, DMA, interrupts, low-power state machines.',
 },
 },
 {
 id: 'pcb',
 icon: 'fa-microchip',
 title: {
 vi: 'Thiết Kế Mạch PCB Đa Lớp (Altium / KiCad)',
 en: 'Multi-layer PCB Hardware Design',
 },
 description: {
 vi: 'Thiết kế sơ đồ nguyên lý & layout PCB 2 lớp và 4 lớp chuyên sâu. Đi dây tốc độ cao (High-Speed), kiểm soát trở kháng (Impedance 50Ω/90Ω), xử lý nhiễu EMI/EMC, bảo vệ ESD & quá áp, chuẩn hóa xuất Gerber DFM/DFA.',
 en: 'Schematic capture & 2/4-layer PCB layout expertise in Altium & KiCad. High-speed routing, impedance matching (50Ω/90Ω), EMI/EMC mitigation, ESD protection, and DFM/DFA Gerber production output.',
 },
 },
 {
 id: 'edge-ai',
 icon: 'fa-brain',
 title: {
 vi: 'Edge AI & Thuật Toán Sensor Fusion',
 en: 'Edge AI & Sensor Fusion Processing',
 },
 description: {
 vi: 'Triển khai mô hình TensorFlow Lite Micro trên vi điều khiển. Xử lý ma trận cảm biến ToF 8x8, Radar 60GHz mmWave, IMU, GPS cho ứng dụng nhận diện tư thế người cao tuổi và cảnh báo va chạm xe nâng.',
 en: 'Deploying TensorFlow Lite Micro on MCUs. 8x8 ToF sensor matrix , 60GHz mmWave radar, IMU, and GPS signal processing for posture detection & forklift collision avoidance.',
 },
 },
 {
 id: 'protocols',
 icon: 'fa-network-wired',
 title: {
 vi: 'Bộ Giao Thức Truyền Thông & Wireless',
 en: 'Industrial Protocols & Wireless Networks',
 },
 description: {
 vi: 'Thành thạo toàn bộ giao thức: CAN Bus (2.0B / CAN-FD), RS485 / Modbus RTU, LoRa / LoRaWAN, BLE / Bluetooth, WiFi, MQTT, HTTP/HTTPS, WebSocket, NFC, OneWire. Thiết kế bộ chuyển đổi giao thức BMS xe nâng.',
 en: 'Complete protocol mastery: CAN Bus (2.0B / CAN-FD), RS485/Modbus RTU, LoRa/LoRaWAN, BLE, WiFi, MQTT, HTTP/HTTPS, WebSocket, NFC, OneWire. Custom BMS & Charger protocol gateway converters.',
 },
 },
];

// ========== ALL PROJECTS FROM CV & R&D ==========
export const projects: Project[] = [
  {
    "id": "nrf52840-dc-box",
    "title": {
      "vi": "Bo Mạch Vi Điều Khiển Industrial IoT nRF52840 — Cách Ly Quang 6 Kênh & Nguồn DC-DC Wide-Input",
      "en": "nRF52840 Industrial IoT Controller — 6-Ch Optocoupler & Wide-Input DC-DC Power",
      "ja": "nRF52840 産業用IoT制御基板 — 6ch光絶縁 & 広入力DC-DC電源"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Thiết kế toàn trình PCB công nghiệp nhỏ gọn trên nRF52840, tích hợp cách ly quang 6 kênh, nguồn DC-DC dải rộng và RF matching BLE 2.4GHz.",
      "en": "End-to-end compact industrial PCB on nRF52840 with 6-channel optocoupler isolation, wide-input DC-DC power and BLE 2.4GHz RF matching."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch điều khiển IoT công nghiệp kích thước nhỏ gọn. Thiết kế schematic, layout PCB multi-layer trên Altium Designer và phát triển firmware C/C++ FreeRTOS trên nền vi xử lý Nordic nRF52840 (ARM Cortex-M4F, BLE 5.0). Tích hợp khối cách ly quang đầu vào chống nhiễu, nguồn xung DC-DC dải rộng và mạch phối hợp trở kháng RF anten 2.4GHz.",
      "en": "Led end-to-end hardware R&D for a compact industrial IoT control board. Designed schematic, multi-layer PCB layout in Altium Designer, and developed C/C++ FreeRTOS firmware on Nordic nRF52840 (ARM Cortex-M4F, BLE 5.0). Integrated optocoupler input isolation, wide-input DC-DC buck power stage, and 2.4GHz RF antenna impedance matching."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer, tối ưu diện tích bo mạch nhỏ gọn.\n• Lập trình firmware nhúng C/C++ trên FreeRTOS cho vi xử lý Nordic nRF52840 (ARM Cortex-M4F), hỗ trợ chế độ Deep Sleep tiết kiệm năng lượng.\n• Thiết kế khối cách ly quang 6 kênh đầu vào chống nhiễu công nghiệp, tích hợp LED báo trạng thái trực quan.\n• Thiết kế mạch nguồn DC-DC dải rộng kết hợp LDO ổn áp và cầu chì tự phục hồi bảo vệ quá dòng.\n• Thiết kế tầng RF phối hợp trở kháng chuẩn 50Ω cho anten BLE 2.4GHz, tối ưu tầm xa truyền nhận không dây.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer, optimized for compact board size.\n• Embedded C/C++ firmware on FreeRTOS for Nordic nRF52840 (ARM Cortex-M4F) with ultra-low-power Deep Sleep modes.\n• 6-channel optocoupler input isolation stage for industrial noise immunity with visual status LEDs.\n• Wide-input DC-DC buck power design with LDO regulation and PTC resettable fuse overcurrent protection.\n• 50Ω RF impedance matching network for 2.4GHz BLE antenna, maximizing wireless range."
    },
    "techStack": [
      "nRF52840 (ARM Cortex-M4F)",
      "BLE 5.0 / 2.4GHz",
      "Optocoupler Isolation",
      "DC-DC Buck Converter",
      "RF Impedance Matching",
      "Altium Designer PCB",
      "C/C++ FreeRTOS",
      "Low-Power Design"
    ],
    "image": "assets/projects/nrf52840_pin/1.JPG",
    "gallery": [
      "assets/projects/nrf52840_pin/1.JPG",
      "assets/projects/nrf52840_pin/123.png",
      "assets/projects/nrf52840_pin/2.jpg",
      "assets/projects/nrf52840_pin/2024_03_13_13_14_IMG_0300.jpg",
      "assets/projects/nrf52840_pin/2024_03_13_13_14_IMG_0301.jpg",
      "assets/projects/nrf52840_pin/2024_03_13_13_15_IMG_0302.jpg",
      "assets/projects/nrf52840_pin/2024_03_13_13_38_IMG_0308.JPG",
      "assets/projects/nrf52840_pin/2024_03_13_13_38_IMG_0309.JPG",
      "assets/projects/nrf52840_pin/2024_04_06_19_51_IMG_0497.JPG",
      "assets/projects/nrf52840_pin/Untitled.png",
      "assets/projects/nrf52840_pin/z5321948321840_ebf0e53862102845c881e204c85789ee.jpg",
      "assets/projects/nrf52840_pin/z5333876660798_c01fdb86078efa4ac2ad68450cfbf4ee.jpg",
      "assets/projects/nrf52840_pin/z5345238505701_821e29973397196c2df40dc94c7b6a8d.jpg",
      "assets/projects/nrf52840_pin/z5347835229785_821cd9f67bf4cf018e10261b28b845ca.jpg",
      "assets/projects/nrf52840_pin/z5351726467405_e1488373b2a67237baa06dba3ea33ddc.jpg",
      "assets/projects/nrf52840_pin/z5407773303120_f125ac6d6b70f0cc8b04fee7e0864f18.jpg",
      "assets/projects/nrf52840_pin/z5412504614453_1ebecfdf6e1f490d2a163a27602b0ad2.jpg",
      "assets/projects/nrf52840_pin/z5413311863708_94af14223f9c570f709095da63fde8ed.jpg"
    ],
    "features": [
      {
        "vi": "Vi xử lý Nordic nRF52840 (ARM Cortex-M4F, BLE 5.0) với chế độ tiết kiệm năng lượng Deep Sleep",
        "en": "Nordic nRF52840 MCU (ARM Cortex-M4F, BLE 5.0) with ultra-low-power Deep Sleep"
      },
      {
        "vi": "6 kênh cách ly quang đầu vào chống nhiễu công nghiệp, LED báo trạng thái",
        "en": "6-channel optocoupler input isolation for industrial noise immunity with status LEDs"
      },
      {
        "vi": "Nguồn DC-DC dải rộng + cầu chì tự phục hồi bảo vệ quá dòng",
        "en": "Wide-input DC-DC buck power with resettable fuse overcurrent protection"
      },
      {
        "vi": "Mạch phối hợp trở kháng RF 50Ω cho anten BLE 2.4GHz",
        "en": "50Ω RF impedance matching for 2.4GHz BLE antenna"
      },
      {
        "vi": "PCB Altium Designer multi-layer, firmware C/C++ FreeRTOS",
        "en": "Altium Designer multi-layer PCB, C/C++ FreeRTOS firmware"
      }
    ],
    "highlight": true
  },
  {
    "id": "ecocare-ai-edge",
    "title": {
      "vi": "Nền Tảng Y Tế, Gọi Y Tá Không Dây (Nurse Call) & Chăm Sóc Người Cao Tuổi EcoCare AI — Cảm Biến AI Edge, ToF 8x8 & Radar 60GHz mmWave",
      "en": "EcoCare AI Smart Medical & Wireless Nurse Call Platform — AI Edge Processing, 8x8 ToF & 60GHz mmWave Radar",
      "ja": "EcoCare AI スマート医療・ワイヤレスナースコール安全プラットフォーム (AI Edge & 60GHz mmWave)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Nền tảng Y tế, Hệ thống Gọi y tá không dây (Nurse Call) & Chăm sóc Viện dưỡng lão EcoCare AI (care.musenplus.com — Nhật Bản): Xử lý AI Edge, cảm biến ToF 8x8, Radar 60GHz mmWave phát hiện té ngã & tư thế giường/toilet thời gian thực.",
      "en": "EcoCare AI Medical & Wireless Nurse Call Platform (care.musenplus.com — Japan Market): AI Edge processing, 8x8 ToF sensor matrix, 60GHz mmWave fall & posture detection radar (<500ms latency), and wireless Nurse Call hardware."
    },
    "description": {
      "vi": "Chủ trì R&D toàn trình phần cứng bo mạch và hệ thống cho Nền tảng Y tế, Nút gọi y tá không dây (Nurse Call) & Chăm sóc An toàn Viện dưỡng lão EcoCare AI (triển khai tại các viện dưỡng lão ở Osaka, Nhật Bản — care.musenplus.com). Vi xử lý nhúng trung tâm xử lý dữ liệu ma trận cảm biến ToF 8x8 kết hợp Radar 60GHz mmWave nhận diện té ngã và tư thế giường/toilet thời gian thực (<500ms latency) bảo vệ quyền riêng tư người cao tuổi. Tích hợp nút Gọi y tá (Nurse Call) không dây khẩn cấp, mạch hạ áp công nghiệp FR9886, micro I2S INMP441 và ứng dụng di động React Native Expo kết nối MQTT Cloud.",
      "en": "Led end-to-end hardware PCB and system R&D for the EcoCare AI Medical, Wireless Nurse Call & Nursing Home Safety Care Platform deployed across Osaka nursing facilities in Japan (care.musenplus.com). Powered by embedded MCU SoC running real-time 8x8 ToF sensor matrix paired with 60GHz mmWave radar for privacy-preserving fall & bed/toilet posture recognition (<500ms latency). Integrated wireless emergency Nurse Call hardware, FR9886 industrial buck regulator, INMP441 I2S digital mic, and React Native Expo app syncing with MQTT Cloud."
    },
    "longDescription": {
      "vi": "• Nền tảng Y tế triển khai tại Nhật Bản: EcoCare AI (care.musenplus.com) phục vụ hệ thống viện dưỡng lão & chăm sóc người cao tuổi tại Osaka, Nhật Bản.\n• Hệ thống Gọi Y tế khẩn cấp (Wireless Nurse Call): Tích hợp nút bấm gọi y tá không dây phát cảnh báo khẩn cấp ngay tức thì tới các điều dưỡng viên.\n• Vi xử lý AI Edge trung tâm: Thực thi thuật toán AI Edge xử lý ma trận ToF 8x8 & Radar 60GHz mmWave nhận diện té ngã độ trễ <500ms.\n• Bảo vệ sự riêng tư & An toàn tuyệt đối: Nhận diện tư thế nằm/ngồi/ngã trên giường và trong khu vực toilet bằng hình ảnh nhiệt ToF & sóng mmWave không dùng camera ghi hình.\n• Mạch hạ áp công nghiệp FR9886 & Micro I2S INMP441: Hạ áp 24V/12V DC-DC tỏa nhiệt thấp, điều khiển quạt xung PWM và phản hồi âm thanh qua Micro I2S.",
      "en": "• Deployed Medical Platform in Japan: EcoCare AI (care.musenplus.com) serving Japanese nursing homes & elderly care facilities in Osaka.\n• Wireless Emergency Nurse Call System: Integrated wireless hardware emergency Nurse Call button instantly triggering nurse alert notifications.\n• Central AI Edge Microcontroller: Real-time AI Edge processing of 8x8 ToF matrix & 60GHz mmWave radar for fall/posture detection (<500ms latency).\n• Privacy-Preserving Patient Monitoring: Monitoring lying/sitting/falling postures on beds and in toilet areas via ToF thermal depth mapping & mmWave radar without cameras.\n• FR9886 Industrial Buck & INMP441 I2S Mic: High-efficiency DC-DC buck, low-thermal PWM fan control, and INMP441 I2S digital MEMS microphone."
    },
    "techStack": [
      "Wireless Nurse Call",
      "AI Edge Processing",
      "ToF 8x8",
      "60GHz mmWave Radar",
      "Privacy Fall Detection",
      "FR9886 DC-DC Buck",
      "Altium Designer PCB"
    ],
    "features": [
      {
        "vi": "Tích hợp hệ thống Nút Gọi y tá (Nurse Call) không dây khẩn cấp phát cảnh báo ngay lập tức cho viện dưỡng lão",
        "en": "Integrated wireless emergency Nurse Call hardware button triggering instant nurse alert notifications"
      },
      {
        "vi": "Nền tảng Y tế thương mại triển khai tại Nhật Bản: care.musenplus.com phục vụ viện dưỡng lão & chăm sóc người cao tuổi",
        "en": "Commercial Medical platform deployed in Japan: care.musenplus.com serving nursing homes & elderly care facilities"
      },
      {
        "vi": "Cảm biến ToF 8x8 & Radar 60GHz mmWave nhận diện té ngã & tư thế giường/toilet độ trễ <500ms bảo vệ sự riêng tư",
        "en": "8x8 ToF & 60GHz mmWave radar fall & bed/toilet posture recognition with <500ms latency preserving privacy"
      },
      {
        "vi": "Mạch hạ áp công nghiệp FR9886 DC-DC tỏa nhiệt thấp + Micro I2S INMP441 phản hồi âm thanh",
        "en": "FR9886 industrial DC-DC buck regulator + INMP441 I2S digital MEMS microphone for acoustic feedback"
      },
      {
        "vi": "Thiết kế sơ đồ nguyên lý & layout PCB multi-layer chuẩn EMI/EMC xuất file Gerber sản xuất hàng loạt",
        "en": "Altium Designer multi-layer EMI/EMC compliant PCB layout exported for mass production"
      }
    ],
    "highlight": true,
    "image": "assets/projects/ecocare_ai_edge/1.png",
    "gallery": [
      "assets/projects/ecocare_ai_edge/1.png",
      "assets/projects/ecocare_ai_edge/2.png",
      "assets/projects/ecocare_ai_edge/3.png",
      "assets/projects/ecocare_ai_edge/4.jpg",
      "assets/projects/ecocare_ai_edge/5.png",
      "assets/projects/ecocare_ai_edge/6.png",
      "assets/projects/ecocare_ai_edge/7.png",
      "assets/projects/ecocare_ai_edge/8.png",
      "assets/projects/ecocare_ai_edge/9.png"
    ]
  },
  {
    "id": "ecolift-smart-elevator",
    "title": {
      "vi": "Hệ Thống Bo Mạch Quản Lý & An Toàn Xe Nâng EcoLift — Cảm Biến Va Đập Shock Sensor, Radar 60GHz, ToF, Vân Tay & Rơ-Le Động Cơ",
      "en": "EcoLift Industrial Forklift Safety System — Biometric Fingerprint Keypad, 60GHz Radar, ToF, 3D IMU & Engine Cutoff",
      "ja": "EcoLift フォークリフト安全管理基板システム (指紋認証, Radar, ToF, 3D加速度 & エンジン遮断)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Hệ thống bo mạch quản lý & an toàn xe nâng EcoLift: Cảm biến va đập Shock Sensor phát hiện va chạm & đi qua gờ giảm tốc, Radar 60GHz, ToF đo khoảng cách, Vân tay Keypad, còi báo khi lùi xe và Rơ-le ngắt động cơ an toàn.",
      "en": "EcoLift industrial forklift safety management PCB system: Biometric Fingerprint & Keypad authorization, 60GHz Radar & ToF distance sensing, 3D Accelerometer IMU shock monitoring, reverse back-up alarm horn, and engine cutoff safety relays."
    },
    "description": {
      "vi": "Chủ trì R&D toàn trình phần cứng bo mạch và hệ thống cho Bộ sản phẩm Quản lý & An toàn Xe nâng Công nghiệp EcoLift. Tích hợp cảm biến va đập (Shock Sensor) nhận diện gia tốc va đập thời gian thực, phân biệt sự cố va chạm mạnh với việc xe nâng đi qua gờ giảm tốc. Kết hợp cảm biến Radar 60GHz mmWave, cảm biến ToF đo khoảng cách, bàn phím Keypad Vân tay phân quyền lái xe, còi báo động khi lùi xe và mạch rơ-le ngắt nguồn động cơ an toàn.",
      "en": "Led end-to-end hardware PCB and system R&D for the EcoLift Industrial Forklift Safety & Management product suite. Integrates core capabilities: 1) Biometric Fingerprint & Keypad authorization for driver access control; 2) 60GHz mmWave Radar & ToF distance sensors for wide-range proximity safety warning; 3) 3D Accelerometer IMU measuring impacts, shocks , and vehicle rollover tilts in real-time; 4) Engine cutoff safety relays; 5) High-decibel reverse back-up & proximity alarm horns. Wi-Fi/4G Web Cloud telemetry."
    },
    "longDescription": {
      "vi": "• Hệ thống Quản lý & An toàn Xe nâng Công nghiệp EcoLift triển khai cho các nhà máy & kho vận logistics.\n• Cảm biến va đập Shock Sensor chuyên dụng: Đo đạc độ xóc gia tốc 3D, phân biệt chính xác xe nâng va chạm chướng ngại vật hay đang vận hành đi qua gờ giảm tốc nhà xưởng.\n• Bàn phím Keypad & Cảm biến Vân tay: Phân quyền vận hành sinh trắc học, chỉ người lái có vân tay/mã PIN hợp lệ mới được khởi động xe nâng.\n• Cảnh báo khoảng cách an toàn bằng Radar 60GHz & ToF: Cảm biến Radar dải rộng kết hợp ToF định khoảng cách chính xác, phát hiện người/vật cản xung quanh.\n• Còi báo khi lùi xe & Rơ-le ngắt động cơ: Còi báo âm thanh tự động kích hoạt khi xe lùi hoặc vi phạm khoảng cách + Rơ-le ngắt nguồn động cơ an toàn.\n• Web Cloud & Truyền thông Wi-Fi/4G: Quản lý lịch sử vận hành và cập nhật firmware qua OTA.",
      "en": "• EcoLift Industrial Forklift Safety & Management System deployed across logistics & factory sites.\n• Biometric Fingerprint & Keypad Unit: Biometric driver authorization; engine start enabled only with valid fingerprint scan or PIN.\n• 60GHz Radar & ToF Distance Safety Warning: Wide-range Radar paired with precision ToF distance sensors detecting pedestrians/obstacles.\n• 3D Accelerometer IMU: Real-time impact force measurement, shock monitoring , and rollover tilt alerts.\n• Reverse Back-Up Alarm Horn & Engine Cutoff Relays: Automated high-decibel warning horn sounding during reversing or proximity breach + engine cutoff relays.\n• Web Cloud & Wi-Fi/4G Telemetry: Managing operational logs, tracking collision incidents, and executing OTA firmware updates ."
    },
    "techStack": [
      "Industrial Shock Sensor",
      "Biometric Fingerprint Keypad",
      "60GHz Radar Sensing",
      "ToF Distance Sensor",
      "Reverse Alarm Horn",
      "Engine Cutoff Relays",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/ecolift_smart_elevator/1.png",
    "gallery": [
      "assets/projects/ecolift_smart_elevator/1.png",
      "assets/projects/ecolift_smart_elevator/2.png",
      "assets/projects/ecolift_smart_elevator/3.png",
      "assets/projects/ecolift_smart_elevator/4.png",
      "assets/projects/ecolift_smart_elevator/5.png",
      "assets/projects/ecolift_smart_elevator/6.png",
      "assets/projects/ecolift_smart_elevator/7.png",
      "assets/projects/ecolift_smart_elevator/8.png",
      "assets/projects/ecolift_smart_elevator/9.png",
      "assets/projects/ecolift_smart_elevator/10.png",
      "assets/projects/ecolift_smart_elevator/11.png",
      "assets/projects/ecolift_smart_elevator/12.png",
      "assets/projects/ecolift_smart_elevator/13.png",
      "assets/projects/ecolift_smart_elevator/14.png",
      "assets/projects/ecolift_smart_elevator/15.png",
      "assets/projects/ecolift_smart_elevator/16.png",
      "assets/projects/ecolift_smart_elevator/17.png",
      "assets/projects/ecolift_smart_elevator/18.png",
      "assets/projects/ecolift_smart_elevator/19.png"
    ],
    "features": [
      {
        "vi": "Bàn phím Keypad tích hợp Cảm biến Vân tay sinh trắc học phân quyền người vận hành xe nâng an toàn",
        "en": "Biometric Fingerprint & Keypad unit authorizing forklift driver access control safely"
      },
      {
        "vi": "Cảnh báo khoảng cách an toàn bằng cảm biến Radar 60GHz dải rộng kết hợp cảm biến đo khoảng cách ToF",
        "en": "Proximity distance safety warning utilizing 60GHz Radar & precision ToF distance sensors"
      },
      {
        "vi": "Tích hợp cảm biến va đập (Shock Sensor) đo đạc lực va đập & phân biệt chính xác sự cố va chạm xe nâng với việc di chuyển qua gờ giảm tốc",
        "en": "Integrated Industrial Shock Sensor measuring impact forces & distinguishing collision events from speed bump crossings"
      },
      {
        "vi": "Còi báo cảnh báo tự động phát âm thanh khi xe nâng lùi (Reverse Horn) hoặc vi phạm khoảng cách vạch an toàn",
        "en": "Automated warning horn sounding during forklift reversing (Reverse Horn) or proximity breaches"
      },
      {
        "vi": "Bộ rơ-le ngắt nguồn động cơ an toàn kết hợp Web Cloud Wi-Fi/4G quản lý nhật ký vận hành & cập nhật firmware OTA",
        "en": "Engine cutoff safety relays paired with Wi-Fi/4G Web Cloud managing operational logs & OTA updates"
      }
    ],
    "highlight": true
  },
  {
    "id": "xiaozhi-voice-ai",
    "title": {
      "vi": "Firmware Kit Phát Triển Trợ Lý Giọng Nói Trí Tuệ Nhân Tạo Xiaozhi AI Voice Box — Stream Audio I2S & Cloud LLM",
      "en": "Xiaozhi AI Voice Box Embedded Firmware Stack — I2S Audio Streaming & Cloud LLM Assistant",
      "ja": "Xiaozhi AI Voice Box 組み込みファームウェア (I2Sオーディオ & Cloud LLM)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Phát triển Firmware nhúng cấp Production cho Kit Trợ lý Giọng nói AI Xiaozhi AI Voice Box (Phần cứng phục vụ R&D/Dev): Xử lý luồng âm thanh I2S Digital Mic INMP441, mã hóa nén Opus, giao tiếp WebSocket thời gian thực kết nối các mô hình Cloud LLM (ChatGPT, DeepSeek, Qwen).",
      "en": "Production embedded firmware development for Xiaozhi AI Voice Box Dev Kit (R&D prototype hardware): I2S digital audio streaming (INMP441), Opus codec compression, low-latency WebSocket interfacing with Cloud LLM models (ChatGPT, DeepSeek, Qwen)."
    },
    "description": {
      "vi": "Chủ trì thiết kế & lập trình Firmware nhúng (Firmware Development) toàn phần cho sản phẩm Kit Trợ lý Giọng nói AI Xiaozhi AI Voice Box (phần cứng bo mạch đóng vai trò nền tảng R&D/Dev Kit). Xây dựng kiến trúc Firmware thời gian thực RTOS: thu âm số hóa qua Micro I2S INMP441, nén luồng âm thanh Opus Audio Codec, truyền nhận dữ liệu hai chiều qua mã hóa WebSocket độ trễ cực thấp (<300ms latency) kết nối trực tiếp với các mô hình ngôn ngữ lớn Cloud LLM (ChatGPT, DeepSeek, Qwen, Kimi), phát lại âm thanh qua chuẩn I2S DAC và quản lý cấu hình Wi-Fi qua Web Portal.",
      "en": "Led full-stack embedded firmware design & development for the Xiaozhi AI Voice Box Smart Assistant (hardware PCB served as R&D/Dev prototype). Engineered real-time RTOS firmware architecture: I2S digital audio sampling (INMP441 mic), Opus Audio Codec compression, bi-directional low-latency WebSocket streaming (<300ms latency) interfacing with Cloud LLMs (ChatGPT, DeepSeek, Qwen, Kimi), I2S DAC audio playback, and Wi-Fi Web Portal configurator."
    },
    "longDescription": {
      "vi": "• Trọng tâm Phát triển Firmware Nhúng (Software/Firmware Focus): Tập trung R&D kiến trúc phần mềm nhúng cấp Production, bo mạch phần cứng được xây dựng phục vụ mục đích thử nghiệm Dev Kit.\n• Thu âm & Giải mã Âm thanh số I2S: Lập trình driver I2S dải tần cao cho Micro Digital INMP441 & chip mã hóa/giải mã âm thanh I2S DAC xuất loa chất lượng cao.\n• Mã hóa Opus & WebSocket Streaming: Tối ưu thuật toán nén luồng thoại Opus codec và kết nối đòn bẩy WebSocket hai chiều truyền tín hiệu thoại thời gian thực độ trễ <300ms.\n• Tích hợp mô hình AI Cloud LLM: Kết nối linh hoạt API các mô hình trí tuệ nhân tạo hàng đầu (ChatGPT, DeepSeek, Qwen, Kimi) xử lý hội thoại thông minh tự nhiên.\n• Giao diện Web Portal & OTA: Tích hợp Web Server nhúng cho phép cài đặt Wi-Fi, đổi API Key mô hình AI và cập nhật phần mềm OTA từ xa.",
      "en": "• Embedded Firmware Focus: Focused 100% on production-grade embedded firmware stack R&D; hardware PCB served as development kit prototype platform.\n• I2S Digital Audio Sampling & Playback: Developed high-bandwidth I2S drivers for INMP441 digital mic & I2S DAC audio codec driving high-fidelity speakers.\n• Opus Codec & Low-Latency WebSocket Streaming: Optimized Opus voice compression algorithms and bi-directional WebSocket client (<300ms latency) for real-time voice streaming.\n• Cloud LLM Integration: Seamless API integration with leading Large Language Models (ChatGPT, DeepSeek, Qwen, Kimi) for natural AI voice conversations.\n• Web Portal & OTA Updates: Built-in embedded Web Server for Wi-Fi provisioning, AI API Key configuration, and remote OTA firmware upgrades."
    },
    "techStack": [
      "Embedded Firmware Architecture",
      "FreeRTOS / C++",
      "I2S Audio Driver (INMP441)",
      "Opus Audio Codec",
      "WebSocket Real-Time API",
      "Cloud LLM (ChatGPT/DeepSeek)",
      "Dev Kit Hardware R&D"
    ],
    "image": "assets/projects/xiaozhi_voice_ai/1.jpg",
    "gallery": [
      "assets/projects/xiaozhi_voice_ai/1.jpg"
    ],
    "features": [
      {
        "vi": "Phát triển phần mềm nhúng (Firmware Focus) trên nền bo mạch Kit phát triển R&D thử nghiệm phần cứng",
        "en": "Production embedded firmware development on prototype R&D Dev Kit hardware platform"
      },
      {
        "vi": "Lập trình Driver thu âm số hóa I2S Micro INMP441 & giải mã phát âm thanh I2S DAC độ phân giải cao",
        "en": "I2S digital audio sampling driver (INMP441 mic) & high-resolution I2S DAC audio playback driver"
      },
      {
        "vi": "Tối ưu luồng thoại bằng thuật toán nén Opus Codec & giao tiếp WebSocket hai chiều độ trễ thấp <300ms",
        "en": "Opus audio compression codec & bi-directional low-latency WebSocket voice streaming (<300ms)"
      },
      {
        "vi": "Tích hợp mô hình trí tuệ nhân tạo Cloud LLM (ChatGPT, DeepSeek, Qwen) phản hồi hội thoại bằng giọng nói tự nhiên",
        "en": "Cloud LLM integration (ChatGPT, DeepSeek, Qwen) executing natural AI voice conversations"
      },
      {
        "vi": "Trang Web Portal nhúng cài đặt Wi-Fi, cấu hình API Key AI và cập nhật phần mềm OTA từ xa",
        "en": "Embedded Web Portal interface for Wi-Fi setup, AI API key provisioning & remote OTA firmware updates"
      }
    ],
    "highlight": true
  },
  {
    "id": "auto-start-pcie",
    "title": {
      "vi": "Bo Mạch Khởi Động Tự Động Máy Chủ / Server Qua Khe Cắm PCI Express (Auto Start PCIe Card)",
      "en": "Automatic Server Power-On Controller Card via PCI Express (PCIe Auto Start)",
      "ja": "PCI Express経由 サーバー自動起動・電源制御カード (Auto Start PCIe)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch mở rộng khe cắm PCI Express tự động kích nguồn bật máy chủ/PC khi có điện lưới, tự khởi động lại khi sự cố và duy trì Uptime cho hệ thống Server.",
      "en": "PCI Express expansion card automatically triggering power-on sequence for servers/PCs upon AC mains restoration, maintaining maximum server uptime."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế bo mạch cắm khe PCI Express x1 chuyên dụng phục vụ tự động bật nguồn (Auto Power-On / Remote Reboot) cho hệ thống máy chủ, Server nhà xưởng và máy tính trạm làm việc. Thiết kế sơ đồ nguyên lý và layout PCB 2-layer chuẩn chân cắm PCIe x1 Goldfinger trên Altium Designer. Tích hợp chân nhận biết nguồn dự phòng 3.3Vaux, tín hiệu Wakeup Pin, mạch kích relay/transistor MOSFET ngắt mở an toàn và đèn LED báo trạng thái.",
      "en": "Led hardware R&D for a dedicated PCI Express x1 edge card designed for automatic power-on (Auto Power-On / Remote Reboot) of servers, industrial workstations, and PC rigs. Designed schematic capture and 2-layer PCB layout with standard PCIe x1 Goldfinger connector in Altium Designer. Integrated 3.3Vaux standby power sense, Wakeup pin triggering, MOSFET/Transistor power pulse circuitry, and status indicators."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB chuẩn khe cắm PCI Express x1 Goldfinger trên Altium Designer cho thiết bị Auto-Start Server.\n• Tự động kích nguồn máy chủ: Nhận diện điện áp chờ 3.3Vaux từ khe PCIe khi có điện lưới và tự động phát xung kích nút Power-On khởi động máy tính.\n• Mạch điều khiển an toàn: Sử dụng Transistor MOSFET công suất kết hợp mạch trễ thời gian chống kích đúp, bảo vệ mainboard máy tính không bị lặp xung nguồn.\n• Đầu nối nạp & Debug: Trang bị Header cắm Debug, nút nhấn thao tác bật thủ công và tụ Tantalum 100uF 16V lọc nguồn ổn định.\n• Thiết kế mạch PCB nhỏ gọn: Chuẩn form factor PCI Express x1 cắm vừa mọi vỏ case PC tiêu chuẩn và server rack-mount.",
      "en": "• Schematic capture & PCB layout with standard PCI Express x1 Goldfinger interface in Altium Designer for Server Auto-Start hardware.\n• Automated Power-On Sequence: Senses 3.3Vaux standby rail upon AC power restoration and automatically generates a clean Power-On pulse to boot the PC/Server.\n• Safe Pulse Control Circuitry: Power MOSFETs combined with anti-debounce timing circuits preventing accidental double-triggering or mainboard damage.\n• Programming & Debug Interface: Equipped with DEBUG pin headers, manual tactile buttons, and 100uF 16V Tantalum power filtering capacitors.\n• Compact Form Factor: Standard PCIe x1 profile fitting smoothly inside all standard desktop cases and industrial rack-mount servers."
    },
    "techStack": [
      "PCI Express x1 Goldfinger",
      "Server Auto Power-On",
      "3.3Vaux Standby Sense",
      "Power Pulse Generator",
      "MOSFET Power Switch",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/auto_start_pcie/top.png",
    "gallery": [
      "assets/projects/auto_start_pcie/top.png",
      "assets/projects/auto_start_pcie/bottom.png"
    ],
    "features": [
      {
        "vi": "Tự động kích nguồn bật máy tính / Server ngay khi điện lưới AC phục hồi",
        "en": "Automated power-on pulse booting PCs / Servers immediately upon AC power restoration"
      },
      {
        "vi": "Thiết kế chuẩn chân cắm PCI Express x1 Goldfinger phù hợp mọi thùng máy PC & Server Rack",
        "en": "Standard PCI Express x1 Goldfinger form factor fitting all PC cases & Server Racks"
      },
      {
        "vi": "Mạch trễ thời gian chống kích đúp xung nguồn bảo vệ an toàn cho Mainboard máy chủ",
        "en": "Anti-double trigger pulse delay circuit protecting server motherboard power ICs"
      },
      {
        "vi": "Nhận biết điện áp chờ 3.3Vaux & chân tín hiệu Wakeup kích nguồn thông minh",
        "en": "Smart 3.3Vaux standby voltage sensing & Wakeup signal pulse generation"
      },
      {
        "vi": "Tụ Tantalum dán 100uF 16V + LDO AMS1117 cho dòng nguồn cấp vô cùng ổn định",
        "en": "100uF 16V Tantalum SMD capacitors + AMS1117 LDO for rock-solid power stability"
      }
    ],
    "highlight": true
  },
  {
    "id": "ec200u-kit-dev",
    "title": {
      "vi": "Kit Phát Triển Gateway 4G LTE & eSIM Quectel EC200U — Nguồn DC-DC TPS54302 & Cổng USB Type-C",
      "en": "Quectel EC200U 4G LTE & Global eSIM Dev Kit PCB (TPS54302 Buck & USB Type-C)",
      "ja": "Quectel EC200U 4G LTE & グローバルeSIM 開発キット基板"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch kit phát triển R&D cho module 4G LTE Quectel EC200U, tích hợp Dual SIM (eSIM chip MFF2 + MicroSIM), nguồn hạ áp TPS54302 (4.5–28V) và giao tiếp USB Type-C.",
      "en": "Industrial R&D development kit PCB for Quectel EC200U 4G LTE, featuring Dual SIM (embedded MFF2 eSIM + MicroSIM), TPS54302 buck regulator (4.5–28V), and USB Type-C interface."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch Kit phát triển cho module 4G LTE Cat 1 Quectel EC200U (tích hợp GPS/GNSS, Bluetooth). Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Hỗ trợ hạ áp dải rộng TPS54302 (4.5V–28V DC), tích hợp chip eSIM toàn cầu MFF2 song song khay SIM đẩy MicroSIM, cổng giao tiếp USB Type-C lập trình và nút chuyển mạch USB BOOT.",
      "en": "Led hardware R&D for a multi-purpose development kit PCB supporting Quectel EC200U 4G LTE Cat 1 module (with integrated GPS/GNSS & Bluetooth). Designed schematic and multi-layer PCB layout in Altium Designer. Features wide-input TPS54302 buck regulator (4.5V–28V DC), Dual SIM architecture (embedded MFF2 global eSIM + MicroSIM push-push holder), and USB Type-C programming interface with USB BOOT switch."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & đi dây PCB multi-layer trên Altium Designer cho module Quectel EC200U (4G LTE Cat 1, GNSS / GPS, Bluetooth).\n• Thiết kế kiến trúc Dual SIM: Tích hợp chip eSIM công nghiệp MFF2 kết hợp khay cắm MicroSIM Push-Push linh hoạt.\n• Thiết kế khối nguồn DC-DC TPS54302 hiệu suất cao hỗ trợ điện áp vào dải rộng (4.5V – 28V DC) và tụ hóa Tantalum lọc nguồn nhiễu.\n• Trang bị cổng giao tiếp USB Type-C 16-Pin với nút chuyển mạch USB BOOT phục vụ nạp phần mềm và debug firmware.\n• Tích hợp hệ thống Anten đa dải: Dual anten SMA (4G LTE Main + GNSS GPS) và anten IPEX 2.4GHz.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer for Quectel EC200U 4G LTE Cat 1 module (GNSS/GPS & Bluetooth).\n• Dual SIM Architecture: Integrated MFF2 industrial eSIM chip paired with push-push MicroSIM socket.\n• High-efficiency TPS54302 DC-DC buck power design with wide input range (4.5V – 28V DC) and Tantalum power filter capacitors.\n• 16-Pin USB Type-C programming interface with dedicated USB BOOT switch for firmware deployment & debugging.\n• Multi-Antenna System: Dual SMA connectors (4G LTE Main + GNSS GPS) and IPEX 2.4GHz RF connectors."
    },
    "techStack": [
      "Quectel EC200U 4G",
      "Global eSIM (MFF2)",
      "TPS54302 DC-DC Buck",
      "USB Type-C 16P",
      "GNSS / GPS Telemetry",
      "Altium Designer PCB",
      "Dual SMA & IPEX Antenna",
      "C/C++ Embedded"
    ],
    "image": "assets/projects/ec200u_kit_dev/1.png",
    "gallery": [
      "assets/projects/ec200u_kit_dev/1.png",
      "assets/projects/ec200u_kit_dev/2.png",
      "assets/projects/ec200u_kit_dev/z4998056412180_d259595b78e7a9644cc832cb16d3418b.jpg",
      "assets/projects/ec200u_kit_dev/z4998503318455_6d27267801dc3ffe3107d2e9e5d945e2.jpg",
      "assets/projects/ec200u_kit_dev/z4999008387821_578f774d2da9a7ad4bea4c80b94dc692.jpg",
      "assets/projects/ec200u_kit_dev/z5001260822696_1072e734f3fb62ae7f8b76c987efe354.jpg",
      "assets/projects/ec200u_kit_dev/z5001261128032_5d096671ce3ac2cb70b221defb666dee.jpg",
      "assets/projects/ec200u_kit_dev/z5006113823725_1d7ae1cb8f963eb70b2a5876378e0a5d.jpg",
      "assets/projects/ec200u_kit_dev/z5034081124665_3231c69ca96c1f3c99a86ffc36866986.jpg",
      "assets/projects/ec200u_kit_dev/z5352435747519_93991ca4ce5fb9091bc4e27fa756cb56.jpg"
    ],
    "features": [
      {
        "vi": "Module Quectel EC200U (4G LTE Cat 1, GPS/GNSS & Bluetooth) hỗ trợ kết nối Cloud thời gian thực",
        "en": "Quectel EC200U module (4G LTE Cat 1, GPS/GNSS & Bluetooth) for real-time cloud data telemetry"
      },
      {
        "vi": "Kiến trúc Dual SIM: Chip eSIM MFF2 toàn cầu + khay MicroSIM Push-Push linh hoạt",
        "en": "Dual SIM Architecture: Global MFF2 eSIM chip + flexible push-push MicroSIM holder"
      },
      {
        "vi": "Nguồn xung DC-DC TPS54302 hạ áp dải rộng 4.5V - 28V DC cấp dòng 3A ổn định",
        "en": "TPS54302 DC-DC buck converter supporting wide 4.5V-28V DC input with 3A output"
      },
      {
        "vi": "Giao tiếp USB Type-C 16-Pin chuẩn hóa tích hợp nút công tắc nạp USB BOOT",
        "en": "Standardized 16-Pin USB Type-C interface with USB BOOT programming switch"
      },
      {
        "vi": "Hệ thống anten SMA kép (4G LTE & GPS) và đầu nối RF IPEX 2.4GHz",
        "en": "Dual SMA antenna system (4G LTE & GPS) with 2.4GHz IPEX RF connectors"
      }
    ],
    "highlight": true
  },
  {
    "id": "ec800m-dev-kit",
    "title": {
      "vi": "Kit Phát Triển Gateway 4G LTE Cat 1 Quectel EC800M — Tích Hợp Định Vị GPS & Cổng Nạp USB-C",
      "en": "Quectel EC800M 4G LTE Cat 1 & GNSS GPS Dev Kit PCB (Dual SIM & USB-C)",
      "ja": "Quectel EC800M 4G LTE & GNSS GPS 開発キット基板"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch kit phát triển R&D cho module Quectel EC800M 4G LTE Cat 1, tích hợp vị trí GPS/GNSS, Dual SIM (eSIM chip MFF2 + Nano SIM), cổng USB Type-C và nút nạp USB BOOT.",
      "en": "Industrial R&D dev kit PCB for Quectel EC800M 4G LTE Cat 1 & GNSS GPS, featuring Dual SIM (embedded MFF2 eSIM + Nano SIM socket), USB Type-C and USB BOOT switch."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch Kit phát triển cho vi viễn thông Quectel EC800M-CN (4G LTE Cat 1, GNSS / GPS, Bluetooth). Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Hỗ trợ hạ áp ổn định nguồn VBAT, tích hợp kiến trúc Dual SIM (chip eSIM MFF2 hàn trên mạch + khay Nano SIM), cổng giao tiếp USB Type-C và nút nạp USB BOOT.",
      "en": "Led hardware R&D for a compact development kit PCB supporting Quectel EC800M-CN 4G LTE Cat 1 module (integrated GNSS/GPS & Bluetooth). Designed schematic and multi-layer PCB layout in Altium Designer. Features VBAT power architecture, Dual SIM support (embedded MFF2 eSIM chip + Nano SIM socket), USB Type-C programming interface, and USB BOOT switch."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer cho module Quectel EC800M-CN (4G LTE Cat 1, GPS/GNSS & Bluetooth).\n• Kiến trúc Dual SIM linh hoạt: Tích hợp sẵn chip eSIM công nghiệp MFF2 kết hợp khay Nano SIM card socket cho hạ tầng IoT di động.\n• Khối quản lý nguồn & Âm thanh: Tối ưu đường nguồn VBAT cho truyền dẫn sóng 4G công suất cao, tích hợp đường tín hiệu âm thanh loa Audio SPK_P/N.\n• Giao diện lập trình & Debug: Trang bị cổng USB Type-C 16-Pin với nút chuyển mạch nạp phần mềm USB BOOT.\n• Hệ thống Anten: Đầu cắm Anten DIP GPS GNSS chuyên dụng và Anten SMD 4G LTE đa dải tần.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer for Quectel EC800M-CN 4G LTE Cat 1 module (GPS/GNSS & Bluetooth).\n• Flexible Dual SIM Architecture: Integrated MFF2 industrial eSIM chip paired with Nano SIM card socket for mobile IoT deployment.\n• Power & Audio System: Optimized high-current VBAT power traces for 4G burst transmission, with integrated differential Audio speaker interface.\n• Programming & Debugging: 16-Pin USB Type-C interface with dedicated USB BOOT switch for fast firmware flashing.\n• Antenna System: Dedicated DIP GPS/GNSS antenna connector & multi-band 4G LTE SMD antenna."
    },
    "techStack": [
      "Quectel EC800M-CN",
      "4G LTE Cat 1",
      "GPS / GNSS Telemetry",
      "Global eSIM (MFF2)",
      "Nano SIM Socket",
      "Altium Designer PCB",
      "USB Type-C 16P",
      "C/C++ Embedded"
    ],
    "image": "assets/projects/ec800m_dev_kit/1.png",
    "gallery": [
      "assets/projects/ec800m_dev_kit/1.png",
      "assets/projects/ec800m_dev_kit/2.png",
      "assets/projects/ec800m_dev_kit/1785392435489_1865481403134129726_3747327866930100700_f773a22641b40cdeed3eac7936ebe358.jpg",
      "assets/projects/ec800m_dev_kit/1785392435517_1865481403134129726_3747327866930100700_5873c71770820194320a2942f0209eee.jpg",
      "assets/projects/ec800m_dev_kit/1785392435531_1865481403134129726_3747327866930100700_36068ce0090b0edd55000d156a1d1525.jpg",
      "assets/projects/ec800m_dev_kit/1785392435542_1865481403134129726_3747327866930100700_c5deae956e86db07deb1419712f22888.jpg",
      "assets/projects/ec800m_dev_kit/1785392435557_1865481403134129726_3747327866930100700_3161e16bd10e0dad4a24b72eb1c77b08.jpg",
      "assets/projects/ec800m_dev_kit/1785392435567_1865481403134129726_3747327866930100700_8630e32f390abea6f63b9d37e20c5330.jpg",
      "assets/projects/ec800m_dev_kit/z5318844780214_3c2d2331cfab871e24278f35f946bad4.jpg",
      "assets/projects/ec800m_dev_kit/z5331457799887_eed92375d74518bec8986aad54dd87fb.jpg",
      "assets/projects/ec800m_dev_kit/z5340409393501_076c7c82e9b73580ba1c12c734b90300.jpg",
      "assets/projects/ec800m_dev_kit/z5359866424426_3e81e5cdc366d9157f783edaf978c33a.jpg",
      "assets/projects/ec800m_dev_kit/z5360962553215_ca0ed86fdf3d6e274bbe75cb3a4debd3.jpg",
      "assets/projects/ec800m_dev_kit/z6200085110404_d985d43233cb5e3d7f5b2537db41bc45.jpg"
    ],
    "features": [
      {
        "vi": "Module Quectel EC800M-CN (4G LTE Cat 1 & GNSS GPS) cho các thiết bị giám sát định vị thời gian thực",
        "en": "Quectel EC800M-CN module (4G LTE Cat 1 & GNSS GPS) for real-time tracking & cloud telemetry"
      },
      {
        "vi": "Tích hợp Dual SIM: Chip eSIM MFF2 hàn trên mạch + khay cắm Nano SIM linh hoạt",
        "en": "Dual SIM Integration: Embedded MFF2 eSIM chip + flexible Nano SIM socket"
      },
      {
        "vi": "Đường nguồn VBAT dòng cao chống sụt áp khi phát sóng 4G LTE công suất tối đa",
        "en": "High-current VBAT power traces preventing voltage drop during peak 4G LTE transmission"
      },
      {
        "vi": "Giao tiếp USB Type-C 16-Pin chuẩn hóa tích hợp nút bấm chuyển mạch USB BOOT",
        "en": "Standardized 16-Pin USB Type-C interface with USB BOOT mode tactile switch"
      },
      {
        "vi": "Anten GPS GNSS chuyên dụng kết hợp anten 4G LTE đa dải tần",
        "en": "Dedicated GPS GNSS antenna socket paired with multi-band 4G LTE antenna"
      }
    ],
    "highlight": true
  },
  {
    "id": "fire-alarm-system",
    "title": {
      "vi": "Hệ Thống IoT Cảnh Báo Cháy Sớm Bằng Cảm Biến Hồng Ngoại Xa & LoRa (Bài Báo Scientific 2024)",
      "en": "IoT-Based Indoor Fire Early Warning System Using Far Infrared Thermal Sensors & LoRa (Springer 2024 Paper)",
      "ja": "遠赤外線熱センサー & LoRa 室内早期火災警報IoTシステム (Springer Nature 2024 論文掲載)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Dự án R&D & Xuất bản bài báo khoa học Springer Nature (2024): Thiết kế bo mạch Node & Gateway cảnh báo cháy sớm bằng cảm biến nhiệt hồng ngoại xa, mạng LoRa Mesh và nguồn AC 220V cách ly an toàn.",
      "en": "R&D project & Springer Nature 2024 scientific paper: Designed Sensor Node & Gateway PCB system for indoor fire early warning using far-infrared thermal sensors, LoRa Mesh, and isolated 220V AC power."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế phần cứng cho công trình nghiên cứu khoa học được xuất bản trên Nhà xuất bản Quốc tế Springer Nature (2024): \"An IoT-Based Indoor Fire Early Warning System Using Far Infrared Thermal Sensors\". Thiết kế toàn bộ sơ đồ nguyên lý và layout PCB multi-layer cho Bo Mạch Node Cảm Biến và Bo Mạch Gateway Trung Tâm. Hệ thống tích hợp cảm biến nhiệt hồng ngoại xa phát hiện đám cháy ngay từ giai đoạn bắt đầu, truyền tin không dây khoảng cách xa LoRa SX1276/1278, nguồn AC-DC 220V cách ly chống quá áp/chống sét lan truyền, và module 4G/GSM cảnh báo khẩn cấp tới điện thoại.",
      "en": "Led hardware R&D for an international scientific paper published in Springer Nature (2024): \"An IoT-Based Indoor Fire Early Warning System Using Far Infrared Thermal Sensors\". Designed complete schematic capture and multi-layer PCB layout for Sensor Node PCB & Central Gateway PCB. System integrates far-infrared thermal sensors for early incipient fire detection, LoRa SX1276/1278 long-range wireless mesh, 220V AC-DC isolated power with surge/MOV protection, and 4G/GSM emergency alert telemetry."
    },
    "longDescription": {
      "vi": "• Xuất bản bài báo khoa học quốc tế Springer Nature (2024): \"An IoT-Based Indoor Fire Early Warning System Using Far Infrared Thermal Sensors\" (Springer Nature 2024, Pages 295-306, Google Scholar Citation).\n• Thiết kế Bo Mạch Node Cảm Biến: Tích hợp cảm biến nhiệt hồng ngoại xa (Far Infrared Thermal Sensor) phát hiện sự gia tăng nhiệt độ vật thể ngay từ giai đoạn chớm cháy (Incipient phase) trước khi xuất hiện khói.\n• Mạng truyền thông không dây LoRa: Sử dụng module LoRa SX1276/SX1278 tần số 433/915MHz cho phép các Node gửi dữ liệu cảnh báo về Gateway ở khoảng cách xa qua vật cản tường nhà.\n• Thiết kế Bo Mạch Gateway Trung Tâm: Vi xử lý ESP32 tích hợp module viễn thông 4G LTE / GSM gửi cảnh báo tức thì qua Cloud Dashboard, SMS và tự động gọi điện khẩn cấp cho chủ nhà / lực lượng PCCC.\n• Thiết kế Nguồn AC 220V An Toàn: Tích hợp khối nguồn AC-DC Hi-Link PSK-5D-5 cách ly hoàn toàn, Varistor 14D471K chống quá áp, tụ dập xung 275VAC và cầu chì ngắt chập mạch đạt tiêu chuẩn an toàn phòng cháy.",
      "en": "• Published International Scientific Paper in Springer Nature (2024): \"An IoT-Based Indoor Fire Early Warning System Using Far Infrared Thermal Sensors\" (Springer Nature 2024, Pages 295-306).\n• Sensor Node PCB Design: Integrated Far-Infrared Thermal Sensor detecting object temperature rise at the incipient stage before smoke generation.\n• Long-Range LoRa Mesh Network: SX1276/SX1278 LoRa transceiver enabling reliable indoor-to-outdoor long-range wireless telemetry through concrete walls.\n• Central Gateway PCB Design: ESP32 MCU paired with 4G LTE / GSM cellular module streaming real-time alerts to Cloud Dashboard, triggering automated phone calls & SMS to emergency services.\n• Safe 220V AC Power Architecture: Hi-Link PSK-5D-5 isolated AC-DC buck, MOV 14D471K transient voltage suppressor, 275VAC safety capacitors, and 1A fuse for fire safety compliance."
    },
    "techStack": [
      "Far Infrared Thermal Sensor",
      "LoRa SX1276/1278",
      "ESP32 Wi-Fi/BLE",
      "4G / GSM Telemetry",
      "Springer Nature 2024 Paper",
      "220V AC Isolated Power",
      "Altium Designer PCB",
      "C/C++ FreeRTOS"
    ],
    "image": "assets/projects/fire_alarm_system/1.png",
    "gallery": [
      "assets/projects/fire_alarm_system/1.png",
      "assets/projects/fire_alarm_system/2.png",
      "assets/projects/fire_alarm_system/2024_01_08_21_24_IMG_1692.JPG",
      "assets/projects/fire_alarm_system/2024_01_08_21_24_IMG_1693.JPG",
      "assets/projects/fire_alarm_system/2024_01_09_15_26_IMG_1694.JPG",
      "assets/projects/fire_alarm_system/2024_01_09_15_27_IMG_1695.JPG",
      "assets/projects/fire_alarm_system/2024_02_22_08_21_IMG_0174.JPG",
      "assets/projects/fire_alarm_system/2024_02_22_08_22_IMG_0177.JPG",
      "assets/projects/fire_alarm_system/2024_02_22_08_22_IMG_0178.JPG",
      "assets/projects/fire_alarm_system/2024_02_22_08_22_IMG_0179.JPG",
      "assets/projects/fire_alarm_system/2024_02_22_08_22_IMG_0180.JPG",
      "assets/projects/fire_alarm_system/2024_09_10_19_54_IMG_2734.jpg",
      "assets/projects/fire_alarm_system/2024_09_10_19_54_IMG_2735.jpg",
      "assets/projects/fire_alarm_system/2024_09_10_19_54_IMG_2736.jpg",
      "assets/projects/fire_alarm_system/3.png",
      "assets/projects/fire_alarm_system/4.png",
      "assets/projects/fire_alarm_system/5.png",
      "assets/projects/fire_alarm_system/6.png",
      "assets/projects/fire_alarm_system/7.png",
      "assets/projects/fire_alarm_system/8.png"
    ],
    "features": [
      {
        "vi": "Công trình nghiên cứu khoa học xuất bản trên Springer Nature 2024 (Google Scholar Citation)",
        "en": "Published scientific paper in Springer Nature 2024 (Google Scholar Citation link available)"
      },
      {
        "vi": "Cảm biến nhiệt hồng ngoại xa phát hiện sự gia tăng nhiệt độ ngay từ giai đoạn chớm cháy (Incipient Phase)",
        "en": "Far-infrared thermal sensor detecting temperature rise at the incipient fire stage before smoke"
      },
      {
        "vi": "Mạng không dây LoRa SX1276/1278 truyền dữ liệu cảnh báo xuyên tường khoảng cách xa",
        "en": "LoRa SX1276/1278 long-range wireless mesh transmitting alert data through walls"
      },
      {
        "vi": "Gateway trung tâm 4G/GSM tự động gọi điện, gửi tin nhắn SMS & đẩy dữ liệu lên Cloud khi có sự cố",
        "en": "Central 4G/GSM Gateway triggering automated phone calls, SMS & Cloud alerts during fire emergency"
      },
      {
        "vi": "Khối nguồn AC 220V cách ly an toàn trang bị Varistor MOV chống quá áp & cầu chì chống ngắt chập",
        "en": "Safe 220V AC isolated power stage with MOV surge suppressor & fuse short-circuit protection"
      }
    ],
    "highlight": true,
    "publicationUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Kh7kTZQAAAAJ&cstart=20&pagesize=80&citation_for_view=Kh7kTZQAAAAJ:uLbwQdceFCQC"
  },
  {
    "id": "equipment-management-system",
    "title": {
      "vi": "Hệ Thống IoT Giám Sát Thời Gian Vận Hành & Quản Lý Thiết Bị Điện (Bài Báo Khoa Học ĐH Cần Thơ 2024)",
      "en": "IoT-Based Electrical Equipment Uptime Monitoring & Asset Management System (Can Tho University Journal 2024 Paper)",
      "ja": "電気機器稼働時間・資産管理IoTシステム (カントー大学科学雑誌 2024 論文掲載)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Dự án R&D & Bài báo Khoa học ĐH Cần Thơ (2024): Thiết kế bo mạch phần cứng IoT giám sát thời gian chạy, dòng điện và điện áp tải thiết bị điện công nghiệp theo chuẩn SensorThings.",
      "en": "R&D project & Can Tho University 2024 journal paper: Designed IoT hardware PCB to monitor electrical equipment uptime, load current/voltage according to OGC SensorThings standards."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế phần cứng cho bài báo khoa học xuất bản trên Tạp chí Khoa học Đại học Cần Thơ (Tập 60, Số 6, 2024): \"Giải pháp giám sát thời gian vận hành của thiết bị điện\". Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer cho thiết bị đo & giám sát dòng/áp/thời gian vận hành thực tế của các máy móc, thiết bị đắt tiền trong phòng lab/xưởng sản xuất. Tích hợp cảm biến đo dòng ACS712 / SCT-013, mạch đo điện áp ZMPT101B, vi xử lý giao tiếp Wi-Fi/LoRa chuẩn hóa dữ liệu SensorThings OGC và Dashboard trực quan hóa.",
      "en": "Led hardware R&D for a scientific paper published in Can Tho University Journal of Science (Vol 60, No 6, 2024): \"An IoT-Based Uptime Monitoring Solution for Electrical and Electronic Equipment\". Designed complete schematic and multi-layer PCB layout in Altium Designer for monitoring active runtime, voltage, and current of high-value laboratory and industrial machinery. Integrated ACS712 / SCT-013 current sensors, ZMPT101B voltage transducers, Wi-Fi/LoRa connectivity, OGC SensorThings data standard alignment, and real-time dashboard visualization."
    },
    "longDescription": {
      "vi": "• Xuất bản bài báo khoa học trên Tạp chí Khoa học Đại học Cần Thơ (2024): \"Giải pháp giám sát thời gian vận hành của thiết bị điện\" (Tập 60, Số 6, Trang 39–49, Google Scholar Citation).\n• Thiết kế Bo Mạch Giám Sát IoT: Đo đạc chính xác dòng điện tải, điện áp và tính toán thời gian chạy thực tế (Runtime/Uptime) của các thiết bị chuyên dụng đắt tiền trong phòng thí nghiệm & doanh nghiệp.\n• Khối cảm biến dòng & áp: Tích hợp biến dòng cảm ứng ACS712 / SCT-013 kết hợp IC đo điện áp cách ly ZMPT101B đảm bảo độ chính xác cao và an toàn cách ly điện lưới 220V.\n• Chuẩn hóa dữ liệu OGC SensorThings: Dữ liệu thu thập từ phần cứng được đóng gói theo chuẩn quốc tế SensorThings API, cho phép dễ dàng tích hợp mở rộng hệ thống và xuất báo cáo trực quan hóa.\n• Thiết kế PCB Altium chuẩn hóa: Nguồn xung cách ly chống nhiễu sụt áp, cổng giao tiếp mở rộng Wi-Fi / RS485 / LoRa linh hoạt cho nhiều loại máy móc công nghiệp.",
      "en": "• Published Scientific Paper in Can Tho University Journal of Science (2024): \"An IoT-Based Uptime Monitoring Solution for Electrical and Electronic Equipment\" (Vol 60, No 6, pp. 39-49).\n• IoT Monitoring PCB Design: Accurately measuring load current, AC voltage, and calculating actual active runtime (Uptime/Duty Cycle) for high-value specialized lab & industrial equipment.\n• Voltage & Current Sensing Stage: ACS712 / SCT-013 current transformers paired with ZMPT101B isolated voltage transducers ensuring high precision & 220V AC mains isolation.\n• OGC SensorThings Standard Compliance: Hardware telemetry formatted to international SensorThings API standards for seamless system expansion & real-time dashboard analytics.\n• Standardized Altium PCB Layout: Isolated power supply resisting inductive spikes, with Wi-Fi / RS485 / LoRa modular expansion ports for diverse industrial machinery."
    },
    "techStack": [
      "ACS712 / SCT-013 Current Sensor",
      "ZMPT101B Voltage Transducer",
      "OGC SensorThings Standard",
      "Can Tho Univ Journal 2024",
      "ESP32 Wi-Fi / RS485",
      "220V AC Power Monitoring",
      "Altium Designer PCB",
      "Embedded C/C++"
    ],
    "image": "assets/projects/equipment_management_system/1.png",
    "gallery": [
      "assets/projects/equipment_management_system/1.png",
      "assets/projects/equipment_management_system/2.png",
      "assets/projects/equipment_management_system/2024_02_22_08_21_IMG_0175.JPG",
      "assets/projects/equipment_management_system/2024_02_22_08_21_IMG_0176.JPG",
      "assets/projects/equipment_management_system/2024_04_23_22_59_IMG_0725.JPG",
      "assets/projects/equipment_management_system/2024_04_24_00_21_IMG_0733.JPG",
      "assets/projects/equipment_management_system/2024_04_24_00_21_IMG_0734.JPG",
      "assets/projects/equipment_management_system/2024_04_24_00_21_IMG_0735.JPG",
      "assets/projects/equipment_management_system/2024_04_24_00_21_IMG_0736.JPG",
      "assets/projects/equipment_management_system/2024_04_25_20_24_IMG_0753.jpg",
      "assets/projects/equipment_management_system/2025_02_09_08_07_IMG_4472.JPG",
      "assets/projects/equipment_management_system/3.png",
      "assets/projects/equipment_management_system/4.png"
    ],
    "features": [
      {
        "vi": "Công trình nghiên cứu khoa học xuất bản trên Tạp chí Khoa học Đại học Cần Thơ 2024 (Google Scholar Link)",
        "en": "Published scientific paper in Can Tho University Journal of Science 2024 (Google Scholar link available)"
      },
      {
        "vi": "Tự động đo thời gian vận hành (Uptime), công suất & dòng/áp thiết bị điện theo thời gian thực",
        "en": "Automated real-time monitoring of electrical equipment active uptime, power draw, and voltage/current"
      },
      {
        "vi": "Cảm biến dòng ACS712/SCT-013 & cảm biến áp ZMPT101B cách ly an toàn lưới điện 220V",
        "en": "ACS712/SCT-013 current sensor & ZMPT101B voltage transducer with 220V AC galvanic isolation"
      },
      {
        "vi": "Đóng gói dữ liệu chuẩn hóa quốc tế OGC SensorThings giúp truy vấn & hiển thị đồ thị trực quan",
        "en": "Formatted data telemetry aligning with OGC SensorThings standard for analytics & dashboard visualization"
      },
      {
        "vi": "Thiết kế PCB công nghiệp cách ly chống nhiễu điện từ (EMI) cho máy móc nhà xưởng & phòng lab",
        "en": "Industrial EMI-shielded PCB layout engineered for factory machinery & laboratory environments"
      }
    ],
    "highlight": true,
    "publicationUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Kh7kTZQAAAAJ&cstart=20&pagesize=80&citation_for_view=Kh7kTZQAAAAJ:W5xh706n7nkC"
  },
  {
    "id": "beeline-moto-v1",
    "title": {
      "vi": "Đồng Hồ Dẫn Đường Thông Minh Cho Xe Máy Beeline Moto — nRF52840, Cảm Biến 9 Trục & Màn Hình QSPI (V1)",
      "en": "Beeline Moto Smart Motorcycle Navigation & Compass Display PCB — nRF52840 & 9-Axis IMU (V1)",
      "ja": "Beeline Moto バイク用スマートナビ・コンパス表示基板 (V1)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch đồng hồ dẫn đường thông minh gắn ghi-đông xe máy trên Nordic nRF52840, tích hợp cảm biến quán tính 9 trục BNO086, màn hình QSPI LCD, cảm biến ánh sáng BH1750 và sạc pin LTC4054 qua USB-C.",
      "en": "Handlebar-mounted smart motorcycle navigation display PCB on Nordic nRF52840, featuring BNO086 9-axis AHRS IMU, QSPI LCD interface, BH1750 ambient light sensor, and LTC4054 Li-Ion charger via USB-C."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế bo mạch đồng hồ dẫn đường thông minh gắn xe máy (Beeline Moto V1) hiển thị hướng đi & la bàn chỉ đường kết nối BLE với Smartphone. Sử dụng vi xử lý Nordic nRF52840 (ARM Cortex-M4F, Bluetooth 5.0). Thiết kế sơ đồ nguyên lý và layout PCB tròn micro-size trên Altium Designer. Tích hợp cảm biến 9 trục BNO086 / ASM330LHH + BMM350 định hướng la bàn, cảm biến ánh sáng BH1750FVI tự chỉnh độ sáng màn hình, IC sạc pin LTC4054 qua cổng USB Type-C chống nước và mạch công tắc mềm MAX16054.",
      "en": "Led hardware R&D for the Beeline Moto V1 smart motorcycle turn-by-turn navigation & compass display PCB syncing via BLE with Smartphone apps. Powered by Nordic nRF52840 SoC (ARM Cortex-M4F, Bluetooth 5.0). Designed schematic and ultra-compact round PCB layout in Altium Designer. Integrated BNO086 9-axis AHRS IMU for compass navigation, ROHM BH1750FVI ambient light sensor for automatic display brightness, LTC4054 Li-Ion battery charger via waterproof USB Type-C, and MAX16054 pushbutton power controller."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB hình tròn siêu nhỏ gọn trên Altium Designer cho đồng hồ dẫn đường xe máy Beeline Moto V1.\n• Vi xử lý trung tâm Nordic nRF52840-QIAA (ARM Cortex-M4F, BLE 5.0) đồng bộ dữ liệu bản đồ chỉ đường thời gian thực từ ứng dụng di động.\n• Định hướng la bàn chính xác: Tích hợp cảm biến quán tính 9 trục AHRS Bosch BNO086 / ASM330LHH + BMM350 tính toán góc nghiêng xe và hướng di chuyển.\n• Tự động điều chỉnh ánh sáng: Cảm biến ánh sáng môi trường ROHM BH1750FVI điều chỉnh độ sáng màn hình QSPI LCD tùy thuộc ban ngày hoặc ban đêm.\n• Quản lý nguồn & Sạc pin: IC sạc pin LTC4054ES5-4.2 kết hợp LDO siêu sạch AP2112K-3.3/1.8V, công tắc mềm thông minh MAX16054 và cổng USB Type-C chống nước.",
      "en": "• Schematic capture & ultra-compact round multi-layer PCB layout in Altium Designer for Beeline Moto V1 smart motorcycle navigation device.\n• Central processing powered by Nordic nRF52840-QIAA (ARM Cortex-M4F, BLE 5.0) syncing turn-by-turn navigation data in real-time from mobile apps.\n• High-precision compass orientation: Integrated BNO086 / ASM330LHH + BMM350 9-axis AHRS IMU for tilt-compensated 3D compass heading.\n• Ambient Light Auto-Brightness: ROHM BH1750FVI ambient light sensor dynamically dimming QSPI LCD backlight for day/night readability.\n• Power Management & Charging: LTC4054ES5-4.2 Li-Ion battery charger, ultra-clean AP2112K LDOs, MAX16054 pushbutton power controller, and waterproof USB Type-C port."
    },
    "techStack": [
      "Nordic nRF52840",
      "BNO086 9-Axis IMU",
      "BH1750 Light Sensor",
      "QSPI LCD Interface",
      "LTC4054 Li-Ion Charger",
      "MAX16054 Power Switch",
      "Waterproof USB Type-C",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/beeline_moto_v1/1.jpg",
    "gallery": [
      "assets/projects/beeline_moto_v1/1.jpg",
      "assets/projects/beeline_moto_v1/2.jpg",
      "assets/projects/beeline_moto_v1/1776274115118_1865481403134129726_g3399971346864295154_329966e1eb410483fe33f35bd539252a.jpg",
      "assets/projects/beeline_moto_v1/1776274115935_1865481403134129726_g3399971346864295154_e408a986a905185658f94bf312d6978b.jpg",
      "assets/projects/beeline_moto_v1/1779794466137_1645655910180064267_1645655910180064267_8d339e01f75227ba6f17dd2aa18c3aea.jpg",
      "assets/projects/beeline_moto_v1/1781504160006_9025481782326555037_9025481782326555037_eea9dc5bd11582ef9d2b2f67c40025c3.jpg",
      "assets/projects/beeline_moto_v1/1781504513736_9025481782326555037_9025481782326555037_d1f4c99a31f5241502218ddcd132ae33.jpg",
      "assets/projects/beeline_moto_v1/1782076715187_9025481782326555037_9025481782326555037_ef72336f624f0cc2d750a1e503947b13.jpg"
    ],
    "features": [
      {
        "vi": "Vi xử lý Nordic nRF52840 (ARM Cortex-M4F, BLE 5.0) kết nối đồng bộ bản đồ dẫn đường Smartphone",
        "en": "Nordic nRF52840 MCU (ARM Cortex-M4F, BLE 5.0) syncing smartphone GPS navigation data in real-time"
      },
      {
        "vi": "Cảm biến quán tính 9 trục BNO086 / BMM350 định hướng la bàn 3D chính xác & tính góc nghiêng xe",
        "en": "BNO086 / BMM350 9-axis AHRS IMU providing tilt-compensated 3D compass heading for motorcycles"
      },
      {
        "vi": "Cảm biến ánh sáng BH1750FVI tự động điều khiển độ sáng màn hình QSPI LCD ban ngày / đêm",
        "en": "ROHM BH1750FVI light sensor automatically tuning QSPI LCD display backlight for day/night riding"
      },
      {
        "vi": "Mạch sạc pin Li-Ion LTC4054ES5 qua cổng USB Type-C chống nước + công tắc nguồn mềm MAX16054",
        "en": "LTC4054ES5 Li-Ion charger via waterproof USB Type-C + MAX16054 pushbutton power switch"
      },
      {
        "vi": "Thiết kế PCB dạng tròn micro-size tối ưu lắp đặt trên ghi-đông xe máy",
        "en": "Ultra-compact round Altium Designer PCB layout designed for motorcycle handlebar mounting"
      }
    ],
    "highlight": true
  },
  {
    "id": "dev-kit-msp430-esp32",
    "title": {
      "vi": "Kit Phát Triển Hybrid MCU MSP430G2553 & ESP32 — Mạch Nạp BSL Texas Instruments & FTDI FT232RL (Form Factor ESP32 Kit)",
      "en": "Hybrid MCU Dev Kit (MSP430G2553 & ESP32) — TI BSL Protocol (SLAU319) & FTDI FT232RL (ESP32 Form Factor)",
      "ja": "TI BSL (SLAU319) & FT232RL 搭載 ハイブリッドマイコン開発キット (MSP430G2553 & ESP32)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch kit phát triển MSP430G2553 thiết kế chuẩn kích thước ESP32 DevKit, tích hợp mạch nạp nạp phần mềm qua chuẩn TI BSL (SLAU319) bằng chip FTDI FT232RL.",
      "en": "TI MSP430G2553 dev kit engineered to match the ESP32 DevKit form factor, featuring hardware TI BSL (SLAU319) programming via FTDI FT232RL UART interface."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch Kit phát triển vi xử lý Texas Instruments MSP430G2553 được thiết kế chuẩn hóa theo đúng kích thước (Form Factor) của Kit phát triển ESP32 NodeMCU. Tích hợp mạch nạp phần mềm tự động tuân thủ chuẩn TI BSL (Bootstrap Loader SLAU319) sử dụng chip giao tiếp FTDI FT232RL (điều khiển tín hiệu DTR/RTS tới chân TEST/RESET của MSP430 để vào chế độ nạp BSL mà không cần mạch nạp FET đắt tiền). Layout PCB multi-layer trên Altium Designer tối ưu hóa vị trí hàng chân cắm Header cắm vừa Testboard tiêu chuẩn.",
      "en": "Led hardware R&D for a specialized TI MSP430G2553 development kit designed directly into the standard ESP32 NodeMCU DevKit physical form factor. Implemented hardware TI BSL (Bootstrap Loader SLAU319) auto-flashing circuitry utilizing FTDI FT232RL UART DTR/RTS signals to toggle TEST/RESET pins into BSL mode without needing external FET programmers. Multi-layer Altium Designer layout optimized for standard breadboard pin alignment."
    },
    "longDescription": {
      "vi": "• Thiết kế bo mạch Kit thử nghiệm MSP430G2553 chuẩn hóa kích thước cơ khí (Form Factor) tương thích hoàn toàn với các Kit phát triển ESP32 NodeMCU.\n• Mạch nạp TI BSL (SLAU319 Standard): Phát triển mạch nạp nạp phần mềm tự động theo chuẩn Texas Instruments Bootstrap Loader SLAU319 qua chip FTDI FT232RL.\n• Tự động điều khiển chân TEST / RESET: Tín hiệu DTR và RTS từ FT232RL được phối hợp logic để đưa MSP430G2553 vào chế độ nạp BSL trực tiếp từ máy tính qua cáp USB.\n• Tương thích Testboard: Hàng rào chân cắm DIP 2.54mm thiết kế khoảng cách chuẩn hóa, cắm vừa vặn trên các bo Testboard thử nghiệm linh kiện.\n• Mạch nguồn & Lọc sạch: Tụ Tantalum 100uF 16V lọc nguồn nhiễu thấp, LDO AMS1117-3.3V và LED chỉ thị tín hiệu Tx/Rx nạp phần mềm.",
      "en": "• Engineered MSP430G2553 dev kit matching the mechanical form factor & pin spacing of standard ESP32 NodeMCU development boards.\n• TI BSL (SLAU319 Standard) Flashing: Built-in Texas Instruments Bootstrap Loader SLAU319 hardware BSL programming via FTDI FT232RL USB-to-UART bridge.\n• Automated TEST / RESET Sequencing: DTR and RTS signals from FT232RL automatically driving MSP430 TEST/RESET pins to initiate BSL mode without external FET debuggers.\n• Breadboard Compatibility: Dual 2.54mm DIP pin headers designed with standard spacing fitting smoothly on breadboard prototyping setups.\n• Clean Power Architecture: 100uF 16V Tantalum capacitors for low-noise ripple filtering, AMS1117-3.3V LDO, and Tx/Rx BSL flashing indicators."
    },
    "techStack": [
      "TI MSP430G2553",
      "TI BSL SLAU319 Protocol",
      "FTDI FT232RL USB",
      "ESP32 DevKit Form Factor",
      "MSP430 BSL Auto-Reset",
      "AMS1117-3.3V LDO",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/dev_kit_msp430_esp32/1.jpg",
    "gallery": [
      "assets/projects/dev_kit_msp430_esp32/1.jpg",
      "assets/projects/dev_kit_msp430_esp32/1690864844790_1865481403134129726_3747327866930100700_54f291e61f711e425af136eade4f6151.jpg",
      "assets/projects/dev_kit_msp430_esp32/1690864844792_1865481403134129726_3747327866930100700_335c86b1398e01b77a20455080b70cb5.jpg",
      "assets/projects/dev_kit_msp430_esp32/1785394716458_1865481403134129726_3747327866930100700_6a8ebc165f5eb59716eb7a8d2c8afbf5.jpg",
      "assets/projects/dev_kit_msp430_esp32/1785394716492_1865481403134129726_3747327866930100700_b72027e81423fa80c2eff6440e2cfee0.jpg",
      "assets/projects/dev_kit_msp430_esp32/1785394716510_1865481403134129726_3747327866930100700_5ac761dfe9703586ed32bef9d2af01b8.jpg",
      "assets/projects/dev_kit_msp430_esp32/2.jpg"
    ],
    "features": [
      {
        "vi": "Thiết kế chuẩn kích thước cơ khí (Form Factor) tương thích chuẩn Kit phát triển ESP32 NodeMCU",
        "en": "Engineered to match the physical form factor of standard ESP32 NodeMCU development kits"
      },
      {
        "vi": "Tích hợp mạch nạp phần mềm tự động chuẩn TI BSL (Bootstrap Loader SLAU319) qua chip FTDI FT232RL",
        "en": "Hardware TI BSL (Bootstrap Loader SLAU319) auto-flashing circuit via FTDI FT232RL chip"
      },
      {
        "vi": "Tự động điều khiển tín hiệu DTR/RTS tới chân TEST/RESET kích hoạt chế độ nạp BSL trực tiếp qua USB",
        "en": "Automated DTR/RTS signal control driving TEST/RESET pins to enter BSL bootloader mode via USB"
      },
      {
        "vi": "Hàng chân Header DIP 2.54mm chuẩn khoảng cách tương thích hoàn toàn bo cắm thử nghiệm Breadboard",
        "en": "Standardized 2.54mm DIP headers fully compatible with standard breadboard prototyping"
      },
      {
        "vi": "Tụ Tantalum dán 100uF 16V + LDO AMS1117-3.3V lọc nguồn siêu nhiễu thấp cho vi xử lý TI",
        "en": "100uF 16V Tantalum SMD capacitors + AMS1117-3.3V LDO for ultra-clean power supply to TI MCU"
      }
    ],
    "highlight": true
  },
  {
    "id": "ecosen-smart-sensor",
    "title": {
      "vi": "Hệ Sinh Thái Mạng Cảm Biến AIoT Công Nghiệp & Nông Nghiệp EcoSen — ESP32, W5500 Ethernet, LoRaWAN & Modbus RS485",
      "en": "EcoSen Industrial & AgTech AIoT Multi-Sensor Gateway System — ESP32, W5500 Ethernet, LoRaWAN & Modbus RS485",
      "ja": "EcoSen 産業・スマート農業 AIoT センサーネットワークシステム (ESP32 & W5500)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Hệ sinh thái Mạng Cảm biến AIoT EcoSen (sensor.musenplus.com): Gateway cảm biến đa điểm ESP32, Ethernet W5500, RS485 Modbus RTU, LoRaWAN, cảm biến điện năng (V, A, PT100) & Nông nghiệp (pH/EC, NPK).",
      "en": "EcoSen AIoT Sensor Network Ecosystem (sensor.musenplus.com): Multi-sensor gateway featuring ESP32, W5500 Ethernet, RS485 Modbus RTU, LoRaWAN, industrial power (V, A, PT100), and AgTech probes (pH/EC, NPK)."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch Gateway cảm biến công nghiệp đa giao tiếp EcoSen (triển khai thương mại tại sensor.musenplus.com). Vi xử lý trung tâm ESP32 kết hợp chip Ethernet WIZnet W5500 giao tiếp SPI tốc độ cao cho kết nối mạng dây LAN siêu ổn định. Tích hợp Module LoRa SX1276 thu thập dữ liệu từ các Node cảm biến từ xa, cổng RS485 Modbus RTU cách ly quang chống nhiễu công nghiệp, cảm biến môi trường (SHT30, CO2, PM2.5), nông nghiệp chính xác (pH/EC đất, NPK, PAR light), điện năng công nghiệp (V, A, cos φ, PT100) và MQTT Cloud.",
      "en": "Led hardware R&D for the EcoSen industrial multi-protocol sensor Gateway PCB (commercially deployed at sensor.musenplus.com). Powered by ESP32 SoC paired with WIZnet W5500 high-speed SPI Ethernet controller for rock-solid wired LAN connectivity. Integrated LoRa SX1276 transceiver module acquiring telemetry from distant wireless sensor nodes, optocoupler-isolated RS485 Modbus RTU interface for industrial noise immunity, environmental probes (SHT30, CO2, PM2.5), precision AgTech (soil pH/EC, NPK, PAR light), industrial power monitoring (V, A, cos φ, PT100), and MQTT Cloud."
    },
    "longDescription": {
      "vi": "• Hệ sinh thái thương mại EcoSen: sensor.musenplus.com thu thập dữ liệu cảm biến công nghiệp & nông nghiệp công nghệ cao.\n• Kết nối Mạng Đa Giao Thức: Kết hợp cổng Ethernet LAN WIZnet W5500 (SPI) + Wi-Fi/BLE + truyền không dây khoảng cách xa LoRa SX1276.\n• Giao tiếp RS485 Modbus RTU cách ly quang: Thiết kế đường truyền RS485 cách ly quang hoàn toàn, tích hợp chống sét TVS diode chống nhiễu trong nhà xưởng.\n• Thu thập dữ liệu cảm biến đa dạng: Điện năng công nghiệp (V, A, cos φ, PT100), cảm biến môi trường (SHT30, CO2, PM2.5), nông nghiệp chính xác (pH/EC đất, NPK, PAR light).\n• Nguồn xung dải rộng & Vỏ hộp công nghiệp: Mạch hạ áp công nghiệp hoạt động ổn định trong môi trường khắc nghiệt 24/7.",
      "en": "• Commercial EcoSen Ecosystem: sensor.musenplus.com acquiring industrial & high-tech AgTech sensor data.\n• Multi-Protocol Connectivity: WIZnet W5500 SPI Ethernet LAN port + Wi-Fi/BLE + long-range wireless LoRa SX1276 telemetry.\n• Optocoupler-Isolated RS485 Modbus RTU: Galvanically isolated RS485 transceivers with TVS surge protection for harsh factory noise environments.\n• Diverse Sensor Acquisition: Industrial power (V, A, cos φ, PT100), environmental (SHT30, CO2, PM2.5), precision agtech (soil pH/EC, NPK, PAR light).\n• Wide-Input Industrial Buck Power: High-efficiency DC-DC buck stage engineered for continuous 24/7 industrial operation."
    },
    "techStack": [
      "ESP32 SoC",
      "W5500 Ethernet SPI",
      "LoRa SX1276/1278",
      "RS485 Modbus RTU",
      "AgTech Sensors (pH/EC/NPK)",
      "Power Sensing (PT100/V/A)",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/ecosen_smart_sensor/1.jpg",
    "gallery": [
      "assets/projects/ecosen_smart_sensor/1.jpg",
      "assets/projects/ecosen_smart_sensor/2.jpg",
      "assets/projects/ecosen_smart_sensor/3.jpg",
      "assets/projects/ecosen_smart_sensor/4.jpg",
      "assets/projects/ecosen_smart_sensor/5.jpg",
      "assets/projects/ecosen_smart_sensor/6.jpg",
      "assets/projects/ecosen_smart_sensor/7.jpg",
      "assets/projects/ecosen_smart_sensor/8.jpg",
      "assets/projects/ecosen_smart_sensor/9.jpg",
      "assets/projects/ecosen_smart_sensor/10.jpg",
      "assets/projects/ecosen_smart_sensor/11.jpg",
      "assets/projects/ecosen_smart_sensor/12.jpg",
      "assets/projects/ecosen_smart_sensor/13.jpg",
      "assets/projects/ecosen_smart_sensor/14.jpg",
      "assets/projects/ecosen_smart_sensor/15.jpg",
      "assets/projects/ecosen_smart_sensor/16.jpg",
      "assets/projects/ecosen_smart_sensor/17.jpg",
      "assets/projects/ecosen_smart_sensor/18.jpg",
      "assets/projects/ecosen_smart_sensor/19.jpg",
      "assets/projects/ecosen_smart_sensor/20.jpg",
      "assets/projects/ecosen_smart_sensor/21.jpg",
      "assets/projects/ecosen_smart_sensor/22.jpg",
      "assets/projects/ecosen_smart_sensor/23.jpg",
      "assets/projects/ecosen_smart_sensor/24.jpg",
      "assets/projects/ecosen_smart_sensor/25.jpg",
      "assets/projects/ecosen_smart_sensor/26.jpg",
      "assets/projects/ecosen_smart_sensor/27.jpg",
      "assets/projects/ecosen_smart_sensor/28.jpg",
      "assets/projects/ecosen_smart_sensor/29.jpg",
      "assets/projects/ecosen_smart_sensor/30.jpg",
      "assets/projects/ecosen_smart_sensor/31.jpg",
      "assets/projects/ecosen_smart_sensor/32.jpg",
      "assets/projects/ecosen_smart_sensor/33.jpg",
      "assets/projects/ecosen_smart_sensor/34.jpg",
      "assets/projects/ecosen_smart_sensor/35.jpg",
      "assets/projects/ecosen_smart_sensor/36.jpg",
      "assets/projects/ecosen_smart_sensor/37.jpg",
      "assets/projects/ecosen_smart_sensor/38.jpg",
      "assets/projects/ecosen_smart_sensor/39.jpg",
      "assets/projects/ecosen_smart_sensor/40.jpg",
      "assets/projects/ecosen_smart_sensor/41.jpg",
      "assets/projects/ecosen_smart_sensor/42.jpg",
      "assets/projects/ecosen_smart_sensor/43.jpg",
      "assets/projects/ecosen_smart_sensor/44.jpg",
      "assets/projects/ecosen_smart_sensor/45.jpg",
      "assets/projects/ecosen_smart_sensor/46.jpg",
      "assets/projects/ecosen_smart_sensor/47.jpg",
      "assets/projects/ecosen_smart_sensor/48.jpg",
      "assets/projects/ecosen_smart_sensor/49.jpg",
      "assets/projects/ecosen_smart_sensor/50.jpg",
      "assets/projects/ecosen_smart_sensor/51.jpg",
      "assets/projects/ecosen_smart_sensor/52.jpg"
    ],
    "features": [
      {
        "vi": "Hệ sinh thái Mạng Cảm biến AIoT thương mại: sensor.musenplus.com giám sát công nghiệp & nông nghiệp chính xác",
        "en": "Commercial AIoT Sensor Network ecosystem: sensor.musenplus.com monitoring industrial & precision agriculture"
      },
      {
        "vi": "Kết nối mạng đa dạng: Cổng Ethernet LAN WIZnet W5500 tốc độ cao kết hợp Wi-Fi & truyền xa LoRa SX1276",
        "en": "Multi-network connectivity: WIZnet W5500 high-speed Ethernet LAN + Wi-Fi & LoRa SX1276 long-range wireless"
      },
      {
        "vi": "Cổng truyền thông công nghiệp RS485 Modbus RTU cách ly quang chống nhiễu sét lan truyền",
        "en": "Optocoupler-isolated RS485 Modbus RTU port with TVS surge protection against industrial noise"
      },
      {
        "vi": "Thu thập dữ liệu cảm biến đa dạng: Điện năng công nghiệp (V, A, PT100), nhiệt ẩm SHT30, CO2, pH/EC đất, NPK",
        "en": "Diverse sensor telemetry: Industrial power (V, A, PT100), SHT30 temp/humidity, CO2, soil pH/EC, NPK"
      },
      {
        "vi": "Thiết kế PCB Altium cách ly nhiễu điện từ EMI đảm bảo hoạt động liên tục 24/7",
        "en": "EMI-shielded Altium PCB layout engineered for reliable 24/7 continuous industrial operation"
      }
    ],
    "highlight": true
  },
  {
    "id": "smart-led-matrix",
    "title": {
      "vi": "Bo Mạch Điều Khiển Màn Hình RGB LED Matrix HUB75 DMA — Hiển Thị Font Chữ Đa Ngôn Ngữ (Nhật - Việt - Anh) & Web Server Wi-Fi",
      "en": "Smart HUB75 RGB LED Matrix Display Controller PCB — Multi-Language Custom Fonts (JP/VN/EN) & Wi-Fi Web Server",
      "ja": "HUB75 RGB LEDマトリックス表示制御基板 (多言語カスタムフォント & Wi-Fi Webサーバー)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch điều khiển màn hình LED Matrix RGB HUB75 (Thị trường Nhật Bản — MUSEN PLUS): Quét DMA tốc độ cao, hiển thị Font chữ đa ngôn ngữ (Tiếng Nhật, Tiếng Việt, Tiếng Anh), xoay góc 0°/90°/180°/270°, hiệu ứng chữ cuộn đa dòng và cấu hình qua Web Server Wi-Fi.",
      "en": "HUB75 RGB LED Matrix display controller PCB (Japan Market — MUSEN PLUS): High-speed hardware DMA matrix refresh, multi-language custom typography (Japanese, Vietnamese, English), 0°/90°/180°/270° text rotation, multi-line scrolling effects, and Wi-Fi Web Server configurator."
    },
    "description": {
      "vi": "Chủ trì R&D toàn trình phần cứng bo mạch và firmware cho Màn hình LED Matrix RGB chuẩn giao tiếp HUB75 phục vụ bảng hiệu quảng cáo & hiển thị thông tin đa ngôn ngữ tại Nhật Bản (MUSEN PLUS — 無線プラス). Tận dụng phần ứng đồ họa DMA (Direct Memory Access) tốc độ cao quét ma trận LED mượt mà không gây xé hình hay giật lag. Hỗ trợ hiển thị Font chữ tiếng Nhật (Kanji/Hiragana/Katakana), tiếng Việt và tiếng Anh tùy chỉnh, thiết lập xoay góc chữ (0°, 90°, 180°, 270°), căn chỉnh lề chính xác từng pixel và điều khiển hiệu ứng dòng chữ cuộn cố định/động qua giao diện Web Server Wi-Fi.",
      "en": "Led end-to-end hardware PCB and firmware R&D for HUB75 RGB Full-Color LED Matrix displays for Japanese commercial signage & multi-language information boards (MUSEN PLUS — 無線プラス). Leveraged hardware DMA (Direct Memory Access) graphics engine for smooth high-framerate matrix scanning without screen tearing. Features Japanese (Kanji/Hiragana/Katakana), Vietnamese, and English custom typography rendering, 0°/90°/180°/270° text rotation alignment, sub-pixel offset calibration, and multi-line static/scrolling text effects controlled via Wi-Fi Web Server."
    },
    "longDescription": {
      "vi": "• Sản phẩm thương mại MUSEN PLUS Nhật Bản (無線プラス): Bảng hiệu LED Matrix hiển thị thông tin đa ngôn ngữ thị trường Nhật.\n• Khung hình trích xuất từ 6 Video MP4 thực tế: Trích xuất các khung hình chất lượng cao trực tiếp từ 6 tệp video MP4 gốc quay quá trình màn hình LED hiển thị mượt mà trong thư mục DA_LED_MATRIX/image.\n• Đồ họa phần cứng DMA quét mượt mà: Tận dụng cơ chế DMA quét ma trận LED tốc độ cao, đảm bảo hiển thị hình ảnh/font chữ sắc nét 60fps không tiêu tốn tài nguyên CPU.\n• Hiển thị Font chữ Nhật - Việt - Anh & Xoay góc: Hỗ trợ Bộ Font ✨ VN 24px / 32px (Bold, Serif, Montserrat), xoay chữ 4 hướng 0°/90°/180°/270° và căn lề từng pixel.\n• Cấu hình không dây Wi-Fi Web Server: Người dùng dễ dàng nhập nội dung hiển thị, chọn hiệu ứng cuộn chữ và chỉnh độ sáng trực tiếp từ Smartphone/PC.",
      "en": "• MUSEN PLUS Commercial Product (無線プラス): Japanese market multi-language LED matrix commercial signage board.\n• Frames Extracted from 6 Real MP4 Videos: High-resolution frame extractions directly from 6 real MP4 video files recording smooth LED matrix display in DA_LED_MATRIX/image.\n• Hardware DMA Graphics Scanning: High-speed DMA matrix refresh engine ensuring crisp 60fps typography rendering without CPU overhead.\n• Multi-Language Japanese/VN/EN Fonts & Rotation: Supporting custom ✨ VN 24px/32px fonts (Bold, Serif, Montserrat), 4-way text rotation (0°/90°/180°/270°), and sub-pixel alignment.\n• Wireless Wi-Fi Web Server Configurator: Intuitive Web interface allowing users to update text messages, select scrolling effects, and adjust panel brightness directly from phone/PC."
    },
    "techStack": [
      "HUB75 RGB LED Panel",
      "Hardware DMA Graphics",
      "Japanese/VN/EN Custom Fonts",
      "4-Way Text Rotation",
      "Wi-Fi Web Configurator",
      "Real MP4 Video Demos",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/smart_led_matrix/1.mp4",
    "gallery": [
      "assets/projects/smart_led_matrix/1.mp4",
      "assets/projects/smart_led_matrix/2.mp4",
      "assets/projects/smart_led_matrix/3.mp4",
      "assets/projects/smart_led_matrix/4.mp4",
      "assets/projects/smart_led_matrix/5.mp4",
      "assets/projects/smart_led_matrix/6.mp4"
    ],
    "features": [
      {
        "vi": "Bộ sưu tập hình ảnh trích xuất 100% từ 6 tệp video MP4 gốc quay thực tế quá trình chạy màn hình LED tại DA_LED_MATRIX/image",
        "en": "Image gallery 100% extracted from 6 original MP4 video recordings of the LED matrix operating in DA_LED_MATRIX/image"
      },
      {
        "vi": "Điều khiển các tấm màn hình RGB LED Matrix chuẩn HUB75 bằng phần cứng DMA tốc độ cao mượt mà không xé hình",
        "en": "Driving HUB75 RGB LED Matrix panels using hardware DMA for flicker-free high-framerate display"
      },
      {
        "vi": "Hỗ trợ bộ Font chữ đa ngôn ngữ (Tiếng Nhật, Tiếng Việt, Tiếng Anh), xoay chữ 4 hướng 0°/90°/180°/270° & căn lề từng pixel",
        "en": "Supporting multi-language custom typography (Japanese, Vietnamese, English), 4-way text rotation (0°/90°/180°/270°) & pixel calibration"
      },
      {
        "vi": "Hiệu ứng hiển thị chữ cuộn đa dòng phong phú (Dòng cố định, dòng cuộn động, hiển thị biểu tượng tượng hình)",
        "en": "Rich multi-line text effects (Static headers, dynamic scrolling lines, pictogram rendering)"
      },
      {
        "vi": "Tích hợp Web Server Wi-Fi tùy chỉnh nội dung hiển thị & độ sáng trực tiếp từ điện thoại / máy tính",
        "en": "Built-in Wi-Fi Web Server for updating text content & adjusting panel brightness directly from phone/PC"
      }
    ],
    "highlight": true
  },
  {
    "id": "ecohotel-smart-hotel",
    "title": {
      "vi": "Hệ Thống IoT Tự Động Hóa Phòng Khách Sạn & Tòa Nhà Thông Minh EcoHotel — Khóa Từ RFID, Mesh Wi-Fi/BLE/Zigbee & Cảm Biến Hiện Diện",
      "en": "EcoHotel IoT Smart Hotel & Building Automation System — RFID Smart Lock, Mesh Wi-Fi/BLE/Zigbee & Presence Radar",
      "ja": "EcoHotel スマートホテル・ビル自動化IoTシステム (RFIDカードキー, Mesh Wi-Fi/BLE & 存在検知)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Hệ thống IoT Tự động hóa Phòng Khách sạn & Tòa nhà Thông minh EcoHotel (hotel.musenplus.com — Sản phẩm thương mại): Khóa cửa từ RFID, mạng Mesh không dây (Wi-Fi, BLE, Zigbee), cảm biến hiện diện phát hiện sự có mặt của khách, quản lý điện năng & máy lạnh thông minh.",
      "en": "EcoHotel IoT Smart Hotel & Building Automation System (hotel.musenplus.com — Commercial Platform): RFID magnetic door locks, wireless Mesh network (Wi-Fi, BLE, Zigbee), radar presence sensors, and intelligent energy & HVAC management."
    },
    "description": {
      "vi": "Chủ trì R&D toàn trình phần cứng bo mạch vi điều khiển và giải pháp hệ thống cho Nền tảng IoT Khách sạn & Tòa nhà Thông minh EcoHotel (triển khai tại hotel.musenplus.com). Hệ thống bao gồm bo mạch điều khiển trung tâm phòng (RCU - Room Control Unit) giao tiếp không dây Mesh Wi-Fi/BLE/Zigbee, tích hợp đầu đọc khóa từ RFID Wiegand mã hóa an toàn, bộ cảm biến hiện diện phát hiện sự có mặt của khách trong phòng (không phụ thuộc thẻ cắm), công tắc cảm ứng kính cường lực điều khiển chiếu sáng, cảm biến nhiệt độ/độ ẩm/CO2 và rơ-le công suất ngắt nguồn điện tử tự động khi khách rời phòng.",
      "en": "Led end-to-end hardware microcontroller PCB and system solution R&D for the EcoHotel Smart Hotel & Building IoT Platform (deployed at hotel.musenplus.com). Solution features Room Control Unit (RCU) mainboards communicating over wireless Mesh Wi-Fi/BLE/Zigbee, encrypted Wiegand RFID door lock reader, radar presence sensor detecting guest occupancy (without keycard insertion requirements), tempered glass touch light switches, indoor climate sensors (Temp/Humidity/CO2), and high-current power relays automating room energy cutoffs when vacant."
    },
    "longDescription": {
      "vi": "• Sản phẩm thương mại EcoHotel triển khai thực tế tại hotel.musenplus.com.\n• Bo mạch RCU trung tâm giao tiếp Mesh không dây: Kết nối mạng Mesh Wi-Fi / BLE / Zigbee đồng bộ trạng thái thiết bị trong toàn bộ khách sạn độ trễ thấp.\n• Đầu đọc Khóa từ RFID an toàn: Tích hợp đầu đọc thẻ từ RFID mã hóa phân quyền ra vào phòng cho khách và nhân viên dọn phòng.\n• Cảm biến Hiện diện thông minh: Nhận diện sự có mặt của khách trong phòng thời gian thực (kể cả khi nằm yên xem phim/ngủ) giúp duy trì hệ thống máy lạnh & điện chiếu sáng mà không cần cắm thẻ.\n• Tiết kiệm điện năng năng lượng tòa nhà: Tự động ngắt điện điều hòa, thiết bị chiếu sáng khi khách rời phòng, tối ưu chi phí vận hành cho chủ khách sạn.\n• Hệ thống phần mềm Web Portal & Mobile App: Quản lý trạng thái check-in, check-out, yêu cầu dọn phòng (Do Not Disturb / Make Up Room) và nhận cảnh báo tiêu thụ điện thời gian thực.",
      "en": "• EcoHotel Commercial System deployed live at hotel.musenplus.com.\n• Central RCU Board with Wireless Mesh Network: Connecting Mesh Wi-Fi / BLE / Zigbee synchronization across hotel rooms with ultra-low latency.\n• Encrypted RFID Smart Lock Reader: Integrated Wiegand RFID card reader authorizing access for guests and housekeeping staff.\n• Intelligent Human Presence Radar Sensor: Real-time guest presence detection (even while lying still sleeping) keeping HVAC & lights active without keycard insertion.\n• Energy Efficiency & Building Automation: Automated HVAC and lighting power cutoffs when rooms become vacant, optimizing operational costs.\n• Web Portal & Mobile App Integration: Monitoring check-in/out status, room service requests (Do Not Disturb / Make Up Room), and real-time energy analytics."
    },
    "techStack": [
      "Room Control Unit (RCU)",
      "RFID Smart Lock",
      "Mesh Wi-Fi / BLE / Zigbee",
      "Radar Presence Sensor",
      "Smart HVAC Control",
      "hotel.musenplus.com",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/ecohotel_smart_hotel/1.jpg",
    "gallery": [
      "assets/projects/ecohotel_smart_hotel/1.jpg",
      "assets/projects/ecohotel_smart_hotel/2.jpg",
      "assets/projects/ecohotel_smart_hotel/3.jpg",
      "assets/projects/ecohotel_smart_hotel/4.jpg"
    ],
    "features": [
      {
        "vi": "Bộ sưu tập hình ảnh trực quan hóa hệ thống trích xuất từ trang chủ chính thức sản phẩm thương mại hotel.musenplus.com",
        "en": "System architecture & UI visual gallery extracted directly from official commercial product site hotel.musenplus.com"
      },
      {
        "vi": "Bo mạch trung tâm điều khiển phòng RCU giao tiếp Mesh không dây (Wi-Fi, BLE, Zigbee) truyền tín hiệu thời gian thực",
        "en": "Central RCU room control board communicating over wireless Mesh networks (Wi-Fi, BLE, Zigbee) with real-time sync"
      },
      {
        "vi": "Đầu đọc khóa từ RFID mã hóa an toàn tích hợp phân quyền ra vào phòng cho khách & nhân viên phục vụ",
        "en": "Encrypted RFID smart lock card reader authorizing secure access control for guests & hotel staff"
      },
      {
        "vi": "Cảm biến hiện diện phát hiện khách trong phòng chính xác duy trì nguồn điện không phụ thuộc thẻ cắm",
        "en": "Human presence radar sensor accurately detecting room occupancy maintaining power without keycard requirements"
      },
      {
        "vi": "Hệ thống tự động hóa tòa nhà tự động tắt máy lạnh & đèn chiếu sáng khi phòng trống tiết kiệm chi phí năng lượng",
        "en": "Building automation system automatically turning off HVAC & lights when vacant optimizing energy costs"
      }
    ],
    "highlight": true
  },
  {
    "id": "ec800m-tracking-v2",
    "title": {
      "vi": "Thiết Bị Định Vị & Giám Sát Hành Trình Ô Tô/Xe Máy 4G LTE Quectel EC800M (V2)",
      "en": "Quectel EC800M 4G LTE Vehicle Telemetry & GPS Tracker PCB — V2",
      "ja": "Quectel EC800M 4G LTE 車両追跡 & GPS トラッカー基板 — V2"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Thiết bị giám sát hành trình phương tiện 4G LTE Cat 1 trên Quectel EC800M, tích hợp định vị GPS Ceramic, cảm biến gia tốc KXTJ3-1057, Dual SIM (eSIM + MicroSIM) và ngắt nguồn từ xa.",
      "en": "Commercial vehicle 4G LTE Cat 1 GPS tracking hardware on Quectel EC800M, featuring Ceramic GPS antenna, KXTJ3-1057 3-axis accelerometer, Dual SIM (eSIM + MicroSIM) and remote Relay cutoff."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng thiết bị định vị và giám sát hành trình ô tô/xe máy thế hệ V2 trên module Quectel EC800M-CN (4G LTE Cat 1 & GPS/GNSS). Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Tích hợp cảm biến gia tốc 3 trục KIONIX KXTJ3-1057 phát hiện nghiêng/va chạm, ngắt nguồn động cơ từ xa qua Relay, mạch phát hiện khóa điện ACC và kiến trúc Dual SIM (chip eSIM MFF2 + MicroSIM).",
      "en": "Led hardware R&D for a 2nd-generation 4G LTE GPS vehicle tracker PCB built on Quectel EC800M-CN (4G LTE Cat 1 & GPS/GNSS). Designed schematic and multi-layer PCB layout in Altium Designer. Integrated KIONIX KXTJ3-1057 3-axis accelerometer for crash/motion detection, remote Relay engine cutoff, ACC ignition sensing, and Dual SIM architecture (embedded MFF2 eSIM + MicroSIM)."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer cho thiết bị định vị phương tiện dựa trên Quectel EC800M-CN (4G LTE Cat 1, GPS/GNSS).\n• Tích hợp cảm biến gia tốc 3 trục KIONIX KXTJ3-1057 thu thập dữ liệu rung động, va chạm, độ nghiêng xe và phục vụ thuật toán tiết kiệm pin thông minh khi xe dừng.\n• Thiết kế khối điều khiển Relay ngắt nguồn nhiên liệu/động cơ từ xa qua lệnh SMS/App và mạch đọc trạng thái khóa điện ACC.\n• Tích hợp Anten GPS Ceramic Molex 1461680001 độ nhạy cao cho khả năng chốt vị trí định vị vệ tinh chính xác.\n• Kiến trúc Dual SIM linh hoạt: Chip eSIM MFF2 công nghiệp hàn trực tiếp kết hợp khay MicroSIM GCT SIM7200.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer for vehicle tracking hardware on Quectel EC800M-CN (4G LTE Cat 1, GPS/GNSS).\n• Integrated KIONIX KXTJ3-1057 3-axis accelerometer for vibration, crash, and tilt detection, powering smart low-power sleep algorithms when parked.\n• Remote Relay engine/fuel cutoff control circuit via SMS/App commands and ACC ignition status detection.\n• High-sensitivity Molex 1461680001 Ceramic GPS Patch Antenna for fast satellite positioning fix.\n• Flexible Dual SIM architecture: MFF2 industrial eSIM chip paired with GCT SIM7200 MicroSIM socket."
    },
    "techStack": [
      "Quectel EC800M-CN",
      "4G LTE Cat 1",
      "KXTJ3-1057 3-Axis Accel",
      "Ceramic GPS Antenna",
      "Relay Engine Cutoff",
      "Global eSIM (MFF2)",
      "Altium Designer PCB",
      "C/C++ Embedded"
    ],
    "image": "assets/projects/ec800m_tracking_v2/1.png",
    "gallery": [
      "assets/projects/ec800m_tracking_v2/1.png",
      "assets/projects/ec800m_tracking_v2/2.png"
    ],
    "features": [
      {
        "vi": "Module Quectel EC800M-CN (4G LTE Cat 1 & GPS/GNSS) giám sát hành trình thời gian thực",
        "en": "Quectel EC800M-CN module (4G LTE Cat 1 & GPS/GNSS) for real-time vehicle telemetry"
      },
      {
        "vi": "Cảm biến gia tốc 3 trục KXTJ3-1057 phát hiện chuyển động, rung đập, va chạm & nghiêng xe",
        "en": "KXTJ3-1057 3-axis accelerometer for crash, vibration, tilt & motion sensing"
      },
      {
        "vi": "Mạch điều khiển Relay ngắt nguồn động cơ/nhiên liệu từ xa & nhận biết khóa điện ACC",
        "en": "Relay control circuit for remote engine/fuel cutoff & ACC ignition sensing"
      },
      {
        "vi": "Anten định vị vệ tinh GPS Ceramic Molex độ nhạy cao chốt vị trí nhanh",
        "en": "High-sensitivity Molex Ceramic GPS Antenna for fast positioning fix"
      },
      {
        "vi": "Kiến trúc Dual SIM: Chip eSIM MFF2 hàn trên mạch + khay cắm MicroSIM linh hoạt",
        "en": "Dual SIM Architecture: Embedded MFF2 eSIM chip + MicroSIM socket"
      }
    ],
    "highlight": true
  },
  {
    "id": "sim-ver2",
    "title": {
      "vi": "Bo Mạch Module Viễn Thông 4G Quectel EC800M — Công Tắc Chuyển Đổi Dual SIM & Nguồn Xung LM2596 (V2)",
      "en": "Quectel EC800M 4G Cellular Board — Dual SIM Hardware Switch & LM2596 Buck (V2)",
      "ja": "Quectel EC800M 4G 通信ボード — Dual SIM 切替 & LM2596 電源 (V2)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch viễn thông 4G LTE Cat 1 trên Quectel EC800M, tích hợp công tắc cơ khí chuyển đổi Dual SIM (KF-041 SIM + MicroSIM) và mạch nguồn hạ áp LM2596-5V chịu tải cao.",
      "en": "Industrial 4G LTE Cat 1 cellular board on Quectel EC800M, featuring a hardware SPDT Dual SIM selector switch (KF-041 + MicroSIM) and heavy-duty LM2596-5V buck power."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng bo mạch viễn thông 4G LTE Cat 1 thế hệ V2 dựa trên module Quectel EC800M-CN. Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Tích hợp công tắc trượt cơ khí SPDT cho phép chuyển đổi phần cứng tức thì giữa 2 khe cắm SIM (SIM1 KF-041 công nghiệp và SIM2 MicroSIM), hạ áp nguồn công nghiệp dải rộng LM2596-5V cấp dòng 3A cho truyền phát 4G tốc độ cao.",
      "en": "Led hardware R&D for a 2nd-generation 4G LTE Cat 1 cellular communications PCB powered by Quectel EC800M-CN module. Designed schematic and multi-layer PCB layout in Altium Designer. Features a hardware SPDT slide switch for instant SIM switching between Dual SIM sockets (industrial KF-041 SIM1 & MicroSIM SIM2), and heavy-duty wide-input LM2596-5V buck regulator delivering 3A peak current for high-speed 4G transmission."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer cho module viễn thông 4G Quectel EC800M-CN (4G LTE Cat 1, GPS/GNSS).\n• Thiết kế mạch chuyển đổi Dual SIM bằng phần cứng: Công tắc trượt SPDT OS102011MA1QN1 cho phép chọn nguồn tín hiệu SIM1 (khay YB XIN KF-041) hoặc SIM2 (khay MicroSIM Push-Push).\n• Thiết kế khối nguồn xung công nghiệp LM2596-5V hạ áp dải rộng (lên tới 40V DC input), cấp dòng đệm 3A liên tục chống nhiễu sụt áp nguồn.\n• Tối ưu đường đi dây Anten RF 4G LTE & GPS GNSS chống suy hao tín hiệu trên bo mạch nhỏ gọn.\n• Chuẩn hóa các đường tín hiệu nạp phần mềm USB, đèn LED hiển thị trạng thái kết nối mạng và nguồn điện.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer for Quectel EC800M-CN 4G LTE Cat 1 cellular module (GPS/GNSS).\n• Hardware Dual SIM Switching Circuit: SPDT slide switch OS102011MA1QN1 selecting between SIM1 (industrial YB XIN KF-041 socket) and SIM2 (MicroSIM push-push socket).\n• Heavy-Duty LM2596-5V DC-DC buck converter design handling wide input voltages (up to 40V DC) with 3A continuous output.\n• Optimized RF PCB trace routing for 4G LTE & GPS GNSS antennas, minimizing signal attenuation on a compact footprint.\n• Standardized USB programming interfaces, status diagnostic LEDs for cellular network & power rails."
    },
    "techStack": [
      "Quectel EC800M-CN",
      "4G LTE Cat 1",
      "Dual SIM SPDT Switch",
      "LM2596 DC-DC Buck (40V)",
      "KF-041 Industrial SIM",
      "MicroSIM Socket",
      "Altium Designer PCB",
      "C/C++ Embedded"
    ],
    "image": "assets/projects/sim_ver2/1.png",
    "gallery": [
      "assets/projects/sim_ver2/1.png",
      "assets/projects/sim_ver2/2.png",
      "assets/projects/sim_ver2/1785392592733_1865481403134129726_3747327866930100700_3644fb2121c5351387beb3523eb668a9.jpg",
      "assets/projects/sim_ver2/1785392592767_1865481403134129726_3747327866930100700_91639840395c35bff43eefb1dc753266.jpg",
      "assets/projects/sim_ver2/1785392592788_1865481403134129726_3747327866930100700_d578f4b67a562bc4cf359ff66cff70dc.jpg",
      "assets/projects/sim_ver2/1785392592801_1865481403134129726_3747327866930100700_d2ed7be48986f3fbe392c1580e9d8fce.jpg",
      "assets/projects/sim_ver2/1785392592812_1865481403134129726_3747327866930100700_59d9b4c1d0a29cbf5e70eeb8c323a94e.jpg",
      "assets/projects/sim_ver2/1785392592821_1865481403134129726_3747327866930100700_773430ebb625c76f0efa1ad14b6a3ac3.jpg",
      "assets/projects/sim_ver2/z6200085140569_42fe5243118d62e403f90b1631a3dca1.jpg",
      "assets/projects/sim_ver2/z6200085147887_09c3087874e3e13fef1cad092ebf2692.jpg",
      "assets/projects/sim_ver2/z6200085195700_47fda7761b0a49c31233554ab0c2a48f.jpg"
    ],
    "features": [
      {
        "vi": "Module Quectel EC800M-CN (4G LTE Cat 1 & GPS/GNSS) truyền dữ liệu di động tốc độ cao",
        "en": "Quectel EC800M-CN module (4G LTE Cat 1 & GPS/GNSS) for high-speed cellular data telemetry"
      },
      {
        "vi": "Công tắc trượt phần cứng SPDT chuyển đổi linh hoạt giữa 2 khe cắm SIM (KF-041 + MicroSIM)",
        "en": "SPDT hardware slide switch for instant Dual SIM toggle (KF-041 + MicroSIM sockets)"
      },
      {
        "vi": "Mạch nguồn xung công nghiệp LM2596-5V chịu điện áp vào rộng (tới 40V) cấp dòng ra 3A",
        "en": "Industrial LM2596-5V DC-DC buck converter supporting wide 40V input with 3A output"
      },
      {
        "vi": "Khay SIM công nghiệp YB XIN KF-041 chịu nhiệt & chống rung đập cho xe tải/máy công trình",
        "en": "Heavy-duty YB XIN KF-041 industrial SIM socket built for harsh vibration & temperature"
      },
      {
        "vi": "Thiết kế PCB Altium Designer nhỏ gọn, tối ưu đường truyền anten RF 4G & GPS",
        "en": "Compact Altium Designer PCB layout optimizing 4G & GPS RF antenna trace routing"
      }
    ],
    "highlight": true
  },
  {
    "id": "drone-bridge-board",
    "title": {
      "vi": "Bo Mạch Dock Nạp Firmware, Cấu Hình & Test Cho Module RTK Unicorecomm UM982 (UAV/Drone)",
      "en": "Technician Programming & Parameter Configuration Dock PCB for Unicorecomm UM982 RTK Module",
      "ja": "Unicorecomm UM982 RTKモジュール用 開発・設定・書き込みドック基板"
    },
    "category": "Robotics & Hardware Tools",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch Dock lập trình, nạp firmware & tùy chỉnh thông số kỹ thuật dành cho kỹ thuật viên cấu hình module định vị 2 anten Unicorecomm UM982 trước khi lắp lên Drone.",
      "en": "Dedicated technician programming & tuning Dock PCB designed to flash firmware, set NMEA/RTCM parameters, and test Unicorecomm UM982 dual-antenna RTK GNSS modules before flight deployment."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế bo mạch Dock chuyên dụng cho kỹ thuật viên thực hiện thao tác nạp phần mềm, cấu hình thông số và kiểm thử module định vị 2 anten chính xác cao Unicorecomm UM982 (RTK Centimet & Heading). Tích hợp mạch nạp USB-to-TTL chuẩn hóa, vi xử lý ESP32-WROVER-E hỗ trợ truyền nhận lệnh nạp/cấu hình qua Wi-Fi/BLE, ma trận Jumper gá lắp nhanh và mạch hạ áp kép 5V/3.3V bảo vệ thiết bị.",
      "en": "Led hardware R&D for a specialized technician Docking Station designed for flashing firmware, parameter tuning, and bench testing Unicorecomm UM982 dual-antenna RTK GNSS modules prior to field deployment. Features standardized USB-to-TTL programming circuitry, ESP32-WROVER-E MCU for wireless OTA/Wi-Fi configuration, flexible test jumper matrix, and protected dual 5V/3.3V power rails."
    },
    "longDescription": {
      "vi": "• Thiết kế bo mạch Dock nạp & cấu hình kỹ thuật chuyên dụng cho module RTK 2 anten Unicorecomm UM982 (hỗ trợ chốt định vị centimet & góc hướng Heading cho UAV/Drone).\n• Phục vụ quy trình R&D & Kỹ thuật viên: Cho phép nạp firmware, cấu hình tốc độ Baudrate, chu kỳ phát RTCM/NMEA và test chức năng module trước khi lắp lên máy bay.\n• Giao diện nạp linh hoạt: Cổng USB Type-C tích hợp mạch chuyển đổi USB-to-UART TTL kết hợp vi xử lý ESP32-WROVER-E hỗ trợ cấu hình/nạp phần mềm không dây qua Wi-Fi/BLE.\n• Ma trận Jumper & Socket gá lắp nhanh: Tối ưu thao tác cắm tháo module UM982 nhanh chóng, chống chập cháy mạch khi kỹ thuật viên thao tác liên tục.\n• Nguồn kép 5V & 3.3V bảo vệ tụ nguồn: Thiết kế nguồn xung tỏa nhiệt cực thấp, cấp nguồn an toàn cho mạch nạp siêu tụ (ANAGA Supercapacitors) và hệ anten thử nghiệm.",
      "en": "• Dedicated technician programming & configuration Dock PCB for Unicorecomm UM982 dual-antenna RTK modules (supporting sub-centimeter fix & dual-antenna Heading).\n• Engineered for R&D & Technician Workflows: Flashing firmware, tuning Baud rates, RTCM/NMEA message intervals, and bench testing prior to drone mounting.\n• Versatile Flashing Interfaces: USB Type-C with integrated USB-to-UART TTL bridge, paired with ESP32-WROVER-E for wireless Wi-Fi/BLE configuration.\n• Quick-Test Jumper & Socket Matrix: Optimized for rapid module insertion/removal and short-circuit protection during repeated technician testing.\n• Protected Dual 5V/3.3V Power Stage: Ultra-low-heat buck regulators safely powering ANAGA supercapacitor charging circuits and test antennas."
    },
    "techStack": [
      "Unicorecomm UM982 RTK",
      "Technician Dev Dock",
      "ESP32-WROVER-E",
      "Firmware Flashing Tool",
      "UART Jumper Matrix",
      "USB-to-TTL Bridge",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/drone_bridge_board/1.png",
    "gallery": [
      "assets/projects/drone_bridge_board/1.png",
      "assets/projects/drone_bridge_board/2.png",
      "assets/projects/drone_bridge_board/bottom.png",
      "assets/projects/drone_bridge_board/1785484424797_1865481403134129726_3747327866930100700_4d7f946cabe740b1fb6b13fbc0d30ce3.jpg",
      "assets/projects/drone_bridge_board/1785484424823_1865481403134129726_3747327866930100700_4849719f5598ea100e158409922d25b5.jpg"
    ],
    "features": [
      {
        "vi": "Bo mạch Dock chuyên dụng cho kỹ thuật viên nạp firmware, cấu hình thông số & test module Unicorecomm UM982",
        "en": "Dedicated technician Dock PCB for firmware flashing, parameter tuning & bench testing Unicorecomm UM982 modules"
      },
      {
        "vi": "Cổng USB Type-C tích hợp mạch nạp USB-to-TTL chuẩn hóa truyền nhận lệnh cấu hình tốc độ cao",
        "en": "USB Type-C with standardized USB-to-UART TTL bridge for high-speed parameter configuration"
      },
      {
        "vi": "Vi xử lý ESP32-WROVER-E hỗ trợ kỹ thuật viên tùy chỉnh cấu hình & nạp phần mềm qua Wi-Fi/BLE",
        "en": "ESP32-WROVER-E MCU supporting wireless Wi-Fi/BLE OTA parameter setup & tuning"
      },
      {
        "vi": "Gá lắp Jumper & Socket tháo lắp nhanh, chống chập cháy cho thao tác kiểm thử liên tục",
        "en": "Quick-connect Jumper & Socket matrix with short-circuit protection for repeated testing"
      },
      {
        "vi": "Khối nguồn kép 5V/3.3V tỏa nhiệt cực thấp cấp dòng an toàn cho bộ siêu tụ và anten test",
        "en": "Dual low-heat 5V/3.3V power stage safely powering supercapacitors & test antenna setups"
      }
    ],
    "highlight": true
  },
  {
    "id": "auto-relay-v3",
    "title": {
      "vi": "Hộp Rơ-Le Điều Khiển Công Suất Ô Tô Tự Động 30A — RISC-V CH32X033 & Cách Ly Quang (V3)",
      "en": "Automotive 30A Smart Relay Control Box — RISC-V CH32X033 & Optocoupler Protection (V3)",
      "ja": "自動車用30A スマートリレー制御ボックス — RISC-V CH32X033搭載 (V3)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Hộp điều khiển Rơ-le công suất cao 30A cho ô tô dựa trên vi xử lý RISC-V CH32X033, tích hợp 5 khe cầu chì bảo vệ độc lập, cách ly quang ACC PC817 và nguồn hạ áp LM2596-5V dải rộng.",
      "en": "High-power 30A automotive relay control box powered by RISC-V CH32X033 MCU, featuring 5 independent fuse protection slots, PC817 ACC optocoupler isolation, and wide-input LM2596-5V buck regulator."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng khối hộp điều khiển Rơ-le công suất lớn cấp ô tô thế hệ V3 dựa trên vi xử lý RISC-V WCH CH32X033. Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Tích hợp 2 Rơ-le công suất 30A chịu tải dòng cao, 5 khe cắm cầu chì ô tô ngắt chập độc lập, cách ly quang PC817 nhận diện khóa điện ACC, MOSFET P-Channel APM4015PUC ngắt nguồn an toàn và giắc cắm công nghiệp 6.3mm 6-Pin.",
      "en": "Led hardware R&D for a 3rd-generation automotive-grade high-power smart Relay Control Box built on WCH CH32X033 32-bit RISC-V MCU. Designed schematic and multi-layer PCB layout in Altium Designer. Features dual 30A heavy-duty relays, 5 independent automotive fuse protection slots, PC817 optocoupler galvanic isolation for ACC ignition detection, APM4015PUC P-channel power MOSFET cutoff, and heavy-duty 6.3mm 6-pin automotive connector."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer cho hộp điều khiển công suất tải lớn tiêu chuẩn automotive ô tô / xe tải.\n• Vi xử lý trung tâm kiến trúc RISC-V WCH CH32X033F8P6 (@48MHz) tối ưu chi phí BOM và hiệu năng xử lý tín hiệu điều khiển.\n• Công suất tải lớn: Trang bị 2 Rơ-le 30A 4-Pin kết hợp 5 khe cắm cầu chì ô tô Fuse-3522-2 ngắt chập độc lập cho từng kênh tải ra (OUT1 - OUT5).\n• Cách ly quang & Nhận biết ACC: Tích hợp Optocoupler PC817X2NIP0F nhận diện chìa khóa điện ô tô (ACC), bảo vệ vi xử lý khỏi sụt áp dòng khởi động xe.\n• Nguồn xung hạ áp LM2596-5V dải rộng (tới 40V DC) tích hợp MOSFET công suất P-Channel APM4015PUC ngắt nguồn an toàn.",
      "en": "• Schematic capture & multi-layer PCB layout in Altium Designer for high-current automotive-grade power relay control units.\n• Central processor powered by 32-bit RISC-V WCH CH32X033F8P6 MCU (@48MHz), optimizing BOM cost & control logic execution.\n• Heavy-Duty Output Capacity: Dual 30A 4-Pin power relays paired with 5 independent Fuse-3522-2 automotive fuse slots protecting load outputs (OUT1 - OUT5).\n• Optocoupler Isolation & ACC Ignition Detect: PC817X2NIP0F galvanic isolation for vehicle ACC ignition signal, safeguarding MCU against inductive voltage spikes.\n• Wide-input LM2596-5V DC-DC buck regulator (up to 40V DC) with APM4015PUC P-channel power MOSFET for safe power disconnect."
    },
    "techStack": [
      "RISC-V CH32X033",
      "30A Power Relays",
      "Automotive Fuse Protection",
      "Optocoupler ACC Detect",
      "LM2596 DC-DC Buck (40V)",
      "APM4015 Power MOSFET",
      "Altium Designer PCB",
      "C/C++ Embedded"
    ],
    "image": "assets/projects/auto_relay_v3/1.png",
    "gallery": [
      "assets/projects/auto_relay_v3/1.png",
      "assets/projects/auto_relay_v3/2.jpg",
      "assets/projects/auto_relay_v3/bottom.png",
      "assets/projects/auto_relay_v3/1785392643458_1865481403134129726_3747327866930100700_fdd3db1e339ab4dc800d01398cd3f816.jpg",
      "assets/projects/auto_relay_v3/1785392643478_1865481403134129726_3747327866930100700_9433f4c02019d81e17305fbf0f0074de.jpg",
      "assets/projects/auto_relay_v3/1785392643487_1865481403134129726_3747327866930100700_a60b2096575916ca5bf304f0bd9f463d.jpg",
      "assets/projects/auto_relay_v3/1785392643497_1865481403134129726_3747327866930100700_6bc48623d719e48cf46682c0e390ddbb.jpg",
      "assets/projects/auto_relay_v3/1785392643504_1865481403134129726_3747327866930100700_182deb0bc77d49a5c91d2062d24f7814.jpg",
      "assets/projects/auto_relay_v3/1785392643510_1865481403134129726_3747327866930100700_63b88279b268f61c0d3d8b0b1331b4c6.jpg",
      "assets/projects/auto_relay_v3/1785392643524_1865481403134129726_3747327866930100700_a27c49f2519ff4250655134afb946dcf.jpg",
      "assets/projects/auto_relay_v3/1785392643537_1865481403134129726_3747327866930100700_ab9bd96a753dcf95313efe94f85cbe4a.jpg",
      "assets/projects/auto_relay_v3/1785392643549_1865481403134129726_3747327866930100700_8130b6a1d02c68938744841ce29dbfb0.jpg",
      "assets/projects/auto_relay_v3/1785392643558_1865481403134129726_3747327866930100700_9569b5bb1bf07916bff2f3c70dafb0dd.jpg",
      "assets/projects/auto_relay_v3/1785392643564_1865481403134129726_3747327866930100700_64dcad14564cbce7ca03785a1e75bb19.jpg",
      "assets/projects/auto_relay_v3/1785392643571_1865481403134129726_3747327866930100700_f5bee4836607484a9e7534c33077339f.jpg",
      "assets/projects/auto_relay_v3/1785392643577_1865481403134129726_3747327866930100700_17c74a6501051f2bea705940c21b9532.jpg",
      "assets/projects/auto_relay_v3/1785392643584_1865481403134129726_3747327866930100700_f0a537c3d98edefed61bb81ef513cf92.jpg",
      "assets/projects/auto_relay_v3/1785392643590_1865481403134129726_3747327866930100700_aa32fc6d6cffbdf7a9b6c3b271577674.jpg",
      "assets/projects/auto_relay_v3/1785392643597_1865481403134129726_3747327866930100700_5c3140f3716f9fbf155d6c36454cdba2.jpg",
      "assets/projects/auto_relay_v3/1785392643603_1865481403134129726_3747327866930100700_9905f014c059398dbf42c19dfb08f37a.jpg",
      "assets/projects/auto_relay_v3/1785392643610_1865481403134129726_3747327866930100700_2125c6bdb954084fc213868e27272898.jpg",
      "assets/projects/auto_relay_v3/1785392643617_1865481403134129726_3747327866930100700_ac109e68cc849e43d9a8dc59e590f9aa.jpg"
    ],
    "features": [
      {
        "vi": "Vi xử lý RISC-V 32-bit CH32X033F8P6 điều khiển logic hộp Rơ-le công suất ô tô",
        "en": "32-bit RISC-V CH32X033F8P6 MCU managing high-power automotive relay control logic"
      },
      {
        "vi": "2 Rơ-le công suất lớn 30A 4P kết hợp 5 khe cắm cầu chì ô tô ngắt chập độc lập",
        "en": "Dual 30A 4P heavy-duty relays with 5 independent automotive fuse protection slots"
      },
      {
        "vi": "Cách ly quang PC817X2NIP0F nhận diện chìa khóa điện ACC chống nhiễu sụt áp",
        "en": "PC817X2NIP0F optocoupler isolation for ACC vehicle ignition detection & surge protection"
      },
      {
        "vi": "Nguồn xung LM2596-5V dải rộng (40V DC) + MOSFET công suất P-Channel APM4015PUC",
        "en": "Wide 40V LM2596-5V DC-DC buck power + APM4015PUC P-channel power MOSFET cutoff"
      },
      {
        "vi": "Giắc cắm ô tô công nghiệp 6.3mm 6-Pin uốn cong chịu dòng tải cao",
        "en": "6.3mm heavy-duty 6-pin curved automotive connector for high-current wiring"
      }
    ],
    "highlight": true
  },
  {
    "id": "drone-rf-tx-rx",
    "title": {
      "vi": "Hệ Thống Bo Mạch Truyền Nhận RF 2.4GHz Tay Điều Khiển TX & Thu Tín Hiệu RX Cho Drone DIY",
      "en": "DIY Drone 2.4GHz RF Remote Controller (TX) & Flight Receiver (RX) PCB System",
      "ja": "DIYドローン用 2.4GHz RF 送信機(TX) & 受信機(RX) 基板システム"
    },
    "category": "Robotics & UAV",
    "period": "2024",
    "summary": {
      "vi": "Bộ cặp bo mạch điều khiển RF 2.4GHz cho Drone tự chế: Tay điều khiển phát tín hiệu TX tích hợp Joystick/USB-C và Mạch thu tín hiệu RX gắn trên Drone dựa trên ATmega328P-AN & nRF24L01.",
      "en": "Matching 2.4GHz RF remote control transceiver PCB pair for DIY drones: Joystick-based TX Transmitter & ATmega328P + nRF24L01 RX Receiver board."
    },
    "description": {
      "vi": "Chủ trì R&D phần cứng toàn trình bộ cặp bo mạch phát (TX) và thu (RX) tín hiệu không dây 2.4GHz cho hệ thống máy bay điều khiển từ xa (DIY Multirotor Drone). Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Mạch thu RX sử dụng vi xử lý Microchip ATmega328P-AN kết hợp Transceiver nRF24L01 2.4GHz độ trễ thấp (<5ms), tích hợp mạch nạp USB Type-C qua chip CH340, các kênh xuất PWM điều khiển động cơ ESC/Servo và mạch nạp bootloader chuẩn hóa.",
      "en": "Led end-to-end hardware R&D for a matching 2.4GHz RF wireless Transmitter (TX) & Receiver (RX) PCB system tailored for DIY Multirotor Drones. Designed schematic and multi-layer PCB layout in Altium Designer. The RX Receiver features Microchip ATmega328P-AN MCU paired with nRF24L01 2.4GHz low-latency transceiver (<5ms), integrated USB Type-C programming with CH340 USB-to-UART converter, PWM outputs for ESC/Servo motor control, and standardized bootloader flashing interface."
    },
    "longDescription": {
      "vi": "• Thiết kế toàn trình bộ cặp PCB phát (TX) & thu (RX) sóng radio 2.4GHz trên Altium Designer cho hệ thống Drone / Máy bay điều khiển tự chế.\n• Mạch phát TX (Transmitter): Tích hợp tay cầm Joystick 2 trục, nút công tắc chọn chế độ bay, cổng giao tiếp nạp/sạc USB Type-C và khối phát RF nRF24L01 PA/LNA tầm xa.\n• Mạch thu RX (Receiver): Vi xử lý trung tâm Microchip ATmega328P-AN (8-bit AVR RISC @ 16MHz) kết hợp module thu nRF24L01 2.4GHz độ trễ thấp (<5ms).\n• Tích hợp mạch chuyển đổi USB-to-UART CH340 & cổng USB Type-C phục vụ nạp chương trình trực tiếp qua phần mềm Arduino IDE / PlatformIO.\n• Xuất tín hiệu điều khiển PWM đa kênh kết nối trực tiếp bộ điều khiển tốc độ động cơ (ESC) và rơ-le/cánh quạt Servo.",
      "en": "• End-to-end Altium Designer schematic capture & multi-layer PCB layout for matching 2.4GHz RF Transmitter (TX) & Receiver (RX) pair for DIY drones.\n• TX Transmitter Board: Integrated 2-axis Joystick controllers, flight mode toggle switches, USB Type-C charging/programming port, and long-range nRF24L01 PA/LNA RF stage.\n• RX Receiver Board: Microchip ATmega328P-AN 8-bit AVR RISC MCU (@16MHz) paired with low-latency (<5ms) nRF24L01 2.4GHz RF receiver module.\n• Integrated WCH CH340 USB-to-UART bridge & USB Type-C interface for seamless firmware uploads via Arduino IDE / PlatformIO.\n• Multi-channel PWM control signal outputs interfacing directly to ESC motor speed controllers & Servo actuators."
    },
    "techStack": [
      "ATmega328P-AN",
      "nRF24L01 2.4GHz RF",
      "DIY Drone Controller",
      "TX / RX Transceiver Pair",
      "USB Type-C 16P",
      "CH340 USB-to-UART",
      "PWM ESC/Servo Output",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/drone_rf_tx_rx/1.jpg",
    "gallery": [
      "assets/projects/drone_rf_tx_rx/1.jpg",
      "assets/projects/drone_rf_tx_rx/4.jpg",
      "assets/projects/drone_rf_tx_rx/5.jpg",
      "assets/projects/drone_rf_tx_rx/6.jpg",
      "assets/projects/drone_rf_tx_rx/7.jpg",
      "assets/projects/drone_rf_tx_rx/8.jpg",
      "assets/projects/drone_rf_tx_rx/z6537258300422_19f4eb1978a27a06d95f414b2b27cdc8.jpg",
      "assets/projects/drone_rf_tx_rx/z6537258327342_ab195ba8197f4aa57eb98b3c264993b2.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260247332_610f6a883b3aa825b4be8a06617d1c10.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260640885_7095a2816a3028a3b435be480ee0d41c.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260726677_81e3a672573c7dfc5042d78dc00773dd.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260763582_ea2240cc73a8f8e09c19abe0a36738a0.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260799952_3c26cc0be9625241e5ee5368f357c673.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260853136_b9be71f2c76457ffbcdc75155e3e0390.jpg",
      "assets/projects/drone_rf_tx_rx/z6537260904444_cab7b736b495f070c44bc519c5e6b9d6.jpg",
      "assets/projects/drone_rf_tx_rx/z6537261032066_e651bfeb7c7d2b5ff6fd1c2976d4a541.jpg",
      "assets/projects/drone_rf_tx_rx/z6537261067362_28c797c3230b48f64cb671c504e3ce5b.jpg",
      "assets/projects/drone_rf_tx_rx/z6537261103441_caee4377539ba97a9c61528d216d9bf3.jpg",
      "assets/projects/drone_rf_tx_rx/z6537261139008_54e9f02b3a75caa18f0e2978e936cf80.jpg"
    ],
    "features": [
      {
        "vi": "Bộ cặp bo mạch phát TX & thu RX truyền nhận dữ liệu không dây 2.4GHz băng thông cao độ trễ siêu thấp (<5ms)",
        "en": "Matching 2.4GHz RF TX & RX PCB pair delivering high-bandwidth ultra-low latency wireless (<5ms)"
      },
      {
        "vi": "Mạch thu RX gắn Drone: Microchip ATmega328P-AN kết hợp Transceiver nRF24L01 2.4GHz",
        "en": "Drone-mounted RX Receiver: Microchip ATmega328P-AN MCU paired with nRF24L01 2.4GHz transceiver"
      },
      {
        "vi": "Tay phát TX tích hợp Joystick 2 trục, nút gạt chọn chế độ bay & cổng sạc/nạp USB Type-C",
        "en": "TX Transmitter equipped with 2-axis Joystick, flight mode switches & USB Type-C port"
      },
      {
        "vi": "Tích hợp mạch chuyển đổi CH340 USB-to-UART nạp firmware dễ dàng qua Arduino IDE",
        "en": "Integrated CH340 USB-to-UART bridge for seamless firmware flashing via Arduino IDE"
      },
      {
        "vi": "Xuất đường tín hiệu điều khiển PWM đa kênh tới bộ điều khiển động cơ ESC & Servo",
        "en": "Multi-channel PWM outputs directly controlling ESC motor speed controllers & Servos"
      }
    ],
    "highlight": true
  },
  {
    "id": "lora-env-gateway-node",
    "title": {
      "vi": "Hệ Thống Bo Mạch LoRa Gateway & Node Cảm Biến Giám Sát Môi Trường IoT — ESP32, ATmega328P & LoRa Ra-02",
      "en": "Smart LoRa Wireless Environmental Monitoring Gateway & Sensor Node PCB System (ESP32 & ATmega328P)",
      "ja": "LoRa 環境モニタリング IoT ゲートウェイ & センサーノード基板システム"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bộ cặp bo mạch Gateway & Node thu thập dữ liệu cảm biến không dây xa qua LoRa Ra-02 (SX1278), vi xử lý ESP32 Wi-Fi/BLE, ATmega328P tiết kiệm điện và cổng sạc/nạp USB Type-C.",
      "en": "Matching Gateway & Sensor Node PCB system for long-range wireless environmental monitoring using LoRa Ra-02 (SX1278), dual-core ESP32 Wi-Fi/BLE, low-power ATmega328P MCU, and USB Type-C interface."
    },
    "description": {
      "vi": "Chủ trì R&D toàn trình thiết kế bộ cặp phần cứng Bo Mạch Gateway Trung Tâm và Bo Mạch Node Cảm Biến thu thập dữ liệu môi trường không dây khoảng cách xa qua mạng LoRa. Thiết kế sơ đồ nguyên lý và layout PCB multi-layer trên Altium Designer. Gateway sử dụng vi xử lý ESP32 (Wi-Fi/BLE) kết hợp module LoRa Ra-02 (SX1278 433MHz) truyền dữ liệu lên Cloud Dashboard. Node cảm biến tích hợp vi xử lý tiết kiệm điện ATmega328P-AN, các cổng giao tiếp cảm biến công nghiệp, mạch nguồn kép LDO AMS1117-3.3V cách ly và chế độ Deep Sleep dòng cực thấp.",
      "en": "Led end-to-end hardware R&D for a matching LoRa Central Gateway PCB & Sensor Node PCB system designed for long-range wireless environmental data acquisition. Designed schematic capture and multi-layer PCB layout in Altium Designer. The Central Gateway features an ESP32 SoC (Wi-Fi/BLE) paired with a LoRa Ra-02 transceiver (SX1278 433MHz) streaming telemetry to Cloud dashboards. The Sensor Node incorporates a low-power ATmega328P-AN MCU, multi-sensor interfaces, dual AMS1117-3.3V LDO power isolation, and ultra-low-current Deep Sleep management."
    },
    "longDescription": {
      "vi": "• Thiết kế trọn bộ sơ đồ nguyên lý & layout PCB multi-layer trên Altium Designer cho cặp sản phẩm Gateway Trung Tâm & Node Cảm Biến Môi Trường LoRa.\n• Bo Mạch Gateway Trung Tâm: Vi xử lý ESP32-WROOM-32 (Dual-Core 240MHz, Wi-Fi / BLE) kết hợp Transceiver LoRa Ra-02 (SX1278 433MHz) thu thập dữ liệu từ hàng trăm Node phân tán và đẩy lên Web Dashboard / Cloud Server.\n• Bo Mạch Node Cảm Biến: Vi xử lý Microchip ATmega328P-AN (8-bit AVR RISC @ 16MHz) tối ưu điện năng tiêu thụ, hỗ trợ kết nối đa dạng cảm biến nhiệt độ, độ ẩm, chất lượng không khí & ánh sáng.\n• Kiến trúc nguồn cách ly chống nhiễu: Trang bị mạch LDO kép AMS1117-3.3V phân tách độc lập đường nguồn 3.3V cho MCU và 3.3V_LoRa chống nhiễu sụt áp khi phát công suất cao.\n• Giao diện nạp & Nguồn: Cổng nạp USB Type-C giao tiếp CH340 USB-to-UART nạp chương trình trực tiếp và hỗ trợ nguồn Pin sạc dự phòng cho hoạt động bền bỉ ngoài trời.",
      "en": "• Complete Altium Designer schematic capture & multi-layer PCB layout for matching Central Gateway PCB & Wireless Sensor Node PCB pair.\n• Central Gateway Board: ESP32-WROOM-32 SoC (Dual-Core 240MHz, Wi-Fi/BLE) paired with LoRa Ra-02 (SX1278 433MHz) receiving telemetry from hundreds of nodes and streaming to Web Dashboards / Cloud Servers.\n• Sensor Node Board: Microchip ATmega328P-AN 8-bit AVR MCU (@16MHz) optimized for ultra-low power consumption, supporting temperature, humidity, air quality & light sensors.\n• Power Isolation Architecture: Dual AMS1117-3.3V LDO regulators isolating MCU 3.3V from 3.3V_LoRa RF power line to prevent voltage sags during high-power RF transmission.\n• Programming & Power Stage: USB Type-C with integrated CH340 USB-to-UART bridge for seamless firmware flashing and battery power support for long-term outdoor deployment."
    },
    "techStack": [
      "ESP32 Wi-Fi/BLE",
      "ATmega328P-AN",
      "LoRa Ra-02 (SX1278)",
      "LoRa Mesh Network",
      "Dual AMS1117 LDO",
      "CH340 USB-to-UART",
      "USB Type-C 16P",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/lora_env_gateway_node/gw_top.png",
    "gallery": [
      "assets/projects/lora_env_gateway_node/gw_top.png",
      "assets/projects/lora_env_gateway_node/node_1.png",
      "assets/projects/lora_env_gateway_node/node_2.png",
      "assets/projects/lora_env_gateway_node/gw_top1.png",
      "assets/projects/lora_env_gateway_node/node_bottom.png",
      "assets/projects/lora_env_gateway_node/node_top.png"
    ],
    "features": [
      {
        "vi": "Bộ cặp bo mạch Gateway Trung Tâm & Node Cảm Biến thu thập dữ liệu môi trường không dây xa qua LoRa",
        "en": "Matching Central Gateway & Sensor Node PCB system for long-range wireless environmental monitoring"
      },
      {
        "vi": "Gateway ESP32-WROOM-32 (Wi-Fi/BLE) kết nối LoRa Ra-02 (433MHz) đẩy dữ liệu thời gian thực lên Cloud",
        "en": "Gateway ESP32-WROOM-32 (Wi-Fi/BLE) paired with LoRa Ra-02 (433MHz) streaming real-time data to Cloud"
      },
      {
        "vi": "Node Cảm Biến ATmega328P-AN tiêu thụ điện cực thấp (<10uA Deep Sleep) hỗ trợ nhiều loại cảm biến",
        "en": "Ultra-low power ATmega328P-AN Sensor Node (<10uA Deep Sleep) supporting multi-sensor interfaces"
      },
      {
        "vi": "Mạch hạ áp LDO kép AMS1117-3.3V phân tách độc lập đường nguồn MCU & RF LoRa chống sụt áp",
        "en": "Dual AMS1117-3.3V LDO power isolation separating MCU and LoRa RF power rails to prevent voltage sags"
      },
      {
        "vi": "Cổng USB Type-C tích hợp mạch nạp CH340 USB-to-UART nạp firmware & debug trực tiếp",
        "en": "USB Type-C with integrated CH340 USB-to-UART bridge for direct firmware flashing & debugging"
      }
    ],
    "highlight": true
  },
  {
    "id": "relay-4-channel",
    "title": {
      "vi": "Mạch Điều Khiển 4 Rơ-Le Thông Minh ESP32 — Nguồn Cách Ly Hi-Link AC-DC & Opto/Transistor Protection",
      "en": "Smart 4-Channel Relay Controller PCB (ESP32-WROOM-32) — Hi-Link AC-DC & Optocoupler Protection",
      "ja": "ESP32 4チャンネル スマートリレー制御基板 — 絶縁電源Hi-Link搭載"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch điều khiển 4 kênh Rơ-le 10A 220V cho thiết bị điện thông minh dựa trên ESP32 Wi-Fi/BLE, tích hợp nguồn xung cách ly Hi-Link 5V 5W và bảo vệ chống sét 14D471K.",
      "en": "4-Channel 10A 220V relay controller PCB for smart home automation powered by ESP32 Wi-Fi/BLE, featuring Hi-Link 5V 5W isolated AC-DC supply and 14D471K MOV protection."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế phần cứng bo mạch điều khiển 4 kênh Rơ-le công suất 10A phục vụ nhà thông minh và tự động hóa nhà xưởng. Sử dụng vi xử lý ESP32-WROOM-32UE (Wi-Fi 802.11 b/g/n, Bluetooth 4.2 BLE). Tích hợp nguồn xung hạ áp cách ly trực tiếp 220V AC Hi-Link 5W, Varistor 14D471K chống quá áp, tụ dập xung 275VAC, cuộn lọc nhiễu 10mH UU9.8, Transistor C1815 đệm dòng rơ-le và LED báo trạng thái 4 kênh độc lập.",
      "en": "Led hardware R&D for a 4-channel 10A power relay control board for smart home and industrial automation. Powered by ESP32-WROOM-32UE SoC (Wi-Fi 802.11 b/g/n, BLE 4.2). Features direct 220V AC-to-DC Hi-Link 5W isolated module, 14D471K MOV transient surge protection, 275VAC safety capacitors, 10mH UU9.8 common mode choke, C1815 transistor relay drivers, and 4 independent channel LED indicators."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB 2-layer tối ưu diện tích cho bo mạch điều khiển 4 rơ-le công suất tải 220V/10A.\n• Vi xử lý trung tâm ESP32-WROOM-32UE (Wi-Fi/BLE) nhận lệnh điều khiển bật/tắt thiết bị qua ứng dụng di động, MQTT hoặc Web Server.\n• Khối nguồn AC 220V cách ly an toàn: Trang bị module nguồn xung Hi-Link 5V/5W, cầu chì 1A, Varistor 14D471K chống sét lan truyền và cuộn lọc UU9.8 10mH.\n• Điều khiển Rơ-le công suất: 4 Rơ-le Song Chuan/Songle SRD-05VDC-SL-C (10A 250VAC) ngắt mở an toàn bằng Transistor NPN C1815 & Diode dập dòng ngược 1N4007 M7.\n• Giao diện điều khiển & nạp code: Tích hợp 5 nút nhấn vuông 90 độ chọn chế độ, Header nạp 2.54mm và LDO AMS1117-3.3V cấp nguồn siêu sạch cho vi xử lý.",
      "en": "• Schematic capture & 2-layer compact PCB layout for 4-channel 220V/10A power relay control units.\n• Central processing via ESP32-WROOM-32UE (Wi-Fi/BLE) receiving ON/OFF control commands via Mobile Apps, MQTT, or local Web Server.\n• Safe 220V AC Mains Power Stage: Hi-Link 5V/5W isolated buck, 1A square fuse, 14D471K MOV surge suppressor, and 10mH UU9.8 common-mode choke.\n• Relay Control Stage: 4x SRD-05VDC-SL-C 10A 250VAC power relays driven by C1815 NPN transistors & M7 1N4007 flyback suppression diodes.\n• Control Interface & Flashing: 5 tactile switches, 2.54mm debug header, and AMS1117-3.3V LDO supplying noise-free power to the ESP32."
    },
    "techStack": [
      "ESP32 Wi-Fi/BLE",
      "4-Channel 10A Relays",
      "Hi-Link 5V AC-DC Isolated",
      "14D471K MOV Surge Protection",
      "C1815 Transistor Driver",
      "AMS1117-3.3V LDO",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/relay_4_channel/1.jpg",
    "gallery": [
      "assets/projects/relay_4_channel/1.jpg",
      "assets/projects/relay_4_channel/1684467776725_1865481403134129726_3747327866930100700_e2226ab805b0df7f99cf71b96d982fda.jpg",
      "assets/projects/relay_4_channel/1684467776743_1865481403134129726_3747327866930100700_c99c9a041214debb5df5cb7660477b5f.jpg",
      "assets/projects/relay_4_channel/1733199889349_1865481403134129726_3747327866930100700_6d89cabdbaa154475b2f42e172e1884d.jpg",
      "assets/projects/relay_4_channel/1785394436112_1865481403134129726_3747327866930100700_1de4cf37912887a28c34cec987f532a2.jpg",
      "assets/projects/relay_4_channel/1785394436129_1865481403134129726_3747327866930100700_8fe8ce3f9256e3cb970ada29d51339f0.jpg",
      "assets/projects/relay_4_channel/1785394436141_1865481403134129726_3747327866930100700_0cca4ec3c300ce668c65163dac70134d.jpg",
      "assets/projects/relay_4_channel/2.jpg"
    ],
    "features": [
      {
        "vi": "Điều khiển 4 kênh Rơ-le công suất 10A 250VAC ngắt mở thiết bị điện từ xa qua Wi-Fi/Bluetooth",
        "en": "Controlling 4-channel 10A 250VAC power relays remotely via Wi-Fi/Bluetooth"
      },
      {
        "vi": "Khối nguồn xung Hi-Link 5V/5W hạ áp trực tiếp từ 220V AC cách ly hoàn toàn an toàn người dùng",
        "en": "Hi-Link 5V/5W isolated AC-DC power module stepping down 220V AC safely"
      },
      {
        "vi": "Trang bị Varistor 14D471K chống quá áp sét đánh + cuộn lọc UU9.8 10mH lọc nhiễu đường nguồn",
        "en": "14D471K MOV surge protection + 10mH UU9.8 common mode choke filtering power line noise"
      },
      {
        "vi": "Mạch Transistor đệm C1815 & Diode M7 bảo vệ chống dòng điện ngược từ cuộn dây Rơ-le",
        "en": "C1815 transistor buffer & M7 flyback diode protecting against relay inductive spikes"
      },
      {
        "vi": "Hệ thống LED 0805 báo trạng thái riêng biệt cho từng kênh Rơ-le & LED chỉ thị nguồn",
        "en": "Independent 0805 status LEDs for each relay channel and main power indicator"
      }
    ],
    "highlight": true
  },
  {
    "id": "sensor-relay-30a",
    "title": {
      "vi": "Bo Mạch Rơ-Le Công Suất Tải Lớn 30A Tích Hợp Giao Tiếp Cảm Biến Môi Trường — ESP32",
      "en": "30A High-Power Smart Relay & Multi-Sensor Interface PCB (ESP32-WROOM-32)",
      "ja": "30A 大容量スマートリレー & センサーインターフェース基板 (ESP32)"
    },
    "category": "Industrial Hardware & Automotive",
    "period": "2024",
    "summary": {
      "vi": "Bo mạch điều khiển Rơ-le chịu tải công suất cao 30A tích hợp giao tiếp cảm biến dòng/nhiệt/ẩm cho máy bơm, bình nóng lạnh và thiết bị công nghiệp.",
      "en": "High-power 30A relay control PCB integrated with multi-sensor interface for heavy-duty pumps, water heaters, and industrial loads."
    },
    "description": {
      "vi": "Chủ trì R&D thiết kế phần cứng bo mạch điều khiển Rơ-le công suất lớn 30A phục vụ đóng ngắt tải nặng công nghiệp (máy bơm nước, bình nóng lạnh, hệ thống sấy). Sử dụng vi xử lý ESP32-WROOM-32. Tích hợp Rơ-le công suất lớn 30A 5-Pin, nguồn cách ly AC-DC Hi-Link 5V/1A (5W), cầu chì bảo vệ 250V/2A, Varistor 10D561 chống sét lan truyền, cuộn cảm lọc nhiễu UU9.8 và cổng cắm cảm biến chuyên dụng (dòng điện ACS712, nhiệt độ DHT22/DS18B20).",
      "en": "Led hardware R&D for a 30A heavy-duty power relay controller PCB built for high-current industrial loads (water pumps, heavy heaters, drying systems). Powered by ESP32-WROOM-32 SoC. Integrated 30A 5-pin heavy-duty relay, Hi-Link 5V/1A (5W) isolated AC-DC supply, 250V/2A safety fuse, 10D561 MOV surge suppressor, UU9.8 filter choke, and dedicated sensor expansion header (ACS712 current, DHT22/DS18B20 temp)."
    },
    "longDescription": {
      "vi": "• Thiết kế sơ đồ nguyên lý & layout PCB 2-layer phủ đồng dày chịu dòng tải cao 30A cho bo mạch điều khiển đóng ngắt thiết bị công suất lớn.\n• Vi xử lý ESP32-WROOM-32 (Dual-Core 240MHz) kết nối Wi-Fi/Bluetooth điều khiển đóng ngắt từ xa & đo đạc dữ liệu cảm biến thời gian thực.\n• Công suất ngắt tải 30A: Rơ-le công suất lớn 30A 5-Pin đóng ngắt an toàn cho bình nóng lạnh, động cơ máy bơm và hệ thống điều hòa công nghiệp.\n• Mạch nguồn AC-DC 220V bảo vệ an toàn: Module Hi-Link 5V 1A cách ly, Varistor 10D561 chống áp cao, cầu chì 2A ngắt chập và cuộn lọc nhiễu UU9.8.\n• Cổng giao tiếp cảm biến mở rộng: Chân cắm Header chuyên dụng đưa ra các đường GPIO kết nối cảm biến đo dòng ACS712, cảm biến nhiệt độ/độ ẩm.",
      "en": "• Schematic capture & heavy-copper 2-layer PCB layout engineered for high-current 30A load switching.\n• Central control powered by ESP32-WROOM-32 (Dual-Core 240MHz, Wi-Fi/BLE) for remote cloud switching & real-time sensor analytics.\n• 30A Heavy-Duty Load Capacity: 30A 5-pin power relay safely controlling heavy water pumps, industrial heaters, and HVAC units.\n• Safe 220V AC Power Architecture: Hi-Link 5V 1A isolated buck module, 10D561 MOV transient suppressor, 2A fuse, and UU9.8 line filter choke.\n• Multi-Sensor Expansion Interface: Dedicated breakout header providing GPIO connections for ACS712 current sensors, DHT22/DS18B20 temp/humidity probes."
    },
    "techStack": [
      "ESP32 Wi-Fi/BLE",
      "30A Heavy-Duty Relay",
      "Hi-Link 5V 1A AC-DC",
      "10D561 MOV Surge Protection",
      "ACS712 Current Sensor Header",
      "AMS1117-3.3V LDO",
      "Altium Designer PCB"
    ],
    "image": "assets/projects/sensor_relay_30a/1.jpg",
    "gallery": [
      "assets/projects/sensor_relay_30a/1.jpg",
      "assets/projects/sensor_relay_30a/1684467788585_1865481403134129726_3747327866930100700_b1623225fc6b99de22865c935168c12a.jpg",
      "assets/projects/sensor_relay_30a/1785392461191_1865481403134129726_3747327866930100700_9731bd5061a15ea36636057cb6ecad76.jpg",
      "assets/projects/sensor_relay_30a/1785392461205_1865481403134129726_3747327866930100700_178e511072d9c4ea0b5564784ce48fe1.jpg",
      "assets/projects/sensor_relay_30a/1785392461217_1865481403134129726_3747327866930100700_5e9999f5648da6311c75ea9e191b7ab8.jpg",
      "assets/projects/sensor_relay_30a/1785392461229_1865481403134129726_3747327866930100700_762a0a0f5dc7dc7ccda8fe04c27f2564.jpg",
      "assets/projects/sensor_relay_30a/1785392461239_1865481403134129726_3747327866930100700_242bdf36e5798b98021c1f1cf2e7da52.jpg",
      "assets/projects/sensor_relay_30a/1785392461248_1865481403134129726_3747327866930100700_0b33584a02b9432511187494ef1ee5e1.jpg",
      "assets/projects/sensor_relay_30a/1785392461256_1865481403134129726_3747327866930100700_0543500ed78f2c145dc31c3f7a37ce90.jpg",
      "assets/projects/sensor_relay_30a/1785392461263_1865481403134129726_3747327866930100700_3442e1863d9a852b593bcd7d30954f59.jpg",
      "assets/projects/sensor_relay_30a/1785392461270_1865481403134129726_3747327866930100700_887587dcceeb14d6654410828757ad83.jpg",
      "assets/projects/sensor_relay_30a/1785392461277_1865481403134129726_3747327866930100700_db7d056706d08ee86589c98de40693f9.jpg",
      "assets/projects/sensor_relay_30a/1785392461284_1865481403134129726_3747327866930100700_f75f604241e72063b285dd1f7f9559c3.jpg",
      "assets/projects/sensor_relay_30a/1785392461291_1865481403134129726_3747327866930100700_f2f05224fefef31eabb079c2b98e1f04.jpg",
      "assets/projects/sensor_relay_30a/1785392461298_1865481403134129726_3747327866930100700_6cdb09d84ddc6c616789ee115f76a4be.jpg",
      "assets/projects/sensor_relay_30a/1785392461305_1865481403134129726_3747327866930100700_98b49153509b24442d24e635bf4c2a40.jpg",
      "assets/projects/sensor_relay_30a/1785392461312_1865481403134129726_3747327866930100700_d2f7de6e4ad7ec32a2bf4d645befa414.jpg",
      "assets/projects/sensor_relay_30a/2.jpg"
    ],
    "features": [
      {
        "vi": "Đóng ngắt an toàn các thiết bị công suất cao 30A (máy bơm, bình nóng lạnh, điều hòa)",
        "en": "Safely controlling 30A high-power heavy-duty loads (pumps, water heaters, HVACs)"
      },
      {
        "vi": "Khối nguồn xung Hi-Link 5V/1A cách ly 220V AC trang bị Varistor 10D561 & cầu chì 2A",
        "en": "Hi-Link 5V/1A isolated AC-DC module with 10D561 MOV transient surge protection & 2A fuse"
      },
      {
        "vi": "Tích hợp cổng cắm cảm biến mở rộng (đo dòng điện ACS712, nhiệt độ/độ ẩm môi trường)",
        "en": "Integrated sensor breakout headers (ACS712 current sensing, temperature/humidity probes)"
      },
      {
        "vi": "Vi xử lý ESP32 Wi-Fi/Bluetooth điều khiển linh hoạt qua Web Server, MQTT hoặc Cloud",
        "en": "ESP32 Wi-Fi/BLE MCU enabling flexible control via Web Server, MQTT, or Cloud platforms"
      },
      {
        "vi": "Thiết kế PCB Altium đường mạch nguồn phủ đồng dày chịu dòng cao chống phát nhiệt",
        "en": "Altium PCB design with heavy copper power traces preventing heat generation"
      }
    ],
    "highlight": true
  }
];

// ========== TECHNICAL STACK CATEGORIES ==========
export const techCategories: TechCategory[] = [
 {
 title: { vi: 'MCU', en: 'MCU' },
 icon: 'fa-microchip',
 items: [
 'STM32 (ARM Cortex-M)',
 'ESP (SoC)',
 'CH32 (RISC-V)',
 'MSP430 (TI)',
 'PIC (Microchip)',
 'Quectel (4G LTE)',
 'Raspberry Pi / Orange Pi',
 'Nordic nRF52 (BLE)',
 'Arduino (AVR/SAMD)',
 ],
 },
 {
 title: { vi: 'Giao Thức Truyền Thông', en: 'Communication Protocols' },
 icon: 'fa-network-wired',
 items: ['CAN Bus', 'RS485 / Modbus RTU', 'LoRa / LoRaWAN', 'BLE / Bluetooth 5.0', 'WiFi (Station / AP)', 'MQTT / MQTTS', 'HTTP / HTTPS', 'SPI / I2C / UART / OneWire / NFC'],
 },
 {
 title: { vi: 'Công Cụ R&D Phần Cứng & Firmware', en: 'Hardware & Firmware R&D Tools (IDE & CAD)' },
 icon: 'fa-tools',
 items: ['Altium Designer (2/4-Layer)', 'KiCad EDA', 'Proteus VSM', 'LTspice Circuit Sim', 'VS Code & PlatformIO', 'STM32CubeIDE', 'Oscilloscope & Logic Analyzer', 'CAN Analyzer & SWD/JTAG'],
 },
 {
 title: { vi: 'Ngôn Ngữ Lập Trình & RTOS', en: 'Languages & RTOS' },
 icon: 'fa-code',
 items: ['Embedded C/C++', 'FreeRTOS Multi-Tasking', 'Python (Scripting & AI)', 'CMake & Make'],
 },
 {
 title: { vi: 'Thiết Kế Mạch PCB & Phần Cứng', en: 'Hardware & PCB Engineering' },
 icon: 'fa-layer-group',
 items: ['2-Layer & 4-Layer Layout', 'High-Speed Signal Routing', 'EMI / EMC Mitigation', 'Impedance Control (50Ω)', 'Power Integrity (LDO/DCDC)', 'ESD & Surge Protection', 'Solar MPPT Battery Circuit'],
 },
 {
 title: { vi: 'Edge AI & Nền Tảng Cloud IoT', en: 'Edge AI & Cloud IoT' },
 icon: 'fa-cloud',
 items: ['TensorFlow Lite Micro', 'ToF 8x8 Sensor Fusion', '60GHz mmWave Radar AI', 'MQTT Mosquitto Broker', 'MongoDB Database', 'React Native Mobile App', 'OTA Firmware Server', 'Cursor & GitHub Copilot'],
 },
];

// ========== EDUCATION ==========
export const education: Education[] = [
 {
 school: {
 vi: 'Trường Đại Học Cần Thơ (Can Tho University - CTU)',
 en: 'Can Tho University (CTU)',
 },
 degree: {
 vi: 'Computer Engineering - specializing in embedded systems',
 en: 'Computer Engineering - specializing in embedded systems',
 },
 period: '08/2018 - 06/2022',
 description: {
 vi: '',
 en: '',
 ja: '',
 },
 },
];

// ========== PROJECT CATEGORIES ==========
export const projectCategories = [
 { key: 'All', label: { vi: 'Tất cả Dự Án', en: 'All Projects' } },
 { key: 'AIoT & Medical Device', label: { vi: 'AIoT & Y Tế', en: 'AIoT & Medical' } },
 { key: 'Edge AI & Smart Device', label: { vi: 'Edge AI & Thiết Bị', en: 'Edge AI' } },
 { key: 'Industrial Hardware & Automotive', label: { vi: 'Công Nghiệp & Xe Nâng', en: 'Industrial' } },
 { key: 'Robotics & UAV', label: { vi: 'Robotics & UAV', en: 'UAV & Robotics' } },
 { key: 'IoT & Agriculture', label: { vi: 'Nông Nghiệp IoT', en: 'Agriculture' } },
];
