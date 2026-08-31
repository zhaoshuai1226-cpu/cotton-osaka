import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { ProductWithRelations } from '@/types/catalog';

interface SearchOverlayProps {
  open: boolean;
  products: ProductWithRelations[];
  onClose: () => void;
  onSelectProduct: (product: ProductWithRelations) => void;
}

export function SearchOverlay({ open, products, onClose, onSelectProduct }: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setQuery('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products
      .filter((p) => {
        const haystack = [
          p.name,
          p.name_en,
          p.description,
          p.description_en,
          p.material,
          p.material_en,
          p.technique,
          p.technique_en,
          p.category?.name,
          p.category?.name_en,
          p.maker?.name,
          p.maker?.name_en,
          ...(p.colors ?? []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query, products]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110]">
      <div className="absolute inset-0 bg-bishu-950/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative z-10 mx-auto mt-20 max-w-3xl px-4 animate-slide-in-right">
        <div className="bg-bishu-50 shadow-2xl rounded-sm overflow-hidden">
          {/* Search bar */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-bishu-200">
            <Search size={20} className="text-bishu-400" strokeWidth={1.5} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="製品・素材・製造者で検索…"
              className="flex-1 bg-transparent text-lg text-bishu-900 placeholder:text-bishu-400 outline-none font-light"
            />
            <button onClick={onClose} className="text-bishu-500 hover:text-bishu-900 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="px-6 py-10 text-center text-bishu-400 text-sm font-light">
                キーワードを入力して製品を検索してください。
              </div>
            ) : results.length > 0 ? (
              <ul>
                {results.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="w-full flex items-center gap-4 px-6 py-4 hover:bg-bishu-100 transition-colors text-left"
                    >
                      {p.image_url && (
                        <img
                          src={p.image_url}
                          alt=""
                          className="w-14 h-14 object-cover rounded-sm flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif-display text-base text-bishu-900 truncate">
                          {p.name_en ?? p.name}
                        </p>
                        <p className="text-xs text-bishu-500 truncate mt-0.5">
                          {p.maker?.name_en ?? p.maker?.name} · {p.category?.name_en}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-6 py-10 text-center text-bishu-400 text-sm font-light">
                「{query}」に一致する製品が見つかりませんでした。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
