import classes from './Amount.module.scss';

type AmountProps = {
  items: number;
};

const Amount = ({ items }: AmountProps) => {
  return <span className={classes.amount}>{items}</span>;
};

export default Amount;
