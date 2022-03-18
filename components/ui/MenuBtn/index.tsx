import classes from './MenuBtn.module.scss';

const MenuBtn = () => {
  return (
    <>
      <input type='checkbox' id='menu-checkbox' className={classes.menu} />
      <label htmlFor='menu-checkbox' className={classes.menu__label}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </>
  );
};

export default MenuBtn;
