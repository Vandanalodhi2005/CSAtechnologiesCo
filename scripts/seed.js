const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const DB_DIR = path.join(__dirname, '..', 'data', 'db');

function ensureDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

async function seed() {
  console.log('--- Starting CSA Technologies Database Seeding ---');
  ensureDir();

  // 1. Seed Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@csatechnologies.co';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@CSA2026!';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admins = [
    {
      id: 'admin-csa-primary',
      email: adminEmail.toLowerCase(),
      password: hashedPassword,
      name: 'CSA Administrator',
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  fs.writeFileSync(path.join(DB_DIR, 'admins.json'), JSON.stringify(admins, null, 2));
  console.log(`✓ Admin user seeded: ${adminEmail}`);

  // 2. Seed Initial Active IT Job Openings
  const jobs = [
    {
      id: 'job-fs-001',
      title: 'Senior Full Stack Developer (Next.js & Node.js)',
      department: 'Engineering',
      description:
        'We are seeking an experienced Senior Full Stack Engineer to lead the architecture and development of scalable, high-performance web applications, enterprise client portals, and microservices for our global clients.',
      responsibilities: [
        'Architect, develop, and maintain modern web applications using Next.js (App Router), React, Node.js, and TypeScript.',
        'Design efficient RESTful and GraphQL APIs, integrating resilient database schemas with PostgreSQL and MongoDB.',
        'Collaborate with UI/UX designers and product managers to translate complex client requirements into intuitive, pixel-perfect user experiences.',
        'Optimize Core Web Vitals, implement server-side rendering, and write clean, scalable, and well-tested code.',
        'Mentor junior and mid-level developers through code reviews, architectural discussions, and engineering best practices.',
      ],
      skills: [
        'Next.js',
        'React',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
      qualifications: [
        'B.Tech/B.E. in Computer Science, Information Technology, or equivalent practical experience.',
        '4+ years of professional full-stack web development experience.',
        'Demonstrated track record of shipping production-grade React/Next.js web applications.',
        'Strong understanding of asynchronous programming, serverless architecture, and API design.',
      ],
      experience: '4-7 years',
      location: 'Noida, India (Hybrid)',
      employmentType: 'Full-time',
      salaryRange: '₹12,00,000 - ₹20,00,000 / year',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'job-fe-002',
      title: 'Frontend Engineer & UI/UX Specialist',
      department: 'Design & Engineering',
      description:
        'Join CSA Technologies to create stunning, accessible, and high-converting web interfaces. You will bridge design and engineering to build modern web applications with silky-smooth micro-animations.',
      responsibilities: [
        'Build responsive, cross-browser, accessible web interfaces using React, Next.js, and modern CSS/Tailwind.',
        'Implement sophisticated micro-animations and smooth layout transitions using Framer Motion.',
        'Collaborate closely with UI/UX designers in Figma to turn design systems into reusable component libraries.',
        'Ensure 95+ Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.',
        'Participate in design critiques and contribute to the CSA Technologies design system.',
      ],
      skills: [
        'React',
        'Next.js',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'Framer Motion',
        'Figma',
        'Responsive Design',
        'Web Accessibility (a11y)',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science, Design, or equivalent portfolio experience.',
        '2-4 years of professional frontend development experience with modern React ecosystems.',
        'High attention to detail, visual hierarchy, typography, and spacing.',
        'Strong portfolio demonstrating high-end web applications or interactive websites.',
      ],
      experience: '2-4 years',
      location: 'Noida, India (Hybrid / Remote)',
      employmentType: 'Full-time',
      salaryRange: '₹7,00,000 - ₹12,00,000 / year',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'job-ai-003',
      title: 'Python & AI Solutions Engineer',
      department: 'Engineering',
      description:
        'Help our clients integrate state-of-the-art Generative AI, LLMs, and intelligent automation into their web applications, data workflows, and backend infrastructure.',
      responsibilities: [
        'Develop and deploy AI/ML integrations, Retrieval-Augmented Generation (RAG) pipelines, and intelligent search features.',
        'Build robust Python backends and microservices utilizing FastAPI, LangChain/LlamaIndex, and vector databases.',
        'Fine-tune models, optimize token latency, and implement robust rate-limiting and prompt governance.',
        'Work with cloud providers (AWS / GCP) to containerize and scale AI workloads in production.',
      ],
      skills: [
        'Python',
        'FastAPI',
        'Gemini API / OpenAI',
        'LangChain',
        'Vector DBs (Pinecone/Qdrant)',
        'Docker',
        'PostgreSQL',
      ],
      qualifications: [
        'B.Tech or Master’s in Computer Science, Data Science, or related field.',
        '3+ years of software development experience with at least 1+ years dedicated to LLM and AI application engineering.',
        'Solid background in REST APIs, background job queues (Celery/Redis), and cloud deployments.',
      ],
      experience: '3-6 years',
      location: 'Noida, India (Hybrid)',
      employmentType: 'Full-time',
      salaryRange: '₹10,00,000 - ₹18,00,000 / year',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'job-devops-004',
      title: 'DevOps & Cloud Systems Engineer',
      department: 'Infrastructure',
      description:
        'Lead our cloud infrastructure, CI/CD pipelines, container orchestration, and server reliability engineering across client cloud environments.',
      responsibilities: [
        'Design, automate, and manage cloud infrastructure on AWS, Google Cloud, and Vercel.',
        'Implement robust CI/CD pipelines using GitHub Actions for automated testing and zero-downtime deployment.',
        'Monitor application health, uptime, and security using modern telemetry tools (Prometheus, Grafana, Datadog).',
        'Implement Infrastructure as Code (Terraform) and ensure strict data protection and compliance standards.',
      ],
      skills: [
        'AWS',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'Terraform',
        'Linux Administration',
        'Nginx',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or equivalent practical experience.',
        '3+ years of hands-on DevOps or Cloud engineering experience.',
        'AWS or GCP Certified Solutions Architect / DevOps Engineer is a strong plus.',
      ],
      experience: '3-5 years',
      location: 'Remote (India)',
      employmentType: 'Remote',
      salaryRange: '₹11,00,000 - ₹17,00,000 / year',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'job-intern-005',
      title: 'Web Development Engineering Intern',
      department: 'Engineering',
      description:
        'Kickstart your tech career with CSA Technologies. You will work side-by-side with senior engineers on real enterprise client projects, learning modern frontend and full-stack development practices.',
      responsibilities: [
        'Assist in building web components using React, Next.js, and Tailwind CSS.',
        'Write unit tests, fix UI bugs, and participate in daily agile standups.',
        'Learn and apply modern git workflows, code reviews, and deployment processes.',
        'Deliver a capstone client project under the guidance of a senior mentor.',
      ],
      skills: ['JavaScript', 'HTML/CSS', 'React basics', 'Git', 'Tailwind CSS'],
      qualifications: [
        'Currently pursuing or recently graduated with a degree in Computer Science or related fields.',
        'Basic understanding of JavaScript and modern web standards.',
        'Hunger to learn, passion for clean code, and great communication skills.',
      ],
      experience: '0-1 year / Freshers',
      location: 'Noida, India (On-site)',
      employmentType: 'Internship',
      salaryRange: '₹20,000 - ₹35,000 / month stipend',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'job-seo-006',
      title: 'Digital Marketing & Technical SEO Specialist',
      department: 'Marketing',
      description:
        'Drive organic growth, technical SEO architecture, content strategy, and search rankings for CSA Technologies and our key client projects.',
      responsibilities: [
        'Audit web applications for technical SEO, schema markup, Core Web Vitals, and crawlability.',
        'Execute data-driven keyword research, competitor analysis, and on-page optimization.',
        'Collaborate with developers to implement dynamic sitemaps, structured data, and meta tags.',
        'Track rankings, traffic, conversions, and prepare monthly performance reports using Google Analytics & Search Console.',
      ],
      skills: [
        'Technical SEO',
        'Google Search Console',
        'Google Analytics 4',
        'SEMrush / Ahrefs',
        'Schema.org / JSON-LD',
        'Content Strategy',
      ],
      qualifications: [
        '2+ years of proven technical SEO and digital marketing experience.',
        'Demonstrated portfolio of websites ranked in top Google search results.',
        'Familiarity with HTML, Next.js, and modern website architecture.',
      ],
      experience: '2-4 years',
      location: 'Noida, India',
      employmentType: 'Full-time',
      salaryRange: '₹6,00,000 - ₹10,00,000 / year',
      applicationDeadline: '2026-12-31',
      status: 'active',
      createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  fs.writeFileSync(path.join(DB_DIR, 'jobs.json'), JSON.stringify(jobs, null, 2));
  console.log(`✓ Seeded ${jobs.length} active IT job openings.`);

  // 3. Seed Sample Applications
  const applications = [
    {
      id: 'app-sample-001',
      jobId: 'job-fs-001',
      jobTitle: 'Senior Full Stack Developer (Next.js & Node.js)',
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma.dev@example.com',
      phone: '+91 98765 43210',
      location: 'New Delhi, India',
      experience: '5 years',
      skills: 'Next.js, React, Node.js, TypeScript, PostgreSQL, Docker',
      linkedin: 'https://linkedin.com/in/rahulsharmadev',
      github: 'https://github.com/rahulsharma-example',
      resumeUrl: '/uploads/resumes/sample-rahul-sharma-resume.pdf',
      coverLetter:
        'I am excited to apply for the Senior Full Stack Developer position at CSA Technologies. I have over 5 years of experience building production web applications in Next.js and Node.js.',
      applicationStatus: 'Shortlisted',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'app-sample-002',
      jobId: 'job-fe-002',
      jobTitle: 'Frontend Engineer & UI/UX Specialist',
      fullName: 'Priya Patel',
      email: 'priya.patel.ui@example.com',
      phone: '+91 91234 56789',
      location: 'Noida, India',
      experience: '3 years',
      skills: 'React, Next.js, Tailwind CSS, Framer Motion, Figma',
      linkedin: 'https://linkedin.com/in/priyapatel-ui',
      github: 'https://github.com/priyapatel-example',
      resumeUrl: '/uploads/resumes/sample-priya-patel-resume.pdf',
      coverLetter:
        'With 3 years designing and coding high-performance React frontends, I would love to bring my UI/UX skills to CSA Technologies.',
      applicationStatus: 'Pending',
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  fs.writeFileSync(path.join(DB_DIR, 'applications.json'), JSON.stringify(applications, null, 2));
  console.log(`✓ Seeded ${applications.length} sample applications for dashboard demonstration.`);

  console.log('--- Seeding Completed Successfully! ---');
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
