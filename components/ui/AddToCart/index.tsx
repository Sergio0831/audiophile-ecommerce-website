import clsx from 'clsx';
import Button from '../Button';
import classes from './AddToCart.module.scss';

type AddToCartProps = {
  className?: string;
};

const AddToCart = ({ className }: AddToCartProps) => {
  const addToCartClasses = clsx(
    {
      [classes.addToCart]: true
    },
    className
  );

  return (
    <div className={addToCartClasses}>
      <Button className='btn'>-</Button>
      <span className='subtitle'>1</span>
      <Button className='btn'>+</Button>
    </div>
  );
};

export default AddToCart;
