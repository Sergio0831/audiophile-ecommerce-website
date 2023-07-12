import Form from '../Form';
import classes from './CheckoutForm.module.scss';

const CheckoutForm = () => {
	return (
		<section className={classes.form}>
			<h1 className='heading-3'>checkout</h1>
			<Form />
		</section>
	);
};

export default CheckoutForm;
