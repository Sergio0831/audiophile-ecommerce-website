export const shortName = (name: string) => {
  const lastIndexOfSpace = name.lastIndexOf(' ');
  return name.substring(0, lastIndexOfSpace);
};
