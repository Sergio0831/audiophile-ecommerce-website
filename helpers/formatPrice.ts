export const formatPrice = (price: number) => {
  return Intl.NumberFormat().format(price);
};
