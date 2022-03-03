export type Includes = {
  quantity: Number;
  item: String;
};

export type Image = {
  mobile: String;
  tablet: String;
  desktop: String;
};

export type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

export type Others = {
  slug: String;
  name: String;
  image: Image;
};

export type ProductType = {
  id: Number;
  slug: String;
  name: String;
  image: Image;
  category: String;
  categoryImage: Image;
  new: Boolean;
  price: Number;
  description: String;
  features: String;
  includes: Includes[];
  gallery: Gallery;
  others: Others[];
};

export type Products = {
  products: ProductType[];
};
