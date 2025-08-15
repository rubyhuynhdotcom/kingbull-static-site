import heroImage from "@/assets/hero-aquaculture.jpg";

const StaticHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg">
      {/* Hero Content */}
      <div className="relative z-10 container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-fluid-4xl font-black text-white mb-4 leading-tight">
                <span className="text-gradient-gold block mb-2">KINGBULL</span>
                Đột phá tăng trưởng, dẫn đầu lợi nhuận
              </h1>
              <p className="text-fluid-xl text-white/90 font-medium max-w-2xl mx-auto lg:mx-0">
                Giải pháp toàn diện cho ngành thủy sản với công nghệ tiên tiến và dịch vụ chuyên nghiệp
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="card-glass p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-kb-blue/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Năng lực cung ứng lớn</h3>
                <p className="text-white/80 text-sm">Đảm bảo nguồn cung ổn định</p>
              </div>
              
              <div className="card-glass p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-kb-green/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Tối ưu lợi nhuận</h3>
                <p className="text-white/80 text-sm">FCR thấp, hiệu quả cao</p>
              </div>
              
              <div className="card-glass p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-kb-gold/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Hỗ trợ kỹ thuật 24/7</h3>
                <p className="text-white/80 text-sm">Tư vấn chuyên môn</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="btn-gold text-base px-8 py-4"
                onClick={() => window.location.hash = 'case-study'}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Xem Hồ sơ Dự án Thành công
              </button>
              
              <button 
                className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-base px-8 py-4"
                onClick={() => window.location.hash = 'contact'}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Liên hệ Hợp tác
              </button>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="KINGBULL - Trang trại thủy sản hiện đại với công nghệ tiên tiến"
                className="w-full h-auto aspect-video object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-white/80 text-sm">Năm kinh nghiệm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-white/80 text-sm">Trang trại đối tác</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-white/80 text-sm">Tỷ lệ hài lòng</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Awards */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-kb-gold rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;