type LayoutPops = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPops) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
