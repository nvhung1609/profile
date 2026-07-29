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
    badge: { vi: 'Kỹ Sư Nhúng Cấp Cao', en: 'Senior Embedded Engineer' },
    greeting: { vi: 'Xin chào, tôi là', en: "Hi, It's" },
    rolePrefix: { vi: 'Tôi là', en: "I'm a" },
    roleName: { vi: 'KỸ SƯ HỆ THỐNG NHÚNG', en: 'EMBEDDED SYSTEMS ENGINEER' },
    downloadCv: { vi: '📄 Tải CV PDF', en: '📄 Download CV' },
    contactMe: { vi: '💬 Liên Hệ Ngay', en: '💬 Contact Me' },
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
    vi: 'Tôi là Kỹ sư Nhúng Cấp cao (Senior Embedded Engineer) chuyên nghiên cứu, thiết kế phần cứng (Schematic, 2/4-Layer PCB Layout) và lập trình phần mềm nhúng (C/C++, FreeRTOS, Edge AI, Protocols) cho hơn 16+ sản phẩm IoT/AIoT thương mại thương hiệu Nhật Bản triển khai thực tế.',
    en: 'I am a Senior Embedded Engineer specializing in end-to-end electronic hardware design (Schematic, 2/4-Layer PCB Layout) and production-grade embedded firmware development (C/C++, FreeRTOS, Edge AI, Protocols) for 16+ commercial IoT/AIoT products deployed in Japan and Vietnam.',
  },
  aboutText: {
    vi: 'Đam mê nghiên cứu và phát triển các hệ thống nhúng đòi hỏi độ tin cậy cao. Tôi có kinh nghiệm thực chiến từ khâu lựa chọn linh kiện, vẽ sơ đồ nguyên lý, đi dây PCB đa lớp (High-Speed, EMI/EMC, Impedance Control) cho đến lập trình firmware tối ưu trên STM32, ESP32, nRF52840, Quectel 4G EC200U. Mục tiêu 5 năm tới của tôi là trở thành Embedded & Hardware System Architect hàng đầu.',
    en: 'Passionate about engineering reliable, high-performance embedded systems. Experienced in component selection, schematic design, multi-layer PCB layout (High-Speed, EMI/EMC, Impedance Control), and firmware development on STM32, ESP32, nRF52840, Quectel 4G LTE. My 5-year career goal is to become a top Embedded & Hardware System Architect.',
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
    vi: '⚡ Senior Embedded Engineer @ MUSEN PLUS (Japan)',
    en: '⚡ Senior Embedded Engineer @ MUSEN PLUS (Japan)',
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
    vi: 'STM32 (HAL/LL), ESP32/S3, FreeRTOS, Altium 2/4-Layer PCB, CAN Bus, RS485/Modbus, LoRa, Edge AI, C/C++',
    en: 'STM32 (HAL/LL), ESP32/S3, FreeRTOS, Altium 2/4-Layer PCB, CAN Bus, RS485/Modbus, LoRa, Edge AI, C/C++',
  },
};

