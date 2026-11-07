import './globals.css';
import PublicShell from '@/components/layout/PublicShell';
import { OrganizationSchema, WebSiteSchema } from '@/components/shared/JsonLd';

export const metadata = {
  metadataBase: new URL('https://csatechnologiesco.com'),
  title: {
    default: 'CSA Technologies CO | Modern Web Solutions & Enterprise Engineering',
    template: '%s | CSA Technologies CO',
  },
  description:
    'CSA Technologies CO is a premier full-service software development agency specializing in modern websites, e-commerce systems, custom web applications, and cloud architecture for growing enterprises.',
  keywords: [
    'Web Development Company Noida',
    'Custom Web Applications',
    'Next.js Development',
    'React Developers India',
    'E-Commerce Development',
    'Full Stack Engineering',
    'CSA Technologies CO',
    'Careers in Tech Noida',
    'IT Solutions India',
  ],
  authors: [{ name: 'CSA Technologies CO', url: 'https://csatechnologiesco.com' }],
  creator: 'CSA Technologies CO',
  publisher: 'CSA Technologies CO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://csatechnologiesco.com',
  },
  openGraph: {
    title: 'CSA Technologies CO | Modern Web Solutions & Enterprise Engineering',
    description:
      'We design and build modern websites, e-commerce platforms, and custom web applications that drive real business impact.',
    url: 'https://csatechnologiesco.com',
    siteName: 'CSA Technologies CO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSA Technologies CO | Modern Web Solutions',
    description:
      'Smart Solutions. Lasting Impact. Modern websites, custom software, and full-stack engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}