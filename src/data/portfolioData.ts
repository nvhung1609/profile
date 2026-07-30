// ========== TYPE DEFINITIONS ==========
export type Language = 'vi' | 'en';
export type Theme = 'dark' | 'light';

export interface Translation {
  vi: string;
  en: string;
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

export interface WorkExperience {
  id: string;
  company: string;
  companyJapanese?: string;
  companyTaxUrl?: string;
  role: Translation;
  period: string;
  location: Translation;
  description: Translation;
  achievements: Translation[];
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
  title: string;
  category: string;
  period: string;
  summary: Translation;
  description: Translation;
  longDescription: Translation;
  techStack: string[];
  features: Translation[];
  liveUrl?: string;
  githubUrl?: string;
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
    rolePrefix: { vi: 'Tôi là', en: "I'm a" },
    roleName: { vi: 'KỸ SƯ HỆ THỐNG NHÚNG', en: 'EMBEDDED SYSTEMS ENGINEER' },
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
    vi: 'Đại học Cần Thơ — Kỹ thuật Máy tính (Hệ thống Nhúng)',
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
    companyJapanese: '(HQ Nhật Bản: MUSEN PLUS Co., Ltd. / 無線プラス製作所)',
    role: {
      vi: 'Kỹ sư R&D (Hardware & Firmware Engineer)',
      en: 'R&D Engineer (Hardware & Firmware Engineer)',
    },
    period: '15/08/2024 - Hiện tại',
    location: {
      vi: 'TP. HCM & Cần Thơ (JV TECH) • Osaka, Nhật Bản (MUSEN PLUS HQ)',
      en: 'Ho Chi Minh City & Can Tho (JV TECH) • Osaka, Japan (MUSEN PLUS HQ)',
    },
    description: {
      vi: 'Chủ trì R&D phần cứng điện tử và phát triển firmware nhúng cấp production tại JV TECH thuộc công ty MUSEN PLUS Co., Ltd. (HQ Osaka, Nhật Bản). Trực tiếp thiết kế toàn trình cho 16+ sản phẩm IoT/AIoT thương mại triển khai thực tế tại hệ thống viện dưỡng lão Nhật Bản, nhà máy sản xuất công nghiệp và thiết bị điện tử thông minh.',
      en: 'Leading electronic hardware R&D & production firmware engineering at JV TECH under parent company MUSEN PLUS Co., Ltd. (Osaka HQ, Japan). Primary R&D engineer delivering 16+ commercial IoT/AIoT products deployed across Japanese nursing facilities, industrial plants, and smart devices.',
    },
    achievements: [
      {
        vi: 'Chủ trì R&D & Thiết kế Mạch Điện Tử toàn trình: Vẽ sơ đồ nguyên lý, lựa chọn linh kiện gốc, tối ưu hóa BOM và đi dây PCB 2/4-Layer (Altium Designer) kiểm soát trở kháng, đáp ứng chuẩn chống nhiễu EMI/EMC và xuất file Gerber sản xuất hàng loạt cho 16+ thiết bị thương mại.',
        en: 'Led end-to-end electronic hardware R&D: schematic capture, component selection, BOM optimization, and 2/4-Layer PCB layout (Altium Designer) with impedance control, EMI/EMC compliance, and mass-production Gerber exports for 16+ commercial products.',
      },
      {
        vi: 'Nền tảng Y tế EcoCare AI (care.musenplus.com — Thị trường Nhật Bản): R&D bo mạch PCB ESP32 tùy chỉnh & phát triển Firmware nhúng cấp Production: cảm biến ToF 8x8 (VL53L5CX), Radar 60GHz mmWave phát hiện té ngã & tư thế giường/toilet thời gian thực (< 500ms latency), hệ thống Gọi y tá (Nurse Call) không dây triển khai tại các viện dưỡng lão ở Osaka, Nhật Bản.',
        en: 'EcoCare AI Medical Platform (care.musenplus.com — Japan Market): Engineered custom ESP32 PCBs & production C/C++ firmware: 8x8 ToF sensor matrix, 60GHz mmWave radar fall & posture recognition (<500ms latency), and wireless Nurse Call hardware operating in Osaka nursing facilities.',
      },
      {
        vi: 'Hệ sinh thái Mạng Cảm biến AIoT (sensor.musenplus.com): R&D phần cứng & Firmware C/C++ FreeRTOS thu thập đa cảm biến: điện năng công nghiệp (V, A, cos φ, PT100), cảm biến môi trường (SHT30, CO2, PM2.5), nông nghiệp chính xác (pH/EC đất, NPK, PAR light) truyền thông CAN Bus, RS485/Modbus RTU, LoRaWAN và MQTT Cloud.',
        en: 'AIoT Industrial & AgTech Sensor Ecosystem (sensor.musenplus.com): R&D for multi-sensor IoT hardware & C/C++ FreeRTOS firmware: industrial power monitoring (PT100, current/voltage), environmental sensors (CO2, SHT30), precision agtech (soil pH/EC, NPK, PAR light) over CAN Bus, RS485/Modbus RTU, LoRa, and MQTT Cloud.',
      },
      {
        vi: 'Hệ thống Quản lý Khách sạn & Tự động hóa (hotel.musenplus.com): Thiết kế bộ điều khiển IoT phòng khách sạn thông minh: quản lý điện năng, cảm biến hiện diện Radar 24GHz/PIR, điều khiển chiếu sáng RS485/PWM và kết nối hạ tầng Cloud/App giám sát thực tế.',
        en: 'Smart Hotel & Building Automation System (hotel.musenplus.com): Designed smart hotel room IoT controllers: energy management, 24GHz radar room occupancy detection, RS485/PWM lighting control, and real-time Cloud/App integration.',
      },
      {
        vi: 'Bộ kit AI Box Plus & An toàn Xe nâng Công nghiệp: Thiết kế PCB 4 lớp AI Box Plus (ESP32-S3, I2S Audio Codec, Voice AI ChatGPT/Gemini) phục vụ 5.000+ lập trình viên; R&D bộ sản phẩm an toàn xe nâng (radar 60GHz mmWave cảnh báo va chạm, tay điều khiển RF IP68 có phản hồi Answerback).',
        en: 'AI Box Plus Dev Kit & Industrial Safety Systems: Engineered 4-layer AI Box Plus PCB (ESP32-S3, I2S Audio, ChatGPT/Gemini Voice AI) powering 5,000+ developers; R&D for forklift safety (60GHz mmWave radar, IP68 RF remote with answerback).',
      },
    ],
    techStack: ['C/C++', 'FreeRTOS', 'STM32 (ARM Cortex-M)', 'ESP (SoC)', 'CH32 (RISC-V)', 'MSP430', 'PIC', 'EC800M / EC200U 4G', 'SBC/Linux (Raspberry Pi, Orange Pi)', 'Altium 4-Layer PCB', 'CAN Bus', 'RS485/Modbus', 'LoRa', 'Edge AI'],
    companyUrl: 'https://care.musenplus.com',
  },
  {
    id: 'hasu-herbal',
    company: 'CÔNG TY CỔ PHẦN THẢO DƯỢC HASU',
    role: {
      vi: 'Kỹ sư R&D (Hardware & Firmware Engineer)',
      en: 'R&D Engineer (Hardware & Firmware Engineer)',
    },
    period: '01/09/2022 - 01/09/2025',
    location: {
      vi: 'TP. Hồ Chí Minh & Cần Thơ, Việt Nam',
      en: 'Ho Chi Minh City & Can Tho, Vietnam',
    },
    description: {
      vi: 'Nghiên cứu và phát triển toàn trình (Thiết kế phần cứng PCB & lập trình Firmware nhúng) các thiết bị quang trắc phục vụ nông nghiệp công nghệ cao và các nhà màng/nhà kính trồng trọt. Chuyên làm các thiết bị IoT đóng ngắt tải động lực công suất lớn bằng Contactor, máy bơm, quạt thông gió và hệ thống chiếu sáng.',
      en: 'End-to-end R&D (PCB Hardware Design & Embedded Firmware Development) for agricultural telemetry & optical monitoring devices across high-tech greenhouses. Specialized in IoT controllers for high-power industrial load switching via AC Contactors, heavy motors, pumps, and lighting systems.',
    },
    achievements: [
      {
        vi: 'Nghiên cứu & thiết kế các thiết bị quang trắc nông nghiệp chuyên dụng cho nhà màng/nhà kính trồng trọt: đo đạc cường độ ánh sáng quang hợp, nhiệt độ, độ ẩm, pH/EC.',
        en: 'Researched & engineered dedicated agricultural telemetry & optical monitoring devices for greenhouses: sensing PAR light intensity, temp, humidity, and pH/EC.',
      },
      {
        vi: 'Thiết kế sơ đồ nguyên lý (Schematic) & đi dây PCB (Altium Designer) cho các bo mạch IoT điều khiển đóng ngắt thiết bị động lực Contactor công suất lớn cách ly an toàn và chống nhiễu công nghiệp.',
        en: 'Schematic capture & PCB layout (Altium Designer) for isolated noise-immune IoT controllers designed for high-power AC contactor load switching.',
      },
      {
        vi: 'Lập trình firmware nhúng C/C++ cho vi xử lý: thuật toán máy trạng thái đóng ngắt tải công suất lớn an toàn, bảo vệ quá dòng/quá áp và truyền dữ liệu giám sát thời gian thực.',
        en: 'Developed production C/C++ MCU firmware: safe high-power load switching state machines, overcurrent/overvoltage protection, and real-time telemetry.',
      },
      {
        vi: 'Trực tiếp thử nghiệm vận hành thực tế tại hệ thống nhà trồng, đo đạc tính tương thích điện từ EMI/EMC, tối ưu hóa nguyên mẫu và hoàn thành các nhiệm vụ R&D mở rộng của công ty.',
        en: 'Field testing in greenhouse cultivation facilities, EMI/EMC profiling, power prototyping optimization, and delivering extended technical R&D assignments.',
      },
    ],
    techStack: ['C/C++', 'Altium PCB', 'Contactor Switching', 'Agricultural Telemetry', 'High-Power Driver', 'Sensors (PAR/pH/EC)', 'FreeRTOS'],
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
      vi: 'Triển khai mô hình TensorFlow Lite Micro trên vi điều khiển. Xử lý ma trận cảm biến ToF 8x8 (VL53L5CX), Radar 60GHz mmWave, IMU, GPS cho ứng dụng nhận diện tư thế người cao tuổi và cảnh báo va chạm xe nâng.',
      en: 'Deploying TensorFlow Lite Micro on MCUs. 8x8 ToF sensor matrix (VL53L5CX), 60GHz mmWave radar, IMU, and GPS signal processing for posture detection & forklift collision avoidance.',
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
    id: 'dev-kit-msp430-esp32',
    title: 'Bo Mạch Nạp & Phát Triển Dev Kit MSP430 Chuẩn Chân Cắm ESP32 (MSP430 Dev Kit - ESP32 Footprint Format)',
    category: 'Edge AI & Smart Device',
    period: '07/2023 - 09/2023',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch phát triển Dev Kit cho vi xử lý TI MSP430G2553, chip nạp FTDI FT232RL qua cổng USB-C, mạch gỡ lỗi Spy-Bi-Wire, công tắc chọn luồng UART DIP Switch 4P và hàng chân cọc 30-pin chuẩn kích thước ESP32 DevKit.',
      en: 'Altium PCB design for Texas Instruments MSP430G2553 development board, featuring FTDI FT232RL USB-C bridge, Spy-Bi-Wire debug interface, 4P DIP switch UART selector, and 30-pin header layout aligned with ESP32 DevKit footprint.',
    },
    description: {
      vi: 'Dự án R&D thiết kế bo mạch phát triển Dev Kit thử nghiệm vi xử lý 16-bit RISC siêu tiết kiệm điện TI MSP430G2553. Bo mạch sử dụng chip nạp FTDI FT232RL qua cổng USB-C 16P, giao thức nạp Spy-Bi-Wire (TEST/RST), công tắc gạt DIP Switch 4P định tuyến luồng UART, đặc biệt tích hợp 2 hàng chân cọc cái 1x15P chuẩn đệm định dạng chân cắm tương thích kích thước khe cắm cắm trực tiếp vào các đế cắm module ESP32 (ESP32 Footprint Compatible Format) giúp thử nghiệm và phát triển linh hoạt.',
      en: 'R&D project designing a versatile development kit board for Texas Instruments 16-bit low-power RISC MSP430G2553 microcontroller. Features FTDI FT232RL USB-to-UART bridge over USB-C 16P, Spy-Bi-Wire (TEST/RST) programming, 4P DIP switch for UART signal selection, and 2x 1x15P socket headers mapped to standard ESP32 DevKit 30-pin footprint format for breadboard prototyping and modular socket interchangeability.',
    },
    longDescription: {
      vi: 'Phần cứng Dev Kit: Bo mạch PCB Altium Designer 2 lớp đi dây tín hiệu bus cao tốc sạch nhiễu. Sử dụng đế chip DIP-20 tháo lắp MSP430G2553, chip nạp FTDI FT232RL SSOP28 nạp code cực kỳ ổn định, công tắc gạt 4P định tuyến tín hiệu UART, tụ lọc Tantalum 100uF 16V và hệ thống chân cọc cái 30-pin tương thích kích thước mở rộng ESP32.',
      en: 'Dev Kit Hardware: Altium 2-layer PCB with clean trace layout. Features DIP-20 IC socket for TI MSP430G2553 target MCU, SSOP28 FTDI FT232RL USB bridge for rock-solid programming, 4P DIP switch for UART routing, 100uF 16V Tantalum filter capacitors, and 30-pin header layout aligned with ESP32 DevKit footprint for breadboard prototyping.',
    },
    techStack: ['TI MSP430G2553 (16-bit RISC MCU)', 'FTDI FT232RL USB-to-UART Bridge', 'ESP32 Footprint Compatible Headers', 'Spy-Bi-Wire (TEST/RST) Programming', '4-Pos DIP Switch UART Selector', 'USB-C 16P Interface', 'Altium Designer'],
    features: [
      { vi: 'Bo mạch Dev Kit phát triển & thử nghiệm vi xử lý TI MSP430G2553 qua giao thức Spy-Bi-Wire (TEST / RST) & Serial UART', en: 'Development kit for programming & prototyping TI MSP430G2553 MCU via Spy-Bi-Wire (TEST / RST) protocol & Serial UART' },
      { vi: 'Thiết kế 2 hàng chân cọc cái 1x15P chuẩn đệm định dạng chân cắm tương thích kích thước khe cắm ESP32 DevKit', en: 'Custom 2x 1x15P header layout designed in standard ESP32 DevKit 30-pin footprint format for modular breadboard prototyping' },
      { vi: 'Chip nạp FTDI FT232RL giao tiếp máy tính qua cổng USB-C 16P nạp code & ghi log dữ liệu ổn định', en: 'FTDI FT232RL USB-to-UART bridge over USB-C 16P ensuring reliable PC programming & debugging' },
      { vi: 'Bộ công tắc gạt DIP Switch 4P thông minh cho phép định tuyến đường truyền Serial UART chọn chế độ thử nghiệm', en: 'Smart 4-position DIP switch enabling flexible hardware UART signal routing and test mode selection' },
      { vi: 'Thiết kế chân cắm cọc nạp DIP-20 tháo lắp chip dễ dàng cùng tụ lọc Tantalum 100uF chống sụt áp nguồn', en: 'DIP-20 target IC socket for effortless MCU swapping paired with 100uF Tantalum capacitors for power stability' },
    ],
    image: 'assets/projects/dev_kit_msp430_esp32/1785394716458_1865481403134129726_3747327866930100700_6a8ebc165f5eb59716eb7a8d2c8afbf5.jpg',
    gallery: [
      'assets/projects/dev_kit_msp430_esp32/1785394716458_1865481403134129726_3747327866930100700_6a8ebc165f5eb59716eb7a8d2c8afbf5.jpg',
      'assets/projects/dev_kit_msp430_esp32/1785394716492_1865481403134129726_3747327866930100700_b72027e81423fa80c2eff6440e2cfee0.jpg',
      'assets/projects/dev_kit_msp430_esp32/1785394716510_1865481403134129726_3747327866930100700_5ac761dfe9703586ed32bef9d2af01b8.jpg',
      'assets/projects/dev_kit_msp430_esp32/1690864844789_1865481403134129726_3747327866930100700_28fe32188cda18451cc85b9f8b7e9d78.jpg',
      'assets/projects/dev_kit_msp430_esp32/1690864844790_1865481403134129726_3747327866930100700_54f291e61f711e425af136eade4f6151.jpg',
      'assets/projects/dev_kit_msp430_esp32/1690864844791_1865481403134129726_3747327866930100700_e79d32758be650b69730db4e2176ac92.jpg',
      'assets/projects/dev_kit_msp430_esp32/1690864844792_1865481403134129726_3747327866930100700_335c86b1398e01b77a20455080b70cb5.jpg',
    ],
    highlight: true,
  },
  {
    id: 'esp32-4channel-ac-relay',
    title: 'Bo Mạch Điều Khiển 4 Kênh Rơ-le Công Nghiệp ESP32 Tích Hợp Nguồn 220V (ESP32 4-Ch Relay Switch)',
    category: 'Industrial Hardware & Automotive',
    period: '04/2023 - 07/2023',
    summary: {
      vi: 'Thiết kế bo mạch điều khiển 4 kênh rơ-le công nghiệp 10A tích hợp nguồn AC-DC Hi-Link 5W 220V trực tiếp trên bo, vi xử lý ESP32-WROOM-32UE, cuộn lọc nhiễu UU9.8, tụ chống sét Varistor 14D471K 470V và giắc nối 2EDG5.08.',
      en: 'Hardware PCB design for ESP32-WROOM-32UE 4-channel 10A industrial relay controller, integrating onboard Hi-Link 5W 220VAC AC-DC power module, UU9.8 EMI filter choke, 14D471K 470V MOV surge protection, and 2EDG5.08 terminal block.',
    },
    description: {
      vi: 'Dự án R&D phần cứng thiết kế bo mạch công tắc điều khiển 4 kênh rơ-le độc lập tải 10A chuyên dụng cho tủ điện công nghiệp & tự động hóa tòa nhà Smart Building Relay_4_Channel. Bo mạch tích hợp module nguồn hạ áp AC-DC Hi-Link 5W cắm thẳng điện lưới 220VAC, hệ thống bảo vệ an toàn nguồn điện gồm cầu chì vuông 392, tụ chống sét MOV Varistor 14D471K 470V, cuộn lọc nhiễu dòng chung UU9.8 10mH, vi xử lý ESP32-WROOM-32UE kết nối Wi-Fi/Bluetooth, 4 rơ-le SRD-05VDC 10A đóng ngắt 4 kênh tải điện 220V riêng biệt và giắc cắm Domino 2EDG5.08 bẻ góc 90 độ tiện lợi.',
      en: 'Industrial 4-channel 10A relay controller hardware R&D project for smart building & industrial cabinet automation (Relay_4_Channel). Integrates onboard Hi-Link 5W 220VAC to 5VDC AC-DC converter module, full AC safety & EMI protection suite including 392 square AC fuse, 14D471K 470V MOV varistor surge absorber, UU9.8 10mH common-mode noise filter choke, ESP32-WROOM-32UE Wi-Fi/BLE MCU, 4x SRD-05VDC 10A relays switching independent 220V mains loads, and 90-degree 2EDG5.08 pluggable screw terminal block.',
    },
    longDescription: {
      vi: 'Phần cứng & An toàn: Bo mạch PCB Proteus 2 lớp thiết kế đường đi dòng điện cao áp 220VAC khoét rãnh cách ly chống phóng điện, nguồn AC-DC Hi-Link 5W kết hợp LDO AMS1117-3.3V, tụ nhôm 470uF + tụ Tantalum 100uF lọc áp, 4 transistor C1815 kích rơ-le kèm diode dập xung M7, nút bấm cơ điều khiển 4 kênh trực tiếp và LED báo trạng thái từng kênh.',
      en: 'Hardware & Safety: 2-layer Proteus PCB layout with routed isolation slots under 220VAC high-voltage traces preventing arc discharge, Hi-Link 5W AC-DC module paired with AMS1117-3.3V LDO, 470uF electrolytic + 100uF Tantalum caps for ripple suppression, 4x C1815 transistor drivers with M7 flyback diodes, 4x manual tactile channel control buttons, and per-channel LED indicators.',
    },
    techStack: ['ESP32-WROOM-32UE Wi-Fi/BLE', 'Hi-Link 5W 220VAC AC-DC Module', '4x 10A SRD-05VDC Power Relays', 'Varistor 14D471K 470V Surge Protection', 'UU9.8 10mH Common Mode Filter', 'Domino 2EDG5.08 10P Connector', 'Proteus PCB Design'],
    features: [
      { vi: 'Tích hợp module nguồn AC-DC Hi-Link 5W cấp nguồn trực tiếp từ điện lưới 220VAC không cần củ sạc rời', en: 'Onboard Hi-Link 5W AC-DC converter powering the MCU & relays directly from 220VAC mains without external adapters' },
      { vi: 'Hệ thống bảo vệ an toàn AC toàn diện: Cầu chì vuông 392, tụ chống sét MOV 14D471K 470V & cuộn lọc nhiễu UU9.8 10mH', en: 'Comprehensive AC safety suite: 392 square AC fuse, 14D471K 470V MOV varistor surge absorber & UU9.8 10mH EMI choke' },
      { vi: '4 kênh Rơ-le SRD-05VDC 10A độc lập đóng ngắt các thiết bị điện 220V trong nhà thông minh & tủ công nghiệp', en: '4 independent SRD-05VDC 10A power relays switching separate 220V appliance loads in smart homes & control panels' },
      { vi: 'Vi xử lý ESP32-WROOM-32UE kết nối Wi-Fi & Bluetooth BLE cho phép điều khiển từ xa qua Web App / MQTT Cloud', en: 'ESP32-WROOM-32UE MCU with Wi-Fi & BLE enabling multi-channel remote control via Web App & MQTT Cloud' },
      { vi: 'Giắc cắm cọc 2EDG5.08 10P bẻ góc 90 độ chắc chắn + 4 nút bấm điều khiển cứng thủ công từng kênh trên bo', en: 'Robust 90-degree 2EDG5.08 10-pin pluggable screw terminal block + 4 manual tactile push buttons for local channel overrides' },
    ],
    image: 'assets/projects/relay_4_channel/1785394436078_1865481403134129726_3747327866930100700_05e3f65ce2ae174e4449d997360f7a98.jpg',
    gallery: [
      'assets/projects/relay_4_channel/1785394436078_1865481403134129726_3747327866930100700_05e3f65ce2ae174e4449d997360f7a98.jpg',
      'assets/projects/relay_4_channel/1785394436112_1865481403134129726_3747327866930100700_1de4cf37912887a28c34cec987f532a2.jpg',
      'assets/projects/relay_4_channel/1785394436129_1865481403134129726_3747327866930100700_8fe8ce3f9256e3cb970ada29d51339f0.jpg',
      'assets/projects/relay_4_channel/1785394436141_1865481403134129726_3747327866930100700_0cca4ec3c300ce668c65163dac70134d.jpg',
      'assets/projects/relay_4_channel/1733199889349_1865481403134129726_3747327866930100700_6d89cabdbaa154475b2f42e172e1884d.jpg',
      'assets/projects/relay_4_channel/1684467776715_1865481403134129726_3747327866930100700_3008bd82b748923995cfd01a1c8ea660.jpg',
      'assets/projects/relay_4_channel/1684467776725_1865481403134129726_3747327866930100700_e2226ab805b0df7f99cf71b96d982fda.jpg',
      'assets/projects/relay_4_channel/1684467776743_1865481403134129726_3747327866930100700_c99c9a041214debb5df5cb7660477b5f.jpg',
    ],
    highlight: true,
  },
  {
    id: 'esp32-sht30-relay-30a',
    title: 'Bo Mạch Quan Trắc Nhiệt Ẩm & Điều Khiển Rơ-le Công Suất 30A (ESP32 SHT30 & 30A Relay)',
    category: 'AgTech & Environment IoT',
    period: '03/2023 - 06/2023',
    summary: {
      vi: 'Thiết kế bo mạch IoT quan trắc nhiệt độ độ ẩm chính xác cao SHT30 tích hợp rơ-le ngắt tải dòng lớn 30A, vi xử lý ESP32 Wi-Fi/Bluetooth, firmware PlatformIO Arduino và giao diện điều khiển Cloud Dashboard.',
      en: 'Hardware design for high-precision SHT30 temperature & humidity IoT telemetry board with 30A heavy-duty relay, ESP32 Wi-Fi/BLE MCU, PlatformIO C++ firmware, and Cloud Dashboard control.',
    },
    description: {
      vi: 'Dự án R&D phần cứng bo mạch giám sát khí hậu & tự động hóa nhà kính nông nghiệp / tủ công nghiệp Sensor_Relay_30A. Thiết bị sử dụng vi xử lý ESP32 kết nối Wi-Fi/Bluetooth, cảm biến nhiệt độ & độ ẩm kỹ thuật số chính xác cao SHT30 qua giao tiếp I2C, tầng rơ-le công suất lớn 30A đóng ngắt phụ tải động lực (quạt tản nhiệt, máy phun sương, thiết bị sấy công nghiệp) và mạch cách ly bảo vệ vi xử lý.',
      en: 'Hardware R&D project for agricultural greenhouse climate monitoring & industrial relay automation (Sensor_Relay_30A). Powered by ESP32 MCU with Wi-Fi/Bluetooth, high-precision digital SHT30 temperature & humidity sensor via I2C, heavy-duty 30A power relay switching inductive loads (exhaust fans, misting pumps, industrial heaters), and opto-isolated MCU protection.',
    },
    longDescription: {
      vi: 'Phần cứng & Firmware: Bo mạch PCB Proteus / CAD 2 lớp đi dây tải dòng lớn 30A chịu nhiệt, nguồn hạ áp công nghiệp cách ly, cảm biến SHT30 chống ẩm ướt môi trường nông nghiệp, vi xử lý ESP32 chạy firmware C++ PlatformIO điều khiển thuật toán duy trì ngưỡng nhiệt ẩm hysteresis thông minh và gửi dữ liệu telemetry trực tiếp lên máy chủ Web Cloud.',
      en: 'Hardware & Firmware: 2-layer PCB designed for 30A high-current thermal dissipation, isolated industrial power supply, SHT30 sensor with moisture-resistant enclosure, ESP32 running PlatformIO C++ firmware with smart hysteresis climate control algorithms and direct Web Cloud telemetry streaming.',
    },
    techStack: ['ESP32 Wi-Fi & Bluetooth', 'SHT30 Temp & Humidity Sensor', '30A Heavy Duty Load Relay', 'PlatformIO C++ Firmware', 'Proteus PCB Design', 'AgTech Smart Greenhouse', 'Cloud Telemetry'],
    features: [
      { vi: 'Cảm biến kỹ thuật số SHT30 chính xác cao quan trắc nhiệt độ & độ ẩm môi trường nhà kính / kho lạnh', en: 'High-precision digital SHT30 sensor for continuous greenhouse / cold storage temperature & humidity tracking' },
      { vi: 'Rơ-le công suất nặng 30A đóng ngắt trực tiếp thiết bị phụ tải động lực lớn (quạt hút công nghiệp, máy nén, bơm sương)', en: 'Heavy-duty 30A load relay directly switching high-power equipment (exhaust fans, compressors, mist pumps)' },
      { vi: 'Vi xử lý ESP32 kết nối không dây Wi-Fi & Bluetooth truyền dữ liệu lên máy chủ Web Dashboard thời gian thực', en: 'ESP32 MCU with wireless Wi-Fi & Bluetooth streaming real-time climate data to Web Dashboard' },
      { vi: 'Firmware C++ PlatformIO tích hợp thuật toán trễ Hysteresis tự động kích hoạt thiết bị khi vượt ngưỡng cài đặt', en: 'PlatformIO C++ firmware featuring smart Hysteresis algorithms for automatic relay triggering on threshold exceedance' },
      { vi: 'Mạch nguồn điện cách ly & cách ly tín hiệu điều khiển chống sụt áp và nhiễu sóng khi rơ-le 30A đóng ngắt', en: 'Isolated power supply & signal opto-isolation preventing voltage sags & EMI noise during 30A relay switching' },
    ],
    image: 'assets/projects/sensor_relay_30a/1785392461191_1865481403134129726_3747327866930100700_9731bd5061a15ea36636057cb6ecad76.jpg',
    gallery: [
      'assets/projects/sensor_relay_30a/1785392461191_1865481403134129726_3747327866930100700_9731bd5061a15ea36636057cb6ecad76.jpg',
      'assets/projects/sensor_relay_30a/1785392461319_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/sensor_relay_30a/1785392461205_1865481403134129726_3747327866930100700_178e511072d9c4ea0b5564784ce48fe1.jpg',
      'assets/projects/sensor_relay_30a/1785392461239_1865481403134129726_3747327866930100700_242bdf36e5798b98021c1f1cf2e7da52.jpg',
      'assets/projects/sensor_relay_30a/1785392461270_1865481403134129726_3747327866930100700_887587dcceeb14d6654410828757ad83.jpg',
      'assets/projects/sensor_relay_30a/1785392461284_1865481403134129726_3747327866930100700_f75f604241e72063b285dd1f7f9559c3.jpg',
      'assets/projects/sensor_relay_30a/1684467788599_1865481403134129726_3747327866930100700_c2c9ba76a665249753390892f0d66696.jpg',
      'assets/projects/sensor_relay_30a/1684467788610_1865481403134129726_3747327866930100700_6e6811cebd1f6fe6f4070e27e7093c0d.jpg',
    ],
    highlight: true,
  },
  {
    id: 'beeline-moto-v1-nav',
    title: 'Thiết Bị Dẫn Đường & Đồng Hồ Thông Minh Xe Máy Beeline Moto V1 (Smart Navigation Display)',
    category: 'Edge AI & Smart Device',
    period: '01/2024 - 04/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch đồng hồ dẫn đường thông minh xe máy Beeline Moto V1, vi xử lý Nordic nRF52840 (BLE 5.4), cảm biến chuyển động & la bàn 9 trục BNO086, cảm biến ánh sáng BH1750, IC bật nguồn MAX16054 và cổng USB-C IP67 chống nước.',
      en: 'Altium PCB design for Beeline Moto V1 smart motorcycle navigation device, featuring Nordic nRF52840 BLE 5.4 SoC, BNO086 9-axis motion fusion IMU, BH1750 ambient light sensor, MAX16054 power switch, and IP67 waterproof Type-C USB.',
    },
    description: {
      vi: 'Dự án R&D phần cứng thiết kế bo mạch đồng hồ dẫn đường Turn-by-Turn thông minh chuyên dụng gắn ghi-đông xe máy Beeline Moto V1. Thiết bị sử dụng vi xử lý không dây Nordic nRF52840 (Bluetooth 5.4 BLE), cảm biến 9 trục BNO086 (Gia tốc + Con quay hồi chuyển + La bàn từ trường 3D tích hợp thuật toán Sensor Fusion), cảm biến ánh sáng BH1750 tự động điều chỉnh độ sáng màn hình dưới ánh nắng mặt trời, chip mở nguồn nút bấm MAX16054, mạch nâng áp TPS61023 và cổng USB Type-C IP67 chống nước chống bụi tuyệt đối.',
      en: 'Hardware R&D project designing Beeline Moto V1 smart turn-by-turn motorcycle navigation display mounted on handlebars. Powered by Nordic nRF52840 Bluetooth 5.4 BLE SoC, BNO086 9-axis sensor fusion IMU (3D Accelerometer, Gyroscope & Magnetometer for compass heading & lean angle), ROHM BH1750 ambient light sensor for automatic outdoor screen brightness, MAX16054 push-button power switch controller, TPS61023 boost converter, and IP67 waterproof Type-C USB connector.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB Altium Designer siêu nhỏ gọn lắp vừa vỏ tròn đồng hồ xe máy, đi dây anten chip 2.4GHz 50Ω tối ưu kết nối Bluetooth với smartphone. Tích hợp IC quản lý sạc pin Li-Po LTC4054, bộ LDO AP2112K-3.3V, cổng FPC 24-pin nối màn hình tròn màu hiển thị chỉ hướng mũi tên và phím bấm vật lý ALPS SKRPABE010 thao tác dễ dàng khi đeo găng tay lái xe.',
      en: 'Hardware: Ultra-compact Altium 2-layer PCB custom-contoured for circular motorcycle handlebar enclosures, 50Ω 2.4GHz ceramic antenna for solid Bluetooth smartphone pairing. Features LTC4054 Li-Po battery charger, AP2112K-3.3V LDO, 24-pin FPC display connector driving color circular arrow display, and ALPS SKRPABE010 tactile buttons operable with heavy motorcycle riding gloves.',
    },
    techStack: ['Nordic nRF52840 (BLE 5.4 SoC)', 'Bosch BNO086 9-Axis IMU Sensor Fusion', 'BH1750 Ambient Light Sensor', 'MAX16054 Push-Button Switch', 'IP67 Waterproof Type-C USB', 'TPS61023 Boost Regulator', 'Altium Designer'],
    features: [
      { vi: 'Vi xử lý không dây Nordic nRF52840 Bluetooth 5.4 BLE đồng bộ chỉ đường Turn-by-Turn liên tục từ Smartphone', en: 'Nordic nRF52840 Bluetooth 5.4 BLE SoC syncing real-time Turn-by-Turn navigation arrows from Smartphone App' },
      { vi: 'Cảm biến 9 trục BNO086 (Sensor Fusion IMU + La bàn từ trường 3D) xác định chính xác hướng xe & góc nghiêng ôm khúc cua', en: 'BNO086 9-axis sensor fusion IMU (3D compass & gyro) calculating precise heading direction & cornering lean angles' },
      { vi: 'Cảm biến ánh sáng BH1750 tự động đo cường độ nắng môi trường để tự động nâng độ sáng màn hình hiển thị sắc nét', en: 'ROHM BH1750 ambient light sensor automatically adjusting screen backlight intensity under direct outdoor sunlight' },
      { vi: 'Chuẩn kết nối cổng USB Type-C IP67 chống nước & chống bụi tuyệt đối hoạt động bền bỉ dưới trời mưa lớn', en: 'IP67 waterproof & dustproof Type-C USB connector ensuring robust operation in heavy rain & harsh weather' },
      { vi: 'Mạch quản lý nguồn thông minh với nút bấm mở/tắt nguồn tức thì MAX16054 và nâng áp hiệu suất cao TPS61023', en: 'Smart power management featuring MAX16054 push-button soft power switch & TPS61023 high-efficiency boost regulator' },
    ],
    image: 'assets/projects/beeline_moto/1776274115447_1865481403134129726_g3399971346864295154_bc4c635a40d4d38dafc89f9775bad60f.jpg',
    gallery: [
      'assets/projects/beeline_moto/1776274115447_1865481403134129726_g3399971346864295154_bc4c635a40d4d38dafc89f9775bad60f.jpg',
      'assets/projects/beeline_moto/1784902892054_9025481782326555037_g3399971346864295154.mp4',
      'assets/projects/beeline_moto/1776274116535_1865481403134129726_g3399971346864295154_8a35c25aa0632655d3aab301c8759a67.jpg',
      'assets/projects/beeline_moto/1779794466137_1645655910180064267_1645655910180064267_8d339e01f75227ba6f17dd2aa18c3aea.jpg',
      'assets/projects/beeline_moto/1781504160006_9025481782326555037_9025481782326555037_eea9dc5bd11582ef9d2b2f67c40025c3.jpg',
      'assets/projects/beeline_moto/1781504513736_9025481782326555037_9025481782326555037_d1f4c99a31f5241502218ddcd132ae33.jpg',
      'assets/projects/beeline_moto/1782076715187_9025481782326555037_9025481782326555037_ef72336f624f0cc2d750a1e503947b13.jpg',
      'assets/projects/beeline_moto/1776274115118_1865481403134129726_g3399971346864295154_329966e1eb410483fe33f35bd539252a.jpg',
      'assets/projects/beeline_moto/1776274115935_1865481403134129726_g3399971346864295154_e408a986a905185658f94bf312d6978b.jpg',
    ],
    highlight: true,
  },
  {
    id: 'diy-drone-remote-tx-rx',
    title: 'Bộ Điều Khiển Tay Cầm Tay & Bo Thu Tín Hiệu Máy Bay Drone DIY (2.4GHz TX & RX System)',
    category: 'Robotics & UAV',
    period: '09/2023 - 12/2023',
    summary: {
      vi: 'Thiết kế Altium Designer trọn bộ phần cứng tay cầm điều khiển Drone DIY (TX) và Mạch thu tín hiệu trên máy bay (RX): Module 2.4GHz NRF24L01+, vi xử lý ATmega328P, Cần gạt Gimbal 2 trục, màn hình OLED 0.96", pin 18650 tích hợp sạc Type-C TP4056.',
      en: 'Altium PCB design for complete DIY Drone Remote Control Transmitter (TX) & Receiver (RX) hardware system: 2.4GHz NRF24L01+ RF module, ATmega328P MCU, dual 2-axis Gimbal joysticks, 0.96" OLED HUD, built-in 18650 Li-ion battery & TP4056 Type-C charger.',
    },
    description: {
      vi: 'Dự án R&D phần cứng tự thiết kế hệ thống truyền nhận tín hiệu điều khiển bay không dây 2.4GHz hai chiều cho máy bay drone & mô hình bay DIY. Giải pháp gồm 2 bo mạch: Tay cầm điều khiển Remote Control TX (Cần gạt Joystick analog 4 kênh, màn hình OLED 0.96 inch hiển thị Telemetry/Pin, công tắc chuyển chế độ bay, vi xử lý ATmega328P, khay pin 18650 sạc Type-C TP4056 + nguồn Boost PAM2401) và Bo thu sóng RX lắp trên máy bay (Giải mã NRF24L01+ xuất chuẩn PPM/PWM/SBUS điều khiển ESC & Servo).',
      en: 'Hardware R&D project designing 2.4GHz low-latency wireless remote control ecosystem for DIY drones & RC aircraft. Solution includes 2 custom PCBs: Handheld Remote Control Transmitter (TX) featuring dual 2-axis precision Gimbal joysticks, 0.96" OLED HUD displaying real-time telemetry/battery voltage, flight mode toggle switches, ATmega328P MCU, integrated 18650 battery with TP4056 Type-C charger + PAM2401 boost converter; and On-Board Receiver (RX) decoding 2.4GHz NRF24L01+ packets into PPM/PWM/SBUS signals for ESCs & Servos.',
    },
    longDescription: {
      vi: 'Phần cứng: Bộ 2 bo mạch PCB Altium Designer 2 lớp đi dây cao tốc chống nhiễu RF. Tay cầm TX tích hợp 2 cụm Joystick 4 trục độ chính xác cao, màn hình OLED I2C 128x64, module RF 2.4GHz NRF24L01+ Anten ngoài gia cường công suất, chip nạp USB-C CH340C, đế pin 18650 âm vào thân tay cầm và bộ nâng áp PAM2401 5V + LDO AP2112K 3.3V. Mạch RX nhỏ gọn lắp trên drone giải mã tín hiệu điều khiển trực tiếp cho mạch điều khiển bay Flight Controller.',
      en: 'Hardware: Dual 2-layer Altium PCB system optimized for 2.4GHz RF noise rejection. TX Handheld Remote integrates dual 4-axis high-precision Gimbal joystick assemblies, 128x64 I2C OLED HUD, 2.4GHz NRF24L01+ RF module with external high-gain antenna, CH340C USB-C programming interface, built-in 18650 battery holder, PAM2401 5V Boost + AP2112K 3.3V LDO. Compact RX board mounts on drone outputting direct flight commands to Flight Controllers.',
    },
    techStack: ['NRF24L01+ 2.4GHz RF Transceiver', 'ATmega328P Microcontroller', 'Dual 2-Axis Gimbal Joysticks', 'OLED 0.96" Telemetry HUD', '18650 Li-Ion Battery System', 'TP4056 Type-C Charger', 'PAM2401 Boost & AP2112K LDO', 'Altium Designer'],
    features: [
      { vi: 'Giải pháp phần cứng độc lập toàn trình: Tay cầm TX phát lệnh điều khiển & Bo mạch RX thu sóng giải mã trên Drone', en: 'Independent end-to-end hardware system: TX Handheld Remote Controller & On-board RX Receiver Board' },
      { vi: 'Sử dụng module RF 2.4GHz NRF24L01+ độ trễ siêu thấp (<5ms), chống nhiễu nhảy tần và tầm xa ổn định', en: 'Ultra-low latency (<5ms) 2.4GHz NRF24L01+ RF module with frequency-hopping noise immunity' },
      { vi: 'Bộ cần gạt Joystick Gimbal 4 kênh analog chính xác cao + Màn hình OLED 0.96 inch hiển thị điện áp pin & trạng thái kênh', en: 'Dual 2-axis precision Gimbal joysticks + 0.96" OLED HUD displaying real-time battery telemetry & channel values' },
      { vi: 'Tích hợp khay Pin 18650 ngay trong tay cầm + Mạch sạc nhanh Type-C TP4056 & Nguồn nâng áp PAM2401 5V', en: 'Embedded 18650 battery holder in remote chassis + TP4056 Type-C fast charger & PAM2401 5V Boost converter' },
      { vi: 'Mạch thu RX xuất chuẩn tín hiệu PWM / PPM / SBUS truyền trực tiếp vào Mạch điều khiển bay Flight Controller', en: 'Compact RX Receiver board generating PPM / PWM / SBUS control signals directly to Flight Controllers' },
    ],
    image: 'assets/projects/drone_tx_rx/z6537260853136_b9be71f2c76457ffbcdc75155e3e0390.jpg',
    gallery: [
      'assets/projects/drone_tx_rx/z6537260853136_b9be71f2c76457ffbcdc75155e3e0390.jpg',
      'assets/projects/drone_tx_rx/6537258386579.mp4',
      'assets/projects/drone_tx_rx/z6537260904444_cab7b736b495f070c44bc519c5e6b9d6.jpg',
      'assets/projects/drone_tx_rx/z6537258300422_19f4eb1978a27a06d95f414b2b27cdc8.jpg',
      'assets/projects/drone_tx_rx/z6537258327342_ab195ba8197f4aa57eb98b3c264993b2.jpg',
      'assets/projects/drone_tx_rx/z6537260247332_610f6a883b3aa825b4be8a06617d1c10.jpg',
      'assets/projects/drone_tx_rx/1.jpg',
      'assets/projects/drone_tx_rx/4.jpg',
      'assets/projects/drone_tx_rx/5.jpg',
    ],
    highlight: true,
  },
  {
    id: 'agri-drone-gnss-dock',
    title: 'Bo Mạch Đệm & Dock Đọc Mạch Định Vị RTK GNSS Máy Bay Nông Nghiệp (Agri-Drone GNSS Dock)',
    category: 'Robotics & UAV',
    period: '06/2024 - 07/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch đệm đọc dữ liệu định vị RTK GNSS centimet cho máy bay nông nghiệp, tương thích module Unicore UM982, vi xử lý ESP32-WROVER-E (8MB PSRAM), chip nạp kép CH340C, Jack XT30UPB và giắc cắm JST GHS.',
      en: 'Altium PCB design for Agri-Drone centimeter-level RTK GNSS reader dock, featuring Unicore UM982 RTK module, ESP32-WROVER-E (8MB PSRAM), dual CH340C USB bridges, XT30UPB connector, and JST GHS headers.',
    },
    description: {
      vi: 'Dự án R&D phần cứng thiết kế bo mạch đệm kết nối & dock đọc dữ liệu định vị vệ tinh chính xác cao centimet (RTK GNSS Reader Dock) chuyên dụng cho máy bay phun thuốc nông nghiệp (Agri-Drone). Bo mạch tích hợp module định vị định hướng 2 anten Unicore UM982, vi xử lý trung tâm ESP32-WROVER-E đọc và phát dữ liệu NMEA/UBX qua Wi-Fi/Bluetooth, chip nạp UART kép CH340C qua cổng USB-C 16P, Jack nguồn mạ vàng XT30UPB chịu tải 12V LiPo và giắc nối JST GHS giao tiếp Flight Controller.',
      en: 'Centimeter-level RTK GNSS reader dock hardware R&D project for agricultural spraying drones (Agri-Drone). Integrates Unicore UM982 all-constellation dual-antenna RTK module, ESP32-WROVER-E MCU broadcasting NMEA/UBX telemetry over Wi-Fi/BLE, dual CH340C USB-to-UART bridges over USB-C 16P, gold-plated XT30UPB 12V LiPo battery power connector, and JST GHS flight controller interface.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB Altium Designer 2 lớp đi dây cao tốc chống nhiễu anten RF cho module RTK GNSS Unicore UM982, vi xử lý ESP32-WROVER-E 8MB PSRAM xử lý dữ liệu vệ tinh đa tần số, hệ thống chip USB UART kép 1CH340C & 2CH340C ghi log trực tiếp, nguồn DCDC công nghiệp LM2596 hạ áp từ ắc quy/pin LiPo drone 12V, giắc cắm JST GHS 1.25mm chống rung và đầu Jack nguồn Amass XT30UPB.',
      en: 'Hardware: Altium 2-layer PCB designed for Unicore UM982 dual-antenna RTK GNSS module, ESP32-WROVER-E with 8MB PSRAM processing multi-frequency satellite streams, dual 1CH340C & 2CH340C USB UART bridges for concurrent raw carrier-phase logging, LM2596 DCDC buck converter stepping down 12V LiPo battery power, vibration-proof JST GHS 1.25mm headers, and Amass XT30UPB power connector.',
    },
    techStack: ['Unicore UM982 Dual-Antenna RTK', 'ESP32-WROVER-E (8MB PSRAM)', 'Dual CH340C USB Bridges', 'Agri-Drone Telematics', 'LM2596 Industrial DCDC', 'XT30UPB Power Connector', 'JST GHS Aviation Header', 'Altium Designer'],
    features: [
      { vi: 'Tương thích module RTK GNSS 2 anten Unicore UM982 định vị chính xác centimet & xác định hướng bay cho Drone nông nghiệp', en: 'Interfacing Unicore UM982 dual-antenna RTK GNSS module for centimeter-level positioning & flight heading' },
      { vi: 'Vi xử lý ESP32-WROVER-E 8MB PSRAM truyền stream tọa độ NMEA / UBX tốc độ cao qua Wi-Fi & Bluetooth', en: 'ESP32-WROVER-E MCU with 8MB PSRAM streaming NMEA/UBX satellite packets over Wi-Fi & Bluetooth' },
      { vi: 'Hệ thống chip nạp UART kép 1CH340C & 2CH340C cho phép vừa ghi log vệ tinh vừa debug firmware qua USB-C', en: 'Dual 1CH340C & 2CH340C USB bridges enabling simultaneous raw satellite logging & firmware AT debug' },
      { vi: 'Đầu Jack nguồn mạ vàng Amass XT30UPB chịu dòng lớn từ Pin LiPo 12V của máy bay nông nghiệp', en: 'Amass XT30UPB gold-plated power connector handling heavy current bursts from 12V drone LiPo batteries' },
      { vi: 'Giắc cắm chuẩn hàng không JST GHS 1.25mm chống sút chốt khi máy bay bay trong điều kiện rung lắc mạnh', en: 'Vibration-proof JST GHS 1.25mm aviation locking headers interfacing Flight Controller CAN/UART bus' },
    ],
    image: 'assets/projects/drone_gnss/top.png',
    gallery: [
      'assets/projects/drone_gnss/top.png',
      'assets/projects/drone_gnss/top1.png',
      'assets/projects/drone_gnss/bottom.png',
    ],
    highlight: true,
  },
  {
    id: 'lora-gateway-node-ecosystem',
    title: 'Hệ Thống Mạng Cảm Biến Không Dây LoRa Tầm Xa (LoRa Master Gateway & Sensor End-Node)',
    category: 'AgTech & Environment IoT',
    period: '08/2023 - 11/2023',
    summary: {
      vi: 'Thiết kế Altium Designer trọn bộ giải pháp 2 bo mạch LoRa: Master Gateway (ESP32 Wi-Fi/LoRa, CH340C, nguồn DCDC PAM2401) và Sensor End-Node (ATmega328P siêu tiết kiệm pin, đế pin 18650, sạc TP4056 Type-C).',
      en: 'Altium PCB design for complete 2-board LoRa system: Master Gateway (ESP32 Wi-Fi/LoRa, CH340C, PAM2401 DCDC) and low-power Sensor End-Node (ATmega328P, on-board 18650 battery, TP4056 Type-C).',
    },
    description: {
      vi: 'Dự án R&D thiết kế giải pháp phần cứng trọn bộ cho hệ thống thu thập dữ liệu nông nghiệp & môi trường từ xa không dây qua chuẩn truyền thông LoRa Ra-02 (SX1278 433MHz). Hệ thống bao gồm 2 bo mạch phần cứng độc lập: Bo mạch Master Gateway (ESP32 SMD + LoRa Ra-02 + Nguồn Boost PAM2401 + Nối mạng Wi-Fi/MQTT) và Bo mạch Sensor End-Node (ATmega328P + Đế pin Li-ion 18650 sạc Type-C TP4056 + các cổng cắm cảm biến môi trường).',
      en: 'Complete hardware design R&D project for wireless AgTech & environmental telemetry system via LoRa Ra-02 (SX1278 433MHz). Comprises 2 independent hardware boards: Master Gateway PCB (ESP32 SMD + LoRa Ra-02 + PAM2401 Boost + Wi-Fi/MQTT Cloud) and Sensor End-Node PCB (ATmega328P + 18650 Li-ion battery holder + TP4056 Type-C charger + sensor headers).',
    },
    longDescription: {
      vi: 'Phần cứng: Bộ 2 bo mạch PCB Altium Designer 2 lớp tối ưu hóa đường truyền anten RF SMA 50Ω. Gateway sử dụng ESP32 làm trung tâm điều phối dữ liệu LoRa lên Cloud qua Wi-Fi/MQTT. Node sử dụng chip ATmega328P TQFP-32 lập trình chế độ ngủ sâu (Deep Sleep) cực thấp, tích hợp trực tiếp khay pin 18650, mạch sạc năng lượng/Type-C TP4056, bộ quản lý nguồn AP2112K 3.3V cách ly và dải domino KF762 chịu lực.',
      en: 'Hardware: Dual 2-layer Altium PCB system optimized for 50Ω SMA RF antenna traces. Master Gateway utilizes ESP32 relaying LoRa packet data to Cloud via Wi-Fi/MQTT. End-Node utilizes TQFP-32 ATmega328P with deep-sleep power management, on-board 18650 battery holder, TP4056 solar/Type-C charger, isolated AP2112K 3.3V LDO, and KF762 screw terminals.',
    },
    techStack: ['LoRa Ra-02 (SX1278 433MHz)', 'ESP32 Wi-Fi / Bluetooth', 'ATmega328P Low-Power MCU', 'TP4056 Type-C Battery Charger', '18650 Li-Ion Battery Holder', 'PAM2401 Boost & AP2112K LDO', 'Domino KF762', 'Altium Designer'],
    features: [
      { vi: 'Giải pháp phần cứng toàn trình gồm 2 bo mạch: Bo mạch Master Gateway tập trung & Bo mạch Trạm cảm biến End-Node', en: 'End-to-end 2-board hardware solution: Centralized Master Gateway PCB & Remote Sensor End-Node Station PCB' },
      { vi: 'Truyền dữ liệu cảm biến tầm xa vài km không dây qua chuẩn LoRa Ra-02 (SX1278 433MHz) độ đâm xuyên cao', en: 'Multi-kilometer long-range wireless sensor data telemetry via SX1278 433MHz LoRa Ra-02 module' },
      { vi: 'Trạm Node tích hợp sẵn khay Pin 18650 & Mạch sạc Type-C TP4056 hoạt động liên tục bằng pin sạc / năng lượng mặt trời', en: 'End-Node integrating built-in 18650 Li-ion battery holder & TP4056 Type-C charger for off-grid solar operation' },
      { vi: 'Vi xử lý ATmega328P tối ưu thuật toán Deep Sleep tiết kiệm pin tuyệt đối cho các trạm quan trắc nông nghiệp', en: 'ATmega328P MCU running ultra-low power Deep Sleep algorithms for multi-month off-grid field deployment' },
      { vi: 'Bo mạch Gateway ESP32 đẩy dữ liệu cảm biến thu thập từ các Node lên máy chủ Cloud Web Dashboard qua MQTT / HTTP', en: 'ESP32 Gateway bridging field LoRa sensor packets to Cloud Web Dashboard over Wi-Fi, MQTT & HTTP APIs' },
    ],
    image: 'assets/projects/lv_tam/gateway_top.png',
    gallery: [
      'assets/projects/lv_tam/gateway_top.png',
      'assets/projects/lv_tam/node_top.png',
      'assets/projects/lv_tam/node_top_3D.png',
      'assets/projects/lv_tam/node_bottom.png',
      'assets/projects/lv_tam/gateway_top1.png',
      'assets/projects/lv_tam/node_top1.png',
    ],
    highlight: true,
  },
  {
    id: 'auto-relay-v3',
    title: 'Bo Mạch Điều Khiển Rơ-le Ô Tô Tải Lớn 30A Cách Ly Opto (Auto Relay V3 Controller)',
    category: 'Industrial Hardware & Automotive',
    period: '05/2024 - 07/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch điều khiển đóng ngắt Rơ-le ô tô công suất lớn 30A, vi xử lý 32-bit RISC-V CH32X033F8P6 (TSSOP20), transistor MOSFET công suất TO-252, cách ly quang Optocoupler, cầu chì ô tô FUSE_3522 và Jack cắm ô tô 8P chuyên dụng.',
      en: 'Altium PCB design for 30A heavy-duty automotive relay controller, featuring 32-bit RISC-V CH32X033F8P6 MCU (TSSOP20), TO-252 power MOSFET drivers, Optocoupler isolation, FUSE_3522 blade fuse holder, and 8P automotive harness connector.',
    },
    description: {
      vi: 'Dự án R&D phần cứng bo mạch điều khiển đóng ngắt phụ tải động lực dòng lớn 30A chuyên dụng cho ô tô & thiết bị công nghiệp Auto Relay V3. Bo mạch sử dụng vi xử lý 32-bit RISC-V CH32X033F8P6 (TSSOP20) điều khiển thuật toán thông minh, tầng công suất MOSFET TO-252 kết hợp Rơ-le dòng 30A, cách ly quang Optocoupler chống nhiễu xung điện từ, khay cầu chì lưỡi ô tô chống quá dòng và giắc cắm dây ô tô 8-pin chắc chắn.',
      en: 'Heavy-duty 30A load switching hardware R&D project for automotive & industrial Auto Relay V3. Integrates 32-bit RISC-V CH32X033F8P6 MCU (TSSOP20) running smart control algorithms, TO-252 power MOSFET drivers, dual 30A power relays, PC817 optocoupler noise isolation, automotive blade fuse overcurrent protection, and 8-pin vehicle harness connector.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB Altium Designer 2 lớp đi dây dòng tải lớn 30A chịu nhiệt cao, vi xử lý 32-bit RISC-V CH32X033F8P6, hạ áp DCDC công nghiệp LM2596 chịu điện áp ắc quy 12V/24V, bộ rơ-le công suất 30A 4P, mạch nhận diện chìa khóa xe ACC, cách ly tín hiệu điều khiển bằng Optocoupler, cầu chì ô tô chân cắm FUSE_3522 và giắc cắm xe 8-pin mạ đồng chịu rung lắc.',
      en: 'Hardware: Altium 2-layer PCB designed for high-current 30A thermal dissipation, 32-bit RISC-V CH32X033F8P6 MCU, LM2596 industrial DCDC buck converter accepting 12V/24V vehicle battery inputs, dual 30A 4P heavy-duty relays, ACC ignition state sensing, Optocoupler isolated control signals, FUSE_3522 automotive blade fuse holder, and vibration-resistant 8-pin vehicle connector.',
    },
    techStack: ['CH32X033F8P6 (32-bit RISC-V MCU)', '30A Heavy Duty Relay', 'LM2596 Industrial DCDC', 'MOSFET Power Driver TO-252', 'Optocoupler PC817 Isolation', 'Automotive Blade Fuse 3522', 'ACC Ignition Sensing', 'Altium Designer'],
    features: [
      { vi: 'Tích hợp bộ Rơ-le công suất lớn 30A chịu dòng khởi động và đóng ngắt tải nặng (đèn pha, quạt tản nhiệt, bơm nhiên liệu)', en: 'Dual 30A heavy-duty relays handling high inrush currents for automotive headlights, cooling fans & fuel pumps' },
      { vi: 'Tầng điều khiển cách ly quang Optocoupler chống nhiễu xung điện cao áp môi trường động cơ ô tô', en: 'Optocoupler isolated control stage mitigating high-voltage inductive spikes in vehicle engine environments' },
      { vi: 'Mạch nguồn DCDC LM2596 chịu dải điện áp ắc quy rộng 12V-24V cấp nguồn ổn định +5V cho vi xử lý', en: 'LM2596 DCDC buck converter accepting wide 12V-24V vehicle battery range delivering stable +5V MCU power' },
      { vi: 'Khay cầu chì lưỡi ô tô FUSE_3522 bảo vệ ngắt mạch tức thời khi xảy ra chập cháy/quá tải dòng', en: 'FUSE_3522 automotive blade fuse holder providing instant short-circuit & overcurrent protection' },
      { vi: 'Giắc cắm ô tô 8-Pin Jack Auto & cọc 6.3mm mạ đồng chịu rung lắc và va đập môi trường ô tô', en: 'Vibration-resistant 8-pin Jack Auto harness & 6.3mm heavy-duty copper terminals designed for harsh vehicle use' },
    ],
    image: 'assets/projects/relay_auto/top.png',
    gallery: [
      'assets/projects/relay_auto/top.png',
      'assets/projects/relay_auto/1785392643494_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/relay_auto/1785392643533_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/relay_auto/1785392643546_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/relay_auto/bottom.png',
      'assets/projects/relay_auto/1785392643571_1865481403134129726_3747327866930100700_f5bee4836607484a9e7534c33077339f.jpg',
      'assets/projects/relay_auto/1785392643458_1865481403134129726_3747327866930100700_fdd3db1e339ab4dc800d01398cd3f816.jpg',
      'assets/projects/relay_auto/1785392643478_1865481403134129726_3747327866930100700_9433f4c02019d81e17305fbf0f0074de.jpg',
      'assets/projects/relay_auto/1785392643577_1865481403134129726_3747327866930100700_17c74a6501051f2bea705940c21b9532.jpg',
      'assets/projects/relay_auto/1785392643584_1865481403134129726_3747327866930100700_f0a537c3d98edefed61bb81ef513cf92.jpg',
      'assets/projects/relay_auto/1785392643487_1865481403134129726_3747327866930100700_a60b2096575916ca5bf304f0bd9f463d.jpg',
    ],
    highlight: true,
  },
  {
    id: 'ec800m-sim-ver2',
    title: 'Bo Mạch 4G LTE Quectel EC800M Tích Hợp Đổi SIM Kép & Jack Âm Thanh (SIM_Ver2 Gateway)',
    category: 'Industrial Hardware & Automotive',
    period: '04/2024 - 05/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch truyền thông 4G LTE Quectel EC800M, công tắc chuyển mạch SIM kép vật lý SW OS102011, nguồn hạ áp công nghiệp LM2596, Jack âm thanh 3.5mm đàm thoại và cọc đấu dây KF-041.',
      en: 'Altium PCB design for Quectel EC800M 4G LTE gateway, featuring physical Dual SIM selector switch, LM2596 industrial DCDC buck power supply, 3.5mm voice audio jack, and KF-041 screw terminal block.',
    },
    description: {
      vi: 'Dự án R&D phần cứng thiết kế bo mạch IoT Gateway 4G LTE Cat 1 công nghiệp sử dụng module Quectel EC800M-CN. Bo mạch tích hợp công tắc gạt vật lý SW OS102011 chuyển đổi tức thời giữa 2 khay SIM kép, mạch nguồn công suất cao LM2596 cấp áp ổn định +4V cho module 4G từ điện áp công nghiệp 12V/24V, Jack âm thanh 3.5mm cho đàm thoại thoại hai chiều SPK/MIC và ngõ đấu dây KF-041 chắc chắn.',
      en: 'Industrial 4G LTE Cat 1 IoT Gateway hardware R&D project featuring Quectel EC800M-CN module. Integrates SW OS102011 physical slide switch for instant Dual SIM toggling, LM2596 high-power DCDC buck converter stepping down 12V/24V to +4V 4G power rail, 3.5mm 2-way voice audio jack (SPK/MIC), and heavy-duty KF-041 terminal block.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB 2 lớp Altium Designer tối ưu hóa đường đi anten SMA 50Ω Edge Launch, nguồn DCDC công nghiệp LM2596 cuộn cảm công suất kết hợp tụ nhôm SMD lọc gợn sóng, công tắc chuyển mạch SIM kép USIM1/USIM2, ngõ USB D+/D- cao tốc, cổng cắm Headset 3.5mm và cọc đấu dây KF-041 bắt vít chống tuột.',
      en: 'Hardware: Altium 2-layer PCB with 50Ω Edge Launch SMA RF antenna trace, LM2596 industrial DCDC buck converter with power inductor + SMD aluminum filter caps, physical Dual SIM toggle switch for USIM1/USIM2 lines, USB D+/D- differential pair, 3.5mm Headset audio jack, and robust KF-041 screw terminal block.',
    },
    techStack: ['Quectel EC800M-CN (4G LTE Cat 1)', 'Dual SIM Switch SW OS102011', 'LM2596 Industrial DCDC', '3.5mm Voice Audio Jack', 'SMA Edge Launch RF 50Ω', 'KF-041 Screw Terminal', 'Altium Designer'],
    features: [
      { vi: 'Tích hợp module 4G LTE Cat 1 EC800M-CN cho kết nối truyền dữ liệu tốc độ cao & đàm thoại voice', en: 'Quectel EC800M-CN 4G LTE Cat 1 module for high-speed cellular data & 2-way voice calls' },
      { vi: 'Công tắc gạt vật lý SW OS102011 chuyển đổi tức thời linh hoạt giữa 2 khay MicroSIM kép', en: 'SW OS102011 physical slide switch for instant manual switching between Dual MicroSIM sockets' },
      { vi: 'Mạch nguồn DCDC hạ áp công nghiệp LM2596 chịu áp rộng 12V-24V cấp áp chuẩn +4V 2A phát sóng', en: 'LM2596 industrial DCDC buck converter accepting wide 12V-24V input providing +4V 2A cellular power' },
      { vi: 'Cổng cắm tai nghe Jack 3.5mm PJ-320D-A tích hợp đường Loa SPK_P/N và Micro MIC_P/N thoại', en: 'Integrated PJ-320D-A 3.5mm Headset audio jack supporting Speaker (SPK_P/N) & Mic (MIC_P/N) lines' },
      { vi: 'Đầu nối anten RF SMA 50Ω Edge Launch mạ vàng + Cọc cắm dây bắt vít KF-041 đấu nguồn điện', en: 'Gold-plated 50Ω Edge Launch SMA RF antenna connector + Heavy-duty KF-041 screw terminal block' },
    ],
    image: 'assets/projects/sim_ver2/1.png',
    gallery: [
      'assets/projects/sim_ver2/1.png',
      'assets/projects/sim_ver2/1785392592760_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/sim_ver2/1785392592783_1865481403134129726_3747327866930100700.mp4',
      'assets/projects/sim_ver2/2.png',
      'assets/projects/sim_ver2/z6200085140569_42fe5243118d62e403f90b1631a3dca1.jpg',
      'assets/projects/sim_ver2/z6200085147887_09c3087874e3e13fef1cad092ebf2692.jpg',
      'assets/projects/sim_ver2/z6200085195700_47fda7761b0a49c31233554ab0c2a48f.jpg',
      'assets/projects/sim_ver2/1785392592733_1865481403134129726_3747327866930100700_3644fb2121c5351387beb3523eb668a9.jpg',
    ],
    highlight: true,
  },
  {
    id: 'esp32-auto-start',
    title: 'Bo Mạch Khởi Động & Giám Sát Máy Tính Tự Động Từ Xa Chuẩn PCIe (ESP32 Auto Start Controller)',
    category: 'Edge AI & Smart Device',
    period: '11/2023 - 01/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch điều khiển tự động bật/tắt máy tính từ xa chuẩn khay cắm PCI Express x1, vi xử lý ESP32 Wi-Fi/Bluetooth, mạch nguồn dự phòng 3.3Vaux, transistor ngắt tải C1815 và cảm biến trạng thái nguồn CHECK/Wakeup.',
      en: 'Altium PCB design for PCIe x1 automatic remote computer power-on controller, featuring ESP32 Wi-Fi/BLE MCU, 3.3Vaux standby power, C1815 switching transistors, and CHECK/Wakeup power state sensing.',
    },
    description: {
      vi: 'Dự án R&D phần cứng bo mạch điều khiển bật/tắt & tự động kích nguồn máy tính từ xa chuẩn khay cắm PCIe x1 (PCI Express slot). Thiết bị sử dụng vi xử lý ESP32 điều khiển qua Wi-Fi/Bluetooth/Web App, mạch đọc trạng thái nguồn dự phòng 3.3Vaux, 3 kênh ngắt tải transistor C1815 điều khiển nút Power / Reset / Wakeup trên mainboard và mạch phát hiện treo máy để tự động khởi động lại (Auto Start / Watchdog).',
      en: 'PCIe x1 slot remote computer power management & auto-restart hardware R&D project. Powered by ESP32 MCU with Wi-Fi/BLE/Web control, 3.3Vaux standby power monitoring, 3-channel C1815 transistor switches for Power/Reset/Wakeup headers, and auto-start system watchdog.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB 2 lớp Altium Designer chuẩn chân cắm chèn trực tiếp khe PCIe x1 motherboard, nguồn LDO AMS1117 3.3V kết hợp nguồn dự phòng 3.3Vaux, tụ Tantalum 100uF lọc nguồn, 3 mạch kích transistor C1815 cách ly điều khiển Power/Reset/Wakeup, cổng nạp nạp Debug UART riêng và phím bấm BOOT/EN.',
      en: 'Hardware: Altium 2-layer PCB designed for direct PCIe x1 slot insertion, AMS1117 3.3V LDO with 3.3Vaux standby power sensing, 100uF Tantalum power filter, 3-channel C1815 transistor switches controlling Power/Reset/Wakeup headers, dedicated UART debug port, and BOOT/EN buttons.',
    },
    techStack: ['ESP32 (Wi-Fi & BLE)', 'PCI Express x1 Slot', '3.3Vaux Standby Power', 'Transistor Driver C1815', 'Tantalum 100uF Power Filter', 'UART Debug Interface', 'Altium Designer'],
    features: [
      { vi: 'Chuẩn thiết kế chân cắm PCIe x1 mạ vàng chèn trực tiếp khe cắm PCI Express trên bo mạch chủ máy tính', en: 'Gold-finger PCIe x1 edge connector designed for direct motherboard PCI Express slot insertion' },
      { vi: 'Vi xử lý trung tâm ESP32 hỗ trợ điều khiển bật/tắt máy tính từ xa qua Wi-Fi, Bluetooth & Web Dashboard', en: 'ESP32 MCU enabling remote computer power control via Wi-Fi, Bluetooth & Web Dashboard' },
      { vi: 'Mạch nguồn kép thông minh: Tự động chuyển đổi giữa nguồn 3.3V chính và nguồn 3.3Vaux standby', en: 'Smart dual power architecture seamlessly switching between main 3.3V and 3.3Vaux standby power' },
      { vi: '3 kênh ngắt tải transistor C1815 điều khiển độc lập nút Nguồn (Power), Reset và kích khởi động Wakeup', en: '3-channel C1815 transistor drivers for independent control of Power, Reset & Wakeup motherboard pins' },
      { vi: 'Tích hợp thuật toán phần cứng Watchdog tự động phát hiện máy bị treo/đóng băng để kích khởi động lại', en: 'Integrated Hardware Watchdog automatically detecting system freeze to trigger auto-restart' },
    ],
    image: 'assets/projects/auto_start/top.png',
    gallery: [
      'assets/projects/auto_start/top.png',
      'assets/projects/auto_start/bottom.png',
    ],
    highlight: true,
  },
  {
    id: 'ec800m-tracking-v2',
    title: 'Thiết Bị Định Vị & Giám Sát Hành Trình Ô Tô / Xe Máy 4G LTE EC800M (Telematics Tracker V2)',
    category: 'Industrial Hardware & Automotive',
    period: '03/2024 - 05/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bộ định vị xe thông minh 4G LTE EC800M-CN tích hợp cảm biến gia tốc 3 trục KXTJ3-1057, bộ lọc sóng GPS SAW Murata, mạch nhận diện khóa điện ACC, rơ-le ngắt nguồn động cơ từ xa và bảo vệ chống tĩnh điện ESD.',
      en: 'Altium PCB design for 4G LTE EC800M-CN vehicle telematics tracker, featuring KXTJ3-1057 3-axis accelerometer, Murata GPS SAW filter, ACC ignition sense circuit, remote relay engine immobilizer, and ESD protection.',
    },
    description: {
      vi: 'Dự án R&D phần cứng thiết bị định vị hành trình xe máy & ô tô chuyên dụng chuẩn Automotive Telematics V2. Mạch tích hợp module 4G LTE Cat 1 Quectel EC800M, chip cảm biến gia tốc KXTJ3-1057 nhận diện va chạm / di chuyển trái phép, mạch phát hiện trạng thái chìa khóa ACC, rơ-le ngắt nguồn / nhiên liệu từ xa, bộ lọc dải tần GPS SAW Murata và 8 diode chống tĩnh điện TVS ESD.',
      en: 'Automotive Telematics V2 vehicle GPS tracker hardware R&D project. Integrates Quectel EC800M 4G LTE Cat 1 module, KXTJ3-1057 3-axis motion accelerometer for crash & motion detection, ACC ignition state sensing, remote fuel/engine cut-off relay, Murata GPS SAW filter, and 8 TVS ESD protection diodes.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB 2 lớp Altium Designer nhỏ gọn lắp đặt ẩn trên ô tô/xe máy, thiết kế nguồn rộng chịu điện áp ắc quy xe, bộ lọc nhiễu dải tần định vị vệ tinh GPS SAW SAFFB1G56, cảm biến gia tốc KXTJ3-1057 giao tiếp I2C, mạch nhận diện ACC, rơ-le đóng ngắt nguồn động cơ HFKH 12V, khay SIM kép eSIM + Nano SIM, chống tĩnh điện ESD0402 trên toàn bộ ngõ vào/ra.',
      en: 'Hardware: Compact Altium 2-layer PCB designed for covert automotive installation, wide vehicle battery input range, Murata SAFFB1G56 GPS SAW filter, KXTJ3-1057 I2C 3-axis accelerometer, ACC ignition sensing circuit, HFKH 12V engine cut-off relay, dual eSIM + Nano SIM sockets, and TVS ESD0402 protection across all I/O.',
    },
    techStack: ['Quectel EC800M-CN (4G LTE Cat 1)', 'GNSS / GPS / Beidou', 'KXTJ3-1057 Accelerometer', 'Murata GPS SAW Filter', 'ACC Ignition Sensing', 'Automotive Engine Relay', 'TVS ESD Protection', 'Altium Designer'],
    features: [
      { vi: 'Tích hợp module 4G LTE Cat 1 EC800M & bộ lọc sóng GPS SAW Murata cho độ chính xác định vị cao', en: 'Quectel EC800M 4G LTE Cat 1 module & Murata GPS SAW filter for high-accuracy location tracking' },
      { vi: 'Cảm biến gia tốc 3 trục KXTJ3-1057 cảnh báo rung lắc, phát hiện va chạm & trộm xe', en: 'KXTJ3-1057 3-axis accelerometer for shock detection, crash sensing & anti-theft motion alerts' },
      { vi: 'Mạch nhận diện khóa điện ACC Ignition & Rơ-le HFKH ngắt nguồn nhiên liệu / động cơ từ xa', en: 'ACC Ignition status sensing circuit & HFKH Automotive relay for remote fuel/engine cut-off' },
      { vi: 'Hệ thống khay SIM kép thông minh: eSIM dán cố định chống đập phá & khay Nano SIM', en: 'Smart Dual SIM system: Tamper-proof MFF2 embedded eSIM + Nano SIM holder' },
      { vi: 'Trang bị 8 diode TVS ESD0402 bảo vệ chống sốc điện tĩnh điện chuẩn điện ô tô', en: 'Equipped with 8 TVS ESD0402 protection diodes for automotive-grade ESD immunity' },
    ],
    image: 'assets/projects/ec800m_tracking/1.png',
    gallery: [
      'assets/projects/ec800m_tracking/1.png',
      'assets/projects/ec800m_tracking/2.png',
    ],
    highlight: true,
  },
  {
    id: 'ec800m-kit-dev',
    title: 'Bo Mạch Phát Triển 4G LTE Cat 1 Siêu Nhỏ Gọn Quectel EC800M & GNSS',
    category: 'Industrial Hardware & Automotive',
    period: '02/2024 - 04/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch 4G LTE Cat 1 Quectel EC800M siêu nhỏ gọn, hạ áp DCDC cuộn cảm CD74R, chip chuyển mức logic TXS0108E, Dual SIM (Nano SIM & Push-Push SIM), anten RF IPEX kép và cổng USB-C.',
      en: 'Altium PCB design for ultra-compact Quectel EC800M 4G LTE Cat 1 dev kit, featuring CD74R DCDC buck converter, TXS0108E level shifter, Dual SIM (Nano & Push-Push SIM), dual IPEX RF antennas, and USB-C.',
    },
    description: {
      vi: 'Dự án thiết kế phần cứng R&D bo mạch phát triển 4G LTE Cat 1 siêu nhỏ gọn sử dụng vi xử lý Quectel EC800M-CN. Bo mạch tối ưu kích thước cho các ứng dụng IoT di động, theo dõi hành trình GNSS/GPS, hạ áp DCDC công suất cao chịu dòng đỉnh 2A, chip dịch mức logic TXS0108E và giao tiếp âm thanh đàm thoại PCM/I2S.',
      en: 'Ultra-compact 4G LTE Cat 1 hardware R&D project utilizing Quectel EC800M-CN module. Optimized compact form factor for mobile IoT & GNSS asset tracking, high-efficiency DCDC buck converter handling 2A peak current, TXS0108E level translator, and PCM/I2S voice audio.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB Altium Designer 2 lớp đi dây tối ưu diện tích siêu nhỏ gọn, hạ nguồn DCDC công suất SOP-8 cuộn cảm CD74R 2.2uH kết hợp tụ Tantalum 100uF lọc nhiễu phát sóng 4G, khay SIM kép Nano SIM & MicroSIM Push-Push, chip dịch mức logic TXS0108E 1.8V sang 3.3V/5V, 2 kênh anten IPEX RF 50Ω (4G Main & GNSS GPS) và cổng USB-C 16P.',
      en: 'Hardware: Altium 2-layer PCB with ultra-compact layout, SOP-8 DCDC buck converter with CD74R 2.2uH inductor + 100uF Tantalum capacitors for 4G RF power filtering, dual Nano SIM & Push-Push SIM sockets, TXS0108E 1.8V to 3.3V/5V level translation, dual 50Ω IPEX RF antenna channels (4G Main & GNSS GPS), and USB-C 16P interface.',
    },
    techStack: ['Quectel EC800M-CN (4G LTE Cat 1)', 'GNSS / GPS / Beidou', 'TXS0108E Level Shifter', 'Dual SIM (Nano & Push-Push)', 'DCDC Buck CD74R 2.2uH', 'USB-C 16P', 'Dual IPEX RF Antenna', 'Altium Designer'],
    features: [
      { vi: 'Tích hợp module 4G LTE Cat 1 Quectel EC800M-CN gói chân LCC siêu nhỏ gọn cho thiết bị IoT di động', en: 'Ultra-compact LCC package Quectel EC800M-CN 4G LTE Cat 1 module for mobile IoT devices' },
      { vi: 'Mạch nguồn DCDC SOP-8 cuộn cảm CD74R 2.2uH & tụ Tantalum 100uF chịu dòng đỉnh 2A phát sóng', en: 'SOP-8 DCDC buck converter with CD74R 2.2uH inductor & 100uF Tantalum caps handling 2A RF bursts' },
      { vi: 'Chip dịch mức logic TXS0108E 8-channel kết nối an toàn vi điều khiển 3.3V/5V & cảm biến', en: 'TXS0108E 8-channel logic level translator for safe 1.8V to 3.3V/5V MCU & sensor interfacing' },
      { vi: 'Hệ thống khay SIM kép Nano SIM & MicroSIM Push-Push Holder linh hoạt chọn mạng di động', en: 'Dual SIM system featuring Nano SIM socket & MicroSIM Push-Push holder for flexible cellular carriers' },
      { vi: 'Kênh anten kép IPEX RF 50Ω (4G Main & GNSS GPS) + Cổng USB-C 16P nạp firmware & lệnh AT', en: 'Dual 50Ω IPEX RF antenna connectors (4G Main & GNSS GPS) + USB-C 16P for power, flashing & AT commands' },
    ],
    image: 'assets/projects/ec800m_kit/1.png',
    gallery: [
      'assets/projects/ec800m_kit/1.png',
      'assets/projects/ec800m_kit/6200085202398.mp4',
      'assets/projects/ec800m_kit/2.png',
      'assets/projects/ec800m_kit/z5318844780214_3c2d2331cfab871e24278f35f946bad4.jpg',
      'assets/projects/ec800m_kit/z5331457799887_eed92375d74518bec8986aad54dd87fb.jpg',
      'assets/projects/ec800m_kit/z5340409393501_076c7c82e9b73580ba1c12c734b90300.jpg',
      'assets/projects/ec800m_kit/z5359866424426_3e81e5cdc366d9157f783edaf978c33a.jpg',
      'assets/projects/ec800m_kit/z5360962553215_ca0ed86fdf3d6e274bbe75cb3a4debd3.jpg',
      'assets/projects/ec800m_kit/z6200085110404_d985d43233cb5e3d7f5b2537db41bc45.jpg',
    ],
    highlight: true,
  },
  {
    id: 'ec200u-kit-dev',
    title: 'Bo Mạch Phát Triển 4G LTE Cat 1 Quectel EC200U & Dual SIM (eSIM / Push-Push SIM)',
    category: 'Industrial Hardware & Automotive',
    period: '01/2024 - 03/2024',
    summary: {
      vi: 'Thiết kế Altium Designer bo mạch phát triển 4G LTE Cat 1 Quectel EC200U, tích hợp Dual SIM (eSIM MFF2 & Khe SIM Push-Push), chip dịch mức TXS0108E, giao tiếp USB-C 16P, anten SMA/IPEX và mạch nguồn chịu dòng đỉnh 2A.',
      en: 'Altium PCB design for Quectel EC200U 4G LTE Cat 1 dev kit, featuring Dual SIM (eSIM MFF2 & Push-Push SIM socket), TXS0108E level shifter, USB-C 16P, SMA/IPEX antenna, and 2A peak power circuit.',
    },
    description: {
      vi: 'Dự án R&D bo mạch phần cứng phát triển 4G LTE Cat 1 hoàn chỉnh sử dụng module Quectel EC200U. Tích hợp vi xử lý 4G truyền dữ liệu tốc độ cao, định vị vệ tinh GNSS/GPS, giao tiếp USB-C cấp nguồn & debug AT command, chip dịch mức điện áp TXS0108E 1.8V-3.3V/5V cho các giao tiếp I2C/UART/ADC công nghiệp.',
      en: 'Complete 4G LTE Cat 1 cellular hardware R&D project utilizing Quectel EC200U module. Integrates high-speed cellular data, GNSS/GPS positioning, USB-C power & AT debug, and TXS0108E 1.8V to 3.3V/5V level translation for industrial I2C/UART/ADC.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB 2 lớp Altium Designer tối ưu hóa dòng tải 2A cho module EC200U, trang bị hệ thống Dual SIM thông minh (eSIM dán MFF2 kết hợp khay SIM Push-Push), chip chuyển đổi mức logic TXS0108E, tụ Tantalum dung lượng cao 100uF chịu dòng đỉnh khi phát sóng 4G, đầu nối anten SMA/IPEX RF 50Ω và cổng nguồn USB-C / Jack DC 5.5mm.',
      en: 'Hardware: Altium 2-layer PCB optimized for 2A peak current EC200U cellular bursts, featuring Dual SIM redundant system (MFF2 embedded eSIM + Push-Push SIM socket), TXS0108E logic level translator, high-capacity 100uF Tantalum capacitors, 50Ω SMA/IPEX RF connectors, and dual USB-C / DC 5.5mm power inputs.',
    },
    techStack: ['Quectel EC200U (4G LTE Cat 1)', 'GNSS / GPS / Beidou', 'Dual SIM (eSIM MFF2 & Push-Push)', 'TXS0108E Level Shifter', 'USB-C 16P', 'SMA / IPEX RF Antenna', 'Tantalum 100uF Power Filter', 'Altium Designer'],
    features: [
      { vi: 'Tích hợp module 4G LTE Cat 1 Quectel EC200U truyền dữ liệu tốc độ cao & định vị GPS/Beidou', en: 'Quectel EC200U 4G LTE Cat 1 module for high-speed cellular & GPS/Beidou positioning' },
      { vi: 'Hệ thống Dual SIM kép linh hoạt: eSIM dán cố định MFF2 & khay MicroSIM Push-Push', en: 'Dual SIM redundancy: MFF2 embedded eSIM chip & MicroSIM Push-Push socket' },
      { vi: 'Chip dịch mức logic TXS0108E 8-channel kết nối an toàn vi điều khiển 3.3V / 5V', en: 'TXS0108E 8-channel level shifter for safe 1.8V to 3.3V/5V MCU interfacing' },
      { vi: 'Mạch nguồn tối ưu tụ Tantalum 100uF 16V chống sụt áp khi phát sóng dòng đỉnh 2A', en: 'Power network with 100uF 16V Tantalum caps eliminating voltage dips during 2A 4G RF bursts' },
      { vi: 'Cổng giao tiếp USB-C 16P & Jack DC 5.5mm hỗ trợ sạc nguồn, nạp firmware và debug AT Command', en: 'Dual USB-C 16P & DC 5.5mm Jack supporting power, firmware flashing & AT command debug' },
    ],
    image: 'assets/projects/ec200u_kit/1.png',
    gallery: [
      'assets/projects/ec200u_kit/1.png',
      'assets/projects/ec200u_kit/2.png',
      'assets/projects/ec200u_kit/z5001260822696_1072e734f3fb62ae7f8b76c987efe354.jpg',
      'assets/projects/ec200u_kit/z5001261128032_5d096671ce3ac2cb70b221defb666dee.jpg',
      'assets/projects/ec200u_kit/z4998056412180_d259595b78e7a9644cc832cb16d3418b.jpg',
      'assets/projects/ec200u_kit/z4998503318455_6d27267801dc3ffe3107d2e9e5d945e2.jpg',
      'assets/projects/ec200u_kit/z4999008387821_578f774d2da9a7ad4bea4c80b94dc692.jpg',
      'assets/projects/ec200u_kit/z5006113823725_1d7ae1cb8f963eb70b2a5876378e0a5d.jpg',
      'assets/projects/ec200u_kit/z5034081124665_3231c69ca96c1f3c99a86ffc36866986.jpg',
      'assets/projects/ec200u_kit/z5352435747519_93991ca4ce5fb9091bc4e27fa756cb56.jpg',
    ],
    highlight: true,
  },
  {
    id: 'nrf52840-box-dc',
    title: 'Bo Mạch Điều Khiển Không Dây nRF52840 & Mạch Cách Ly Tín Hiệu',
    category: 'Industrial Hardware & Automotive',
    period: '03/2024 - 04/2024',
    summary: {
      vi: 'Thiết kế Altium Designer vi xử lý nRF52840 (AQFN74 0.5mm pitch), anten BLE 5.0 2.4GHz, nguồn DCDC FR9886 (4.5-23V input), 6 kênh Optocoupler PC817 cách ly tín hiệu và cầu chì tự phục hồi PTC.',
      en: 'Altium PCB design for nRF52840 MCU (0.5mm pitch AQFN74), 2.4GHz BLE 5.0 antenna, FR9886 DCDC buck converter (4.5-23V input), 6-ch PC817 optocoupler signal isolation, and PTC resettable fuse.',
    },
    description: {
      vi: 'Dự án thiết kế phần cứng điện tử công nghiệp hoàn chỉnh cho bộ điều khiển không dây nRF52840. Mạch điện tích hợp vi xử lý nRF52840-QIAA (ARM Cortex-M4F 64MHz, BLE 5.0/Mesh), hạ nguồn DCDC công suất cao FR9886, các kênh I/O cách ly quang PC817 chống nhiễu công nghiệp và giao tiếp USB D+/D-.',
      en: 'Complete industrial electronic hardware design for nRF52840 wireless controller. Integrates nRF52840-QIAA MCU (ARM Cortex-M4F 64MHz, BLE 5.0/Mesh), high-efficiency FR9886 DCDC step-down converter, PC817 optocoupler isolated I/O, and USB D+/D- interface.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB Altium Designer 2 lớp đi dây chuẩn tối ưu cho chip nRF52840 gói chân AQFN 0.5mm pitch, mạng phối trở kháng anten 2.4GHz, 2 thạch anh (32MHz & 32.768kHz RTC sleep), nguồn hạ áp DCDC FR9886 (4.5-23V) kết hợp LDO AMS1117, tụ nhôm SMD chịu nhiệt và mạch cách ly quang 6 kênh PC817.',
      en: 'Hardware: Altium 2-layer PCB with optimized 0.5mm pitch AQFN nRF52840 layout, 2.4GHz RF impedance matching, dual crystals (32MHz & 32.768kHz RTC sleep), FR9886 DCDC step-down (4.5-23V input) + AMS1117 LDO, SMD aluminum caps, and 6-channel PC817 optoisolators.',
    },
    techStack: ['nRF52840 (ARM Cortex-M4F)', 'BLE 5.0 / Mesh', 'Altium Designer', 'AQFN74 0.5mm Pitch', 'FR9886 DCDC Buck', 'Optocoupler PC817', '2.4GHz RF Antenna', 'Industrial Isolated I/O'],
    features: [
      { vi: 'Thiết kế footprint & đi dây chuẩn xác chip nRF52840-QIAA gói chân gầm AQFN74 pitch 0.5mm', en: 'Precision footprint & routing for 0.5mm pitch AQFN74 nRF52840-QIAA MCU' },
      { vi: 'Mạch nguồn rộng 4.5V - 23V DCDC FR9886 hiệu suất cao kết hợp LDO AMS1117 3.3V', en: 'Wide 4.5V - 23V input FR9886 DCDC buck converter paired with 3.3V AMS1117 LDO' },
      { vi: 'Cách ly tín hiệu I/O công nghiệp bằng 6 channel Optocoupler PC817 chống nhiễu', en: '6-channel PC817 optocoupler isolation for noise-immune industrial I/O' },
      { vi: 'Mạng phối trở kháng anten 2.4GHz & 2 thạch anh 32MHz / 32.768kHz chế độ Deep Sleep', en: '2.4GHz RF matching network & dual 32MHz / 32.768kHz crystals for Deep Sleep' },
      { vi: 'Tích hợp cầu chì tự phục hồi PTC 24V 3A bảo vệ quá dòng & diode SS34 bảo vệ ngược cực', en: 'Integrated 24V 3A PTC resettable fuse for overcurrent & SS34 reverse protection' },
    ],
    image: 'assets/projects/nrf52840_pin/Untitled.png',
    gallery: [
      'assets/projects/nrf52840_pin/Untitled.png',
      'assets/projects/nrf52840_pin/123.png',
      'assets/projects/nrf52840_pin/z5412504614453_1ebecfdf6e1f490d2a163a27602b0ad2.jpg',
      'assets/projects/nrf52840_pin/z5407773303120_f125ac6d6b70f0cc8b04fee7e0864f18.jpg',
      'assets/projects/nrf52840_pin/z5345238505701_821e29973397196c2df40dc94c7b6a8d.jpg',
      'assets/projects/nrf52840_pin/z5347835229785_821cd9f67bf4cf018e10261b28b845ca.jpg',
      'assets/projects/nrf52840_pin/z5351726467405_e1488373b2a67237baa06dba3ea33ddc.jpg',
      'assets/projects/nrf52840_pin/z5413311863708_94af14223f9c570f709095da63fde8ed.jpg',
      'assets/projects/nrf52840_pin/z5321948321840_ebf0e53862102845c881e204c85789ee.jpg',
      'assets/projects/nrf52840_pin/z5333876660798_c01fdb86078efa4ac2ad68450cfbf4ee.jpg',
    ],
    highlight: true,
  },
  {
    id: 'ecocare-ai',
    title: 'EcoCare AI — Hệ thống Giám sát Người cao tuổi',
    category: 'AIoT & Medical Device',
    period: '2024 - 2026',
    summary: {
      vi: 'PCB ESP32 tùy chỉnh, ma trận cảm biến ToF 8×8 (VL53L5CX), nhận diện tư thế Edge AI (giường/toilet), cảnh báo MQTT thời gian thực, dashboard đa người dùng. Triển khai tại viện dưỡng lão Nhật Bản.',
      en: 'Custom ESP32 PCB, 8×8 ToF sensor matrix (VL53L5CX), Edge AI posture recognition (bed/toilet), real-time MQTT alerting, multi-user dashboard. Deployed in Japanese nursing homes.',
    },
    description: {
      vi: 'EcoCare AI là hệ thống phần cứng AIoT chăm sóc y tế hàng đầu triển khai tại các viện dưỡng lão tại Osaka, Nhật Bản. Thiết bị sử dụng ma trận ToF 8x8 bảo vệ quyền riêng tư, xử lý thuật toán Edge AI nhận diện tư thế giường/toilet và phát hiện té ngã tức thì.',
      en: 'EcoCare AI is a flagship medical AIoT hardware deployed across elder care homes in Osaka, Japan. Utilizing privacy-preserving 8x8 ToF matrix, Edge AI algorithms recognize bed/toilet posture and detect falls in real time.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB ESP32 tùy chỉnh tích hợp module ToF VL53L5CX, mạch nguồn cách ly y tế, truyền thông WiFi/Ethernet/MQTT < 500ms. Hạ tầng cloud đi kèm bao gồm Web Dashboard (care.musenplus.com) xuất báo cáo PDF/PNG và API Playground.',
      en: 'Hardware: Custom ESP32 PCB with VL53L5CX ToF module, medical isolated DCDC power, sub-500ms WiFi/Ethernet/MQTT comms. Cloud infrastructure includes Web Dashboard (care.musenplus.com) with PDF/PNG reporting and API Playground.',
    },
    techStack: ['ESP32', 'ToF VL53L5CX 8x8', 'Edge AI', 'TensorFlow Lite Micro', 'MQTT Mosquitto', 'Altium 2-Layer PCB', 'FreeRTOS', 'C/C++'],
    features: [
      { vi: 'Bo mạch PCB ESP32 tùy chỉnh đạt chuẩn y tế Nhật Bản', en: 'Custom medical-grade ESP32 PCB design' },
      { vi: 'Cảm biến ToF 8x8 ma trận không ghi hình (Bảo vệ riêng tư 100%)', en: '100% privacy-preserving 8x8 ToF sensor matrix' },
      { vi: 'Edge AI nhận diện té ngã & tư thế giường/toilet trên thiết bị', en: 'On-device Edge AI fall & posture recognition' },
      { vi: 'Pipeline cảnh báo MQTT thời gian thực < 500ms', en: 'Sub-500ms real-time MQTT alert pipeline' },
      { vi: 'Triển khai thực tế tại các cơ sở chăm sóc người cao tuổi ở Osaka, Nhật Bản', en: 'Deployed in Japanese nursing facilities in Osaka' },
    ],
    liveUrl: 'https://care.musenplus.com',
    highlight: true,
  },
  {
    id: 'ai-box-plus',
    title: 'AI Box Plus — Bộ phát triển AI IoT mã nguồn mở',
    category: 'Edge AI & Smart Device',
    period: '2024 - 2026',
    summary: {
      vi: 'Trợ lý thông minh ESP32-S3: màn hình cảm ứng, loa, AI giọng nói ChatGPT/Gemini, firmware OTA, nền tảng web Next.js (ai-box-plus.com), cộng đồng 5.000+ thành viên.',
      en: 'ESP32-S3 smart AI assistant: touchscreen, speaker, ChatGPT/Gemini voice AI, OTA firmware, Next.js web platform (ai-box-plus.com), 5,000+ member community.',
    },
    description: {
      vi: 'AI Box Plus là bộ kit phát triển AI IoT nguồn mở nổi tiếng do Nguyễn Việt Hưng thiết kế phần cứng và firmware. Thiết bị giao tiếp giọng nói hai chiều trực tiếp với ChatGPT & Gemini AI.',
      en: 'AI Box Plus is an open-source AI IoT dev kit designed by Nguyen Viet Hung. Features bidirectional voice interaction with ChatGPT & Gemini AI directly on the device.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB 4 lớp thiết kế trên Altium Designer, chip ESP32-S3 N16R8, codec âm thanh I2S, micro thu âm, chip quản lý nguồn PMIC AXP2101, màn hình cảm ứng SPI. Nền tảng web ai-box-plus.com hỗ trợ OTA firmware.',
      en: 'Hardware: 4-layer PCB designed in Altium Designer, ESP32-S3 N16R8, I2S audio codec, microphone, AXP2101 PMIC, SPI touchscreen display. Web platform ai-box-plus.com supports OTA firmware updates.',
    },
    techStack: ['ESP32-S3', 'Altium 4-Layer PCB', 'I2S Audio Codec', 'TFT Display SPI', 'ChatGPT / Gemini Voice AI', 'PlatformIO', 'C++', 'FreeRTOS'],
    features: [
      { vi: 'Bo mạch PCB 4 lớp thiết kế chuẩn đi dây âm thanh chống nhiễu', en: '4-layer PCB designed for low-noise audio signals' },
      { vi: 'Giao tiếp giọng nói AI hai chiều ChatGPT & Gemini AI', en: 'Bidirectional ChatGPT & Gemini Voice AI conversation' },
      { vi: 'Màn hình cảm ứng hiển thị UI/UX tương tác hiện đại', en: 'Touchscreen display with modern interactive UI/UX' },
      { vi: 'Nền tảng Web ai-box-plus.com & Cập nhật Firmware từ xa OTA', en: 'Web platform ai-box-plus.com & remote OTA firmware updates' },
      { vi: 'Cộng đồng hơn 5,000 lập trình viên phần cứng tham gia', en: 'Active community of 5,000+ hardware developers' },
    ],
    liveUrl: 'https://ai-box-plus.com',
    githubUrl: 'https://github.com/nvhung1609',
    highlight: true,
  },
  {
    id: 'forklift-safety',
    title: 'Hệ thống An toàn Xe nâng Công nghiệp & Fleet Management',
    category: 'Industrial Hardware & Automotive',
    period: '2025 - 2026',
    summary: {
      vi: 'Cảnh báo va chạm radar 60GHz, PCB tùy chỉnh ESP32 + CAN Bus + RS485, truyền thông LoRa, dashboard quản lý đội xe, vỏ công nghiệp chống nước.',
      en: '60GHz radar collision warning, custom ESP32 + CAN Bus + RS485 PCB, LoRa comms, fleet dashboard, waterproof industrial enclosure.',
    },
    description: {
      vi: 'Bộ điều khiển an toàn xe nâng điện công nghiệp. Mạch giao tiếp CAN Bus / RS485 đọc thông số Lithium BMS (điện áp, dòng điện, SOC, SOH, lỗi), kết hợp Radar 60GHz mmWave phát hiện chướng ngại vật để ngắt relay nâng hạ an toàn.',
      en: 'Industrial electric forklift safety controller. Interfacing lithium BMS over CAN Bus/RS485 (voltage, current, SOC, SOH, faults), integrated 60GHz mmWave radar actively trips lifting relays upon obstacle detection.',
    },
    longDescription: {
      vi: 'Phần cứng: Thiết kế PCB chịu rung lắc công nghiệp, mạch chống ngược cực, cách ly quang RS485, CAN transceiver SN65HVD230. Màn hình LCD SPI hiển thị sự cố và lưu nhật ký lỗi vào bộ nhớ EEPROM.',
      en: 'Hardware: Vibration-resistant industrial PCB layout, reverse polarity protection, opto-isolated RS485, SN65HVD230 CAN transceiver. SPI LCD display with EEPROM fault logging.',
    },
    techStack: ['ESP32', 'CAN Bus', 'RS485 Modbus', '60GHz mmWave Radar', 'EEPROM', 'Altium 2-Layer PCB', 'FreeRTOS', 'Relay Protection'],
    features: [
      { vi: 'Giao tiếp CAN Bus & RS485 đọc dữ liệu BMS pin Lithium real-time', en: 'Real-time CAN Bus & RS485 Lithium BMS telemetry' },
      { vi: 'Radar 60GHz mmWave cảnh báo khoảng cách va chạm tự động', en: '60GHz mmWave radar automatic collision distance warning' },
      { vi: 'Mạch điều khiển Relay ngắt an toàn hệ thống nâng công nghiệp', en: 'Relay trip circuit for safe hydraulic lifting cutoff' },
      { vi: 'Vỏ hộp công nghiệp chống nước IP67 chuyên dụng', en: 'Dedicated IP67 waterproof industrial enclosure' },
    ],
    highlight: true,
  },
  {
    id: 'smart-agri-lora',
    title: 'IoT Nông nghiệp Thông minh — Quan trắc Môi trường LoRa',
    category: 'IoT & Agriculture',
    period: '2023 - 2024',
    summary: {
      vi: 'Mạng cảm biến không dây LoRa, quan trắc pH/DO/EC/nhiệt độ, tưới tự động, cloud Firebase/MQTT, PCB tùy chỉnh, ứng dụng di động tích hợp bản đồ.',
      en: 'Wireless LoRa sensor network, pH/DO/EC/temp monitoring, auto irrigation, Firebase/MQTT cloud, custom PCB, mobile app with map integration.',
    },
    description: {
      vi: 'Hệ thống quan trắc môi trường và tự động hóa nông nghiệp diện rộng. Các trạm cảm biến năng lượng mặt trời đo chỉ số đất/nước gửi dữ liệu không dây LoRa bán kính 3-5km về trạm Gateway.',
      en: 'Wide-area agricultural environment monitoring & automation system. Solar-powered sensor nodes measure soil/water parameters, sending LoRa wireless data (3-5km range) to Gateway.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch PCB chống ăn mòn hóa chất, mạch sạc pin năng lượng mặt trời Solar MPPT, đầu dò công nghiệp RS485 Modbus RTU (pH, DO oxy hòa tan, EC độ dẫn điện). Gateway ESP32/4G đẩy dữ liệu lên Firebase & Web App đồ thị real-time.',
      en: 'Hardware: Anti-corrosion PCB design, Solar MPPT battery charger, industrial RS485 Modbus probes (pH, DO, EC). ESP32/4G Gateway pushing telemetry to Firebase & real-time Web App.',
    },
    techStack: ['ESP32', 'LoRa SX1276', 'RS485 Modbus', 'Solar MPPT', 'Altium PCB', 'MQTT / Firebase', 'React Native App'],
    features: [
      { vi: 'Mạng cảm biến LoRa truyền không dây bán kính 3-5 km', en: 'Long-range wireless LoRa sensor network (3-5 km)' },
      { vi: 'Đo lường các chỉ số pH, DO (oxy hòa tan), EC (độ dẫn điện), Nhiệt độ', en: 'Accurate probing: pH, DO (dissolved oxygen), EC, Temp' },
      { vi: 'Mạch sạc năng lượng mặt trời Solar MPPT hoạt động liên tục 24/7', en: 'Solar MPPT charging circuit for continuous 24/7 operation' },
    ],
  },
  {
    id: 'wireless-remote',
    title: 'Điều khiển từ xa không dây (Chống nước + Phản hồi Answerback)',
    category: 'Industrial Wireless',
    period: '2024',
    summary: {
      vi: 'Thiết kế PCB RF tùy chỉnh, truyền thông hai chiều, điều khiển đa kênh, chống nước, độ tin cậy cấp công nghiệp, xác nhận phản hồi answerback.',
      en: 'Custom RF PCB design, bidirectional communication, multi-channel control, waterproof, industrial-grade reliability, answerback confirmation.',
    },
    description: {
      vi: 'Sản phẩm điều khiển từ xa không dây chuyên dụng cho môi trường công nghiệp và hàng hải. Tay điều khiển vỏ chống nước, mạch RF 2 chiều đảm bảo tín hiệu được xác nhận thành công.',
      en: 'Specialized wireless remote control for industrial & marine environments. Waterproof casing, bidirectional RF circuit ensuring 100% confirmed command execution.',
    },
    longDescription: {
      vi: 'Sử dụng chip RF Sub-1GHz (CC1101/SX1278), vi điều khiển MSP430 siêu tiết kiệm năng lượng (tuổi thọ pin > 2 năm). Khi bộ thu bật relay thành công sẽ phát tín hiệu RF phản hồi lại tay cầm để bíp loa xác nhận.',
      en: 'Powered by Sub-1GHz RF transceiver (CC1101/SX1278), MSP430 ultra-low power MCU (> 2 years battery life). Buzzer & LED answerback confirmation upon relay activation.',
    },
    techStack: ['MSP430', 'RF Sub-1GHz', 'Altium 2-Layer PCB', 'Answerback RF Protocol', 'Low-Power Sleep Mode', 'IP68 Waterproof'],
    features: [
      { vi: 'Truyền nhận RF 2 chiều có phản hồi xác nhận lệnh (Answerback)', en: 'Bidirectional RF comms with Answerback acknowledgment' },
      { vi: 'Chế độ ngủ sâu (Deep Sleep) tuổi thọ pin trên 2 năm', en: 'Deep sleep low power consumption (> 2 years battery life)' },
      { vi: 'Đạt chuẩn chống nước IP68 cho môi trường khắc nghiệt ngoài trời', en: 'IP68 waterproof rating for harsh outdoor environments' },
    ],
  },
  {
    id: 'uav-drone',
    title: 'Bộ điều khiển bay UAV & Thiết kế Khung máy bay (Flight Controller PCB)',
    category: 'Robotics & UAV',
    period: '2024 - 2025',
    summary: {
      vi: 'PCB điều khiển bay 4 lớp, tích hợp GPS/IMU/khí áp, driver ESC motor, telemetry, điều hướng tự hành waypoint, chế tạo nguyên mẫu khung máy bay.',
      en: '4-layer flight controller PCB, integrated GPS/IMU/barometer, ESC motor drivers, telemetry, autonomous waypoint navigation, airframe prototyping.',
    },
    description: {
      vi: 'Bo mạch phần cứng điều khiển máy bay không người lái (UAV/Drone). PCB 4 lớp đi dây cao tốc hạn chế nhiễu từ động cơ, chạy thuật toán lọc Kalman ước lượng góc nghiêng và độ cao.',
      en: 'Autonomous UAV/Drone flight controller hardware. 4-layer PCB with high-speed noise-isolated routing, running Kalman filtering for orientation & altitude estimation.',
    },
    longDescription: {
      vi: 'Vi xử lý STM32F407 168MHz, cảm biến IMU MPU6000 giao tiếp SPI 20MHz, Barometer MS5611, module GPS Neo-M8N, mạch lái xung PWM cho ESC và truyền tin Telemetry 915MHz.',
      en: 'STM32F407 168MHz MCU, MPU6000 6-axis IMU over 20MHz SPI, MS5611 Barometer, Neo-M8N GPS, PWM ESC motor control, and 915MHz Telemetry link.',
    },
    techStack: ['STM32F4', 'Altium 4-Layer PCB', 'SPI / I2C / UART', 'IMU MPU6000', 'Barometer', 'GPS Neo-M8N', 'Kalman Filter', 'PWM ESC'],
    features: [
      { vi: 'Bo mạch PCB 4 lớp chống nhiễu từ động cơ công suất lớn', en: '4-layer noise-immune PCB for high-power motors' },
      { vi: 'Thuật toán định hướng & giữ độ cao bằng Kalman Filter', en: 'Kalman Filter orientation & altitude hold algorithms' },
      { vi: 'Điều khiển bay tự hành theo tọa độ Waypoint GPS', en: 'Autonomous flight control with GPS Waypoints' },
      { vi: 'Truyền dữ liệu trạm mặt đất qua sóng Telemetry', en: 'Telemetry ground station wireless data link' },
    ],
  },
  {
    id: 'iot-auto-irrigation',
    title: 'IoT Giám sát & Điều khiển Tưới Tự động',
    category: 'IoT & Agriculture',
    period: '03/2022 - 05/2022',
    summary: {
      vi: 'Mạng cảm biến LoRa, dữ liệu Firebase, ứng dụng & Web GIS Map, phát phản hồi cảnh báo sự cố thiết bị.',
      en: 'LoRa sensor network, Firebase data sync, GIS Map Web/App, and automated fault alert dispatch.',
    },
    description: {
      vi: 'Lập trình cho hệ thống nhúng, thiết kế Layout & PCB bộ điều khiển tưới tự động nông nghiệp thông minh. Xây dựng mạng cảm biến không dây LoRa, cập nhật dữ liệu lên CSDL Firebase, phát triển Web/App tích hợp tiện ích bản đồ GIS và tự động phát cảnh báo khi thiết bị gặp sự cố.',
      en: 'Embedded programming, schematic layout & PCB design for smart automated irrigation. Built LoRa wireless sensor network, Firebase DB sync, GIS map Web/App, and automated fault alert response system.',
    },
    longDescription: {
      vi: 'Dự án nghiên cứu & triển khai Freelance: Xây dựng mạng cảm biến không dây công nghệ LoRa thu thập độ ẩm/nhiệt độ đất, đồng bộ CSDL Firebase, giao diện giám sát bản đồ GIS và hệ thống phát cảnh báo sự cố tự động.',
      en: 'Freelance R&D project: Built LoRa wireless sensor network collecting soil temp/humidity, synced with Firebase DB, GIS map UI, and automated fault alert response.',
    },
    techStack: ['LoRa Mesh', 'Firebase DB', 'Altium PCB', 'Web GIS / Map', 'ESP32 / MCU', 'C/C++'],
    features: [
      { vi: 'Xây dựng mạng cảm biến không dây sử dụng công nghệ LoRa', en: 'Built a wireless sensor network utilizing LoRa technology' },
      { vi: 'Cập nhật dữ liệu thu thập được lên cơ sở dữ liệu Firebase', en: 'Updated collected sensor data to Firebase database' },
      { vi: 'Phát triển ứng dụng di động và website tích hợp tiện ích bản đồ GIS', en: 'Developed Web & Mobile app integrated with GIS Map' },
      { vi: 'Gửi dữ liệu phản hồi & phát cảnh báo khi thiết bị gặp lỗi/sự cố', en: 'Sent response data & alerts upon detecting equipment faults' },
    ],
  },
  {
    id: 'water-leak-alarm',
    title: 'Hệ thống Cảnh báo Rò rỉ Nước Thời gian thực',
    category: 'IoT & Smart Building',
    period: '06/2022 - 08/2022',
    summary: {
      vi: 'Cảm biến rò rỉ nước, đồng bộ CSDL Firebase, phát phản hồi cảnh báo sự cố khẩn cấp.',
      en: 'Water leak sensor, Firebase DB sync, instant emergency fault warning response.',
    },
    description: {
      vi: 'Lập trình cho hệ thống nhúng, thiết kế Layout & PCB bộ cảnh báo rò rỉ nước. Thu thập dữ liệu cảm biến thời gian thực, đồng bộ lên cơ sở dữ liệu Firebase và phát cảnh báo phản hồi sự cố khẩn cấp.',
      en: 'Embedded programming, layout & PCB design for water leak warning system. Real-time sensor collection, Firebase database sync, and instant emergency alert dispatch.',
    },
    longDescription: {
      vi: 'Phần cứng PCB tối ưu kích thước chống ẩm ướt, mạch vi xử lý phát hiện rò rỉ nước và truyền dữ liệu cảnh báo khẩn cấp tức thời.',
      en: 'Compact moisture-resistant PCB hardware design, MCU circuit detecting water leaks and instantly transmitting emergency alert data.',
    },
    techStack: ['ESP32 / MCU', 'Firebase DB', 'Water Leak Sensor', 'Altium PCB', 'C/C++'],
    features: [
      { vi: 'Cập nhật dữ liệu cảm biến rò rỉ thu thập được lên cơ sở dữ liệu Firebase', en: 'Updated collected leak sensor data to Firebase database' },
      { vi: 'Tự động phát cảnh báo phản hồi tức thì khi xảy ra rò rỉ nước hoặc thiết bị lỗi', en: 'Automated instant warning response upon detecting leaks or faults' },
      { vi: 'Thiết kế phần cứng PCB nhỏ gọn, hoạt động bền bỉ môi trường ẩm', en: 'Compact durable PCB design optimized for humid environments' },
    ],
  },
  {
    id: 'ctu-device-management',
    title: 'Hệ thống Quản lý Thiết bị — ĐH Cần Thơ (CTU)',
    category: 'Industrial IoT & Facility',
    period: '08/2023 - 11/2023',
    summary: {
      vi: 'Giám sát & kiểm soát thiết bị MQTT, theo dõi thời gian vận hành, PCB tùy chỉnh nghiệm thu tại Trường Bách Khoa - CTU.',
      en: 'MQTT device monitoring & control, runtime tracking, custom PCB deployed at CTU College of Engineering.',
    },
    description: {
      vi: 'Lập trình cho hệ thống nhúng, thiết kế Layout & PCB hoàn chỉnh. Cập nhật dữ liệu trạng thái thiết bị lên CSDL qua giao thức MQTT, kiểm soát bật/tắt từ xa và theo dõi chính xác thời gian hoạt động của các thiết bị tại Trường Bách Khoa - Đại học Cần Thơ.',
      en: 'Embedded system programming, layout & PCB hardware design. Device data update via MQTT protocol, remote control, and operating runtime tracking at CTU College of Engineering.',
    },
    longDescription: {
      vi: 'Hệ thống IoT quản lý tài sản & thiết bị phòng lab/xưởng thực hành Trường Bách Khoa - CTU: Bo mạch PCB điều khiển công suất, giao thức MQTT bảo mật và theo dõi duty cycle thiết bị.',
      en: 'IoT asset & equipment management for CTU College of Engineering labs: Power control PCB, secure MQTT protocol, and equipment duty cycle tracking.',
    },
    techStack: ['MQTT Protocol', 'ESP32 / STM32', 'Altium PCB', 'Device Telemetry', 'C/C++'],
    features: [
      { vi: 'Cập nhật dữ liệu thu thập được lên cơ sở dữ liệu thông qua giao thức MQTT', en: 'Updated collected status data to database via MQTT protocol' },
      { vi: 'Kiểm soát bật/tắt thiết bị từ xa và theo dõi thời gian hoạt động của từng thiết bị', en: 'Remote device control and precise operating runtime tracking' },
      { vi: 'Thiết kế phần cứng PCB hoàn chỉnh và kiểm thử vận hành trực tiếp tại Trường Bách Khoa - CTU', en: 'Designed PCB hardware and conducted field testing at CTU' },
    ],
  },
  {
    id: 'ctu-early-fire-warning',
    title: 'Hệ thống Cảnh báo Cháy sớm — ĐH Cần Thơ (CTU)',
    category: 'IoT & Safety',
    period: '11/2023 - 03/2024',
    summary: {
      vi: 'Mạng cảm biến LoRa Mesh, MQTT cloud, pin hoạt động 15 ngày khi mất điện, triển khai tại Trường Bách Khoa - CTU.',
      en: 'LoRa Mesh sensor network, MQTT cloud, 15-day battery autonomy during power outages, deployed at CTU College of Engineering.',
    },
    description: {
      vi: 'Lập trình cho hệ thống, thiết kế Layout & PCB hoàn chỉnh hệ thống cảnh báo cháy sớm. Thu thập dữ liệu môi trường (nhiệt độ, khói) tại các phòng học/lab, xây dựng mạng cảm biến không dây diện rộng LoRa Mesh, tích hợp mạch nguồn tiết kiệm điện cho phép duy trì hoạt động 15 ngày khi mất điện.',
      en: 'System programming, layout & PCB hardware design for early fire warning system. Collects environmental data across rooms, builds LoRa Mesh network, with 15-day backup power during grid blackouts at CTU.',
    },
    longDescription: {
      vi: 'Hệ thống cảnh báo hỏa hoạn thông minh cho các tòa nhà Trường Bách Khoa - CTU: Truyền tin LoRa Mesh giữa các tầng, hạ tầng MQTT Cloud và mạch quản lý pin dự phòng 15 ngày.',
      en: 'Smart fire warning system for CTU College of Engineering buildings: Inter-floor LoRa Mesh transmission, MQTT Cloud backend, and 15-day backup battery management.',
    },
    techStack: ['LoRa Mesh', 'MQTT Protocol', 'Low Power (15-Day Battery)', 'Environmental Sensors', 'Altium PCB', 'C/C++'],
    features: [
      { vi: 'Cập nhật dữ liệu thu thập được lên cơ sở dữ liệu thông qua giao thức MQTT', en: 'Updated collected environmental data to database via MQTT protocol' },
      { vi: 'Thu thập dữ liệu môi trường về nhiệt độ/khói tại các phòng lắp thiết bị', en: 'Collected room temperature & smoke environmental data' },
      { vi: 'Xây dựng mạng cảm biến không dây diện rộng sử dụng công nghệ LoRa Mesh', en: 'Built wide-area wireless sensor network using LoRa Mesh technology' },
      { vi: 'Mạch tiết kiệm năng lượng, duy trì hoạt động trong điều kiện mất điện lên đến 15 ngày', en: 'Low-power circuit sustaining operation during blackouts up to 15 days' },
      { vi: 'Thiết kế phần cứng PCB và kiểm thử hoạt động nghiệm thu tại Trường Bách Khoa - CTU', en: 'Designed PCB hardware and tested operation at CTU College of Engineering' },
    ],
  },
  {
    id: 'smart-stair-solar-gate',
    title: 'LED Cầu thang Thông minh & Cổng Năng lượng Mặt trời',
    category: 'Smart Home & Automation',
    period: '2022 - 2023',
    summary: {
      vi: 'LED đa màu với phát hiện chuyển động PIR/radar, hiệu ứng tuần tự, điều khiển ESP32; Cổng thông minh năng lượng mặt trời tự động đóng/mở và giám sát từ xa.',
      en: 'Multi-color LED with PIR/radar motion detection, sequential effects, ESP32 control; Solar-powered smart gate with auto open/close and remote monitoring.',
    },
    description: {
      vi: 'Bộ đôi sản phẩm tự động hóa nhà thông minh. Hệ thống LED cầu thang cảm ứng chuyển động đổi màu theo bước chân và cổng thông minh sạc pin Solar tự động nhận diện xe.',
      en: 'Smart home automation product pair. Motion-sensing staircase LED lighting animating steps, and solar-powered automatic gate controller.',
    },
    longDescription: {
      vi: 'Phần cứng: Bo mạch điều khiển ESP32 lái dải LED WS2812B qua chuẩn PWM, cảm biến Radar 24GHz phát hiện bước chân. Cổng tự động dùng mạch sạc Solar DCDC lái motor DC 12V.',
      en: 'Hardware: ESP32 controller driving WS2812B addressable LEDs via PWM, 24GHz radar step detection. Auto gate utilizes Solar DCDC charger driving 12V DC motor.',
    },
    techStack: ['ESP32', 'Radar 24GHz / PIR', 'WS2812B LED PWM', 'Solar Charging DCDC', 'Altium PCB', 'C++'],
    features: [
      { vi: 'Hiệu ứng LED chạy chuyển động mượt mà theo từng bước chân', en: 'Smooth sequential LED lighting animating each footstep' },
      { vi: 'Cổng thông minh chạy năng lượng mặt trời Solar hoạt động độc lập', en: 'Independent solar-powered smart gate operation' },
      { vi: 'Giám sát và điều khiển đóng mở từ xa qua smartphone', en: 'Remote gate monitoring & operation via smartphone' },
    ],
  },
];

