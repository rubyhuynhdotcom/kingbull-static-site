import { useEffect } from "react";
import StaticNavigation from "@/components/StaticNavigation";
import StaticHero from "@/components/StaticHero";
import CaseStudySection from "@/components/CaseStudySection";
import PDFLibrarySection from "@/components/PDFLibrarySection";
import VideoSection from "@/components/VideoSection";
import DealerPortalSection from "@/components/DealerPortalSection";
import MapSection from "@/components/MapSection";
import SupportSection from "@/components/SupportSection";
import NewsSection from "@/components/NewsSection";
import RDSection from "@/components/RDSection";
import ContactSection from "@/components/ContactSection";
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
        <VideoSection />
        <DealerPortalSection />
        <MapSection />
        <SupportSection />
        
        {/* Logistics Calculator - Placeholder for now */}
        <section id="logistics" className="py-fluid-24 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="container-fluid text-center">
            <h2 className="text-fluid-3xl font-black mb-8 bg-gradient-to-r from-kb-green to-emerald-600 bg-clip-text text-transparent">
              Công cụ Tính Logistics & Kho Bãi
            </h2>
            <p className="text-muted-foreground mb-8">Tính toán tối ưu chi phí vận chuyển và lộ trình giao hàng</p>
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-emerald-100">
              <p className="text-lg font-medium text-emerald-700">🚀 Sắp ra mắt</p>
              <p className="text-sm text-gray-600 mt-2">Công cụ tính toán logistics thông minh đang được hoàn thiện</p>
            </div>
          </div>
        </section>
        
        <NewsSection />
        <RDSection />
        <ContactSection />
      </main>
      
      <StaticFooter />
    </div>
  );
};

export default Index;
