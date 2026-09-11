export const PROJECTS = [
  {
    id: 'printscarts',
    slug: 'printscarts',
    name: 'Prints Carts',
    tagline: 'High-Converting Custom Print & Merchandise E-Commerce Platform',
    category: 'E-Commerce Website',
    categorySlug: 'ecommerce',
    featured: true,
    client: 'Prints Carts Global',
    year: '2025',
    duration: '10 Weeks',
    liveUrl: 'http://printscarts.com',
    image: '/images/projects/printscarts.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    shortDescription:
      'A blazing-fast modern e-commerce storefront with real-time product customizer, dynamic tiered pricing, and automated order fulfillment pipeline.',
    challenge:
      'Prints Carts was losing potential orders due to a slow, monolithic legacy store that took over 4.5 seconds to load product pages. Customers struggled with complex customization options, resulting in a 74% cart abandonment rate.',
    solution:
      'We architected a headless e-commerce platform using Next.js App Router for instant page transitions. Built an intuitive vector-based live customizer, streamlined 1-click checkout with Stripe, and connected an automated print-lab webhook pipeline.',
    results: [
      { metric: 'Load Time', value: '0.8s', change: '-78% latency' },
      { metric: 'Conversion Rate', value: '+142%', change: 'Post-launch' },
      { metric: 'Monthly Revenue', value: '₹48L+', change: '3.2x growth' },
      { metric: 'Cart Abandonment', value: '28%', change: 'Down from 74%' },
    ],
    features: [
      'Interactive vector-based product design preview with real-time text and artwork overlay',
      'Instant search and faceted filtering with zero layout shift',
      'Dynamic volume discount engine with bulk price calculator',
      'Automated PDF invoice generation and vendor dispatch routing',
      'PCI-compliant multi-currency checkout via Stripe & Razorpay',
    ],
    architecture:
      'Built with Next.js 14 App Router, deployed on Vercel Edge Network, backed by Node.js microservices on AWS and MongoDB Atlas with automated Redis caching.',
    testimonial: {
      quote:
        'CSA Technologies CO delivered our e-commerce website on time and exceeded our expectations. The team was professional, responsive and easy to work with.',
      author: 'Rohit Sharma',
      role: 'Founder',
      company: 'Prints Carts',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'technosky',
    slug: 'technosky',
    name: 'TechnoSky',
    tagline: 'Enterprise Corporate Digital Presence for Cloud Solutions Provider',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: true,
    client: 'TechnoSky Cloud Systems',
    year: '2025',
    duration: '6 Weeks',
    liveUrl: 'https://technosky.example.com',
    image: '/images/projects/technosky.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    shortDescription:
      'A sleek, corporate web presence designed for high-value enterprise lead generation, service clarity, and brand authority across global markets.',
    challenge:
      'TechnoSky had an outdated, static website that failed to reflect their position as a high-end enterprise cloud infrastructure partner.',
    solution:
      'We engineered a bespoke, dark-mode corporate web experience highlighting enterprise cloud capabilities, interactive solution blueprints, and contextual lead magnets.',
    results: [
      { metric: 'Enterprise Leads', value: '+210%', change: 'Qualified inquiries' },
      { metric: 'Avg. Session Duration', value: '3m 48s', change: '+185% engagement' },
      { metric: 'Lighthouse Score', value: '98/100', change: 'Performance & SEO' },
      { metric: 'Client Deals Won', value: '$850K+', change: 'In first 6 months' },
    ],
    features: [
      'Interactive Cloud Architecture Explorer with visual system diagrams',
      'Role-based solution pathways for FinTech, Healthcare, and SaaS buyers',
      'High-converting interactive ROI and Cloud Cost Estimation calculator',
      'Seamless CRM integration with automated lead scoring and calendar booking',
    ],
    architecture:
      'Static-site generation (SSG) with Next.js and Tailwind CSS, featuring silky 60fps Framer Motion micro-animations.',
    testimonial: {
      quote:
        'The custom web presence they built has greatly improved our enterprise conversions. High-value clients immediately recognize our technical caliber.',
      author: 'Priya Mehta',
      role: 'CEO',
      company: 'TechnoSky',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'smarteprint',
    slug: 'smarteprint',
    name: 'SmartEprint',
    tagline: 'Multi-Vendor On-Demand Print Marketplace & Fulfillment Engine (WordPress)',
    category: 'E-Commerce Website',
    categorySlug: 'ecommerce',
    featured: true,
    client: 'SmartEprint Technologies',
    year: '2024',
    duration: '14 Weeks',
    liveUrl: 'http://smarteprint.com',
    image: '/images/projects/smarteprint.jpg',
    technologies: ['WordPress', 'WooCommerce', 'Next.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    shortDescription:
      'An end-to-end B2B and B2C commercial printing ecosystem featuring instant custom quotes, dynamic vector pre-flight validation, and multi-facility order routing built with WordPress & modern frontend.',
    challenge:
      'Commercial printing involves hundreds of complex paper weights, finishes, and dimensional variables. Manual quoting took hours per customer, causing massive order loss and frequent print-file rework errors.',
    solution:
      'We engineered an automated print calculation engine and custom WordPress / WooCommerce architecture generating instant dynamic pricing across 400+ custom paper combinations with pre-flight PDF validation.',
    results: [
      { metric: 'Quote Speed', value: 'Instant', change: 'Down from 4 hours' },
      { metric: 'File Rework Errors', value: '-92%', change: 'Automated pre-flight' },
      { metric: 'Active Business Clients', value: '1,200+', change: 'Across India' },
      { metric: 'Annual Print Volume', value: '₹1.8 Cr', change: 'Processed GMV' },
    ],
    features: [
      'Instant real-time multi-attribute price quoting calculator (paper, lamination, binding, quantity)',
      'Automated browser-side PDF print file dimension & DPI validator',
      'Vendor management portal with automated production queue dispatch',
      'Corporate account billing with invoice approvals and tiered volume rebates',
      'Real-time shipment tracking integration with logistics APIs',
    ],
    architecture:
      'Custom headless WordPress CMS coupled with Next.js frontend, Node.js API endpoints, and AWS S3 storage for high-resolution print assets.',
    testimonial: {
      quote:
        'Great communication, clean code and excellent support even after delivery. Would definitely work with CSA Technologies CO again!',
      author: 'Amit Verma',
      role: 'Business Owner',
      company: 'SmartEprint',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'driverinfohub',
    slug: 'driverinfohub',
    name: 'Driver Info Hub',
    tagline: 'Real-Time Fleet Intelligence, Compliance & Driver Analytics Platform',
    category: 'Web Application',
    categorySlug: 'custom-apps',
    featured: true,
    client: 'Logix Fleet Solutions',
    year: '2025',
    duration: '12 Weeks',
    liveUrl: 'http://driverinfohub.com',
    image: '/images/projects/driverinfohub.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    shortDescription:
      'A mission-critical fleet management web application tracking driver compliance, telematics telemetry, maintenance schedules, and safety scorecards.',
    challenge:
      'Managing compliance documents, driving hours, and licensing across 3,500+ commercial drivers using fragmented spreadsheets resulted in missed audit deadlines and expensive fleet downtime.',
    solution:
      'Developed a centralized cloud web application with real-time WebSocket telemetry, automated document expiration alerts, driver performance leaderboards, and automated regulatory compliance reports.',
    results: [
      { metric: 'Compliance Rate', value: '99.7%', change: 'Up from 82%' },
      { metric: 'Fleet Vehicles Monitored', value: '3,500+', change: 'Active units' },
      { metric: 'Admin Hours Saved', value: '35 hrs/wk', change: 'Per branch' },
      { metric: 'Platform Uptime', value: '99.98%', change: 'Mission critical' },
    ],
    features: [
      'Real-time live map dashboard with driver status and route progress',
      'Automated OCR document scanner for driver licenses and insurance certificates',
      'Driver Safety Scorecard algorithm computing speed, braking, and duty hour compliance',
      'Role-based access control (Fleet Managers, Dispatchers, Safety Officers, Drivers)',
      'Automated email and SMS alerts for upcoming vehicle maintenance and permit renewals',
    ],
    architecture:
      'High-throughput web application built with Next.js 14 App Router, WebSockets for bidirectional live location streaming, secure JWT authentication, and MongoDB time-series collections.',
    testimonial: {
      quote:
        'The system web application they built for us has greatly improved our internal processes. Highly recommended for complex technical software.',
      author: 'Vikram Rajput',
      role: 'VP of Operations',
      company: 'Logix Fleet Solutions',
      avatar: '/images/testimonials/vikram-rajput.webp',
    },
  },
  {
    id: 'innovationdynamicsgroup',
    slug: 'innovationdynamicsgroup',
    name: 'Innovation Dynamics Group',
    tagline: 'Strategic Technology Consulting & Digital Enterprise Web Portal',
    category: 'Corporate Platform',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Innovation Dynamics Group',
    year: '2025',
    duration: '8 Weeks',
    liveUrl: 'http://innovationdynamicsgroup.com',
    image: '/images/projects/innovationdynamicsgroup.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Cloudflare'],
    shortDescription:
      'An authoritative, high-converting digital web portal showcasing enterprise technology advisory, digital transformation capabilities, and client case studies.',
    challenge:
      'Innovation Dynamics Group needed an internationally credible corporate presence to attract global CTOs and enterprise buyers, requiring pristine speed, accessibility, and interactive solution blueprints.',
    solution:
      'We engineered an ultra-sleek, dark-mode corporate digital experience with interactive service matrices, dynamic whitepaper downloads, and automated CRM lead qualification.',
    results: [
      { metric: 'Enterprise Leads', value: '+210%', change: 'Qualified inquiries' },
      { metric: 'Session Duration', value: '4m 12s', change: '+165% engagement' },
      { metric: 'Lighthouse Score', value: '99/100', change: 'Performance & SEO' },
      { metric: 'Pipeline Generated', value: '$1.2M+', change: 'First quarter' },
    ],
    features: [
      'Interactive Digital Transformation capability blueprints and case studies library',
      'Automated CRM webhook lead scoring and calendar appointment booking',
      'High-performance static site generation (SSG) with instantaneous page transitions',
      'Enterprise security hardening with Cloudflare Edge SSL and DDoS shielding',
    ],
    architecture:
      'Next.js 14 SSG with Tailwind CSS, Framer Motion micro-animations, and automated HubSpot CRM webhooks.',
    testimonial: {
      quote:
        'CSA Technologies CO captured our vision flawlessly. High-value international clients immediately recognize our strategic caliber upon landing on our site.',
      author: 'David Sterling',
      role: 'Managing Partner',
      company: 'Innovation Dynamics Group',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'smartprinthelp',
    slug: 'smartprinthelp',
    name: 'Smart Print Help',
    tagline: 'Intelligent Cloud Diagnostic & Printer Troubleshooting Helpdesk',
    category: 'Support & Helpdesk Portal',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'SmartPrint Global Solutions',
    year: '2025',
    duration: '8 Weeks',
    liveUrl: 'http://smartprinthelp.com',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'WebRTC'],
    shortDescription:
      'An automated diagnostic web portal helping users identify printer connectivity issues, resolve driver spooler errors, and connect with certified technicians.',
    challenge:
      'Users struggled with confusing OEM printer manuals, resulting in thousands of unresolved connectivity and driver configuration queries every month.',
    solution:
      'Engineered an interactive wizard that automatically diagnoses operating system print errors, recommends tailored driver patches, and launches remote assistance sessions.',
    results: [
      { metric: 'Issues Resolved', value: '85K+', change: 'Automated fixes' },
      { metric: 'First-Contact Fix', value: '91%', change: '+38% efficiency' },
      { metric: 'User Satisfaction', value: '4.8/5', change: 'Over 12,000 ratings' },
      { metric: 'Page Load Speed', value: '0.7s', change: 'Edge cached' },
    ],
    features: [
      'Interactive automated printer troubleshooting wizard with step-by-step diagnostic trees',
      'Instant OEM driver compatibility lookup across Windows, macOS, and Linux',
      'Real-time live queue connecting users to technical support specialists',
      'Comprehensive error code search engine covering 10,000+ commercial printer models',
    ],
    architecture:
      'Next.js frontend with Tailwind CSS, Node.js backend microservice for error-code matching, and Redis caching.',
    testimonial: {
      quote:
        'The diagnostic speed and intuitive interface built by CSA Technologies CO reduced our support call volume by 45%.',
      author: 'Marcus Vance',
      role: 'Director of Support Operations',
      company: 'SmartPrint Global Solutions',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'smarteprintservices',
    slug: 'smarteprintservices',
    name: 'Smart Eprint Services',
    tagline: 'Commercial Enterprise Managed Print Solutions & Fleet Infrastructure',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Smart Eprint Services Inc',
    year: '2024',
    duration: '6 Weeks',
    liveUrl: 'http://smarteprintservices.com',
    image: '/images/projects/smarteprint.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    shortDescription:
      'Enterprise web presence detailing commercial printer fleet management, scheduled maintenance contracts, and automated toner logistics.',
    challenge:
      'Needed a high-credibility corporate website to bid on high-value multi-office commercial printing contracts and corporate leasing tenders.',
    solution:
      'Built a crisp, modern corporate site highlighting managed print savings, SLA guarantees, sustainability compliance, and an interactive fleet savings calculator.',
    results: [
      { metric: 'Enterprise Contracts', value: '+175%', change: 'New commercial accounts' },
      { metric: 'Inquiry Conversion', value: '8.4%', change: 'Up from 2.1%' },
      { metric: 'Client Savings', value: '32% Avg', change: 'In print operational costs' },
      { metric: 'Lighthouse Score', value: '98/100', change: 'SEO & Performance' },
    ],
    features: [
      'Interactive Commercial Fleet Cost & Savings Estimator',
      'Service Level Agreement (SLA) portal with automated service request intake',
      'Eco-friendly print sustainability and cartridge recycling tracking pages',
      'Lead capture funnels tailored to facility directors and procurement officers',
    ],
    architecture:
      'Next.js SSG deployment on Vercel with Tailwind CSS, optimized typography, and HubSpot CRM form automation.',
    testimonial: {
      quote:
        'Their understanding of B2B corporate positioning helped us win multi-year corporate print tenders.',
      author: 'Ananya Deshmukh',
      role: 'VP of Commercial Sales',
      company: 'Smart Eprint Services',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'pcdriverinfo',
    slug: 'pcdriverinfo',
    name: 'PC Driver Info',
    tagline: 'Automated PC Hardware Diagnostic & Driver Compatibility Engine',
    category: 'Utility & Diagnostic Platform',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'PC Driver Info Systems',
    year: '2025',
    duration: '10 Weeks',
    liveUrl: 'http://pcdriverinfo.com',
    image: '/images/projects/pcdriverinfo.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS'],
    shortDescription:
      'A comprehensive device driver intelligence database and diagnostic engine indexing millions of certified hardware drivers for Windows and peripherals.',
    challenge:
      'Users frequently downloaded counterfeit or malware-infected drivers from untrusted search results, leading to operating system crashes and BSOD errors.',
    solution:
      'Created a verified, checksum-validated driver repository with hardware vendor API verification, instant compatibility checks, and step-by-step install guides.',
    results: [
      { metric: 'Driver Database', value: '2.5M+', change: 'Verified signatures' },
      { metric: 'Monthly Active Users', value: '450K+', change: 'Organic search' },
      { metric: 'Download Speed', value: '1.2s', change: 'Global CDN distribution' },
      { metric: 'Crash Prevention', value: '99.4%', change: 'Compatible matches' },
    ],
    features: [
      'Instant hardware ID and chipset driver lookup engine',
      'Automated SHA-256 checksum validator guaranteeing tamper-proof driver files',
      'Operating system version selector (Windows 11, 10, 8.1, Server editions)',
      'High-throughput database architecture optimized for millions of monthly queries',
    ],
    architecture:
      'Next.js App Router with Node.js microservices, MongoDB indexed cluster for hardware cataloging, and Redis caching.',
    testimonial: {
      quote:
        'The architecture built by CSA Technologies CO effortlessly handles over 400,000 monthly visitors without a hiccup.',
      author: 'Kunal Joshi',
      role: 'Chief Technology Officer',
      company: 'PC Driver Info',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'smarteprinting',
    slug: 'smarteprinting',
    name: 'Smart E-Printing',
    tagline: 'Digital On-Demand Printing & Custom Merchandising E-Commerce Store',
    category: 'E-Commerce Website',
    categorySlug: 'ecommerce',
    featured: false,
    client: 'Smart E-Printing Hub',
    year: '2024',
    duration: '9 Weeks',
    liveUrl: 'http://smarteprinting.com',
    image: '/images/projects/smarteprint.jpg',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    shortDescription:
      'A high-volume custom merchandise printing platform featuring live interactive apparel mockups, automated print-ready export, and fast express checkout.',
    challenge:
      'The previous storefront struggled with mobile responsiveness and cart abandonment due to complex sizing and design upload workflows.',
    solution:
      'Rebuilt the entire frontend in Next.js 14 with mobile-optimized touch controls, instant file validation, and streamlined 1-click checkout.',
    results: [
      { metric: 'Mobile Conversion', value: '+118%', change: 'Post-launch' },
      { metric: 'Average Order Value', value: '₹3,400', change: '+34% increase' },
      { metric: 'Page Speed Score', value: '97/100', change: 'Mobile Lighthouse' },
      { metric: 'Order Accuracy', value: '99.8%', change: 'Automated proofs' },
    ],
    features: [
      'Browser-based live mockup customizer with real-time text, logo, and photo positioning',
      'Instant high-resolution PDF print-proof generation for customer approval',
      'Multi-tiered bulk quantity discounting engine',
      'Seamless multi-payment gateway integration (Credit Cards, UPI, NetBanking, PayPal)',
    ],
    architecture:
      'Next.js 14 with Tailwind CSS, Node.js image rasterization microservices, and MongoDB order store.',
    testimonial: {
      quote:
        'Our online sales surged within the first month. The mobile checkout experience is smooth and conversion-focused.',
      author: 'Pooja Agarwal',
      role: 'Founder',
      company: 'Smart E-Printing',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'smartprintguide',
    slug: 'smartprintguide',
    name: 'Smart Print Guide',
    tagline: 'Comprehensive Wireless Printer Setup & Connectivity Knowledgebase',
    category: 'Knowledge Base Portal',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Smart Print Guide Network',
    year: '2024',
    duration: '6 Weeks',
    liveUrl: 'http://smartprintguide.com',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MDX', 'Algolia Search'],
    shortDescription:
      'An educational resource and troubleshooting documentation platform offering step-by-step wireless setup guides, video tutorials, and connection walk-throughs.',
    challenge:
      'Documentation was scattered and difficult to navigate on mobile devices, resulting in high bounce rates and frustrated users.',
    solution:
      'Structured a modern headless documentation portal with instant Algolia search, interactive device compatibility filters, and clear visual steps.',
    results: [
      { metric: 'Monthly Readers', value: '620K+', change: 'Organic SEO' },
      { metric: 'Avg. Time on Page', value: '4m 30s', change: '+85% engagement' },
      { metric: 'Bounce Rate', value: '32%', change: 'Down from 68%' },
      { metric: 'Search Latency', value: '< 20ms', change: 'Algolia integration' },
    ],
    features: [
      'Instant full-text search with fuzzy matching and category filters',
      'Illustrated step-by-step pairing walk-throughs for Wi-Fi, Bluetooth, and Ethernet setup',
      'Downloadable PDF quick-start setup cheat sheets',
      'Responsive reading layout with dark/light reading modes',
    ],
    architecture:
      'Static-site generation with Next.js App Router, Tailwind CSS typography, and Algolia DocSearch integration.',
    testimonial: {
      quote:
        'The search speed and clean visual hierarchy made our knowledge base one of the most visited in the industry.',
      author: 'Gaurav Singhania',
      role: 'Content Operations Lead',
      company: 'Smart Print Guide',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'smartquickassist',
    slug: 'smartquickassist',
    name: 'Smart Quick Assist',
    tagline: 'Real-Time Remote Support & Screen-Sharing Diagnostic Web Application',
    category: 'Remote Support Web App',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'QuickAssist Technologies',
    year: '2025',
    duration: '11 Weeks',
    liveUrl: 'http://smartquickassist.com',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['Next.js', 'WebRTC', 'WebSockets', 'Node.js', 'Tailwind CSS'],
    shortDescription:
      'A secure browser-native remote screen-sharing and technician assistance web app enabling instant IT troubleshooting without client software downloads.',
    challenge:
      'Traditional desktop remote software required complex installations that non-technical users struggled to configure, slowing down support delivery.',
    solution:
      'Developed a browser-native WebRTC peer-to-peer session gateway with end-to-end encryption, multi-factor session codes, and technician chat.',
    results: [
      { metric: 'Session Connect Time', value: '< 15s', change: 'Instant browser access' },
      { metric: 'Successful Fixes', value: '96.2%', change: 'Technician resolution' },
      { metric: 'Security Compliance', value: '100%', change: 'End-to-end encrypted' },
      { metric: 'Support Costs', value: '-35%', change: 'No third-party license fees' },
    ],
    features: [
      'Zero-install browser-to-browser WebRTC desktop viewing and remote cursor control',
      'One-time secure 6-digit session pin authentication with automated expiration',
      'In-session real-time technician audio and text chat with file transfer',
      'Comprehensive session audit logs and compliance recording capabilities',
    ],
    architecture:
      'Next.js frontend, WebRTC signaling gateway on Node.js/WebSockets, and secure session management with Redis.',
    testimonial: {
      quote:
        'Building our own browser-based remote support tool saved us hundreds of thousands in licensing fees while delighting our customers.',
      author: 'Siddharth Roy',
      role: 'Head of Customer Engineering',
      company: 'QuickAssist Technologies',
      avatar: '/images/testimonials/vikram-rajput.webp',
    },
  },
  {
    id: 'clearpathprintsolutions',
    slug: 'clearpathprintsolutions',
    name: 'ClearPath Print Solutions',
    tagline: 'Strategic Commercial Document Infrastructure & Print Management Systems',
    category: 'Enterprise Corporate Website',
    categorySlug: 'business-websites',
    featured: false,
    client: 'ClearPath Print Solutions LLC',
    year: '2024',
    duration: '7 Weeks',
    liveUrl: 'http://clearpathprintsolutions.com',
    image: '/images/projects/eliteprintcare.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    shortDescription:
      'An enterprise corporate web experience showcasing secure document workflow automation, enterprise pull-printing, and cost reduction consulting.',
    challenge:
      'Needed a refined corporate digital presence to compete against legacy international print consulting firms for Fortune 500 document infrastructure audits.',
    solution:
      'Architected a sleek corporate website emphasizing document security, cloud print governance, case studies, and compliance certifications.',
    results: [
      { metric: 'Corporate Inquiries', value: '+190%', change: 'Enterprise leads' },
      { metric: 'Page Speed', value: '0.8s', change: 'Full SSR' },
      { metric: 'Enterprise Close Rate', value: '+28%', change: 'Post-redesign' },
      { metric: 'SEO Ranking', value: 'Top 3', change: 'For key industry terms' },
    ],
    features: [
      'Interactive Enterprise Security & Print Governance Blueprint',
      'Document workflow assessment calculator for enterprise IT executives',
      'Case study repository with downloadable technical whitepapers',
      'Optimized responsive layouts with custom SVG infographics',
    ],
    architecture:
      'Next.js SSG deployment with Tailwind CSS, Framer Motion transitions, and enterprise analytics integration.',
    testimonial: {
      quote:
        'The website exudes technical competence and enterprise trust. It has significantly elevated our market reputation.',
      author: 'Elena Rostova',
      role: 'Chief Commercial Officer',
      company: 'ClearPath Print Solutions',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'eliteprintcare',
    slug: 'eliteprintcare',
    name: 'Elite Print Care',
    tagline: 'Proactive Printer Fleet Maintenance, Telemetry & Consumable Replenishment',
    category: 'Managed Services Portal',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Elite Print Care Systems',
    year: '2024',
    duration: '7 Weeks',
    liveUrl: 'http://eliteprintcare.com',
    image: '/images/projects/eliteprintcare.jpg',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    shortDescription:
      'A client portal and corporate web platform managing predictive maintenance alerts, scheduled printer servicing, and automated consumable deliveries.',
    challenge:
      'Corporate clients experienced unexpected printer breakdowns during critical operations due to purely reactive maintenance.',
    solution:
      'Built a modern web portal and marketing site featuring IoT telemetry monitoring, automated service dispatch, and instant maintenance ticket tracking.',
    results: [
      { metric: 'Hardware Uptime', value: '99.5%', change: 'Across client fleets' },
      { metric: 'Emergency Calls', value: '-65%', change: 'Predictive maintenance' },
      { metric: 'Client Retention', value: '98.8%', change: 'Annual service renewals' },
      { metric: 'Contract Growth', value: '2.4x', change: 'Year over year' },
    ],
    features: [
      'Client fleet dashboard displaying device health, toner levels, and duty cycles',
      'Automated service request ticket booking with certified technician dispatch',
      'Consumable replenishment order tracking and billing consolidation',
      'Monthly print analytics and cost savings executive reporting',
    ],
    architecture:
      'Full-stack Next.js web application with Tailwind CSS, Node.js API layer, and PostgreSQL database.',
    testimonial: {
      quote:
        'Our corporate clients love the transparency of the client portal. CSA Technologies CO built a top-tier system.',
      author: 'Rajesh Kapoor',
      role: 'Managing Director',
      company: 'Elite Print Care',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'appinfohub',
    slug: 'appinfohub',
    name: 'App Info Hub',
    tagline: 'Enterprise Software Directory, Version Intelligence & Benchmark Aggregator',
    category: 'Software Directory Platform',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'App Info Hub Digital',
    year: '2025',
    duration: '10 Weeks',
    liveUrl: 'http://appinfohub.com',
    image: '/images/projects/appinfohub.jpg',
    technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Elasticsearch'],
    shortDescription:
      'A software discovery platform providing technical comparisons, API documentation summaries, version release trackers, and verified user reviews.',
    challenge:
      'Existing software directories were cluttered with sponsored ads and lacked deep technical data on APIs, pricing tiers, and SDK support.',
    solution:
      'Engineered an architectural comparison engine featuring clean structured data, side-by-side feature diffs, and developer-centric benchmarks.',
    results: [
      { metric: 'Indexed Software', value: '18,000+', change: 'Verified listings' },
      { metric: 'Monthly Traffic', value: '520K+', change: 'Organic tech visits' },
      { metric: 'Search Response', value: '15ms', change: 'Sub-second search' },
      { metric: 'API Queries', value: '1.2M/mo', change: 'Fast headless API' },
    ],
    features: [
      'Multi-attribute software comparison engine comparing APIs, pricing, and integrations',
      'Version change tracker alerting subscribers to security releases and breaking changes',
      'Verified user reviews and performance benchmark ratings',
      'High-speed faceted filtering across categories, deployment types, and license models',
    ],
    architecture:
      'Next.js 14 App Router, Elasticsearch cluster for instant filtering, MongoDB database, and Vercel Edge caching.',
    testimonial: {
      quote:
        'The search speed and deep comparison architecture make our platform standout in the developer community.',
      author: 'Aakash Mehra',
      role: 'Product Lead',
      company: 'App Info Hub',
      avatar: '/images/testimonials/vikram-rajput.webp',
    },
  },
  {
    id: 'smartappinfo',
    slug: 'smartappinfo',
    name: 'Smart App Info',
    tagline: 'Curated Mobile & Desktop Application Release Directory & Compatibility Hub',
    category: 'Application Discovery Portal',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Smart App Info Media',
    year: '2024',
    duration: '5 Weeks',
    liveUrl: 'http://smartappinfo.com',
    image: '/images/projects/appinfohub.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Cloudflare'],
    shortDescription:
      'A curated portal cataloging utility software, system drivers, and desktop productivity tools with verified hashes, security audits, and compatibility notes.',
    challenge:
      'Users needed a clean, ad-free repository to discover verified software updates without deceptive download buttons or adware.',
    solution:
      'Built a fast, minimalistic directory with strict security verification tags, direct official download links, and operating system version matrices.',
    results: [
      { metric: 'Monthly Visitors', value: '380K+', change: 'Direct & organic' },
      { metric: 'Avg. Page Load', value: '0.6s', change: 'Instant edge render' },
      { metric: 'Safety Score', value: '100%', change: 'Zero adware guarantee' },
      { metric: 'Repeat Users', value: '44%', change: 'High loyalty' },
    ],
    features: [
      'Safety verification badges and SHA checksum verification for every listed software release',
      'Comprehensive OS compatibility matrix (Windows, Mac, iOS, Android, Linux)',
      'Category browsing across Productivity, Utilities, Security, and Development tools',
      'Clean, distraction-free reading layout with dark mode support',
    ],
    architecture:
      'Next.js static site generation with Incremental Static Regeneration (ISR) and Cloudflare global CDN distribution.',
    testimonial: {
      quote:
        'The speed and clean aesthetic engineered by CSA Technologies CO restored trust in utility downloads.',
      author: 'Ritu Saxena',
      role: 'Managing Editor',
      company: 'Smart App Info',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'quickprintassists',
    slug: 'quickprintassists',
    name: 'Quick Print Assists',
    tagline: 'Fast Printer Error Code Diagnosis & Quick Troubleshooting Portal',
    category: 'Instant Support Platform',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'Quick Print Assists Ltd',
    year: '2025',
    duration: '7 Weeks',
    liveUrl: 'http://quickprintassists.com',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    shortDescription:
      'A specialized diagnostic lookup engine decoding flashing LED indicators, error codes, and driver issues across all major commercial printer brands.',
    challenge:
      'Printer error numbers (e.g. 0x0000011b, B200, 50.4) are cryptic to everyday users, leading to unnecessary printer replacement and support fatigue.',
    solution:
      'Engineered an instant error search engine that translates numerical codes into plain-English root causes and provides interactive 3-step repair solutions.',
    results: [
      { metric: 'Error Codes Indexed', value: '12,500+', change: 'Complete OEM coverage' },
      { metric: 'Monthly Queries', value: '310K+', change: 'Global search' },
      { metric: 'Self-Fix Rate', value: '88%', change: 'Resolved without calls' },
      { metric: 'Lookup Speed', value: '< 25ms', change: 'Instant autocomplete' },
    ],
    features: [
      'Instant predictive search for error codes, blinking LED sequences, and error messages',
      'Visual step-by-step resolution flowcharts with clear illustrations',
      'Direct link to download official manufacturer patch files and firmware',
      'One-click technician escalation for persistent mechanical failures',
    ],
    architecture:
      'Next.js App Router, Node.js backend with MongoDB search index, and client-side fuzzy search.',
    testimonial: {
      quote:
        'Our users find the exact fix within 5 seconds of typing their error code. Outstanding engineering.',
      author: 'Daniel Craig',
      role: 'Technical Operations Director',
      company: 'Quick Print Assists',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'printsbasket',
    slug: 'printsbasket',
    name: 'Prints Basket',
    tagline: 'Curated Custom Printing, Personalized Apparel & Event Signage Store',
    category: 'E-Commerce Storefront',
    categorySlug: 'ecommerce',
    featured: false,
    client: 'Prints Basket Retail',
    year: '2024',
    duration: '8 Weeks',
    liveUrl: 'http://printsbasket.com',
    image: '/images/projects/printsbasket.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    shortDescription:
      'An e-commerce storefront for custom printed personalized gifts, corporate branded apparel, canvas wall art, and event exhibition signage.',
    challenge:
      'High bounce rate due to clunky design previews and confusing multi-item ordering for corporate event kits.',
    solution:
      'Designed an intuitive e-commerce journey with real-time vector product rendering, automated quantity discounts, and split shipping for corporate teams.',
    results: [
      { metric: 'Conversion Rate', value: '+135%', change: 'Post-launch' },
      { metric: 'Mobile Orders', value: '68%', change: 'Of total revenue' },
      { metric: 'Cart Abandonment', value: '26%', change: 'Down from 69%' },
      { metric: 'Repeat Orders', value: '42%', change: 'High client loyalty' },
    ],
    features: [
      'Interactive online designer with instant text font, color, and photo preview',
      'Corporate bundle builder allowing multi-item branded swag box configuration',
      'Automated proof generation sent directly to customer email before print run',
      'Integrated real-time order tracking and dispatch notification webhooks',
    ],
    architecture:
      'Next.js 14 frontend, Node.js microservices, MongoDB database, and Stripe payment gateway.',
    testimonial: {
      quote:
        'The store is fast, beautiful, and our customers frequently compliment how easy it is to order custom swag.',
      author: 'Sumantha Ghosh',
      role: 'Founder',
      company: 'Prints Basket',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'smarteprintssolutions',
    slug: 'smarteprintssolutions',
    name: 'Smart Eprint Solutions',
    tagline: 'Enterprise High-Volume Production Print Workflows & ERP Integration',
    category: 'B2B Print Infrastructure Portal',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Smart Eprint Solutions Global',
    year: '2025',
    duration: '9 Weeks',
    liveUrl: 'http://smarteprintssolutions.com',
    image: '/images/projects/smarteprint.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    shortDescription:
      'A B2B industrial printing portal connecting enterprise clients with automated high-speed offset and digital print facilities across the nation.',
    challenge:
      'Enterprise clients required strict SLA tracking, procurement approvals, and custom catalog pricing that standard e-commerce stores could not support.',
    solution:
      'Developed a tailored B2B portal featuring company sub-accounts, approval workflows, custom price contracts, and automated press routing.',
    results: [
      { metric: 'B2B Accounts', value: '340+', change: 'Corporate clients' },
      { metric: 'Order Processing', value: '-80% time', change: 'Automated workflow' },
      { metric: 'Annual Contract Value', value: '₹3.2 Cr', change: 'Platform throughput' },
      { metric: 'Fulfillment Accuracy', value: '99.9%', change: 'Zero press errors' },
    ],
    features: [
      'Corporate hierarchy with buyer roles, supervisor approvals, and credit line billing',
      'Contract-specific tiered price lists and custom brand asset asset vaults',
      'Real-time automated PDF pre-flighting and color profile verification',
      'ERP integration synchronizing jobs directly with industrial digital press RIPs',
    ],
    architecture:
      'Next.js App Router, Node.js REST API with PostgreSQL database, and AWS S3 secure high-resolution print storage.',
    testimonial: {
      quote:
        'CSA Technologies CO built a sophisticated B2B platform that automated our entire corporate printing workflow.',
      author: 'Deepak Saxena',
      role: 'VP of Technology',
      company: 'Smart Eprint Solutions',
      avatar: '/images/testimonials/vikram-rajput.webp',
    },
  },
  {
    id: 'printsmatrix',
    slug: 'printsmatrix',
    name: 'Prints Matrix',
    tagline: 'B2B Wholesale Commercial Print Matrix, Bulk Tier Pricing & API Fulfillment',
    category: 'Wholesale Print B2B Portal',
    categorySlug: 'ecommerce',
    featured: false,
    client: 'Prints Matrix Wholesale Network',
    year: '2024',
    duration: '10 Weeks',
    liveUrl: 'http://printsmatrix.com',
    image: '/images/projects/printscarts.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS'],
    shortDescription:
      'A trade-only wholesale printing matrix and automated print API platform catering to graphic design agencies, print brokers, and marketing departments.',
    challenge:
      'Wholesale pricing involved thousands of paper stock, finish, and turn-around permutations, making manual quote generation a costly bottleneck.',
    solution:
      'Engineered an instant dynamic price matrix table and RESTful Order API enabling resellers to quote, order, and blind drop-ship automatically.',
    results: [
      { metric: 'Registered Resellers', value: '2,800+', change: 'Active agencies' },
      { metric: 'API Orders Automated', value: '64%', change: 'Of total volume' },
      { metric: 'Quote Calculation', value: '< 10ms', change: 'Matrix algorithm' },
      { metric: 'Annual Wholesale GMV', value: '₹4.5 Cr', change: 'Scale reached' },
    ],
    features: [
      'Interactive multi-variable matrix calculator computing paper, coating, and quantity pricing instantly',
      'Blind drop-shipping engine with white-label customer packing slips and packaging',
      'Developer REST API for e-commerce stores to integrate direct wholesale printing fulfillment',
      'Real-time production press scheduling and automated dispatch tracking',
    ],
    architecture:
      'Next.js 14 frontend, Node.js API server on AWS ECS, Redis cache for rapid matrix pricing calculations, and MongoDB.',
    testimonial: {
      quote:
        'The automated price matrix and API capabilities have transformed our business into a true nationwide wholesale powerhouse.',
      author: 'Varun Singhal',
      role: 'CEO',
      company: 'Prints Matrix',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'smartinkguide',
    slug: 'smartinkguide',
    name: 'Smart Ink Guide',
    tagline: 'Intelligent OEM Ink Cartridge Compatibility Checker & Savings Calculator',
    category: 'Consumable Comparison Portal',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Smart Ink Guide Media',
    year: '2024',
    duration: '5 Weeks',
    liveUrl: 'http://smartinkguide.com',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Cloudflare'],
    shortDescription:
      'A consumer guidance web application matching over 20,000 printer models with exact OEM and high-yield eco cartridge part numbers and yield estimators.',
    challenge:
      'Consumers routinely purchased incorrect ink cartridges due to confusing series numbers and minor model suffix differences.',
    solution:
      'Engineered an interactive 3-step dropdown selector (Brand ➔ Series ➔ Model) displaying verified cartridge codes, page yield, and price comparisons.',
    results: [
      { metric: 'Indexed Cartridges', value: '45,000+', change: 'Verified parts' },
      { metric: 'Monthly Lookups', value: '420K+', change: 'Organic visits' },
      { metric: 'Wrong Purchases', value: '-94%', change: 'For guide users' },
      { metric: 'Page Load Speed', value: '0.7s', change: 'Global edge cache' },
    ],
    features: [
      'Instant 3-step printer model selector with live autocomplete and photo verification',
      'Page-yield cost calculator estimating Cost-Per-Page (CPP) across standard and XL cartridges',
      'Direct affiliate and store links to verified in-stock suppliers',
      'Interactive reset and installation guides for refilled cartridges',
    ],
    architecture:
      'Next.js static site generation with edge caching on Cloudflare and structured schema markup for rich Google search snippets.',
    testimonial: {
      quote:
        'The compatibility tool works flawlessly. It has become the go-to reference for ink buyers across the web.',
      author: 'Aditi Sharma',
      role: 'Managing Editor',
      company: 'Smart Ink Guide',
      avatar: '/images/testimonials/priya-mehta.webp',
    },
  },
  {
    id: 'inkkartllc',
    slug: 'inkkartllc',
    name: 'Ink Kart LLC',
    tagline: 'Global Distributor of Premium Ink Supplies, Toners & Specialty Media',
    category: 'E-Commerce Online Store',
    categorySlug: 'ecommerce',
    featured: false,
    client: 'Ink Kart LLC',
    year: '2025',
    duration: '8 Weeks',
    liveUrl: 'http://inkkartllc.com',
    image: '/images/projects/printsbasket.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    shortDescription:
      'An e-commerce storefront for genuine and compatible printer cartridges, high-capacity toner drums, continuous ink systems (CISS), and specialty photo paper.',
    challenge:
      'High catalog complexity with 50,000+ SKUs resulted in slow search queries and frequent customer drop-off on legacy e-commerce software.',
    solution:
      'Architected a headless e-commerce store with instant faceted search, automated subscription replenishment, and multi-warehouse stock display.',
    results: [
      { metric: 'Catalog SKUs', value: '50,000+', change: 'Seamlessly indexed' },
      { metric: 'Checkout Speed', value: '1.2s', change: '3-click checkout' },
      { metric: 'Subscription Orders', value: '38%', change: 'Of total revenue' },
      { metric: 'Revenue Growth', value: '+165%', change: 'Post platform launch' },
    ],
    features: [
      'Instant faceted search filtering by cartridge number, printer brand, color, and yield',
      'Automated monthly/quarterly consumable replenishment subscriptions with auto-billing',
      'Multi-warehouse real-time inventory tracking with same-day shipping badges',
      'B2B tax-exempt checkout and corporate net-30 invoicing support',
    ],
    architecture:
      'Next.js 14 App Router, Node.js backend with MongoDB search index, Redis caching, and Stripe Billing integration.',
    testimonial: {
      quote:
        'Managing 50,000 products with instant search was a major challenge until CSA Technologies CO built this platform.',
      author: 'Harpreet Singh',
      role: 'CEO & Founder',
      company: 'Ink Kart LLC',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'shopsprinters',
    slug: 'shopsprinters',
    name: 'Shops Printers',
    tagline: 'Direct Commercial Printer Marketplace, Equipment Leasing & Supplies Store',
    category: 'E-Commerce Hardware Store',
    categorySlug: 'ecommerce',
    featured: false,
    client: 'Shops Printers Direct',
    year: '2024',
    duration: '9 Weeks',
    liveUrl: 'http://shopsprinters.com',
    image: '/images/projects/printscarts.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    shortDescription:
      'An online commercial hardware marketplace offering business laser printers, multifunction copiers, production plotters, and equipment leasing programs.',
    challenge:
      'High-ticket commercial hardware ($1,000 - $15,000) required both direct online purchasing and custom commercial lease-to-own quote requests.',
    solution:
      'Engineered a hybrid e-commerce platform supporting both instant credit card purchases and structured monthly leasing application submissions with automated financing review.',
    results: [
      { metric: 'High-Ticket Sales', value: '+140%', change: 'Commercial units' },
      { metric: 'Leasing Applications', value: '450+/mo', change: 'Processed' },
      { metric: 'Average Order Value', value: '$2,850', change: 'Hardware sales' },
      { metric: 'Financing Approval', value: '< 2 hrs', change: 'Automated routing' },
    ],
    features: [
      'Interactive monthly leasing calculator with customizable term length and buyout options',
      'Comprehensive hardware specification comparison tool comparing PPM, DPI, duty cycles, and paper trays',
      'Pre-configured maintenance and toner replenishment bundle options at checkout',
      'Automated freight logistics and inside-delivery scheduling integration',
    ],
    architecture:
      'Next.js App Router, Node.js API with PostgreSQL database, and Stripe + commercial financing API integrations.',
    testimonial: {
      quote:
        'The leasing calculator and hybrid checkout increased our commercial printer sales by more than double.',
      author: 'Anthony Morales',
      role: 'Head of E-Commerce',
      company: 'Shops Printers',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
  {
    id: 'synclinktechnologies',
    slug: 'synclinktechnologies',
    name: 'Synclink Technologies',
    tagline: 'Enterprise IT Services, Business Intelligence & Full-Stack Consultancy Portal',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: true,
    client: 'Synclink Technologies Pvt. Ltd.',
    year: '2025',
    duration: '8 Weeks',
    liveUrl: 'https://synclinktechnologies.com',
    image: '/images/projects/technosky.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    shortDescription:
      'A cutting-edge corporate digital presence for an IT & HR consultancy firm — showcasing Business Intelligence, Microsoft Fabric, Data Engineering, and Full-Stack capabilities with a sleek, enterprise-grade design.',
    challenge:
      'Synclink Technologies needed a professional online presence that clearly communicated their breadth of IT services — from BI dashboards and cloud infrastructure to HR consulting — to attract enterprise clients globally.',
    solution:
      'We engineered a modern, conversion-focused corporate website with service-specific landing sections, a Microsoft Fabric and BI showcase, animated service cards, and integrated career portal with application workflows.',
    results: [
      { metric: 'Enterprise Inquiries', value: '+190%', change: 'Post-launch uplift' },
      { metric: 'Session Duration', value: '4m 12s', change: '+220% engagement' },
      { metric: 'Lighthouse Score', value: '97/100', change: 'All categories' },
      { metric: 'Leads Qualified', value: '3.4x', change: 'Pipeline growth' },
    ],
    features: [
      'Service-specific landing pages for BI, Data Engineering, Java, Python & HR Consulting',
      'Animated Microsoft Fabric & cloud architecture showcase with interactive diagrams',
      'Integrated careers portal with real-time job listing management',
      'Global client inquiry system with automated routing and CRM sync',
      'Dark-to-light hero section with scroll-triggered Framer Motion animations',
    ],
    architecture:
      'Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. Deployed on Vercel edge network with Node.js API routes for form handling and CRM integrations.',
    testimonial: {
      quote:
        'CSA Technologies CO built exactly what we envisioned — a premium, professional website that elevates our brand and drives real enterprise leads.',
      author: 'Rahul Sharma',
      role: 'Director',
      company: 'Synclink Technologies',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'wedfilmer',
    slug: 'wedfilmer',
    name: 'Wed Filmer',
    tagline: 'Premium Wedding & Event Photography Booking Platform with Cinematic Portfolio',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: true,
    client: 'Wed Filmer Studios',
    year: '2025',
    duration: '7 Weeks',
    liveUrl: 'https://www.wedfilmer.in',
    image: '/images/projects/smartprinthelp.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Playfair Display'],
    shortDescription:
      'A luxury wedding photography and videography brand website with a dark cinematic aesthetic, portfolio masonry gallery, service carousel, and streamlined booking flow for 350+ events covered.',
    challenge:
      'Wed Filmer needed a digital presence that matched the premium, emotional, and cinematic quality of their work — their previous site felt generic and failed to convert high-value wedding clients.',
    solution:
      'We crafted an immersive dark-luxury website featuring a cinematic video hero, animated photo masonry portfolio, 3D service card carousel, client testimonial sections, and a premium multi-package booking engine.',
    results: [
      { metric: 'Booking Inquiries', value: '+285%', change: 'Post-launch uplift' },
      { metric: 'Average Package Value', value: '₹75K+', change: 'Platinum tier' },
      { metric: 'Portfolio Views', value: '18K+/mo', change: 'Organic traffic' },
      { metric: 'Client Rating', value: '4.9 ★', change: '1,000+ reviews' },
    ],
    features: [
      'Cinematic full-screen video hero with auto-play and ambient overlay effects',
      'Interactive 3D service card carousel (Wedding, Pre-Wedding, Videography, Corporate)',
      'Masonry photo portfolio with category filters and lightbox viewer',
      'Multi-tier package builder with Silver, Gold, and Platinum pricing cards',
      'Framer Motion scroll-triggered animations throughout all sections',
    ],
    architecture:
      'Next.js 14 App Router with Tailwind CSS and Framer Motion. Custom masonry grid, 3D CSS carousel, and lazy-loaded high-resolution gallery with AVIF/WebP optimized images.',
    testimonial: {
      quote:
        'The website they built for us is absolutely stunning. It perfectly captures the cinematic quality of our work and has tripled our premium bookings.',
      author: 'Arjun Mehta',
      role: 'Founder',
      company: 'Wed Filmer Studios',
      avatar: '/images/testimonials/rohit-sharma.webp',
    },
  },
  {
    id: 'therealtyxperts',
    slug: 'therealtyxperts',
    name: 'The Realty Xperts',
    tagline: 'Premium Real Estate Investment & Property Listing Platform for Discerning Buyers',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: true,
    client: 'The Realty Xperts',
    year: '2025',
    duration: '9 Weeks',
    liveUrl: 'https://therealtyxperts.in',
    image: '/images/projects/innovationdynamicsgroup.jpg',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    shortDescription:
      'A sophisticated real estate discovery and investment platform featuring luxury property listings, interactive search, high-yield investment portfolio showcases, and expert consultation booking — built for premium buyers since 2016.',
    challenge:
      'The Realty Xperts had no digital platform that matched their premium market positioning. High-value residential, commercial, and investment properties were being listed on generic portals that failed to convey exclusivity or expert guidance.',
    solution:
      'We designed and developed a stunning real estate platform featuring advanced property search with smart filters, dedicated residential/commercial/investment sections, virtual tour integration hooks, and an expert consultation scheduling system.',
    results: [
      { metric: 'Property Inquiries', value: '+320%', change: 'Qualified leads' },
      { metric: 'Avg. Session Duration', value: '5m 30s', change: '+260% engagement' },
      { metric: 'Investment Consultations', value: '2.8x', change: 'Monthly bookings' },
      { metric: 'Client Satisfaction', value: '98%', change: 'Post-purchase survey' },
    ],
    features: [
      'Advanced property search with location, type, budget, and amenity smart filters',
      'Dedicated residential, commercial, and high-yield investment portfolio sections',
      'Interactive property detail pages with gallery, floor plans, and location maps',
      'Expert consultation booking system with automated confirmation and reminders',
      'Mobile-first luxury design with gold accent palette and premium typography',
    ],
    architecture:
      'React + Vite frontend with Tailwind CSS and Framer Motion animations. Node.js API backend for property data management, lead capture, and consultation scheduling workflows.',
    testimonial: {
      quote:
        'Our digital presence now truly reflects the premium nature of our properties. The platform has been a game-changer for attracting high-net-worth buyers.',
      author: 'Vikram Malhotra',
      role: 'Founder & CEO',
      company: 'The Realty Xperts',
      avatar: '/images/testimonials/amit-verma.webp',
    },
  },
];
