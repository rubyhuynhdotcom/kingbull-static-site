const ContactSection = () => {
  const offices = [
    {
      name: "Trụ sở chính",
      address: "Tầng 6, số 41, Cách Mạng Tháng Tám, Phường Cái Khế, TP Cần Thơ",
      phone: "058.708.5649",
      email: "admin@kingbull.com.vn",
      hours: "08:00 - 17:30 (T2-T6)",
      type: "Headquarters"
    },
    {
      name: "Chi nhánh TP.HCM",
      address: "Lầu 12, Tòa nhà Saigon Trade Center, 37 Tôn Đức Thắng, Q1, TP.HCM",
      phone: "028.3822.1234",
      email: "hcm@kingbull.com.vn",
      hours: "08:00 - 17:30 (T2-T6)",
      type: "Branch"
    },
    {
      name: "Chi nhánh Hà Nội",
      address: "Tầng 8, Tòa nhà Hà Nội Tower, 49 Hai Bà Trưng, Hoàn Kiếm, Hà Nội",
      phone: "024.3826.5678",
      email: "hanoi@kingbull.com.vn",
      hours: "08:00 - 17:30 (T2-T6)",
      type: "Branch"
    }
  ];

  return (
    <section id="contact" className="py-fluid-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Liên hệ
          </h2>
          <p className="text-fluid-lg text-gray-300 max-w-3xl mx-auto">
            Hãy kết nối với chúng tôi để khám phá cơ hội hợp tác và phát triển bền vững
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-8 border border-white/20">
            <h3 className="text-fluid-2xl font-bold mb-fluid-6">Gửi tin nhắn cho chúng tôi</h3>
            
            <form className="space-y-fluid-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="0901234567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="contact@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tên công ty/trang trại</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Trang trại ABC"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Loại hình hợp tác</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                  <option value="">Chọn loại hình hợp tác</option>
                  <option value="dealer">Đăng ký đại lý</option>
                  <option value="technical">Tư vấn kỹ thuật</option>
                  <option value="supply">Cung cấp sản phẩm</option>
                  <option value="rd">Hợp tác R&D</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tin nhắn *</label>
                <textarea 
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent h-32 resize-none"
                  placeholder="Mô tả chi tiết về nhu cầu hợp tác của bạn..."
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" required className="rounded border-white/30 bg-white/10 text-yellow-400 focus:ring-yellow-400" />
                <span className="text-sm text-gray-300">
                  Tôi đồng ý với <a href="#" className="text-yellow-400 hover:text-yellow-300">chính sách bảo mật</a> và điều khoản sử dụng
                </span>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-fluid-6">
            <h3 className="text-fluid-2xl font-bold mb-fluid-6">Thông tin liên hệ</h3>
            
            {offices.map((office, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-fluid-6 border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    office.type === 'Headquarters' 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-fluid-lg mb-2">{office.name}</h4>
                    <div className="space-y-2 text-gray-300 text-fluid-sm">
                      <p className="flex items-start space-x-2">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-yellow-400 font-semibold">{office.phone}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-blue-400">{office.email}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{office.hours}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media & Quick Contact */}
            <div className="bg-gradient-to-r from-kb-blue/20 to-teal-600/20 rounded-xl p-fluid-6 border border-blue-400/30">
              <h4 className="font-bold text-fluid-lg mb-fluid-4">Kết nối với chúng tôi</h4>
              
              <div className="grid grid-cols-2 gap-fluid-4 mb-fluid-4">
                <button className="flex items-center justify-center space-x-2 p-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 p-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .219.466.219 1.025 0 .624-.219 1.559-.219 2.398 0 1.078.854 1.937 1.937 1.937 2.324 0 4.119-2.013 4.119-4.928 0-2.578-1.85-4.38-4.494-4.38-3.062 0-4.869 2.299-4.869 4.676 0 .927.357 1.923.8 2.463.219.264.251.497.186.766-.219.936-.219.936-.219.936-.063.219-.219.264-.502.158-1.394-.655-2.27-2.701-2.27-4.348 0-3.541 2.578-6.791 7.429-6.791 3.895 0 6.929 2.776 6.929 6.481 0 3.87-2.44 6.979-5.824 6.979-1.137 0-2.209-.59-2.577-1.378 0 0-.564 2.148-.702 2.674-.252.972-.936 2.190-1.394 2.932 1.049.315 2.16.486 3.316.486 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017 0z"/>
                  </svg>
                  <span className="font-medium">Zalo</span>
                </button>
              </div>
              
              <p className="text-center text-fluid-sm text-gray-300">
                MST: 1801608521 | CÔNG TY TNHH KINGBULL VIỆT NAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;