// ========== WORK EXPERIENCE ==========
export const workExperiences: WorkExperience[] = [
  {
    id: 'musen-plus',
    company: 'Công ty MUSEN PLUS (無線プラス製作所) — Osaka, Nhật Bản',
    companyJapanese: '大阪府大阪市 / Osaka, Japan',
    role: {
      vi: 'Kỹ sư Firmware Nhúng & Thiết kế Phần cứng (Senior Embedded Engineer)',
      en: 'Embedded Firmware & Hardware Design Engineer (Senior Embedded Engineer)',
    },
    period: '09/2022 - Hiện tại',
    location: {
      vi: 'Osaka, Nhật Bản / TP. Hồ Chí Minh & Cần Thơ, Việt Nam',
      en: 'Osaka, Japan / Ho Chi Minh City & Can Tho, Vietnam',
    },
    description: {
      vi: 'Đảm nhiệm vai trò Kỹ sư R&D chính thiết kế phần cứng và phát triển firmware nhúng cấp production cho 16+ sản phẩm IoT/AIoT thương mại triển khai thực tế tại các viện dưỡng lão Nhật Bản, nhà máy công nghiệp và thiết bị thông minh.',
      en: 'Led hardware design & production firmware development for 16+ commercial IoT/AIoT products deployed across Japanese elder care homes, factories, and smart electronics.',
    },
    achievements: [
      {
        vi: 'Thiết kế nguyên lý & đi dây PCB 2 lớp & 4 lớp (Altium/KiCad): lựa chọn linh kiện, kiểm tra DFM, tối ưu BOM, chống nhiễu EMI/EMC, phối trở kháng và xuất file Gerber sản xuất hàng loạt.',
        en: 'Schematic design & multi-layer PCB layout (2 & 4 layers) for 16+ commercial products with DFM review, BOM optimization, EMI/EMC compliance, impedance matching, and Gerber output.',
      },
      {
        vi: 'Phát triển firmware nhúng cấp production bằng C/C++ cho ESP32/S3, STM32 (HAL/LL), MSP430/432, EC200U (Quectel 4G LTE), nRF52840, Arduino, Raspberry Pi sử dụng FreeRTOS, bare-metal và kiến trúc hướng sự kiện.',
        en: 'Developed production-grade C/C++ firmware for ESP32/S3, STM32 (HAL/LL), MSP430/432, EC200U (Quectel 4G), nRF52840, Arduino, and Raspberry Pi using FreeRTOS & event-driven architectures.',
      },
      {
        vi: 'Triển khai đầy đủ bộ giao thức truyền thông: UART, SPI, I2C, RS485, CAN Bus, Modbus RTU, LoRa/LoRaWAN, BLE/Bluetooth, WiFi, MQTT, HTTP cho mạng cảm biến, điều khiển công nghiệp và telemetry.',
        en: 'Implemented full communication stacks: UART, SPI, I2C, RS485, CAN Bus, Modbus RTU, LoRa/LoRaWAN, BLE, WiFi, MQTT, HTTP for sensor networks & industrial telemetry.',
      },
      {
        vi: 'Thiết kế hệ thống EcoCare AI chăm sóc người cao tuổi: PCB ESP32 tùy chỉnh với ma trận cảm biến ToF 8x8 (VL53L5CX), Edge AI nhận diện tư thế giường/toilet real-time qua MQTT, triển khai tại viện dưỡng lão Nhật Bản.',
        en: 'Designed EcoCare AI system: Custom ESP32 PCB with 8x8 ToF sensor matrix, Edge AI posture recognition (bed/toilet) via real-time MQTT pipeline in Japanese nursing facilities.',
      },
      {
        vi: 'Xây dựng AI Box Plus: Bộ phát triển AI IoT dựa trên ESP32-S3 với màn hình cảm ứng, loa I2S, tích hợp AI giọng nói ChatGPT/Gemini, cập nhật firmware OTA — thu hút cộng đồng 5,000+ thành viên.',
        en: 'Built AI Box Plus: ESP32-S3 smart AI IoT dev kit with touchscreen, speaker, ChatGPT/Gemini voice AI, OTA updates — building a community of 5,000+ members.',
      },
      {
        vi: 'Phát triển sản phẩm an toàn công nghiệp: Quản lý xe nâng với cảnh báo va chạm radar 60GHz mmWave, điều khiển từ xa không dây chống nước có phản hồi RF (Answerback), mạng giám sát môi trường LoRa.',
        en: 'Engineered industrial safety products: Forklift management with 60GHz mmWave radar, waterproof RF remotes with answerback confirmation, and LoRa environmental monitoring.',
      },
      {
        vi: 'Thiết kế PCB bộ điều khiển bay UAV/drone (4 lớp): GPS, IMU MPU6000, cảm biến khí áp, driver ESC motor, truyền thông telemetry cho ứng dụng bay tự hành.',
        en: 'Designed 4-layer UAV flight controller PCBs: Integrated GPS, MPU6000 IMU, Barometer, ESC motor drivers, and long-range telemetry for autonomous drones.',
      },
      {
        vi: 'Phát triển thư viện driver cảm biến & middleware cho: ToF (VL53L5CX), radar (60GHz mmWave), nhiệt độ/độ ẩm (SHT), đầu dò pH/DO/EC, cảm biến dòng/áp, màn hình OLED/TFT.',
        en: 'Developed sensor driver libraries & middleware for: ToF (VL53L5CX), 60GHz mmWave radar, SHT temp/humidity, pH/DO/EC probes, current/voltage sensors, OLED/TFT.',
      },
      {
        vi: 'Thực hiện debug & kiểm tra phần cứng bằng Oscilloscope, Logic Analyzer, CAN Analyzer, JTAG/SWD, Power Profiler — đảm bảo tuân thủ EMI/EMC và tính toàn vẹn tín hiệu.',
        en: 'Hardware debugging using Oscilloscope, Logic Analyzer, CAN Analyzer, JTAG/SWD, Power Profiler — ensuring signal integrity & EMI/EMC compliance.',
      },
      {
        vi: 'Xây dựng hạ tầng IoT Cloud full-stack (bổ trợ): Node.js/Express backend, MongoDB, MQTT Mosquitto broker, React Native app, và các Web Dashboard thời gian thực (musenplus.com, care.musenplus.com, sensor.musenplus.com, ai-box-plus.com).',
        en: 'Full-stack IoT Cloud infrastructure (supplementary): Node.js/Express, MongoDB, MQTT Mosquitto, React Native app, and real-time dashboards (musenplus.com, care.musenplus.com, sensor.musenplus.com, ai-box-plus.com).',
      },
    ],
    techStack: ['C/C++', 'FreeRTOS', 'ESP32/S3', 'STM32 (HAL/LL)', 'Altium 4-Layer PCB', 'CAN Bus', 'RS485/Modbus', 'LoRa', 'Edge AI', 'Quectel 4G', 'Node.js', 'MQTT'],
    companyUrl: 'https://care.musenplus.com',
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
      vi: 'Lập trình C/C++ đa nền tảng MCU: ESP32/S3, STM32 (HAL/LL), nRF52840, MSP430/432, Quectel 4G EC200U. Sử dụng FreeRTOS đa nhiệm, quản lý bộ nhớ, xử lý ngắt, DMA, watchdog timer và máy trạng thái tiết kiệm năng lượng.',
      en: 'Multi-platform C/C++ MCU programming: ESP32/S3, STM32 (HAL/LL), nRF52840, MSP430/432, Quectel 4G EC200U. FreeRTOS multi-tasking, memory management, interrupts, DMA, watchdog, low-power state machines.',
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

// ========== ALL 8 PROJECTS FROM CV ==========
export const projects: Project[] = [
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
    id: 'lora-fire-warning',
    title: 'Cảnh báo Cháy sớm LoRa Mesh (ĐH Cần Thơ)',
    category: 'IoT & Safety',
    period: '2022',
    summary: {
      vi: 'Mạng cảm biến LoRa mesh, hoạt động pin 15 ngày, giám sát nhiệt độ/khói, cloud MQTT, PCB tùy chỉnh, triển khai tại khuôn viên Đại học Cần Thơ.',
      en: 'LoRa mesh sensor network, 15-day battery autonomy, temperature/smoke monitoring, MQTT cloud, custom PCB, deployed at Can Tho University campus.',
    },
    description: {
      vi: 'Hệ thống mạng cảm biến LoRa Mesh phát hiện nguy cơ hỏa hoạn sớm tại các tòa nhà khuôn viên Đại học Cần Thơ. Các node cảm biến tự động chuyển tiếp dữ liệu mesh về trạm trung tâm.',
      en: 'LoRa Mesh sensor network for early fire hazard warning across Can Tho University campus buildings. Sensor nodes automatically relay mesh data to central gateway.',
    },
    longDescription: {
      vi: 'Phần cứng: PCB thiết kế riêng, quản lý nguồn tối ưu pin chạy 15 ngày liên tục không cần sạc. Firmware viết trên C++ hỗ trợ thuật toán định tuyến Mesh mạng LoRa.',
      en: 'Hardware: Custom PCB design with optimized power management for 15 days continuous battery operation. C++ firmware running LoRa Mesh routing algorithms.',
    },
    techStack: ['ESP32', 'LoRa Mesh', 'Altium PCB', 'Low-Power Battery Management', 'MQTT Cloud', 'Can Tho University'],
    features: [
      { vi: 'Mạng cảm biến tự hình thành cấu trúc LoRa Mesh linh hoạt', en: 'Self-forming flexible LoRa Mesh sensor network topology' },
      { vi: 'Tối ưu công suất nguồn cho thời lượng pin 15 ngày liên tục', en: 'Optimized power management for 15 days battery operation' },
      { vi: 'Triển khai thực tế tại khuôn viên Đại học Cần Thơ', en: 'Field deployment across Can Tho University campus' },
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
    title: { vi: 'Vi Điều Khiển (MCUs & Processors)', en: 'Microcontrollers (MCUs & CPUs)' },
    icon: 'fa-microchip',
    items: ['ESP32 / ESP32-S3', 'STM32 (HAL / LL)', 'Nordic nRF52840', 'Quectel EC200U (4G LTE)', 'MSP430 / MSP432', 'Raspberry Pi', 'Arduino AVR / SAMD'],
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
      vi: 'Trường Đại Học Cần Thơ (Can Tho University)',
      en: 'Can Tho University (CTU)',
    },
    degree: {
      vi: 'Kỹ Thuật Máy Tính — Chuyên ngành Hệ Thống Nhúng',
      en: 'Bachelor of Computer Engineering — Embedded Systems Specialization',
    },
    period: '08/2018 - 06/2022',
    description: {
      vi: 'Tốt nghiệp Kỹ sư Kỹ thuật Máy tính. Nghiên cứu chuyên sâu về Kiến trúc máy tính, Hệ thống Nhúng, Vi điều khiển ARM/AVR, Mạch điện tử viễn thông, Hệ điều hành thời gian thực (RTOS) và Mạng cảm biến không dây LoRa Mesh.',
      en: 'Graduated in Computer Engineering. Specializing in Computer Architecture, Embedded Systems, ARM/AVR Microcontrollers, Telecommunication Hardware, RTOS, and LoRa Mesh Wireless Sensor Networks.',
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
