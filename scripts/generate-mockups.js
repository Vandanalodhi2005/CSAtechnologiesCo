const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Copy existing mockups if needed
if (fs.existsSync(path.join(projectsDir, 'prints-carts.svg')) && !fs.existsSync(path.join(projectsDir, 'printscarts.svg'))) {
  fs.copyFileSync(path.join(projectsDir, 'prints-carts.svg'), path.join(projectsDir, 'printscarts.svg'));
}
if (fs.existsSync(path.join(projectsDir, 'driver-info-hub.svg')) && !fs.existsSync(path.join(projectsDir, 'driverinfohub.svg'))) {
  fs.copyFileSync(path.join(projectsDir, 'driver-info-hub.svg'), path.join(projectsDir, 'driverinfohub.svg'));
}

const mockups = [
  {
    slug: 'smartprinthelp',
    name: 'SmartPrintHelp',
    domain: 'https://smartprinthelp.com/assistant',
    theme: '#0284C7',
    tag: 'DIAGNOSTIC & ASSIST',
    headline: 'Instant AI Printer Diagnostics & Troubleshooting',
    sub: 'Resolve spooler errors, driver conflicts & wireless printer offline issues in seconds.',
    type: 'diagnostic',
  },
  {
    slug: 'smarteprintservices',
    name: 'SmartEprint Services',
    domain: 'https://smarteprintservices.com/enterprise',
    theme: '#2563EB',
    tag: 'MANAGED PRINT INFRASTRUCTURE',
    headline: 'Enterprise Managed Print Services & Fleet Optimization',
    sub: 'Centralized printer administration, automated toner replenishment and cost reduction.',
    type: 'corporate',
  },
  {
    slug: 'pcdriverinfo',
    name: 'PCDriverInfo',
    domain: 'https://pcdriverinfo.com/scan',
    theme: '#0D9488',
    tag: 'SYSTEM DRIVER UTILITY',
    headline: 'Certified PC Driver Updates & Hardware Diagnostics',
    sub: 'Automated scan detecting outdated chipset, display, audio and peripheral device drivers.',
    type: 'diagnostic',
  },
  {
    slug: 'smarteprinting',
    name: 'SmartEprinting',
    domain: 'https://smarteprinting.com/custom-merch',
    theme: '#E11D48',
    tag: 'ON-DEMAND DIGITAL PRINT',
    headline: 'High-Volume Commercial Printing & Promotional Merch',
    sub: 'Instant dynamic quoting, vector file validation and expedited global fulfillment.',
    type: 'ecommerce',
  },
  {
    slug: 'smartprintguide',
    name: 'SmartPrintGuide',
    domain: 'https://smartprintguide.com/manuals',
    theme: '#4F46E5',
    tag: 'KNOWLEDGEBASE & SETUP',
    headline: 'Step-by-Step Wireless Printer Setup & User Manuals',
    sub: 'Over 4,000 verified guides covering Wi-Fi pairing, firmware flashing & printhead alignment.',
    type: 'portal',
  },
  {
    slug: 'smartquickassist',
    name: 'SmartQuickAssist',
    domain: 'https://smartquickassist.com/session',
    theme: '#059669',
    tag: 'REMOTE TECHNICIAN SUPPORT',
    headline: 'Secure One-Click Remote Tech Assistance & Helpdesk',
    sub: 'End-to-end encrypted screen sharing session connecting users with certified IT specialists.',
    type: 'diagnostic',
  },
  {
    slug: 'clearpathprintsolutions',
    name: 'ClearPath Print',
    domain: 'https://clearpathprintsolutions.com/solutions',
    theme: '#1E40AF',
    tag: 'DOCUMENT SECURITY & PRINT',
    headline: 'Secure Enterprise Document Solutions & Managed Workflows',
    sub: 'Eliminate print waste, enforce pull-printing security and audit document compliance.',
    type: 'corporate',
  },
  {
    slug: 'eliteprintcare',
    name: 'ElitePrintCare',
    domain: 'https://eliteprintcare.com/fleet',
    theme: '#0891B2',
    tag: 'PROACTIVE FLEET CARE',
    headline: '24/7 Remote Printer Telemetry & Health Monitoring',
    sub: 'Predictive maintenance algorithms flagging paper-path jams before hardware outages occur.',
    type: 'portal',
  },
  {
    slug: 'appinfohub',
    name: 'AppInfoHub',
    domain: 'https://appinfohub.com/explore',
    theme: '#7C3AED',
    tag: 'SOFTWARE INTELLIGENCE',
    headline: 'Enterprise Software Directory, Benchmarks & Stack Insights',
    sub: 'Compare SaaS tools, API features, user reviews and integration ecosystems side-by-side.',
    type: 'portal',
  },
  {
    slug: 'smartappinfo',
    name: 'SmartAppInfo',
    domain: 'https://smartappinfo.com/categories',
    theme: '#6366F1',
    tag: 'APPLICATION PORTAL',
    headline: 'Curated Desktop & Mobile Application Release Directory',
    sub: 'Verified download links, release notes, security signatures and compatibility checks.',
    type: 'portal',
  },
  {
    slug: 'quickprintassists',
    name: 'QuickPrintAssists',
    domain: 'https://quickprintassists.com/quick-fix',
    theme: '#D97706',
    tag: 'INSTANT ERROR RESOLVER',
    headline: 'Fast Printer Error Code Diagnosis & Quick Troubleshooting',
    sub: 'Instant lookup for 12,000+ OEM error codes with interactive animated repair steps.',
    type: 'diagnostic',
  },
  {
    slug: 'innovationdynamicsgroup',
    name: 'Innovation Dynamics',
    domain: 'https://innovationdynamicsgroup.com/services',
    theme: '#0F172A',
    tag: 'ENTERPRISE CONSULTING',
    headline: 'Strategic Digital Innovation & Cloud Modernization',
    sub: 'Advising Fortune 500 enterprises on cloud microservices, AI workflows and modern web apps.',
    type: 'corporate',
  },
  {
    slug: 'printsbasket',
    name: 'PrintsBasket',
    domain: 'https://printsbasket.com/apparel',
    theme: '#EA580C',
    tag: 'CUSTOM APPAREL & GIFTS',
    headline: 'Personalized Custom T-Shirts, Hoodies & Event Swag',
    sub: 'Design in browser with real-time mockup preview. No minimum order quantity with fast delivery.',
    type: 'ecommerce',
  },
  {
    slug: 'smarteprintssolutions',
    name: 'SmartEprint Solutions',
    domain: 'https://smarteprintssolutions.com/commercial',
    theme: '#1D4ED8',
    tag: 'B2B PRODUCTION PRINT',
    headline: 'Industrial B2B Production Printing & Automated Logistics',
    sub: 'Automated job routing across high-speed digital presses with dynamic volume discounting.',
    type: 'corporate',
  },
  {
    slug: 'printsmatrix',
    name: 'PrintsMatrix',
    domain: 'https://printsmatrix.com/b2b-wholesale',
    theme: '#9333EA',
    tag: 'WHOLESALE PRINT MATRIX',
    headline: 'Trade Wholesale Print Pricing Engine for Agencies & Resellers',
    sub: 'White-label drop-shipping, automated REST API submission and blind delivery nationwide.',
    type: 'ecommerce',
  },
  {
    slug: 'smartinkguide',
    name: 'SmartInkGuide',
    domain: 'https://smartinkguide.com/finder',
    theme: '#0284C7',
    tag: 'INK COMPATIBILITY FINDER',
    headline: 'Find the Exact Ink Cartridge for Your Printer Model',
    sub: 'Interactive lookup matching 20,000+ printer models with OEM & high-yield eco cartridges.',
    type: 'portal',
  },
  {
    slug: 'inkkartllc',
    name: 'InkKart LLC',
    domain: 'https://inkkartllc.com/shop',
    theme: '#BE185D',
    tag: 'PREMIUM INK & TONER STORE',
    headline: 'Direct Distributor of OEM Inks, Toners & Specialty Papers',
    sub: 'Over 80,000 items in stock with 1-day express business shipping across the nation.',
    type: 'ecommerce',
  },
  {
    slug: 'shopsprinters',
    name: 'ShopsPrinters',
    domain: 'https://shopsprinters.com/catalog',
    theme: '#B45309',
    tag: 'COMMERCIAL HARDWARE MARKETPLACE',
    headline: 'Commercial Laser, All-in-One & Wide-Format Printers',
    sub: 'Compare top laserjets, plotters & business multifunction printers with leasing options.',
    type: 'ecommerce',
  },
];

