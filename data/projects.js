export const PROJECTS = [
  {
    id: 'prints-carts',
    slug: 'prints-carts',
    name: 'Prints Carts',
    tagline: 'High-Converting Custom Print & Merchandise E-Commerce Platform',
    category: 'E-Commerce Website',
    categorySlug: 'ecommerce',
    featured: true,
    client: 'Prints Carts Global',
    year: '2025',
    duration: '10 Weeks',
    liveUrl: 'https://printscarts.example.com',
    image: '/images/projects/prints-carts.webp',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    shortDescription:
      'A blazing-fast modern e-commerce storefront with real-time product customizer, dynamic tiered pricing, and automated order fulfillment pipeline.',
    challenge:
      'Prints Carts was losing potential orders due to a slow, monolithic legacy store that took over 4.5 seconds to load product pages. Customers struggled with complex customization options, resulting in a 74% cart abandonment rate and constant customer service bottlenecks.',
    solution:
      'We architected a headless e-commerce platform using Next.js App Router for instant page transitions and server-side rendering. We built an intuitive interactive SVG-based live product customizer, streamlined 1-click checkout with Stripe, and connected an automated print-lab webhook pipeline in Node.js and MongoDB.',
    results: [
      { metric: 'Load Time', value: '0.8s', change: '-78% latency' },
      { metric: 'Conversion Rate', value: '+142%', change: 'Post-launch' },
      { metric: 'Monthly Revenue', value: '₹48L+', change: '3.2x growth' },
      { metric: 'Cart Abandonment', value: '28%', change: 'Down from 74%' },
    ],
    features: [
      'Interactive vector-based product design preview with real-time text/artwork overlay',
      'Instant search and faceted filtering with zero layout shift',
      'Dynamic volume discount engine with bulk price calculator',
      'Automated PDF invoice generation and vendor dispatch routing',
      'Secure PCI-compliant multi-currency checkout via Stripe & Razorpay',
    ],
    architecture:
      'Built with Next.js 14 App Router, deployed on Vercel Edge Network, backed by Node.js microservices on AWS and MongoDB Atlas with automated Redis caching for high-concurrency flash sales.',
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
    image: '/images/projects/technosky.webp',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    shortDescription:
      'A sleek, corporate web presence designed for high-value enterprise lead generation, service clarity, and brand authority across global markets.',
    challenge:
      'TechnoSky had an outdated, static website that failed to reflect their position as a high-end enterprise cloud infrastructure partner. B2B enterprise prospects had difficulty discovering case studies and requested consultative sales calls at very low rates.',
    solution:
      'We engineered a bespoke, dark-mode corporate web experience highlighting enterprise cloud capabilities, interactive solution blueprints, compliance credentials, and contextual lead magnets tailored to CTOs and VP of Engineering visitors.',
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
      'Comprehensive Case Studies library with downloadable whitepapers',
      'Seamless CRM integration with automated lead scoring and calendar booking',
    ],
    architecture:
      'Static-site generation (SSG) with Next.js and Tailwind CSS, featuring silky 60fps Framer Motion micro-animations, optimized typography, and HubSpot CRM webhook automation.',
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
    tagline: 'Multi-Vendor On-Demand Print Marketplace & Fulfillment Engine',
    category: 'E-Commerce Platform',
    categorySlug: 'ecommerce',
    featured: true,
    client: 'SmartEprint Technologies',
    year: '2024',
    duration: '14 Weeks',
    liveUrl: 'https://smarteprint.example.com',
    image: '/images/projects/smarteprint.webp',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    shortDescription:
      'An end-to-end B2B and B2C commercial printing ecosystem featuring instant custom quotes, dynamic vector pre-flight validation, and multi-facility order routing.',
    challenge:
      'Commercial printing involves hundreds of complex paper weights, finishes, and dimensional variables. Manual quoting took hours per customer, causing massive order loss and frequent print-file rework errors.',
    solution:
      'We designed and built an automated print calculation engine that generates instant dynamic pricing across 400+ custom paper combinations. Integrated automated PDF pre-flight checks to flag low DPI resolution before payment, saving thousands of hours in production.',
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
      'Real-time shipment tracking integration with Shiprocket and Delhivery',
    ],
    architecture:
      'Modular microservice architecture built with Next.js on the frontend, Node.js/Express API servers, MongoDB cluster for catalog and order management, and AWS S3 for secure high-resolution print asset storage.',
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
    id: 'driver-info-hub',
    slug: 'driver-info-hub',
    name: 'Driver Info Hub',
    tagline: 'Real-Time Fleet Intelligence, Compliance & Driver Analytics Platform',
    category: 'Web Platform',
    categorySlug: 'custom-apps',
    featured: true,
    client: 'Logix Fleet Solutions',
    year: '2024',
    duration: '12 Weeks',
    liveUrl: 'https://driverinfohub.example.com',
    image: '/images/projects/driver-info-hub.webp',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    shortDescription:
      'A mission-critical fleet management web application tracking driver compliance, telematics telemetry, maintenance schedules, and safety scorecards.',
    challenge:
      'Managing compliance documents, driving hours, and licensing across 3,500+ commercial drivers using fragmented spreadsheets resulted in missed audit deadlines, safety infractions, and expensive fleet downtime.',
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
      'High-throughput web application built with Next.js 14 App Router, WebSockets for bidirectional live location streaming, secure JWT authentication, and MongoDB time-series collections for telemetry storage.',
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
    id: 'healthsync-pro',
    slug: 'healthsync-pro',
    name: 'HealthSync Pro',
    tagline: 'HIPAA-Compliant Telehealth & Clinical Patient Management Portal',
    category: 'Custom Web Application',
    categorySlug: 'custom-apps',
    featured: false,
    client: 'HealthSync Medical Group',
    year: '2024',
    duration: '16 Weeks',
    liveUrl: 'https://healthsync.example.com',
    image: '/images/projects/driver-info-hub.webp',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'WebRTC'],
    shortDescription:
      'Secure patient portal with WebRTC HD video consultations, electronic health record (EHR) sync, and automated appointment scheduling.',
    challenge:
      'A network of multi-specialty clinics needed a secure, zero-friction telemedicine solution that integrated directly into their internal clinic scheduling workflow without third-party app downloads.',
    solution:
      'We built a browser-native WebRTC video portal with end-to-end encrypted medical record exchange, digital prescription generation, and automated patient SMS reminders.',
    results: [
      { metric: 'Patient Consultations', value: '45K+', change: 'Completed' },
      { metric: 'No-Show Rate', value: '6.2%', change: 'Down from 22%' },
      { metric: 'Patient Satisfaction', value: '4.9/5', change: 'Over 8,000 reviews' },
      { metric: 'Security Audit', value: '100%', change: 'HIPAA compliant' },
    ],
    features: [
      'Encrypted browser-to-browser HD video consultations with screen sharing',
      'Digital prescription creation with direct pharmacy dispatch',
      'Self-service patient appointment booking and intake questionnaire',
      'Integrated medical records repository with audit-trail logging',
    ],
    architecture:
      'Next.js frontend with Tailwind CSS, Node.js microservices, WebRTC signaling gateway, and HIPAA-compliant encrypted database storage.',
    testimonial: {
      quote:
        'CSA Technologies CO built a flawless, secure telehealth platform that our doctors and patients love using daily.',
      author: 'Dr. Sunita Rao',
      role: 'Chief Medical Officer',
      company: 'HealthSync Medical',
      avatar: '/images/testimonials/sunita-rao.webp',
    },
  },
  {
    id: 'aurora-realestate',
    slug: 'aurora-realestate',
    name: 'Aurora Luxury Realty',
    tagline: 'Interactive Architectural Property Showcase & Virtual Tour Portal',
    category: 'Business Website',
    categorySlug: 'business-websites',
    featured: false,
    client: 'Aurora Realty Partners',
    year: '2024',
    duration: '8 Weeks',
    liveUrl: 'https://aurorarealty.example.com',
    image: '/images/projects/technosky.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    shortDescription:
      'Ultra-luxury real estate web experience featuring 3D virtual floorplan tours, interactive neighborhood mapping, and VIP viewing booking.',
    challenge:
      'High-net-worth real estate buyers demanded immersive, editorial-grade visual presentation of premium listings with instantaneous filtering and 3D architectural walk-throughs.',
    solution:
      'Engineered an ultra-fast editorial aesthetic with interactive property filters, high-resolution media galleries, embedded 360-degree tours, and direct private concierge chat.',
    results: [
      { metric: 'Inquiry Rate', value: '+165%', change: 'HNW buyers' },
      { metric: 'Avg. Property Viewed', value: '7.4', change: 'Per session' },
      { metric: 'Avg. Page Load', value: '0.9s', change: 'Optimized media' },
      { metric: 'Listing Inquiries', value: '₹120 Cr+', change: 'Generated pipeline' },
    ],
    features: [
      '360-degree virtual tour embedding and interactive floorplans',
      'Interactive GIS neighborhood maps showing schools, dining, and transit',
      'Instant PDF brochure generation with dynamic property specs',
      'Direct WhatsApp and calendar integration for private showings',
    ],
    architecture:
      'Next.js SSG with ISR (Incremental Static Regeneration), Tailwind CSS, and Cloudinary media optimization pipeline.',
    testimonial: {
      quote:
        'The website represents our luxury brand with absolute perfection. It has become our #1 driver of high-value buyer inquiries.',
      author: 'Rohan Deshmukh',
      role: 'Managing Partner',
      company: 'Aurora Realty',
      avatar: '/images/testimonials/rohan-deshmukh.webp',
    },
  },
];
