const PDFLibrarySection = () => {
  const pdfLibrary = [
    {
      id: 1,
      title: "Hướng dẫn Tối ưu FCR cho Cá Tra",
      category: "Kỹ thuật nuôi",
      species: "Cá Tra",
      stage: "Toàn chu kỳ",
      description: "Phương pháp khoa học để giảm FCR xuống dưới 1.4, tăng lợi nhuận 25-30%. Bao gồm lịch cho ăn tối ưu, quản lý chất lượng nước và theo dõi tăng trọng.",
      pages: 45,
      downloadUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Phòng chống Bệnh EMS (AHPND) trên Tôm",
      category: "Phòng bệnh",
      species: "Tôm",
      stage: "Giai đoạn giống",
      description: "Chiến lược toàn diện phòng chống bệnh gan tụy cấp tính. Hướng dẫn sử dụng men vi sinh, quản lý môi trường và thức ăn chức năng.",
      pages: 32,
      downloadUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Quản lý Chất lượng Nước trong Nuôi Thâm canh",
      category: "Quản lý môi trường",
      species: "Đa loài",
      stage: "Toàn chu kỳ",
      description: "Hệ thống giám sát và xử lý nước thải, duy trì môi trường nuôi ổn định. Công nghệ biofloc và hệ thống lọc sinh học hiện đại.",
      pages: 58,
      downloadUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Tối ưu Vòng quay Vốn trong Nuôi Tôm",
      category: "Quản lý tài chính",
      species: "Tôm",
      stage: "Toàn chu kỳ",
      description: "Phân tích chi tiết cấu trúc chi phí, lập kế hoạch tài chính và tối ưu hóa dòng tiền. Mô hình ROI và break-even analysis.",
      pages: 28,
      downloadUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Thức ăn Chức năng cho Cá Basa",
      category: "Dinh dưỡng",
      species: "Cá Basa",
      stage: "Thương phẩm",
      description: "Công thức thức ăn bổ sung enzyme, vitamin và khoáng chất thiết yếu. Tăng cường miễn dịch và cải thiện chất lượng thịt cá.",
      pages: 24,
      downloadUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Kỹ thuật Nuôi Tôm Sinh thái",
      category: "Bền vững",
      species: "Tôm",
      stage: "Toàn chu kỳ",
      description: "Mô hình nuôi tôm thân thiện môi trường, giảm kháng sinh và hóa chất. Chứng nhận ASC và phát triển bền vững.",
      pages: 41,
      downloadUrl: "#",
      featured: false
    }
  ];

  const categories = ["Tất cả", "Kỹ thuật nuôi", "Phòng bệnh", "Quản lý môi trường", "Quản lý tài chính", "Dinh dưỡng", "Bền vững"];
  const species = ["Tất cả", "Cá Tra", "Tôm", "Cá Basa", "Đa loài"];
  const stages = ["Tất cả", "Giai đoạn giống", "Toàn chu kỳ", "Thương phẩm"];

  return (
    <section id="library" className="py-fluid-24 bg-background">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Thư viện Chuyên sâu
          </div>
          <h2 className="text-fluid-3xl font-black text-foreground mb-4">
            <span className="text-gradient-brand">Thư viện Kỹ thuật</span> Chuyên sâu
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Tài liệu kỹ thuật toàn diện từ các chuyên gia hàng đầu, giúp tối ưu FCR, phòng bệnh và quản lý trang trại hiệu quả
          </p>
        </div>

        {/* Filters Section */}
        <div className="lg:hidden mb-8">
          {/* Mobile Accordion Filters */}
          <div className="card-elevated">
            <button 
              className="w-full p-4 flex items-center justify-between text-left font-semibold focus-ring"
              onClick={() => {
                const content = document.getElementById('mobile-filters');
                const icon = document.getElementById('filter-icon');
                if (content && icon) {
                  content.classList.toggle('hidden');
                  icon.classList.toggle('rotate-180');
                }
              }}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                Bộ lọc tài liệu
              </span>
              <svg id="filter-icon" className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div id="mobile-filters" className="hidden p-4 border-t border-border space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Danh mục</label>
                <select className="w-full p-3 border border-border rounded-lg focus-ring">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Loài nuôi</label>
                <select className="w-full p-3 border border-border rounded-lg focus-ring">
                  {species.map(sp => (
                    <option key={sp} value={sp}>{sp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Giai đoạn</label>
                <select className="w-full p-3 border border-border rounded-lg focus-ring">
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="card-elevated p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-foreground">Bộ lọc</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Danh mục</label>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center cursor-pointer">
                        <input type="radio" name="category" value={cat} className="sr-only" />
                        <div className="w-4 h-4 border-2 border-border rounded-full mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full hidden"></div>
                        </div>
                        <span className="text-sm text-muted-foreground hover:text-foreground">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Loài nuôi</label>
                  <div className="space-y-2">
                    {species.map(sp => (
                      <label key={sp} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 border-2 border-border rounded mr-3 focus-ring" />
                        <span className="text-sm text-muted-foreground hover:text-foreground">{sp}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Giai đoạn</label>
                  <div className="space-y-2">
                    {stages.map(stage => (
                      <label key={stage} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 border-2 border-border rounded mr-3 focus-ring" />
                        <span className="text-sm text-muted-foreground hover:text-foreground">{stage}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Library Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pdfLibrary.map((pdf) => (
                <div key={pdf.id} className={`card-elevated group hover:shadow-lg transition-all duration-300 ${pdf.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {pdf.featured && (
                          <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            Nổi bật
                          </span>
                        )}
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                          {pdf.title}
                        </h3>
                      </div>
                      
                      <div className="ml-4 text-right">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16Z" />
                          </svg>
                        </div>
                        <span className="text-xs text-muted-foreground">{pdf.pages} trang</span>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                        {pdf.category}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {pdf.species}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                        {pdf.stage}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {pdf.description}
                    </p>
                    
                    {/* Download Button */}
                    <button 
                      className="w-full btn-primary group-hover:shadow-brand"
                      onClick={() => {
                        // Mock download
                        console.log(`Downloading: ${pdf.title}`);
                      }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Tải xuống PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary px-8 py-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Xem thêm tài liệu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFLibrarySection;