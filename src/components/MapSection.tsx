const MapSection = () => {
  const regions = [
    { name: "Miền Bắc", stores: "15 kho", time: "1-2 ngày", color: "from-blue-500 to-cyan-500" },
    { name: "Miền Trung", stores: "12 kho", time: "1-2 ngày", color: "from-green-500 to-emerald-500" },
    { name: "Miền Nam", stores: "25 kho", time: "4-6 giờ", color: "from-orange-500 to-red-500" },
    { name: "Đồng bằng Sông Cửu Long", stores: "30 kho", time: "2-4 giờ", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="map" className="py-fluid-24 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-kb-blue to-teal-600 bg-clip-text text-transparent">
            Bản đồ Năng lực Cung ứng
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Mạng lưới phân phối rộng khắp với thời gian giao hàng tối ưu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-16 items-center">
          {/* Interactive Map Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl p-8 text-white text-center min-h-[400px] flex items-center justify-center shadow-2xl">
              <div>
                <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Bản đồ Tương tác</h3>
                <p className="opacity-90">Nhấp vào từng khu vực để xem chi tiết</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Info */}
          <div className="space-y-fluid-4">
            {regions.map((region, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-fluid-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${region.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-fluid-lg group-hover:text-kb-blue transition-colors">
                          {region.name}
                        </h4>
                        <p className="text-muted-foreground text-fluid-sm">{region.stores}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-fluid-sm font-medium text-kb-green">{region.time}</div>
                      <div className="text-xs text-muted-foreground">Thời gian giao</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Stats */}
        <div className="mt-fluid-16 grid grid-cols-1 md:grid-cols-4 gap-fluid-6">
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-100">
            <div className="text-fluid-2xl font-black text-kb-blue mb-2">82</div>
            <div className="text-fluid-sm text-muted-foreground">Kho và điểm phân phối</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md border border-green-100">
            <div className="text-fluid-2xl font-black text-kb-green mb-2">100%</div>
            <div className="text-fluid-sm text-muted-foreground">Các tỉnh thành</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-md border border-yellow-100">
            <div className="text-fluid-2xl font-black text-kb-gold mb-2">2-6h</div>
            <div className="text-fluid-sm text-muted-foreground">Giao hàng trung bình</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md border border-purple-100">
            <div className="text-fluid-2xl font-black text-purple-600 mb-2">99.9%</div>
            <div className="text-fluid-sm text-muted-foreground">Đúng hẹn giao hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;