// ========== TECHNICAL STACK CATEGORIES ==========
export const techCategories: TechCategory[] = [
  {
    title: { vi: 'Vi Điều Khiển & Máy Tính Nhúng (MCUs & SBCs)', en: 'Microcontrollers & SBCs (MCUs, RISC-V & Linux)' },
    icon: 'fa-microchip',
    items: [
      'STM32 (ARM Cortex-M)',
      'ESP (SoC: ESP32, ESP32-S3, ESP8266)',
      'CH32 (RISC-V Architecture)',
      'MSP430 (Texas Instruments)',
      'PIC Microcontrollers (Microchip)',
      'Quectel EC800M / EC200U (4G LTE)',
      'SBC/Linux: Raspberry Pi, Orange Pi',
      'Nordic nRF52840 (BLE 5.0)',
      'Arduino AVR / SAMD',
    ],
  },
  {
    title: { vi: 'Giao Thức Truyền Thông', en: 'Communication Protocols' },
    icon: 'fa-network-wired',
    items: ['CAN Bus (2.0B / CAN-FD)', 'RS485 / Modbus RTU', 'LoRa / LoRaWAN', 'BLE / Bluetooth 5.0', 'WiFi (Station / AP)', 'MQTT / MQTTS', 'HTTP / HTTPS / REST API', 'SPI / I2C / UART / OneWire / NFC'],
  },
  {
    title: { vi: 'Công Cụ Thiết Kế phần Cứng & CAD', en: 'Hardware CAD & Dev Tools' },
    icon: 'fa-tools',
    items: ['Altium Designer (2/4-Layer)', 'KiCad EDA', 'Proteus VSM', 'LTspice Circuit Sim', 'VS Code & PlatformIO', 'STM32CubeIDE', 'Oscilloscope & Logic Analyzer', 'CAN Analyzer & SWD/JTAG', 'Power Profiler & Thermal Imaging'],
  },
  {
    title: { vi: 'Ngôn Ngữ Lập Trình & RTOS', en: 'Languages & RTOS' },
    icon: 'fa-code',
    items: ['Embedded C (C99/C11)', 'Embedded C++ (C++17)', 'FreeRTOS Multi-Tasking', 'Python (Scripting & AI)', 'JavaScript / TypeScript', 'Assembly (ARM Cortex-M)', 'Bash Scripting', 'CMake & Make'],
  },
  {
    title: { vi: 'Thiết Kế Mạch PCB & Phần Cứng', en: 'Hardware & PCB Engineering' },
    icon: 'fa-layer-group',
    items: ['2-Layer & 4-Layer Layout', 'High-Speed Signal Routing', 'EMI / EMC Mitigation', 'Impedance Control (50Ω/90Ω)', 'Power Integrity (LDO/DCDC)', 'ESD & Surge Protection', 'Solar MPPT Battery Circuit', 'DFM / DFA Production Output'],
  },
  {
    title: { vi: 'Edge AI & Nền Tảng Cloud IoT', en: 'Edge AI & Cloud IoT' },
    icon: 'fa-cloud',
    items: ['TensorFlow Lite Micro', 'ToF 8x8 Sensor Fusion', '60GHz mmWave Radar AI', 'Node.js & Express API', 'MQTT Mosquitto Broker', 'MongoDB Database', 'React Native Mobile App', 'OTA Firmware Server', 'Cursor & GitHub Copilot'],
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
      vi: 'Kỹ sư Kỹ Thuật Máy Tính — Chuyên ngành Hệ Thống Nhúng & Phần Cứng',
      en: 'Bachelor of Engineering in Computer Engineering — Embedded Systems & Hardware',
    },
    period: '08/2018 - 06/2022',
    description: {
      vi: 'Tốt nghiệp loại Giỏi (GPA: 3.4 / 4.0). Nghiên cứu chuyên sâu về Kiến trúc máy tính, Hệ thống Nhúng, Thiết kế Mạch viễn thông, Vi điều khiển ARM/AVR/RISC-V, Hệ điều hành thời gian thực (FreeRTOS) và Mạng cảm biến không dây diện rộng LoRa Mesh.',
      en: 'Graduated with Distinction (GPA: 3.4 / 4.0). Specializing in Computer Architecture, Embedded Systems, Telecommunication Hardware, ARM/AVR/RISC-V Microcontrollers, Real-Time Operating Systems (FreeRTOS), and LoRa Mesh Wireless Sensor Networks.',
    },
  },
];

// ========== PROJECT CATEGORIES ==========
export const projectCategories = [
  { key: 'All', label: { vi: 'Tất cả 8 Dự Án', en: 'All 8 Projects' } },
  { key: 'AIoT & Medical Device', label: { vi: 'AIoT & Y Tế', en: 'AIoT & Medical' } },
  { key: 'Edge AI & Smart Device', label: { vi: 'Edge AI & Thiết Bị', en: 'Edge AI' } },
  { key: 'Industrial Hardware & Automotive', label: { vi: 'Công Nghiệp & Xe Nâng', en: 'Industrial' } },
  { key: 'Robotics & UAV', label: { vi: 'Robotics & UAV', en: 'UAV & Robotics' } },
  { key: 'IoT & Agriculture', label: { vi: 'Nông Nghiệp IoT', en: 'Agriculture' } },
];
