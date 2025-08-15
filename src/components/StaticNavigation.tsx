const StaticNavigation = () => {
  const handleMobileMenuToggle = () => {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger-icon');
    const close = document.getElementById('close-icon');
    
    if (menu && hamburger && close) {
      menu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      close.classList.toggle('hidden');
    }
  };

  const handleMobileMenuClose = () => {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger-icon');
    const close = document.getElementById('close-icon');
    
    if (menu && hamburger && close) {
      menu.classList.add('hidden');
      hamburger.classList.remove('hidden');
      close.classList.add('hidden');
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container-fluid">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                className="text-2xl font-black text-gradient-brand focus-ring rounded-lg p-2"
                onClick={() => window.location.hash = 'home'}
              >
                KINGBULL
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#home" className="nav-item" data-section="home">Trang chủ</a>
              <a href="#case-study" className="nav-item" data-section="case-study">Dự án Thành công</a>
              <a href="#library" className="nav-item" data-section="library">Thư viện Kỹ thuật</a>
              <a href="#video" className="nav-item" data-section="video">Video Sản xuất</a>
              <a href="#portal" className="nav-item" data-section="portal">Đại lý Portal</a>
              <a href="#map" className="nav-item" data-section="map">Bản đồ Cung ứng</a>
              <a href="#support" className="nav-item" data-section="support">Hỗ trợ 24/7</a>
              <a href="#logistics" className="nav-item" data-section="logistics">Tính Logistics</a>
              <a href="#news" className="nav-item" data-section="news">Tin tức</a>
              <a href="#rd" className="nav-item" data-section="rd">R&D</a>
            </div>
            
            {/* Contact Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:0587085649" className="btn-primary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                058.708.5649
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              id="mobile-menu-btn"
              className="lg:hidden p-2 rounded-lg hover:bg-muted focus-ring"
              onClick={handleMobileMenuToggle}
            >
              <svg id="hamburger-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="close-icon" className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className="lg:hidden hidden bg-white border-t border-border shadow-lg">
          <div className="container-fluid py-4">
            <div className="space-y-2">
              <a href="#home" className="block nav-item py-3" data-section="home" onClick={handleMobileMenuClose}>Trang chủ</a>
              <a href="#case-study" className="block nav-item py-3" data-section="case-study" onClick={handleMobileMenuClose}>Dự án Thành công</a>
              <a href="#library" className="block nav-item py-3" data-section="library" onClick={handleMobileMenuClose}>Thư viện Kỹ thuật</a>
              <a href="#video" className="block nav-item py-3" data-section="video" onClick={handleMobileMenuClose}>Video Sản xuất</a>
              <a href="#portal" className="block nav-item py-3" data-section="portal" onClick={handleMobileMenuClose}>Đại lý Portal</a>
              <a href="#map" className="block nav-item py-3" data-section="map" onClick={handleMobileMenuClose}>Bản đồ Cung ứng</a>
              <a href="#support" className="block nav-item py-3" data-section="support" onClick={handleMobileMenuClose}>Hỗ trợ 24/7</a>
              <a href="#logistics" className="block nav-item py-3" data-section="logistics" onClick={handleMobileMenuClose}>Tính Logistics</a>
              <a href="#news" className="block nav-item py-3" data-section="news" onClick={handleMobileMenuClose}>Tin tức</a>
              <a href="#rd" className="block nav-item py-3" data-section="rd" onClick={handleMobileMenuClose}>R&D</a>
            </div>
            
            <div className="pt-4 mt-4 border-t border-border">
              <a href="tel:0587085649" className="btn-primary w-full justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                058.708.5649
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Navigation Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default StaticNavigation;