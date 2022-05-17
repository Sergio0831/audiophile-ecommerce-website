export type TCategoryProduct = {
  id: number;
  name: string;
  new: boolean;
  slug: string;
  description: string;
  categoryName: string;
  categoryImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

export type TCategoryProducts = {
  name: string;
  products: TCategoryProduct[];
};
