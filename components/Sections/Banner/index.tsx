import clsx from 'clsx';
import { useRouter } from 'next/router';
import Image from '../../ui/Image';
import classes from './Banner.module.scss';

const Banner = () => {
  const router = useRouter();

  const bannerClasses = clsx({
    [classes.banner]: true,
    [classes.banner__home]: router.pathname === '/'
  });

  return (
    <section className={`${bannerClasses} section-center `}>
      <div className={classes.banner__text}>
        <h2 className='heading-2'>
          bringing you the
          <br />
          <span>best</span> audio gear
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
          desktopWebp='/assets/shared/desktop/image-best-gear.webp'
          tabletWebp='/assets/shared/tablet/image-best-gear.webp'
          mobileWebp='/assets/shared/mobile/image-best-gear.webp'
          tabletWidth='1000px'
          alt='Banner'
          imageClasses='img'
        />
      </div>
    </section>
  );
};

export default Banner;
