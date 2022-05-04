import { useAppSelector } from '../../../app/hooks';
import Button from '../../../components/ui/Button';
import Summary from '../../../components/ui/Summary';
import CheckoutForm from '../CheckoutForm';
import CheckoutModal from '../CheckoutModal';
import classes from './Checkout.module.scss';

const Checkout = () => {
  const modalOpen = useAppSelector((state) => state.modal.open);

  return (
    <>
      {modalOpen && <CheckoutModal />}
      <section className={`section-center ${classes.checkout}`}>
        <Button link='/' className='backLink'>
          go back
        </Button>
        <CheckoutForm />
        <Summary />
      </section>
    </>
  );
};

export default Checkout;
