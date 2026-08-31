import { products, categories, makers } from '@/data/catalog';

type CatalogData = {
  products: typeof products;
  categories: typeof categories;
  makers: typeof makers;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

export function useCatalog(): CatalogData {
  return {
    products,
    categories,
    makers,
    loading: false,
    error: null,
    refresh: async () => {},
  };
}
