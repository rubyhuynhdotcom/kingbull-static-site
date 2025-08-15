import fishPondImage from "@/assets/fish-pond.jpg";

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Trang trại Cá Tra - An Giang",
      location: "Tân Châu, An Giang",
      area: "15 hecta",
      species: "Cá Tra",
      duration: "8 tháng",
      yield: "450 tấn",
      fcr: "1.45",
      profit: "2.8 tỷ VNĐ",
      profitMargin: "35%",
      image: fishPondImage
    },
    {
      id: 2,
      title: "Trang trại Tôm Thẻ Chân Trắng - Cà Mau",
      location: "Năm Căn, Cà Mau", 
      area: "25 hecta",
      species: "Tôm Thẻ Chân Trắng",
      duration: "3.5 tháng",
      yield: "125 tấn",
      fcr: "1.18",
      profit: "4.2 tỷ VNĐ",
      profitMargin: "42%",
      image: fishPondImage
    },
    {
      id: 3,
      title: "Trang trại Cá Basa - Đồng Tháp",
      location: "Cao Lãnh, Đồng Tháp",
      area: "20 hecta", 
      species: "Cá Basa",
      duration: "10 tháng",
      yield: "380 tấn",
      fcr: "1.52",
      profit: "2.1 tỷ VNĐ",
      profitMargin: "28%",
      image: fishPondImage
    }
  ];

  return (
    <section id="case-study" className="py-fluid-24 bg-muted/30">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Dự án Thành công
          </div>
          <h2 className="text-fluid-3xl font-black text-foreground mb-4">
            Hồ sơ <span className="text-gradient-brand">Dự án Nuôi Thành công</span>
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Khám phá những câu chuyện thành công thực tế từ các trang trại đối tác sử dụng sản phẩm và dịch vụ của KINGBULL
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid-case-study mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="card-elevated group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={study.image}
                  alt={`${study.title} - Dự án nuôi ${study.species} thành công`}
                  className="w-full aspect-4-3 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {study.species}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-kb-gold text-gray-900 text-xs font-semibold rounded-full">
                    +{study.profitMargin} Lợi nhuận
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {study.location}
                </p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{study.area}</div>
                    <div className="text-xs text-muted-foreground">Diện tích</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{study.duration}</div>
                    <div className="text-xs text-muted-foreground">Thời gian</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-lg font-bold text-accent">{study.yield}</div>
                    <div className="text-xs text-muted-foreground">Sản lượng</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">FCR {study.fcr}</div>
                    <div className="text-xs text-muted-foreground">Hiệu suất</div>
                  </div>
                </div>
                
                {/* Profit Highlight */}
                <div className="text-center p-4 bg-gradient-brand rounded-lg text-white">
                  <div className="text-2xl font-bold">{study.profit}</div>
                  <div className="text-sm opacity-90">Lợi nhuận thuần</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Analysis Table */}
        <div className="card-elevated overflow-hidden mb-8">
          <div className="p-6 bg-primary text-white">
            <h3 className="text-xl font-bold mb-2">Phân tích ROI Chi tiết</h3>
            <p className="opacity-90">So sánh hiệu quả đầu tư giữa các dự án</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Dự án</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Vốn đầu tư</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Doanh thu</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Chi phí thức ăn</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">FCR</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Lợi nhuận</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/20">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Cá Tra - An Giang</div>
                    <div className="text-sm text-muted-foreground">450 tấn / 8 tháng</div>
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">8.0 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">10.8 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">4.2 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-accent/20 text-accent text-sm font-medium rounded">
                      1.45
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-accent">2.8 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-kb-gold/20 text-kb-gold text-sm font-bold rounded">
                      35%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Tôm - Cà Mau</div>
                    <div className="text-sm text-muted-foreground">125 tấn / 3.5 tháng</div>
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">10.0 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">14.2 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">5.8 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-primary/20 text-primary text-sm font-medium rounded">
                      1.18
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-accent">4.2 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-kb-gold/20 text-kb-gold text-sm font-bold rounded">
                      42%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Cá Basa - Đồng Tháp</div>
                    <div className="text-sm text-muted-foreground">380 tấn / 10 tháng</div>
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">7.5 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">9.6 tỷ</td>
                  <td className="px-6 py-4 text-center text-foreground">3.8 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-accent/20 text-accent text-sm font-medium rounded">
                      1.52
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-accent">2.1 tỷ</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-kb-gold/20 text-kb-gold text-sm font-bold rounded">
                      28%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-primary px-8 py-4"
              onClick={() => window.location.hash = 'library'}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Tải Tài liệu Kỹ thuật
            </button>
            <button 
              className="btn-accent px-8 py-4"
              onClick={() => window.location.hash = 'support'}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Tư vấn Miễn phí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;