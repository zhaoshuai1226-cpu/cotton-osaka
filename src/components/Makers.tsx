import { MapPin } from 'lucide-react';
import type { Maker } from '@/types/catalog';

interface MakersProps {
  makers: Maker[];
  productCount: Record<string, number>;
}

export function Makers({ makers, productCount }: MakersProps) {
  return (
    <section id="makers" className="bg-bishu-50 pt-28 pb-24 min-h-screen">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-dark font-light mb-3">
            The Makers
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-bishu-900 font-light">
            製造者
          </h2>
          <p className="text-bishu-500 mt-3 font-light max-w-2xl">
            製造者情報は準備中です。Coming soon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {makers.map((maker, i) => (
            <article
              key={maker.id}
              className="group bg-bishu-100 border border-bishu-200 p-8 hover:border-accent-dark hover:shadow-lg transition-all duration-500 animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif-display text-2xl text-bishu-900 leading-tight">
                    {maker.name_en ?? maker.name}
                  </h3>
                  <p className="text-sm text-bishu-500 mt-1">{maker.name}</p>
                </div>
                <span className="text-3xl font-serif-display font-light text-bishu-300 group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="text-sm text-bishu-600 font-light leading-relaxed flex-1">
                {maker.description}
              </p>

              <div className="mt-6 pt-5 border-t border-bishu-200 flex items-center justify-between text-xs text-bishu-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {maker.region ?? 'Osaka'}
                </span>
              </div>

              <div className="mt-4 text-xs text-bishu-400">
                {productCount[maker.id] ?? 0} products in catalog
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
