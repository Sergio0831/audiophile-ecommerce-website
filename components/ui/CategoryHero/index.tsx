import classes from './CategoryHero.module.scss';

type CategoryHeroProps = {
  title: string;
};

const CategoryHero = ({ title }: CategoryHeroProps) => {
  return (
    <section className={classes.hero}>
      <h1 className='heading-2'>{title}</h1>
    </section>
  );
};

export default CategoryHero;
