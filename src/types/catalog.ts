export interface Maker {
  id: string;
  name: string;
  name_en: string | null;
  region: string | null;
  description: string | null;
  established: number | null;
  specialty: string | null;
}

export interface Category {
  id: string;
  name: string;
  name_en: string | null;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  name_en: string | null;
  category_id: string | null;
  maker_id: string | null;
  description: string | null;
  description_en: string | null;
  image_url: string | null;
  material: string | null;
  material_en: string | null;
  technique: string | null;
  technique_en: string | null;
  colors: string[] | null;
  min_order: string | null;
  featured: boolean;
  sort_order: number;
}

export interface ProductWithRelations extends Product {
  category: Category | null;
  maker: Maker | null;
}
