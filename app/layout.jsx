import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'CSA Technologies CO | Modern Web Solutions',
  description: 'CSA Technologies CO builds modern websites, e-commerce platforms, and custom web applications for growing businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}