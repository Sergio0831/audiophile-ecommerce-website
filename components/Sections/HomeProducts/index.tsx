import Button from '../../ui/Button';
import Image from '../../ui/Image';
import classes from './HomeProducts.module.scss';

const HomeProducts = () => {
  return (
    <section className={`${classes.products} section-center`}>
      <div className={classes.zx9}>
        <div className={classes.zx9__image}>
          <Image
            desktopWebp='/assets/home/desktop/image-speaker-zx9.webp'
            tabletWebp='/assets/home/tablet/image-speaker-zx9.webp'
            mobileWebp='/assets/home/mobile/image-speaker-zx9.webp'
            alt='ZX9-SPEAKER'
          />
        </div>
        <div className={classes.zx9__text}>
          <h1 className='heading-1'>zx9 speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className='btn-default-4' link='/speakers/zx9-speaker'>
            see product
          </Button>
        </div>
      </div>
      <div className={classes.zx7}>
        <div className={classes.zx7__text}>
          <h4 className='heading-4'>zx7 speaker</h4>
          <Button className='btn-default-2' link='/speakers/zx7-speaker'>
            see product
          </Button>
        </div>
      </div>
      <div className={classes.yx1}>
        <div className={classes.yx1__image}></div>
        <div className={classes.yx1__text}>
          <div>
            <h4 className='heading-4'>yx1 earphones</h4>
            <Button className='btn-default-2' link='/earphones/yx1-earphones'>
              see product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
