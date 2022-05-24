import classes from './ProductDetailsFeatures.module.scss';

type ProductDetailsFeaturesProps = {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
};

const ProductDetailsFeatures = ({
  features,
  includes
}: ProductDetailsFeaturesProps) => {
  return (
    <section className={`section-center ${classes.section}`}>
      <div className={classes.section__features}>
        <h3 className='heading-3'>features</h3>
        <p>{features}</p>
      </div>
      <div className={classes.section__includes}>
        <h3 className='heading-3'>in the box</h3>
        <ul>
          {includes.map((inc) => (
            <li key={inc.item}>
              <span>{inc.quantity}x</span>
              <p>{inc.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailsFeatures;
