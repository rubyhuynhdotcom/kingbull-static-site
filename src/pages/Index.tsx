import { useEffect } from "react";
import StaticNavigation from "@/components/StaticNavigation";
import StaticHero from "@/components/StaticHero";
import CaseStudySection from "@/components/CaseStudySection";
import PDFLibrarySection from "@/components/PDFLibrarySection";
import StaticFooter from "@/components/StaticFooter";

const Index = () => {
  useEffect(() => {
    // Hash router functionality
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      
      // Update active nav item
      document.querySelectorAll('[data-section]').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === hash) {
          item.classList.add('active');
        }
      });
      
      // Scroll to section
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Update page title
      const titles: { [key: string]: string } = {
        'home': 'KINGBULL - Đột phá tăng trưởng, dẫn đầu lợi nhuận',
        'case-study': 'Dự án Thành công - KINGBULL',
        'library': 'Thư viện Kỹ thuật - KINGBULL',
        'video': 'Video Sản xuất - KINGBULL',
        'portal': 'Đại lý Portal - KINGBULL',
        'map': 'Bản đồ Cung ứng - KINGBULL',
        'support': 'Hỗ trợ 24/7 - KINGBULL',
        'logistics': 'Tính Logistics - KINGBULL',
        'news': 'Tin tức Ngành - KINGBULL',
        'rd': 'Hợp tác R&D - KINGBULL'
      };
      
      document.title = titles[hash] || 'KINGBULL Vietnam';
    };
    
    // Initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <StaticNavigation />
      
      <main>
        <StaticHero />
        <CaseStudySection />
        <PDFLibrarySection />
        
        {/* Placeholder sections for remaining content */}
        <section id="video" className="py-fluid-24 bg-muted/30">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Video Quy trình Sản xuất & Năng lực Nhà máy</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="portal" className="py-fluid-24">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Khu vực Dành cho Đại lý & Trang trại</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="map" className="py-fluid-24 bg-muted/30">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Bản đồ Năng lực Cung ứng</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="support" className="py-fluid-24">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Hỗ trợ Kỹ thuật 24/7</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="logistics" className="py-fluid-24 bg-muted/30">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Công cụ Tính Logistics & Kho Bãi</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="news" className="py-fluid-24">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Tin tức Ngành & Phân tích Thị trường</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="rd" className="py-fluid-24 bg-muted/30">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Chương trình Hợp tác R&D</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        
        <section id="contact" className="py-fluid-24">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8">Liên hệ</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
      </main>
      
      <StaticFooter />
    </div>
  );
};

export default Index;
