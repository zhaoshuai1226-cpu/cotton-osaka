import { ArrowDown } from 'lucide-react';
import { asset } from '@/lib/asset';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={asset("hero-cotton.jpg")}
          alt="Raw cotton"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bishu-950/40 via-bishu-950/15 to-bishu-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-bishu-950/25 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-up">
          <h1 className="sr-only">WATA BIYORI — 綿日和</h1>
          <img
            src={asset("logo.svg")}
            alt="WATA BIYORI"
            className="mx-auto h-44 sm:h-52 lg:h-60 w-auto object-contain drop-shadow-[0_12px_40px_rgba(246,243,238,0.28)]"
          />
          <p className="font-serif-display text-bishu-50 text-xl sm:text-2xl lg:text-3xl font-light italic mt-8">
            その人の最高の素材でありたい
          </p>
        </div>

        <button
          onClick={onExplore}
          className="group mt-14 flex flex-col items-center gap-3 text-bishu-100 hover:text-white transition-colors animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="text-xs tracking-[0.3em] uppercase font-light">製品を探す</span>
          <span className="w-px h-12 bg-bishu-200/50 group-hover:bg-white group-hover:h-16 transition-all duration-500" />
          <ArrowDown size={16} strokeWidth={1} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
