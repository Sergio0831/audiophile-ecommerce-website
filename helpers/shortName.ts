export const shortName = (name: string) => {
  const lastIndexOfSpace = name.indexOf(' ');
  return name.substring(0, lastIndexOfSpace);
};
