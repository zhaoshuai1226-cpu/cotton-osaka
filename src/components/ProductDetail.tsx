import { useEffect } from 'react';
import { X, Factory, Layers, Palette, Ruler, Sparkles } from 'lucide-react';
import type { ProductWithRelations } from '@/types/catalog';

interface ProductDetailProps {
  product: ProductWithRelations | null;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bishu-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-6xl my-4 mx-4 bg-bishu-50 overflow-y-auto animate-scale-in rounded-sm shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 ml-auto mr-4 flex z-20 items-center justify-center w-10 h-10 rounded-full bg-bishu-100/90 backdrop-blur text-bishu-700 hover:bg-bishu-900 hover:text-bishu-50 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 -mt-10">
          {/* Image */}
          <div className="relative bg-bishu-200 min-h-[320px] md:min-h-[560px]">
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name_en ?? product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {product.featured && (
              <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-bishu-100/95 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-accent-dark">
                <Sparkles size={12} /> Featured
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-8 sm:p-10 lg:p-14 flex flex-col">
            {product.category && (
              <p className="text-xs tracking-[0.3em] uppercase text-accent-dark mb-4">
                {product.category.name_en}
              </p>
            )}
            <h2 className="font-serif-display text-3xl sm:text-4xl text-bishu-900 font-light leading-tight">
              {product.name_en ?? product.name}
            </h2>
            <p className="text-bishu-500 mt-2 text-sm">{product.name}</p>

            <p className="mt-6 text-bishu-700 leading-relaxed font-light">
              {product.description_en ?? product.description ?? '—'}
            </p>
            <p className="mt-3 text-bishu-500 leading-relaxed text-sm font-light">
              {product.description}
            </p>

            {/* Spec table */}
            <dl className="mt-8 space-y-px bg-bishu-200 rounded-sm overflow-hidden">
              <SpecRow
                icon={<Factory size={15} />}
                label="Maker"
                value={product.maker?.name_en ?? product.maker?.name}
              />
              {product.maker?.region && (
                <SpecRow label="Region" value={product.maker.region} />
              )}
              <SpecRow
                icon={<Layers size={15} />}
                label="Material"
                value={product.material_en ?? product.material}
              />
              <SpecRow
                icon={<Sparkles size={15} />}
                label="Technique"
                value={product.technique_en ?? product.technique}
              />
              <SpecRow
                icon={<Ruler size={15} />}
                label="Min. Order"
                value={product.min_order}
              />
            </dl>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-3 flex items-center gap-1.5">
                  <Palette size={13} /> Available Colors
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 text-xs bg-bishu-100 border border-bishu-300 rounded-full text-bishu-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Maker info */}
            {product.maker?.description && (
              <div className="mt-auto pt-8">
                <div className="border-t border-bishu-200 pt-6">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-bishu-500 mb-2">
                    About the Maker
                  </p>
                  <p className="text-sm text-bishu-600 font-light leading-relaxed">
                    {product.maker.description}
                  </p>
                  {product.maker.established && (
                    <p className="text-xs text-bishu-400 mt-2">
                      Established {product.maker.established}
                      {product.maker.specialty && ` · ${product.maker.specialty}`}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div className="flex items-center justify-between bg-bishu-100 px-4 py-3">
      <dt className="flex items-center gap-2 text-xs tracking-wide uppercase text-bishu-500">
        {icon}
        {label}
      </dt>
      <dd className="text-sm text-bishu-800 font-light text-right">
        {value || '—'}
      </dd>
    </div>
  );
}
