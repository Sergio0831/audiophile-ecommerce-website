import clsx from 'clsx';
import Button from '../Button';
import classes from './AmountButtons.module.scss';

type AmountButtonsProps = {
  className?: string;
  increase: () => void;
  decrease: () => void;
  amount: number;
};

const AmountButtons = ({
  className,
  increase,
  decrease,
  amount
}: AmountButtonsProps) => {
  const addToCartClasses = clsx(
    {
      [classes.addToCart]: true
    },
    className
  );

  return (
    <div className={addToCartClasses}>
      <Button
        className='btn'
        onClick={(e) => {
          decrease();
          e.stopPropagation();
        }}
      >
        -
      </Button>
      <span className='subtitle'>{amount}</span>
      <Button className='btn' onClick={increase}>
        +
      </Button>
    </div>
  );
};

export default AmountButtons;
