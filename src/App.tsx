import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Home } from '@/components/Home';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetail } from '@/components/ProductDetail';
import { Makers } from '@/components/Makers';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { LineFab } from '@/components/LineButton';
import { SearchOverlay } from '@/components/SearchOverlay';
import { useCatalog } from '@/hooks/useCatalog';
import type { ProductWithRelations } from '@/types/catalog';

type View = 'home' | 'products' | 'makers' | 'about';

export default function App() {
  const { products, categories, makers } = useCatalog();
  const [view, setView] = useState<View>('home');
  const [selected, setSelected] = useState<ProductWithRelations | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const productCount = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of products) {
      if (p.maker_id) counts[p.maker_id] = (counts[p.maker_id] ?? 0) + 1;
    }
    return counts;
  }, [products]);

  const navigate = (next: View) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goProducts = () => navigate('products');

  return (
    <div id="top" className="min-h-screen bg-bishu-100">
      <Header onNavigate={navigate} onSearch={() => setSearchOpen(true)} />

      <main>
        {view === 'home' && (
          <>
            <Hero onExplore={goProducts} />
            <Home
              products={products}
              categories={categories}
              onExplore={goProducts}
              onSelectProduct={setSelected}
              onViewMakers={() => navigate('makers')}
              onViewAbout={() => navigate('about')}
            />
          </>
        )}
        {view === 'products' && (
          <ProductGrid
            products={products}
            categories={categories}
            makers={makers}
            onSelectProduct={setSelected}
          />
        )}
        {view === 'makers' && <Makers makers={makers} productCount={productCount} />}
        {view === 'about' && <About onExplore={goProducts} />}
      </main>

      <Footer onNavigate={navigate} />
      <LineFab />

      <ProductDetail product={selected} onClose={() => setSelected(null)} />
      <SearchOverlay
        open={searchOpen}
        products={products}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={setSelected}
      />
    </div>
  );
}
