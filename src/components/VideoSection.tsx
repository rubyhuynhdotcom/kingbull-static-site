import factoryImage from "@/assets/factory-interior.jpg";

const VideoSection = () => {
  const videos = [
    {
      title: "Quy trình Sản xuất Tự động",
      description: "Hệ thống sản xuất hiện đại với công nghệ châu Âu",
      thumbnail: factoryImage,
      duration: "3:45"
    },
    {
      title: "Nhà máy & Kho bãi",
      description: "Cơ sở vật chất quy mô lớn, đạt chuẩn quốc tế",
      thumbnail: factoryImage,
      duration: "2:30"
    },
    {
      title: "Kiểm tra Chất lượng",
      description: "Quy trình kiểm soát chất lượng 24/7",
      thumbnail: factoryImage,
      duration: "4:15"
    }
  ];

  return (
    <section id="video" className="py-fluid-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-fluid">
        <div className="text-center mb-fluid-16">
          <h2 className="text-fluid-3xl font-black mb-fluid-4 bg-gradient-to-r from-kb-blue to-teal-600 bg-clip-text text-transparent">
            Video Quy trình Sản xuất & Năng lực Nhà máy
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Khám phá quy trình sản xuất hiện đại và năng lực vượt trội của KINGBULL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-8 mb-fluid-16">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-kb-blue ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-sm rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-fluid-6">
                  <h3 className="font-bold text-fluid-lg mb-2 group-hover:text-kb-blue transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-fluid-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Factory stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-fluid-6">
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md">
            <div className="text-fluid-2xl font-black text-kb-blue mb-2">50,000m²</div>
            <div className="text-fluid-sm text-muted-foreground">Diện tích nhà máy</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md">
            <div className="text-fluid-2xl font-black text-kb-green mb-2">24/7</div>
            <div className="text-fluid-sm text-muted-foreground">Vận hành liên tục</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-md">
            <div className="text-fluid-2xl font-black text-kb-gold mb-2">ISO 9001</div>
            <div className="text-fluid-sm text-muted-foreground">Chứng nhận chất lượng</div>
          </div>
          <div className="text-center p-fluid-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md">
            <div className="text-fluid-2xl font-black text-kb-blue mb-2">99.9%</div>
            <div className="text-fluid-sm text-muted-foreground">Độ tin cậy sản xuất</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;