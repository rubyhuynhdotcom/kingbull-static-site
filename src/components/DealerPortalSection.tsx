const DealerPortalSection = () => {
  return (
    <section id="portal" className="py-fluid-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-kb-gold to-yellow-400 bg-clip-text text-transparent">
            Khu vực Dành cho Đại lý & Trang trại
          </h2>
          <p className="text-fluid-lg text-gray-300 max-w-3xl mx-auto">
            Hệ thống quản lý chuyên biệt với đầy đủ công cụ hỗ trợ kinh doanh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-16 items-center">
          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-8 border border-white/20">
            <h3 className="text-fluid-2xl font-bold mb-fluid-6 text-center">Đăng nhập Portal</h3>
            
            <form className="space-y-fluid-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email đăng nhập</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-gold focus:border-transparent"
                  placeholder="dealer@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mã đối tác</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-gold focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-kb-gold to-yellow-500 text-gray-900 font-bold rounded-lg hover:from-yellow-500 hover:to-kb-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Đăng nhập Portal
              </button>
            </form>
            
            <div className="mt-fluid-6 text-center">
              <a href="#" className="text-kb-gold hover:text-yellow-400 text-sm">
                Quên mật khẩu? | Đăng ký đối tác mới
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-fluid-6">
            <div className="flex items-start space-x-4 p-fluid-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-fluid-lg mb-2">Bảng giá Số lượng lớn</h4>
                <p className="text-gray-300 text-fluid-sm">Giá ưu đãi theo từng tier, chính sách chiết khấu linh hoạt</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-fluid-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-fluid-lg mb-2">Tài liệu Huấn luyện</h4>
                <p className="text-gray-300 text-fluid-sm">Video training, tài liệu kỹ thuật độc quyền cho đối tác</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-fluid-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-fluid-lg mb-2">Theo dõi Đơn hàng</h4>
                <p className="text-gray-300 text-fluid-sm">Hệ thống tracking real-time, báo cáo doanh số chi tiết</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-fluid-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-fluid-lg mb-2">Hỗ trợ Chuyên biệt</h4>
                <p className="text-gray-300 text-fluid-sm">Account manager riêng, tư vấn 1-1 với chuyên gia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Stats */}
        <div className="mt-fluid-16 grid grid-cols-1 md:grid-cols-3 gap-fluid-6">
          <div className="text-center p-fluid-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-400/30">
            <div className="text-fluid-2xl font-black text-kb-gold mb-2">200+</div>
            <div className="text-fluid-sm text-gray-300">Đối tác đang hoạt động</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-400/30">
            <div className="text-fluid-2xl font-black text-kb-gold mb-2">99.8%</div>
            <div className="text-fluid-sm text-gray-300">Uptime hệ thống</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
            <div className="text-fluid-2xl font-black text-kb-gold mb-2">24/7</div>
            <div className="text-fluid-sm text-gray-300">Hỗ trợ kỹ thuật</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerPortalSection;