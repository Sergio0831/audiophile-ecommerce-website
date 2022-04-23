import Form from '../../ui/Form';
import classes from './CheckoutForm.module.scss';

const CheckoutForm = () => {
  return (
    <section className={classes.form}>
      <h3 className='heading-3'>checkout</h3>
      <Form />
    </section>
  );
};

export default CheckoutForm;
