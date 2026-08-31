import type { ProductWithRelations } from '@/types/catalog';

interface ProductCardProps {
  product: ProductWithRelations;
  onClick: (product: ProductWithRelations) => void;
  index: number;
}

export function ProductCard({ product, onClick, index }: ProductCardProps) {
  return (
    <button
      onClick={() => onClick(product)}
      className="group flex flex-col text-left animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-bishu-200">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name_en ?? product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-bishu-400 text-sm">
            No image
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-bishu-950/0 group-hover:bg-bishu-950/15 transition-colors duration-500" />
        {/* Category tag */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-bishu-100/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-bishu-700 font-light">
            {product.category.name_en}
          </span>
        )}
        {/* View detail hint */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bishu-950/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-bishu-50 text-xs tracking-[0.2em] uppercase font-light">
            View Detail
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="pt-4">
        <h3 className="font-serif-display text-lg text-bishu-900 leading-snug group-hover:text-accent-dark transition-colors">
          {product.name_en ?? product.name}
        </h3>
        <p className="text-xs text-bishu-500 mt-1 line-clamp-1">{product.name}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-bishu-600 font-light">
            {product.maker?.name_en ?? product.maker?.name ?? '—'}
          </span>
          {product.material_en && (
            <span className="text-[10px] tracking-wide uppercase text-bishu-400">
              {product.material_en}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
