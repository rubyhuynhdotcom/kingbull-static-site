// KINGBULL Insight Hub - Static Data
// All dummy data for the static site

// Case Studies Data
const caseStudies = [
  {
    id: 1,
    title: "Trang trại cá tra Minh Hòa",
    species: "Cá tra",
    area: "5 hecta",
    duration: "8 tháng",
    production: "45 tấn",
    fcr: "1.4",
    profit: "35%",
    image: "./assets/fish-pond.jpg",
    location: "An Giang",
    description: "Dự án nuôi cá tra thành công với FCR tối ưu và lợi nhuận cao",
    details: {
      investment: "800 triệu VNĐ",
      revenue: "1.08 tỷ VNĐ",
      netProfit: "280 triệu VNĐ",
      feedUsed: "63 tấn",
      mortalityRate: "3%",
      testimonial: "Sử dụng thức ăn KINGBULL giúp tôi giảm được 20% chi phí thức ăn và tăng 35% lợi nhuận so với năm trước."
    }
  },
  {
    id: 2,
    title: "Trang trại tôm sú Phước Thành",
    species: "Tôm sú",
    area: "2.5 hecta",
    duration: "4 tháng",
    production: "12 tấn",
    fcr: "1.2",
    profit: "42%",
    image: "./assets/technician.jpg",
    location: "Cà Mau",
    description: "Nuôi tôm sú thâm canh với mật độ cao và hiệu quả vượt trội",
    details: {
      investment: "450 triệu VNĐ",
      revenue: "640 triệu VNĐ",
      netProfit: "190 triệu VNĐ",
      feedUsed: "14.4 tấn",
      mortalityRate: "5%",
      testimonial: "Thức ăn KINGBULL giúp tôm phát triển đều, giảm thiểu bệnh tật và tăng tỷ lệ sống."
    }
  },
  {
    id: 3,
    title: "Trang trại cá basa Tân Phú",
    species: "Cá basa",
    area: "3 hecta",
    duration: "6 tháng",
    production: "28 tấn",
    fcr: "1.3",
    profit: "38%",
    image: "./assets/factory-interior.jpg",
    location: "Đồng Tháp",
    description: "Mô hình nuôi cá basa tích hợp công nghệ và quản lý hiện đại",
    details: {
      investment: "600 triệu VNĐ",
      revenue: "828 triệu VNĐ",
      netProfit: "228 triệu VNĐ",
      feedUsed: "36.4 tấn",
      mortalityRate: "4%",
      testimonial: "Hệ thống tư vấn kỹ thuật 24/7 của KINGBULL rất hữu ích, giúp tôi xử lý kịp thời các vấn đề phát sinh."
    }
  }
];

