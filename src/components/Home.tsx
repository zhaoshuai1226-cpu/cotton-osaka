import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import type { Category, ProductWithRelations } from '@/types/catalog';

interface HomeProps {
  products: ProductWithRelations[];
  categories: Category[];
  onExplore: () => void;
  onSelectProduct: (product: ProductWithRelations) => void;
  onViewMakers: () => void;
  onViewAbout: () => void;
}

export function Home({ products, categories, onExplore, onSelectProduct, onViewMakers, onViewAbout }: HomeProps) {
  const ref = useReveal<HTMLDivElement>();
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div ref={ref}>
      {/* Intro section */}
      <section className="bg-bishu-100 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="reveal text-xs tracking-[0.4em] uppercase text-accent-dark font-light mb-6">
            Premium Cotton · Osaka
          </p>
          <h2 className="reveal font-serif-display text-3xl sm:text-4xl lg:text-5xl text-bishu-900 font-light leading-tight text-balance">
            大阪から届ける、<br className="hidden sm:block" />上質なコットン。
          </h2>
          <p className="reveal text-bishu-600 mt-8 leading-loose font-light max-w-3xl mx-auto">
            Cotton Osakaは、大阪府浪速区を拠点に、素材の持ち味を大切にしたコットンのテキスタイルをお届けします。
          </p>
          <button
            onClick={onViewAbout}
            className="reveal mt-10 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-bishu-700 hover:text-accent-dark transition-colors font-light group"
          >
            私たちについて
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="bg-bishu-50 py-24">
          <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
            <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-accent-dark font-light mb-3">
                  Featured Selection
                </p>
                <h2 className="font-serif-display text-4xl sm:text-5xl text-bishu-900 font-light">
                  おすすめの製品
                </h2>
              </div>
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-2 text-sm text-bishu-700 hover:text-accent-dark transition-colors font-light self-start sm:self-auto"
              >
                すべての製品を見る
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
              {featured.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="reveal group flex h-full flex-col text-left"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden bg-bishu-200">
                    <img
                      src={p.image_url ?? ''}
                      alt={p.name_en ?? p.name}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-bishu-950/0 group-hover:bg-bishu-950/15 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif-display text-lg text-bishu-900 mt-4 min-h-[3.25rem] line-clamp-2 group-hover:text-accent-dark transition-colors leading-snug">
                    {p.name_en ?? p.name}
                  </h3>
                  <p className="text-xs text-bishu-500 mt-auto pt-1">{p.maker?.name_en}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories strip */}
      <section className="bg-bishu-900 py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="reveal mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-accent-light font-light mb-3">
              Browse by Category
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-bishu-50 font-light">
              カテゴリーから探す
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bishu-700">
            {categories.map((cat, i) => {
              const count = products.filter((p) => p.category_id === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={onExplore}
                  className="reveal bg-bishu-900 p-8 text-center hover:bg-bishu-800 transition-all group last:col-span-2 md:last:col-span-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p className="font-serif-display text-2xl text-bishu-50 group-hover:text-accent-light transition-colors">
                    {cat.name_en}
                  </p>
                  <p className="text-sm text-bishu-400 mt-1 font-light">{cat.name}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-bishu-600 mt-3">
                    {count} items
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA to makers */}
      <section className="bg-bishu-100 py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-dark font-light mb-4">
            The Makers
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-bishu-900 font-light leading-tight">
            技を受け継ぐ、製造者たち
          </h2>
          <p className="text-bishu-600 mt-5 font-light max-w-2xl mx-auto leading-relaxed">
            紡績から整理加工まで、それぞれの工程で専門的かつ高度に蓄積された知識と技術を長年にわたり継承してきた企業をご紹介します。
          </p>
          <button
            onClick={onViewMakers}
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-bishu-900 text-bishu-50 hover:bg-accent-dark transition-all duration-400 text-sm tracking-[0.2em] uppercase font-light group"
          >
            製造者を見る
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
