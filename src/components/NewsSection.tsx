const NewsSection = () => {
  const news = [
    {
      title: "Xuất khẩu tôm Việt Nam tăng trưởng mạnh mẽ Q4/2024",
      summary: "Kim ngạch xuất khẩu tôm đạt kỷ lục 4.2 tỷ USD, tăng 15% so với cùng kỳ năm trước...",
      category: "Thị trường",
      date: "15/01/2025",
      featured: true,
      tag: "Nổi bật"
    },
    {
      title: "Công nghệ RAS - Tương lai của nuôi tôm bền vững",
      summary: "Hệ thống tuần hoàn khép kín giúp tối ưu hóa môi trường nuôi và giảm thiểu rủi ro...",
      category: "Công nghệ",
      date: "12/01/2025",
      featured: false,
      tag: "Mới"
    },
    {
      title: "Dự báo giá thức ăn thủy sản năm 2025",
      summary: "Giá nguyên liệu đầu vào dự kiến ổn định, tạo cơ hội cho người nuôi tối ưu chi phí...",
      category: "Giá cả",
      date: "10/01/2025",
      featured: false,
      tag: "Phân tích"
    },
    {
      title: "Khuyến cáo phòng chống bệnh đốm trắng mùa khô",
      summary: "Thời tiết khô hanh làm tăng nguy cơ bùng phát dịch bệnh, cần chủ động phòng ngừa...",
      category: "Kỹ thuật",
      date: "08/01/2025",
      featured: false,
      tag: "Cảnh báo"
    },
    {
      title: "Hội nghị Thủy sản Việt Nam 2025 sẽ diễn ra tại TP.HCM",
      summary: "Sự kiện quy tụ các chuyên gia hàng đầu thảo luận về xu hướng ngành thủy sản...",
      category: "Sự kiện",
      date: "05/01/2025",
      featured: false,
      tag: "Sự kiện"
    },
    {
      title: "Chương trình hỗ trợ nông dân chuyển đổi số trong nuôi trồng",
      summary: "Chính phủ triển khai gói hỗ trợ 500 tỷ VNĐ cho chuyển đổi số ngành thủy sản...",
      category: "Chính sách",
      date: "03/01/2025",
      featured: false,
      tag: "Chính sách"
    }
  ];

  const categories = ["Tất cả", "Thị trường", "Công nghệ", "Giá cả", "Kỹ thuật", "Sự kiện", "Chính sách"];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Nổi bật": return "from-red-500 to-pink-500";
      case "Mới": return "from-green-500 to-emerald-500";
      case "Phân tích": return "from-blue-500 to-cyan-500";
      case "Cảnh báo": return "from-orange-500 to-yellow-500";
      case "Sự kiện": return "from-purple-500 to-indigo-500";
      case "Chính sách": return "from-gray-600 to-gray-700";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="news" className="py-fluid-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-kb-blue to-teal-600 bg-clip-text text-transparent">
            Tin tức Ngành & Phân tích Thị trường
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Cập nhật liên tục các thông tin mới nhất về thị trường thủy sản Việt Nam và thế giới
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-fluid-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-fluid-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-kb-blue text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-kb-blue hover:text-white border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-kb-blue to-teal-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="p-fluid-6">
                  <div className="flex items-center justify-between mb-fluid-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getTagColor(news[0].tag)} text-white text-xs font-bold rounded-full`}>
                      {news[0].tag}
                    </span>
                    <span className="text-sm text-muted-foreground">{news[0].date}</span>
                  </div>
                  
                  <h3 className="text-fluid-xl font-bold mb-fluid-3 group-hover:text-kb-blue transition-colors">
                    {news[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground text-fluid-sm mb-fluid-4 line-clamp-3">
                    {news[0].summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-kb-blue bg-kb-blue/10 px-3 py-1 rounded-full">
                      {news[0].category}
                    </span>
                    <button className="text-kb-blue hover:text-kb-blue/80 font-medium text-sm">
                      Đọc thêm →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-fluid-4">
            {news.slice(1).map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-fluid-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getTagColor(article.tag)} text-white text-xs font-bold rounded`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  
                  <h4 className="font-bold text-fluid-sm mb-2 group-hover:text-kb-blue transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-kb-blue bg-kb-blue/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <button className="text-kb-blue hover:text-kb-blue/80 font-medium text-xs">
                      Xem →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Analysis Widget */}
        <div className="mt-fluid-16 bg-gradient-to-r from-kb-blue to-teal-600 rounded-2xl p-fluid-8 text-white">
          <h3 className="text-fluid-2xl font-bold mb-fluid-6 text-center">Phân tích Thị trường Thời gian thực</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-fluid-6">
            <div className="text-center p-fluid-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-fluid-2xl font-black text-yellow-400 mb-2">125,000₫</div>
              <div className="text-sm opacity-90">Tôm sú 30 con/kg</div>
              <div className="text-xs text-green-400 mt-1">↗ +5.2%</div>
            </div>
            
            <div className="text-center p-fluid-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-fluid-2xl font-black text-yellow-400 mb-2">32,500₫</div>
              <div className="text-sm opacity-90">Cá tra 800-1kg</div>
              <div className="text-xs text-green-400 mt-1">↗ +2.1%</div>
            </div>
            
            <div className="text-center p-fluid-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-fluid-2xl font-black text-yellow-400 mb-2">18,200₫</div>
              <div className="text-sm opacity-90">Thức ăn TC (bao)</div>
              <div className="text-xs text-red-400 mt-1">↘ -1.5%</div>
            </div>
            
            <div className="text-center p-fluid-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-fluid-2xl font-black text-yellow-400 mb-2">4.2B$</div>
              <div className="text-sm opacity-90">Kim ngạch xuất khẩu</div>
              <div className="text-xs text-green-400 mt-1">↗ +15%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;