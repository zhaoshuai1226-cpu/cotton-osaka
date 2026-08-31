import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import type { Category, Maker, ProductWithRelations } from '@/types/catalog';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ProductWithRelations[];
  categories: Category[];
  makers: Maker[];
  onSelectProduct: (product: ProductWithRelations) => void;
}

type SortKey = 'featured' | 'newest' | 'name';

export function ProductGrid({ products, categories, makers, onSelectProduct }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMaker, setActiveMaker] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>('featured');
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (activeCategory) list = list.filter((p) => p.category_id === activeCategory);
    if (activeMaker) list = list.filter((p) => p.maker_id === activeMaker);

    if (sortKey === 'featured') {
      list.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return a.sort_order - b.sort_order;
      });
    } else if (sortKey === 'name') {
      list.sort((a, b) => (a.name_en ?? a.name).localeCompare(b.name_en ?? b.name));
    } else {
      list.sort((a, b) => b.sort_order - a.sort_order);
    }
    return list;
  }, [products, activeCategory, activeMaker, sortKey]);

  const hasFilters = activeCategory || activeMaker;

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveMaker(null);
  };

  return (
    <section id="products" className="bg-bishu-100 pt-28 pb-24 min-h-screen">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-dark font-light mb-3">
            Product Catalog
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-bishu-900 font-light">
            販売製品を探す
          </h2>
          <p className="text-bishu-500 mt-3 font-light max-w-xl">
            Cotton Osakaのテキスタイル製品をご紹介します。
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-bishu-200 pb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters((s) => !s)}
              className="flex items-center gap-2 text-sm text-bishu-700 hover:text-accent-dark transition-colors"
            >
              <SlidersHorizontal size={16} strokeWidth={1.5} />
              {showFilters ? 'フィルターを隠す' : 'フィルターを表示'}
            </button>
            <span className="text-bishu-300">|</span>
            <span className="text-sm text-bishu-500 font-light">
              {filtered.length} 件
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-bishu-500 mr-1">並び順</span>
            {(['featured', 'newest', 'name'] as SortKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setSortKey(k)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  sortKey === k
                    ? 'bg-bishu-900 text-bishu-50'
                    : 'text-bishu-600 hover:bg-bishu-200'
                }`}
              >
                {k === 'featured' ? 'おすすめ' : k === 'newest' ? '新着' : '名前順'}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-10 animate-fade-in">
            {/* Categories */}
            <div className="mb-6">
              <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setActiveCategory((cur) => (cur === cat.id ? null : cat.id))
                    }
                    className={`px-4 py-2 text-sm rounded-full border transition-all ${
                      activeCategory === cat.id
                        ? 'bg-accent-dark text-bishu-50 border-accent-dark'
                        : 'bg-transparent text-bishu-700 border-bishu-300 hover:border-accent-dark hover:text-accent-dark'
                    }`}
                  >
                    {cat.name_en}
                  </button>
                ))}
              </div>
            </div>

            {/* Makers */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-3">Maker</p>
              <div className="flex flex-wrap gap-2">
                {makers.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMaker((cur) => (cur === m.id ? null : m.id))}
                    className={`px-4 py-2 text-sm rounded-full border transition-all ${
                      activeMaker === m.id
                        ? 'bg-accent-dark text-bishu-50 border-accent-dark'
                        : 'bg-transparent text-bishu-700 border-bishu-300 hover:border-accent-dark hover:text-accent-dark'
                    }`}
                  >
                    {m.name_en ?? m.name}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-5 inline-flex items-center gap-1.5 text-xs text-bishu-500 hover:text-error transition-colors"
              >
                <X size={14} /> フィルターをクリア
              </button>
            )}
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onSelectProduct}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif-display text-2xl text-bishu-400 font-light">
              該当する製品が見つかりませんでした
            </p>
            <p className="text-sm text-bishu-400 mt-2">条件を変更してもう一度お試しください。</p>
          </div>
        )}
      </div>
    </section>
  );
}
