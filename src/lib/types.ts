export type LoginType = {
  email: string;
  password: string;
};

export type SignupType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type Subcategory = {
  id: number;
  name: string;
  description: string | null;
  subcategories: Subcategory[];
};

export type CategoryType = {
  id: number;
  name: string;
  description: string | null;
  subcategories: Subcategory[];
};

// interface Image {
//   id: number;
//   created_at: string;
//   last_modified: string;
//   name: string;
//   image: string;
//   image_alt_text: string;
//   created_by: number;
//   last_modified_by: number | null;
// }

// interface DefaultVariant {
//   id: number;
//   variant_image: Image[];
//   name: string;
//   compare_at_price: string;
//   price: string;
//   cost_per_unit: string;
//   track_inventory: boolean;
//   stock: number;
//   low_stock_threshold: number;
//   stock_status: string;
//   sku: string;
//   weight_unit: string;
//   weight_value: string;
//   product: number;
// }

// interface Product {
//   id: number;
//   name: string;
//   summary: string;
//   description: string;
//   category: number;
//   brand: string;
//   type: string;
//   currency: string;
//   slug: string;
//   default_variant: DefaultVariant;
// }

export type ProductType = {
  id: number;
  name: string;
  summary: string;
  description: string;
  category: number;
  brand: string;
  type: string;
  currency: string;
  slug: string;
  default_variant: {
    id: number;
    variant_image: {
      id: number;
      created_at: string;
      last_modified: string;
      name: string;
      image: string;
      image_alt_text: string;
      created_by: number;
      last_modified_by: number | null;
    }[];
    name: string;
    compare_at_price: string;
    price: string;
    cost_per_unit: string;
    track_inventory: boolean;
    stock: number;
    low_stock_threshold: number;
    stock_status: string;
    sku: string;
    weight_unit: string;
    weight_value: string;
    product: number;
  };
};

export type VariantType = {
  id: number;
  variant_image: {
    id: number;
    created_at: string;
    last_modified: string;
    name: string;
    image: string;
    image_alt_text: string;
    created_by: number;
    last_modified_by: number | null;
  }[];
  name: string;
  compare_at_price: string;
  price: number;
  cost_per_unit: string;
  track_inventory: boolean;
  stock: number;
  low_stock_threshold: number;
  stock_status: "IN_STOCK" | "OUT_OF_STOCK"; // Define specific stock status options
  color_code: string;
  color_name: string;
  sku: string;
  weight_unit: string;
  weight_value: string;
  product: number;
};

export type ProductDetailType = {
  id: number;
  name: string;
  summary: string;
  description: string;
  brand: string;
  type: string;
  currency: string;
  category: number;
  collections: number[];
  media: any[]; // You can specify a more specific type if needed
  created_by: number;
  default_variant: VariantType;
  variants: VariantType[];
};

export type CartItemType = {
  id: number;
  quantity: number;
};

export type CreateOrderAnonymousType = {
  total_price: string;
  shipping_address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    first_name: string;
    last_name: string;
    is_default_delivery_address?: boolean;
  };
  billing_address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    first_name: string;
    last_name: string;
    is_default_delivery_address?: boolean;
  };
  cart_data: {
    quantity: number;
    price_per_unit: number;
    total_price: number;
    variant: number;
  }[];
  special_data: object;
  payment_method: string;
};