for (const m of mockups) {
  const filePath = path.join(projectsDir, `${m.slug}.svg`);
  
  let innerContent = '';
  if (m.type === 'ecommerce') {
    innerContent = `
    <!-- Hero Banner -->
    <g transform="translate(25, 95)">
      <rect width="650" height="135" rx="8" fill="#F8FAFC" stroke="${m.theme}" stroke-width="1"/>
      <text x="25" y="42" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">${m.tag}</text>
      <text x="25" y="74" fill="#0B1220" font-family="system-ui, sans-serif" font-size="20" font-weight="800">${m.headline}</text>
      <text x="25" y="98" fill="#475569" font-family="system-ui, sans-serif" font-size="12">${m.sub}</text>
      <rect x="520" y="45" width="105" height="34" rx="6" fill="${m.theme}" />
      <text x="572" y="67" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Order Now</text>
    </g>
    <!-- Product Grid -->
    <g transform="translate(25, 245)">
      <rect width="200" height="165" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <rect x="15" y="15" width="170" height="75" rx="6" fill="#F1F5F9"/>
      <text x="15" y="112" fill="#0B1220" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Custom Apparel</text>
      <text x="15" y="132" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="14" font-weight="800">From ₹499</text>
      <rect x="120" y="125" width="65" height="24" rx="4" fill="${m.theme}"/>
      <text x="152" y="141" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Customize</text>

      <rect x="225" width="200" height="165" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <rect x="240" y="15" width="170" height="75" rx="6" fill="#F1F5F9"/>
      <text x="240" y="112" fill="#0B1220" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Drinkware &amp; Mugs</text>
      <text x="240" y="132" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="14" font-weight="800">From ₹299</text>
      <rect x="345" y="125" width="65" height="24" rx="4" fill="${m.theme}"/>
      <text x="377" y="141" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Customize</text>

      <rect x="450" width="200" height="165" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <rect x="465" y="15" width="170" height="75" rx="6" fill="#F1F5F9"/>
      <text x="465" y="112" fill="#0B1220" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Stationery &amp; Cards</text>
      <text x="465" y="132" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="14" font-weight="800">From ₹199</text>
      <rect x="570" y="125" width="65" height="24" rx="4" fill="${m.theme}"/>
      <text x="602" y="141" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Customize</text>
    </g>
    `;
  } else if (m.type === 'diagnostic') {
    innerContent = `
    <!-- Diagnostic Dashboard -->
    <g transform="translate(25, 95)">
      <rect width="650" height="110" rx="8" fill="#0B1E38" stroke="${m.theme}" stroke-width="1.5"/>
      <text x="25" y="38" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">● ${m.tag}</text>
      <text x="25" y="68" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="800">${m.headline}</text>
      <text x="25" y="90" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="12">${m.sub}</text>
      <rect x="510" y="38" width="115" height="34" rx="6" fill="${m.theme}"/>
      <text x="567" y="60" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Run Free Scan</text>
    </g>
    <!-- Diagnostic Status Panels -->
    <g transform="translate(25, 220)">
      <rect width="315" height="190" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="20" y="32" fill="#0B1220" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Hardware &amp; Driver Status</text>
      
      <rect x="20" y="50" width="275" height="36" rx="4" fill="#F8FAFC"/>
      <text x="32" y="73" fill="#334155" font-family="system-ui, sans-serif" font-size="12">Print Spooler Service</text>
      <text x="260" y="73" fill="#10B981" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Running</text>

      <rect x="20" y="94" width="275" height="36" rx="4" fill="#F8FAFC"/>
      <text x="32" y="117" fill="#334155" font-family="system-ui, sans-serif" font-size="12">USB / Wireless Port</text>
      <text x="260" y="117" fill="#10B981" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Online</text>

      <rect x="20" y="138" width="275" height="36" rx="4" fill="#F8FAFC"/>
      <text x="32" y="161" fill="#334155" font-family="system-ui, sans-serif" font-size="12">OEM Driver Version</text>
      <text x="240" y="161" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Update Ready</text>

      <rect x="335" width="305" height="190" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="355" y="32" fill="#0B1220" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Live Assistance Queue</text>
      <rect x="355" y="55" width="265" height="75" rx="6" fill="#F1F5F9"/>
      <text x="375" y="85" fill="#64748B" font-family="system-ui, sans-serif" font-size="11">CERTIFIED TECHNICIANS ACTIVE</text>
      <text x="375" y="115" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="24" font-weight="800">42 Available Now</text>
      <rect x="355" y="145" width="265" height="34" rx="6" fill="${m.theme}"/>
      <text x="487" y="167" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Connect With Specialist</text>
    </g>
    `;
  } else {
    // Corporate & Portal
    innerContent = `
    <!-- Corporate Showcase Banner -->
    <g transform="translate(25, 95)">
      <rect width="650" height="120" rx="8" fill="#0B1E38" stroke="${m.theme}" stroke-width="1.5"/>
      <text x="25" y="40" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">${m.tag}</text>
      <text x="25" y="70" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="800">${m.headline}</text>
      <text x="25" y="94" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="12">${m.sub}</text>
      <rect x="520" y="42" width="105" height="34" rx="6" fill="${m.theme}"/>
      <text x="572" y="64" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Learn More</text>
    </g>
    <!-- Feature Matrices -->
    <g transform="translate(25, 230)">
      <rect width="205" height="180" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="20" y="35" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="24">⚡</text>
      <text x="20" y="68" fill="#0B1220" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Sub-Second Speed</text>
      <text x="20" y="92" fill="#64748B" font-family="system-ui, sans-serif" font-size="11" leading="1.4">Optimized Next.js edge-rendered frontend architecture delivering 99+ Lighthouse scores.</text>
      <text x="20" y="155" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Explore Metrics →</text>

      <rect x="222" width="205" height="180" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="242" y="35" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="24">🔒</text>
      <text x="242" y="68" fill="#0B1220" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Enterprise Security</text>
      <text x="242" y="92" fill="#64748B" font-family="system-ui, sans-serif" font-size="11">Role-based access control, SOC2 compliance standards and encrypted data storage.</text>
      <text x="242" y="155" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Security Specs →</text>

      <rect x="440" width="205" height="180" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
      <text x="460" y="35" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="24">📊</text>
      <text x="460" y="68" fill="#0B1220" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Cloud Automation</text>
      <text x="460" y="92" fill="#64748B" font-family="system-ui, sans-serif" font-size="11">Automated CI/CD deployments and real-time operational telemetry monitoring.</text>
      <text x="460" y="155" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="11" font-weight="700">View Platform →</text>
    </g>
    `;
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" width="100%" height="100%">
  <defs>
    <linearGradient id="${m.slug}_bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
  </defs>

  <!-- Browser Frame -->
  <rect width="700" height="440" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
  
  <!-- Browser Chrome / Tab -->
  <rect width="700" height="36" rx="10" fill="#F1F5F9" />
  <circle cx="20" cy="18" r="5" fill="#EF4444" />
  <circle cx="36" cy="18" r="5" fill="#F59E0B" />
  <circle cx="52" cy="18" r="5" fill="#10B981" />
  <rect x="120" y="8" width="460" height="20" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
  <text x="350" y="22" fill="#64748B" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">${m.domain}</text>

  <!-- Website Header -->
  <rect y="36" width="700" height="48" fill="#FFFFFF" stroke="#F1F5F9" stroke-width="1"/>
  <text x="25" y="66" fill="#0B1220" font-family="system-ui, sans-serif" font-size="16" font-weight="800">${m.name}</text>
  <text x="200" y="65" fill="${m.theme}" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Overview</text>
  <text x="300" y="65" fill="#64748B" font-family="system-ui, sans-serif" font-size="12">Solutions</text>
  <text x="390" y="65" fill="#64748B" font-family="system-ui, sans-serif" font-size="12">Resources</text>
  <rect x="575" y="47" width="100" height="26" rx="13" fill="${m.theme}" />
  <text x="625" y="64" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Get Started</text>

  ${innerContent}
</svg>`;

  fs.writeFileSync(filePath, svgContent);
}

console.log('Successfully generated all mockups!');
