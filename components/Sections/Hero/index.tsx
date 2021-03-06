import Button from '../../ui/Button';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={`${classes.hero__container} section-center`}>
        <div className={classes.hero__text}>
          <span className='overline'>new product</span>
          <h1 className='heading-1'>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            link='/headphones/xx99-mark-one-headphones'
            className='btn-default-1'
          >
            See Product
          </Button>
        </div>
        <div className={classes.hero__image}></div>
      </div>
    </section>
  );
};

export default Hero;
