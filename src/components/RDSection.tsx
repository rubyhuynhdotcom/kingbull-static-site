const RDSection = () => {
  const partnerships = [
    {
      type: "Viện nghiên cứu",
      name: "Viện Nghiên cứu Nuôi trồng Thủy sản I",
      focus: "Nghiên cứu giống mới, tối ưu thức ăn",
      results: "5 dòng giống cải tiến, FCR giảm 0.3"
    },
    {
      type: "Đại học",
      name: "Đại học Cần Thơ - Khoa Thủy sản",
      focus: "Phát triển công nghệ nuôi bền vững",
      results: "3 bằng sáng chế, 12 công trình khoa học"
    },
    {
      type: "Trại thử nghiệm",
      name: "Mạng lưới 15 trại pilot",
      focus: "Thử nghiệm thực địa quy mô thương mại",
      results: "Tăng năng suất 25%, giảm chi phí 18%"
    }
  ];

  return (
    <section id="rd" className="py-fluid-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Chương trình Hợp tác R&D
          </h2>
          <p className="text-fluid-lg text-gray-300 max-w-3xl mx-auto">
            Đẩy mạnh nghiên cứu và phát triển để dẫn đầu công nghệ thủy sản tương lai
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-16">
          {/* Partnership Types */}
          <div className="space-y-fluid-6">
            <h3 className="text-fluid-2xl font-bold mb-fluid-6">Đối tác Nghiên cứu</h3>
            
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-fluid-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-yellow-500 text-gray-900 text-xs font-bold rounded">
                        {partner.type}
                      </span>
                    </div>
                    <h4 className="font-bold text-fluid-lg mb-2">{partner.name}</h4>
                    <p className="text-gray-300 text-fluid-sm mb-2">{partner.focus}</p>
                    <p className="text-yellow-400 text-fluid-sm font-medium">
                      Kết quả: {partner.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-8 border border-white/20">
            <h3 className="text-fluid-2xl font-bold mb-fluid-6 text-center">Đăng ký Hợp tác R&D</h3>
            
            <form className="space-y-fluid-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tên tổ chức</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Trường/Viện/Công ty"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Loại hình hợp tác</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                    <option value="">Chọn loại hình</option>
                    <option value="research">Nghiên cứu cơ bản</option>
                    <option value="development">Phát triển sản phẩm</option>
                    <option value="pilot">Thử nghiệm pilot</option>
                    <option value="commercial">Ứng dụng thương mại</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email liên hệ</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="research@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Lĩnh vực quan tâm</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Giống mới', 'Thức ăn', 'Công nghệ nuôi', 'Bảo vệ môi trường', 'AI/IoT', 'Khác'].map((field, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-white/30 bg-white/10 text-yellow-400 focus:ring-yellow-400" />
                      <span className="text-sm">{field}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mô tả dự án/ý tưởng</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent h-32 resize-none"
                  placeholder="Mô tả chi tiết về dự án nghiên cứu mà bạn muốn hợp tác..."
                />
              </div>
              
              <div className="flex items-center space-x-2 mb-fluid-4">
                <input type="checkbox" className="rounded border-white/30 bg-white/10 text-yellow-400 focus:ring-yellow-400" />
                <span className="text-sm text-gray-300">
                  Tôi đồng ý với chính sách bảo mật thông tin nghiên cứu
                </span>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Gửi đề xuất hợp tác
              </button>
            </form>
          </div>
        </div>

        {/* R&D Stats */}
        <div className="mt-fluid-16 grid grid-cols-1 md:grid-cols-4 gap-fluid-6">
          <div className="text-center p-fluid-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-400/30">
            <div className="text-fluid-2xl font-black text-yellow-400 mb-2">15+</div>
            <div className="text-fluid-sm text-gray-300">Dự án R&D hoạt động</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-400/30">
            <div className="text-fluid-2xl font-black text-yellow-400 mb-2">50B+</div>
            <div className="text-fluid-sm text-gray-300">Đầu tư R&D (VNĐ)</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
            <div className="text-fluid-2xl font-black text-yellow-400 mb-2">8</div>
            <div className="text-fluid-sm text-gray-300">Bằng sáng chế</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-400/30">
            <div className="text-fluid-2xl font-black text-yellow-400 mb-2">25</div>
            <div className="text-fluid-sm text-gray-300">Đối tác khoa học</div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mt-fluid-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-fluid-8 border border-indigo-400/30">
          <h3 className="text-fluid-2xl font-bold mb-fluid-6 text-center">Đổi mới Công nghệ Nổi bật</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-6">
            <div className="text-center p-fluid-4 bg-white/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto mb-fluid-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-fluid-lg mb-2">AI Monitoring</h4>
              <p className="text-gray-300 text-fluid-sm">Giám sát tự động chất lượng nước 24/7</p>
            </div>
            
            <div className="text-center p-fluid-4 bg-white/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-fluid-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-fluid-lg mb-2">Biofloc Pro</h4>
              <p className="text-gray-300 text-fluid-sm">Công nghệ vi sinh vật cải tiến</p>
            </div>
            
            <div className="text-center p-fluid-4 bg-white/5 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-fluid-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6.5A1.5 1.5 0 0114.5 13H14v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1h-.5A1.5 1.5 0 014 11.5V5zM12 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-fluid-lg mb-2">Smart Feed</h4>
              <p className="text-gray-300 text-fluid-sm">Thức ăn thông minh phản ứng với môi trường</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RDSection;