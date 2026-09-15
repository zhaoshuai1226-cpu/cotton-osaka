import { ArrowUp } from 'lucide-react';
import { LineFooterLink } from '@/components/LineButton';

interface FooterProps {
  onNavigate: (view: 'home' | 'products' | 'makers' | 'about') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bishu-950 text-bishu-400">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="inline-flex items-center bg-bishu-100 px-8 py-7">
              <span className="font-serif-display text-4xl font-light tracking-[0.25em] text-bishu-900">
                純綿
              </span>
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed max-w-md text-bishu-400">
              Cotton Osaka。大阪から届ける、上質なコットン。
            </p>
            <p className="mt-4 text-xs text-bishu-600 font-light italic">
              Premium Cotton Japan
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: '製品を探す', en: 'Products', view: 'products' as const },
                { label: '製造者', en: 'Makers', view: 'makers' as const },
                { label: '私たちについて', en: 'About', view: 'about' as const },
              ].map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => onNavigate(item.view)}
                    className="hover:text-accent-light transition-colors font-light"
                  >
                    {item.en}{' '}
                    <span className="text-bishu-600 text-xs">/ {item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm font-light">
              <li>Cotton Osaka</li>
              <li className="text-bishu-600 text-xs pt-2">
                大阪府浪速区
              </li>
            </ul>
            <LineFooterLink />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bishu-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bishu-600 font-light">
            © {year} Cotton Osaka. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs text-bishu-500 hover:text-accent-light transition-colors"
          >
            Page Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
