import { Others } from '../../../types/product-types';
import Button from '../../ui/Button';
import Image from '../../ui/Image';
import classes from './ProductDetailsOthers.module.scss';

type ProductDetailsOthersProps = {
  others: Others[];
};

const ProductDetailsOthers = ({ others }: ProductDetailsOthersProps) => {
  return (
    <section className={`section-center ${classes.others}`}>
      <h3 className='heading-3'>you may also like</h3>
      <div className={classes.others__items}>
        {others.map((item) => {
          const {
            name,
            slug,
            category,
            image: { desktop, tablet, mobile }
          } = item;

          return (
            <article key={name} className={classes.others__item}>
              <div className={classes.others__image}>
                <Image
                  desktopWebp={desktop}
                  tabletWebp={tablet}
                  mobileWebp={mobile}
                  imageClasses='img'
                  alt={name}
                />
              </div>
              <h5 className='heading-5'>{name}</h5>
              <Button className='btn-default-1' link={`/${category}/${slug}`}>
                see product
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductDetailsOthers;
