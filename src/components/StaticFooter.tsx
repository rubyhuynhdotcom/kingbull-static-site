const StaticFooter = () => {
  return (
    <footer className="bg-foreground text-white py-fluid-16">
      <div className="container-fluid">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-gradient-gold mb-2">KINGBULL</h3>
              <p className="text-white/80 text-lg font-medium mb-4">
                Đột phá tăng trưởng, dẫn đầu lợi nhuận
              </p>
              <p className="text-white/70 leading-relaxed">
                KINGBULL là đối tác tin cậy trong việc cung cấp giải pháp toàn diện cho ngành thủy sản Việt Nam. 
                Với 15+ năm kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-kb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <div className="font-semibold">CÔNG TY TNHH KINGBULL VIỆT NAM</div>
                  <div className="text-white/70 text-sm">MST: 1801608521</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-kb-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white/80">
                  Tầng 6, số 41, Cách Mạng Tháng Tám,<br />
                  Phường Cái Khế, TP Cần Thơ, Việt Nam
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-kb-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admin@kingbull.com.vn" className="text-white/80 hover:text-white transition-colors">
                  admin@kingbull.com.vn
                </a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-kb-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0587085649" className="text-xl font-bold text-kb-gold hover:text-white transition-colors">
                  058.708.5649
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Liên kết nhanh</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-white/70 hover:text-white transition-colors">Trang chủ</a>
              <a href="#case-study" className="block text-white/70 hover:text-white transition-colors">Dự án Thành công</a>
              <a href="#library" className="block text-white/70 hover:text-white transition-colors">Thư viện Kỹ thuật</a>
              <a href="#video" className="block text-white/70 hover:text-white transition-colors">Video Sản xuất</a>
              <a href="#portal" className="block text-white/70 hover:text-white transition-colors">Đại lý Portal</a>
              <a href="#map" className="block text-white/70 hover:text-white transition-colors">Bản đồ Cung ứng</a>
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Dịch vụ</h4>
            <nav className="space-y-3">
              <a href="#support" className="block text-white/70 hover:text-white transition-colors">Hỗ trợ 24/7</a>
              <a href="#logistics" className="block text-white/70 hover:text-white transition-colors">Tính Logistics</a>
              <a href="#news" className="block text-white/70 hover:text-white transition-colors">Tin tức Ngành</a>
              <a href="#rd" className="block text-white/70 hover:text-white transition-colors">Hợp tác R&D</a>
              <a href="#contact" className="block text-white/70 hover:text-white transition-colors">Liên hệ</a>
            </nav>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-white">Theo dõi chúng tôi</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-kb-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-kb-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-kb-green transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-kb-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 KINGBULL Vietnam. Bảo lưu mọi quyền.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Chính sách Bảo mật</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Điều khoản Sử dụng</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Chính sách Cookie</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Certificates */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-white/60 text-sm mb-4">Chứng nhận và Giải thưởng</div>
              <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
                <div className="text-xs bg-white/10 px-3 py-1 rounded">ISO 9001:2015</div>
                <div className="text-xs bg-white/10 px-3 py-1 rounded">HACCP</div>
                <div className="text-xs bg-white/10 px-3 py-1 rounded">GlobalGAP</div>
                <div className="text-xs bg-white/10 px-3 py-1 rounded">ASC Certified</div>
                <div className="text-xs bg-white/10 px-3 py-1 rounded">Vietnam Quality 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StaticFooter;