// PDF Library Data
const pdfLibrary = [
  {
    id: 1,
    title: "Tối ưu FCR cho cá tra thương phẩm",
    category: "ca-tra",
    tags: ["fcr", "ca-tra"],
    description: "Hướng dẫn chi tiết cách tối ưu hệ số chuyển đổi thức ăn cho cá tra từ 3-6 tháng tuổi. Bao gồm công thức thức ăn, lịch cho ăn và phương pháp đánh giá.",
    downloadUrl: "#",
    size: "2.3 MB",
    pages: 24,
    language: "Vietnamese",
    updated: "2024-01-15"
  },
  {
    id: 2,
    title: "Quản lý chất lượng nước nuôi tôm",
    category: "tom",
    tags: ["tom", "nuoc"],
    description: "Kỹ thuật quản lý môi trường nước trong nuôi tôm thâm canh. Hướng dẫn xử lý nước, kiểm soát pH, độ kiềm và vi sinh vật có hại.",
    downloadUrl: "#",
    size: "1.8 MB",
    pages: 18,
    language: "Vietnamese",
    updated: "2024-01-10"
  },
  {
    id: 3,
    title: "Phòng chống bệnh gan tụy cấp tính trên tôm",
    category: "tom",
    tags: ["tom", "benh-tat"],
    description: "Biện pháp phòng ngừa và điều trị bệnh gan tụy cấp tính (AHPND) trên tôm nuôi. Bao gồm triệu chứng, nguyên nhân và phương pháp xử lý hiệu quả.",
    downloadUrl: "#",
    size: "3.1 MB",
    pages: 32,
    language: "Vietnamese",
    updated: "2024-01-08"
  },
  {
    id: 4,
    title: "Kỹ thuật nuôi cá basa sinh trưởng nhanh",
    category: "ca-basa",
    tags: ["ca-basa", "sinh-truong"],
    description: "Quy trình nuôi cá basa thâm canh với tốc độ sinh trưởng tối ưu. Hướng dẫn từ ương giống đến thành phẩm, đạt kích cỡ xuất bán sớm 20%.",
    downloadUrl: "#",
    size: "2.7 MB",
    pages: 28,
    language: "Vietnamese",
    updated: "2024-01-05"
  },
  {
    id: 5,
    title: "Tối ưu vòng quay vốn trong nuôi trồng thủy sản",
    category: "fcr",
    tags: ["fcr", "kinh-te"],
    description: "Phân tích chi phí - lợi ích và cách tối ưu vòng quay vốn trong các mô hình nuôi trồng thủy sản. Bao gồm bảng tính toán ROI chi tiết.",
    downloadUrl: "#",
    size: "1.5 MB",
    pages: 16,
    language: "Vietnamese",
    updated: "2024-01-02"
  },
  {
    id: 6,
    title: "Quy trình sản xuất thức ăn công nghiệp",
    category: "fcr",
    tags: ["fcr", "san-xuat"],
    description: "Tổng quan quy trình sản xuất thức ăn thủy sản công nghiệp của KINGBULL. Từ nguyên liệu đầu vào đến sản phẩm hoàn thiện, đảm bảo chất lượng.",
    downloadUrl: "#",
    size: "4.2 MB",
    pages: 36,
    language: "Vietnamese",
    updated: "2023-12-28"
  }
];

// Supply Map Points
const supplyMapPoints = [
  {
    id: 1,
    name: "Nhà máy chính - Cần Thơ",
    type: "factory",
    lat: 10.0452,
    lng: 105.7469,
    capacity: "50,000 tấn/năm",
    products: ["Thức ăn cá tra", "Thức ăn cá basa", "Thức ăn tôm"],
    deliveryTime: "Trong ngày",
    status: "active"
  },
  {
    id: 2,
    name: "Kho phân phối An Giang",
    type: "warehouse",
    lat: 10.5211,
    lng: 105.1258,
    capacity: "5,000 tấn",
    products: ["Thức ăn cá tra", "Thức ăn cá basa"],
    deliveryTime: "1-2 ngày",
    status: "active"
  },
  {
    id: 3,
    name: "Kho phân phối Đồng Tháp",
    type: "warehouse",
    lat: 10.4938,
    lng: 105.6881,
    capacity: "3,000 tấn",
    products: ["Thức ăn cá tra", "Thức ăn cá basa"],
    deliveryTime: "1-2 ngày",
    status: "active"
  },
  {
    id: 4,
    name: "Kho phân phối Cà Mau",
    type: "warehouse",
    lat: 9.1526,
    lng: 105.1544,
    capacity: "2,000 tấn",
    products: ["Thức ăn tôm"],
    deliveryTime: "2-3 ngày",
    status: "active"
  }
];

