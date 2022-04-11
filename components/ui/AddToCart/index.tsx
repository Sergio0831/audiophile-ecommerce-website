import Button from '../Button';
import classes from './AddToCart.module.scss';

const AddToCart = () => {
  return (
    <div className={classes.addToCart}>
      <Button className='btn'>-</Button>
      <span className='subtitle'>1</span>
      <Button className='btn'>+</Button>
    </div>
  );
};

export default AddToCart;
