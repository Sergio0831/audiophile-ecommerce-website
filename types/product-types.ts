export type Includes = {
  quantity: number;
  item: string;
};

export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

export type Others = {
  slug: string;
  name: string;
  categoryName: string;
  image: Image;
};

export type TProduct = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  categoryName: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Gallery;
  others: Others[];
};

export type TProducts = {
  products: TProduct[];
};
