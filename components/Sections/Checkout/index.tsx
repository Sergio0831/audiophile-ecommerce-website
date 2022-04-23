import Button from '../../ui/Button';
import Summary from '../../ui/Summary';
import CheckoutForm from '../CheckoutForm';
import classes from './Checkout.module.scss';

const Checkout = () => {
  return (
    <section className={`section-center ${classes.checkout}`}>
      <Button link='/' className='backLink'>
        go back
      </Button>
      <CheckoutForm />
      <Summary />
    </section>
  );
};

export default Checkout;
