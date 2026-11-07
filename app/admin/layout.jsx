'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Bell,
  Sparkles,
} from 'lucide-react';
import Logo from '@/components/shared/Logo';

const NAV_ITEMS = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Manage Jobs',
    href: '/admin/jobs',
    icon: Briefcase,
  },
  {
    name: 'Applications',
    href: '/admin/applications',
    icon: Users,
  },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // If on /admin/login, bypass the dashboard shell
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (!isLoginPage) {
      fetch('/api/admin/auth/me')
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAdminUser(data.admin);
          }
        })
        .catch(() => {});
    }
  }, [isLoginPage]);

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoggingOut(false);
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#061426] text-white flex">
      {/* ──────────────────────────────────────────────
          1. DESKTOP SIDEBAR
          ────────────────────────────────────────────── */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#0B1E38] border-r border-white/[0.08] flex-shrink-0 z-30">
        {/* Brand Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/[0.08]">
          <Logo size="md" />
        </div>

        {/* Portal Tag */}
        <div className="px-6 py-3 bg-[#08172c] border-b border-white/[0.06] flex items-center justify-between text-[11px] font-semibold text-white/50 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-[#60A5FA]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Control</span>
          </span>
          <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 text-[10px]">
            Live
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto" aria-label="Admin Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#0066FF] text-white shadow-[0_4px_16px_rgba(0,102,255,0.4)]'
                    : 'text-white/65 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-white/60'}`} />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/80" />}
              </Link>
            );
          })}

          <div className="pt-6 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-white/40">
            Quick Navigation
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-white/40" />
              <span>View Public Website</span>
            </div>
            <span className="text-[10px] text-white/40">Open &rarr;</span>
          </Link>

          <Link
            href="/careers"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              <span>View Careers Page</span>
            </div>
            <span className="text-[10px] text-white/40">Open &rarr;</span>
          </Link>
        </nav>

        {/* User Card & Logout Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#071527]">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#38BDF8] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                {(adminUser?.name || 'A')[0]}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">
                  {adminUser?.name || 'CSA Administrator'}
                </p>
                <p className="text-[10px] text-white/40 truncate">
                  {adminUser?.email || 'admin@csatechnologies.co'}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-rose-300 hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? 'Signing out...' : 'Sign Out'}</span>
          </button>
        </div>
      </aside>

      {/* ──────────────────────────────────────────────
          2. MOBILE SIDEBAR DRAWER
          ────────────────────────────────────────────── */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative w-72 bg-[#0B1E38] text-white flex flex-col h-full border-r border-white/[0.1] shadow-2xl z-10">
            <div className="h-16 px-6 flex items-center justify-between border-b border-white/[0.08]">
              <Logo size="sm" />
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.08]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#0066FF] text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              <div className="pt-6 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-white/40">
                Quick Navigation
              </div>

              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white hover:bg-white/[0.04]"
              >
                <ExternalLink className="w-4 h-4 text-white/40" />
                <span>View Public Website</span>
              </Link>
              <Link
                href="/careers"
                target="_blank"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white hover:bg-white/[0.04]"
              >
                <Sparkles className="w-4 h-4 text-[#0066FF]" />
                <span>View Careers Page</span>
              </Link>
            </nav>

            <div className="p-4 border-t border-white/[0.08]">
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{loggingOut ? 'Signing out...' : 'Sign Out'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────
          3. MAIN CONTENT AREA
          ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-16 lg:h-20 bg-[#0B1E38]/80 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 text-white/70 hover:text-white lg:hidden rounded-lg hover:bg-white/[0.05]"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest hidden sm:inline">
                CSA Admin
              </span>
              <span className="text-white/20 hidden sm:inline">/</span>
              <h2 className="text-sm sm:text-base font-heading font-extrabold text-white capitalize">
                {pathname.replace('/admin/', '').replace('/', ' ') || 'Dashboard'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/careers"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-white/80 transition-colors"
            >
              <span>Careers Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <Link
              href="/contact"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-white/80 transition-colors"
            >
              <span>Contact Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <div className="h-6 w-[1px] bg-white/[0.1] hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#0066FF] to-[#38BDF8] flex items-center justify-center text-xs font-bold text-white">
                {(adminUser?.name || 'A')[0]}
              </div>
              <span className="text-xs font-semibold text-white/80 hidden md:inline">
                {adminUser?.name || 'Administrator'}
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
