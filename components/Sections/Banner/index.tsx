import Image from 'next/image';
import classes from './Banner.module.scss';

const Banner = () => {
  return (
    <section className={`${classes.banner} section-center `}>
      <div className={classes.banner__text}>
        <h2 className='heading-2'>
          bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={classes.banner__image}>
        <Image
          src='/assets/shared/mobile/image-best-gear.webp'
          alt='banner'
          layout='fill'
        />
      </div>
    </section>
  );
};

export default Banner;
