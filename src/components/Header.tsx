import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { asset } from '@/lib/asset';

interface HeaderProps {
  onNavigate: (view: 'home' | 'products' | 'makers' | 'about') => void;
  onSearch: () => void;
}

export function Header({ onNavigate, onSearch }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (view: 'home' | 'products' | 'makers' | 'about') => {
    onNavigate(view);
    setMenuOpen(false);
  };

  const navItems: { label: string; labelEn: string; view: 'home' | 'products' | 'makers' | 'about' }[] = [
    { label: '製品を探す', labelEn: 'Products', view: 'products' },
    { label: '製造者', labelEn: 'Makers', view: 'makers' },
    { label: '私たちについて', labelEn: 'About', view: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bishu-100/95 backdrop-blur-md shadow-sm border-b border-bishu-200'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          <button
            onClick={() => handleNav('home')}
            className="flex items-center shrink-0"
            aria-label="WATA BIYORI home"
          >
            <img
              src={asset("logo.svg")}
              alt="WATA BIYORI"
              className={`w-auto object-contain object-left transition-all duration-500 ${
                scrolled ? 'h-12' : 'h-14'
              }`}
            />
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className="group relative text-sm font-light tracking-wide text-bishu-800 hover:text-accent-dark transition-colors"
              >
                <span className="block font-serif-display text-base">{item.labelEn}</span>
                <span className="block text-[10px] tracking-[0.15em] text-bishu-500 mt-0.5">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-dark transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={onSearch}
              className="p-2 text-bishu-700 hover:text-accent-dark transition-colors"
              aria-label="Search products"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-bishu-800"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bishu-100 border-t border-bishu-200 animate-fade-in">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className="py-3 text-left border-b border-bishu-200 last:border-0"
              >
                <span className="block font-serif-display text-lg text-bishu-900">{item.labelEn}</span>
                <span className="block text-xs text-bishu-500 mt-0.5">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                onSearch();
                setMenuOpen(false);
              }}
              className="py-3 text-left flex items-center gap-2 text-bishu-700"
            >
              <Search size={18} strokeWidth={1.5} />
              <span>検索</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