// News Articles
const newsArticles = [
  {
    id: 1,
    title: "Giá cá tra xuất khẩu tăng mạnh trong quý 1/2024",
    excerpt: "Giá cá tra xuất khẩu đạt mức cao nhất trong 2 năm qua, tạo động lực cho ngành nuôi trồng thủy sản Việt Nam.",
    content: "Theo báo cáo từ Hiệp hội Chế biến và Xuất khẩu Thủy sản Việt Nam (VASEP), giá cá tra xuất khẩu trong quý 1/2024 đã tăng 25% so với cùng kỳ năm trước...",
    category: "Thị trường",
    date: "2024-01-15",
    author: "Phòng Phân tích Thị trường",
    tags: ["ca-tra", "xuat-khau", "gia-ca"],
    featured: true,
    image: "./assets/fish-pond.jpg"
  },
  {
    id: 2,
    title: "Công nghệ AI trong nuôi trồng thủy sản",
    excerpt: "Ứng dụng trí tuệ nhân tạo đang thay đổi cách thức nuôi trồng thủy sản, giúp tối ưu hiệu quả và giảm thiểu rủi ro.",
    content: "Trong bối cảnh công nghệ 4.0 phát triển mạnh mẽ, ngành nuôi trồng thủy sản Việt Nam đang từng bước áp dụng các giải pháp AI...",
    category: "Công nghệ",
    date: "2024-01-12",
    author: "Phòng R&D",
    tags: ["cong-nghe", "ai", "nuoi-trong"],
    featured: false,
    image: "./assets/technician.jpg"
  },
  {
    id: 3,
    title: "Dự báo thị trường thức ăn thủy sản 2024",
    excerpt: "Thị trường thức ăn thủy sản Việt Nam dự kiến tăng trưởng 15-20% trong năm 2024 nhờ sự phục hồi của ngành nuôi trồng.",
    content: "Theo nghiên cứu thị trường mới nhất, ngành thức ăn thủy sản Việt Nam đang có những tín hiệu tích cực...",
    category: "Phân tích",
    date: "2024-01-08",
    author: "Phòng Chiến lược",
    tags: ["thi-truong", "thuc-an", "du-bao"],
    featured: true,
    image: "./assets/factory-interior.jpg"
  }
];

// Technical Staff by Region
const technicalStaff = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    position: "Kỹ thuật viên trưởng",
    region: "Đồng bằng sông Cửu Long",
    phone: "0909.123.456",
    email: "an.nguyen@kingbull.com.vn",
    specialization: ["Cá tra", "Cá basa"],
    experience: "8 năm"
  },
  {
    id: 2,
    name: "Trần Thị Bích",
    position: "Chuyên gia tôm",
    region: "Miền Tây Nam Bộ",
    phone: "0909.789.012",
    email: "bich.tran@kingbull.com.vn",
    specialization: ["Tôm sú", "Tôm thẻ chân trắng"],
    experience: "6 năm"
  },
  {
    id: 3,
    name: "Lê Minh Đức",
    position: "Kỹ thuật viên",
    region: "Đông Nam Bộ",
    phone: "0909.345.678",
    email: "duc.le@kingbull.com.vn",
    specialization: ["Cá tra", "Tôm"],
    experience: "4 năm"
  }
];

// R&D Projects
const rdProjects = [
  {
    id: 1,
    title: "Phát triển thức ăn sinh học cho cá tra",
    description: "Nghiên cứu và phát triển dòng thức ăn bổ sung probiotic nhằm tăng cường miễn dịch và giảm tỷ lệ bệnh cho cá tra.",
    status: "Đang triển khai",
    partners: ["Trường ĐH Cần Thơ", "Viện NCƯD"],
    timeline: "12 tháng",
    budget: "2.5 tỷ VNĐ",
    expectedResults: "Giảm 30% tỷ lệ bệnh, tăng 15% tốc độ sinh trưởng"
  },
  {
    id: 2,
    title: "Tối ưu công thức thức ăn cho tôm sinh thái",
    description: "Phát triển công thức thức ăn thân thiện môi trường cho mô hình nuôi tôm sinh thái, giảm thiểu tác động đến hệ sinh thái.",
    status: "Hoàn thành giai đoạn 1",
    partners: ["Viện KH&CN Việt Nam", "WWF Việt Nam"],
    timeline: "18 tháng",
    budget: "3.8 tỷ VNĐ",
    expectedResults: "Giảm 40% chất thải, duy trì FCR < 1.3"
  }
];

// Export all data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    caseStudies,
    pdfLibrary,
    supplyMapPoints,
    newsArticles,
    technicalStaff,
    rdProjects
  };
} else {
  // For browser environment
  window.AppData = {
    caseStudies,
    pdfLibrary,
    supplyMapPoints,
    newsArticles,
    technicalStaff,
    rdProjects
  };
}