export interface ProductResponse {
  ok: boolean;
  message: string;
  data: ProductData;
}

export interface ProductData {
  products: Product[];
  meta: Meta;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  stock: number;
  price: string;
  category: string;
  images: ProductImage[];
  attributes: ProductAttribute[];
  createdAt: string;
  deletedAt: string | null;
}

export interface ProductImage {
  id: string;
  path: string;
  isMain: boolean;
}

export interface ProductAttribute {
  id: string;
  name: string;
  value: string;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
}