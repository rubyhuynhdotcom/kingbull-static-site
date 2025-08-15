// KINGBULL Insight Hub - Main Application (Static Export)
// Vanilla JavaScript for GitHub Pages compatibility

// Global state
let currentSection = 'home';
let mapInitialized = false;
let supplyMap = null;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Hide loading, show content
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    // Initialize hash router
    initHashRouter();
    
    // Populate dynamic content
    populateCaseStudies();
    populatePDFLibrary();
    
    // Setup filter functionality
    setupPDFFilters();
    
    // Setup intersection observer for lazy loading
    setupIntersectionObserver();
  }, 500);
});

// Hash Router
function initHashRouter() {
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateToSection(hash, false);
  };
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);
  
  // Initial load
  handleHashChange();
}

function navigateToSection(sectionId, updateHash = true) {
  currentSection = sectionId;
  
  // Update hash if needed
  if (updateHash) {
    window.location.hash = sectionId;
  }
  
  // Update nav active states
  document.querySelectorAll('[data-section]').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === sectionId) {
      item.classList.add('active');
    }
  });
  
  // Scroll to section
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Update page title
  const titles = {
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
  
  document.title = titles[sectionId] || 'KINGBULL Vietnam';
  
  // Initialize map if needed
  if (sectionId === 'map' && !mapInitialized) {
    initSupplyMap();
  }
}

// Mobile menu functions
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const close = document.getElementById('close-icon');
  
  if (menu && hamburger && close) {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const close = document.getElementById('close-icon');
  
  if (menu && hamburger && close) {
    menu.classList.add('hidden');
    hamburger.classList.remove('hidden');
    close.classList.add('hidden');
  }
}

// Populate case studies
function populateCaseStudies() {
  const container = document.getElementById('case-studies');
  if (!container || !window.AppData) return;
  
  window.AppData.caseStudies.forEach(study => {
    const card = document.createElement('div');
    card.className = 'card-elevated p-6 hover:shadow-lg transition-all duration-300';
    card.innerHTML = `
      <div class="aspect-video mb-4 overflow-hidden rounded-lg">
        <img src="${study.image}" alt="${study.title}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-primary">${study.species}</span>
          <span class="text-sm text-muted-foreground">${study.location}</span>
        </div>
        <h3 class="text-lg font-semibold">${study.title}</h3>
        <p class="text-sm text-muted-foreground">${study.description}</p>
        <div class="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">${study.fcr}</div>
            <div class="text-xs text-muted-foreground">FCR</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">+${study.profit}</div>
            <div class="text-xs text-muted-foreground">Lợi nhuận</div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Populate PDF library
function populatePDFLibrary() {
  const container = document.getElementById('pdf-library');
  if (!container || !window.AppData) return;
  
  window.AppData.pdfLibrary.forEach(pdf => {
    const card = document.createElement('div');
    card.className = 'card-elevated p-6 pdf-item';
    card.setAttribute('data-categories', pdf.tags.join(' '));
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <span class="text-xs text-muted-foreground">${pdf.size}</span>
      </div>
      <h3 class="text-lg font-semibold mb-2">${pdf.title}</h3>
      <p class="text-sm text-muted-foreground mb-4">${pdf.description}</p>
      <div class="flex items-center justify-between">
        <div class="flex flex-wrap gap-1">
          ${pdf.tags.map(tag => `<span class="text-xs px-2 py-1 bg-muted rounded">${tag}</span>`).join('')}
        </div>
        <button class="btn-primary" onclick="downloadPDF('${pdf.id}')">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Tải xuống
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Setup PDF filters
function setupPDFFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items
      const filter = this.getAttribute('data-filter');
      const items = document.querySelectorAll('.pdf-item');
      
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-categories').includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Initialize supply map
function initSupplyMap() {
  if (mapInitialized || !window.L) return;
  
  const mapContainer = document.getElementById('supply-map');
  if (!mapContainer) return;
  
  mapContainer.innerHTML = '';
  
  try {
    supplyMap = L.map('supply-map').setView([10.0452, 105.7469], 7);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(supplyMap);
    
    // Add supply points
    if (window.AppData && window.AppData.supplyMapPoints) {
      window.AppData.supplyMapPoints.forEach(point => {
        const icon = point.type === 'factory' ? '🏭' : '📦';
        const marker = L.marker([point.lat, point.lng]).addTo(supplyMap);
        marker.bindPopup(`
          <div class="p-2">
            <h4 class="font-semibold">${icon} ${point.name}</h4>
            <p class="text-sm text-gray-600">Công suất: ${point.capacity}</p>
            <p class="text-sm text-gray-600">Thời gian giao: ${point.deliveryTime}</p>
          </div>
        `);
      });
    }
    
    mapInitialized = true;
  } catch (error) {
    console.error('Error initializing map:', error);
    mapContainer.innerHTML = '<div class="flex items-center justify-center h-full text-muted-foreground">Lỗi tải bản đồ</div>';
  }
}

// PDF download function
function downloadPDF(pdfId) {
  // Mock download - in real implementation, this would trigger actual download
  alert(`Đang tải xuống tài liệu #${pdfId}...`);
}

// Intersection observer for lazy loading
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all cards
  document.querySelectorAll('.card-elevated').forEach(card => {
    observer.observe(card);
  });
}