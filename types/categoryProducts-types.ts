export type CategoryProductTypes = {
  id: number;
  name: string;
  new: boolean;
  slug: string;
  description: string;
  category: string;
  categoryImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};
