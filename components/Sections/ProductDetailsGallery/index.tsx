import { Gallery } from '../../../types/product-types';
import Image from '../../ui/Image';
import classes from './ProductDetailsGallery.module.scss';

type ProductDetailsGalleryProps = {
  gallery: Gallery;
};

const ProductDetailsGallery = ({ gallery }: ProductDetailsGalleryProps) => {
  return (
    <section className={`section-center ${classes.gallery}`}>
      <div className={classes.gallery__first}>
        <Image
          alt='first'
          desktopWebp={gallery.first.desktop}
          tabletWebp={gallery.first.tablet}
          mobileWebp={gallery.first.mobile}
          imageClasses='img'
        />
      </div>
      <div className={classes.gallery__second}>
        <Image
          alt='second'
          desktopWebp={gallery.second.desktop}
          tabletWebp={gallery.second.tablet}
          mobileWebp={gallery.second.mobile}
          imageClasses='img'
        />
      </div>
      <div className={classes.gallery__third}>
        <Image
          alt='third'
          desktopWebp={gallery.third.desktop}
          tabletWebp={gallery.third.tablet}
          mobileWebp={gallery.third.mobile}
          imageClasses='img'
        />
      </div>
    </section>
  );
};

export default ProductDetailsGallery;
