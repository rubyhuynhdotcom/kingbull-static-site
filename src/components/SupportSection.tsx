const SupportSection = () => {
  const supportChannels = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Hotline 24/7",
      subtitle: "058.708.5649",
      description: "Tư vấn kỹ thuật trực tiếp",
      color: "from-green-500 to-emerald-600",
      action: "Gọi ngay"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
      title: "Zalo OA",
      subtitle: "Chat trực tuyến",
      description: "Hỗ trợ nhanh qua Zalo",
      color: "from-blue-500 to-cyan-600",
      action: "Nhắn tin"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Đặt lịch Chuyên gia",
      subtitle: "Tư vấn chuyên sâu",
      description: "Lên lịch tư vấn với expert",
      color: "from-purple-500 to-pink-600",
      action: "Đặt lịch"
    }
  ];

  const experts = [
    { name: "ThS. Nguyễn Văn A", area: "Miền Bắc", specialty: "Tôm sú, Tôm thẻ" },
    { name: "KS. Trần Thị B", area: "Miền Trung", specialty: "Cá tra, Cá basa" },
    { name: "TS. Lê Văn C", area: "Miền Nam", specialty: "Tôm càng xanh" },
    { name: "ThS. Phạm Thị D", area: "ĐBSCL", specialty: "Cá lóc, Cá rô" }
  ];

  return (
    <section id="support" className="py-fluid-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Hỗ trợ Kỹ thuật 24/7
          </h2>
          <p className="text-fluid-lg text-gray-300 max-w-3xl mx-auto">
            Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-8 mb-fluid-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-fluid-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-fluid-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {channel.icon}
                </div>
                
                <h3 className="text-fluid-xl font-bold mb-2">{channel.title}</h3>
                <p className="text-fluid-lg text-yellow-400 font-semibold mb-2">{channel.subtitle}</p>
                <p className="text-gray-300 text-fluid-sm mb-fluid-4">{channel.description}</p>
                
                <button className={`w-full py-3 bg-gradient-to-r ${channel.color} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  {channel.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Experts */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-fluid-8 border border-white/10">
          <h3 className="text-fluid-2xl font-bold mb-fluid-8 text-center">Đội ngũ Chuyên gia theo Khu vực</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fluid-6">
            {experts.map((expert, index) => (
              <div key={index} className="text-center p-fluid-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-fluid-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-fluid-lg mb-1">{expert.name}</h4>
                <p className="text-yellow-400 text-fluid-sm mb-1">{expert.area}</p>
                <p className="text-gray-300 text-xs">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mt-fluid-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-red-600/20 border border-red-400/30 rounded-xl px-fluid-6 py-fluid-4">
            <svg className="w-8 h-8 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-red-400 font-bold">Hỗ trợ Khẩn cấp</p>
              <p className="text-gray-300 text-sm">Khi cần hỗ trợ gấp về dịch bệnh hoặc sự cố kỹ thuật</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;