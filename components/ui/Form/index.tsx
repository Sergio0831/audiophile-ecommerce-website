import Input from '../Input';
import CashIcon from '../CashIcon';
import classes from './Form.module.scss';
import useForm from '../../../hooks/useFormSubmit';

const Form = () => {
  const {
    handleSubmit,
    handleRadioClick,
    isPaymentSelected,
    payment,
    formData,
    handleInputChange
  } = useForm();
  const { address, city, code, country, email, name, pin, number, phone } =
    formData;

  return (
    <form className={classes.form} onSubmit={handleSubmit} id='checkoutForm'>
      <fieldset className={classes.form__billing}>
        <legend className='sub-title'>billing details</legend>
        <Input
          htmlFor='name'
          id='name'
          placeholder='Alexei Ward'
          name='name'
          label='name'
          value={name}
          onChange={handleInputChange}
        />
        <Input
          htmlFor='email'
          label='email address'
          type='email'
          id='email'
          name='email'
          placeholder='alexei@mail.com'
          value={email}
          onChange={handleInputChange}
        />
        <Input
          label='phone number'
          htmlFor='tel'
          type='tel'
          id='tel'
          name='tel'
          placeholder='+1 202-555-0136'
          value={phone}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className={classes.form__shipping}>
        <legend className='sub-title'>shipping info</legend>
        <Input
          label='address'
          htmlFor='address'
          id='address'
          name='address'
          placeholder='1137 Williams Avenue'
          value={address}
          onChange={handleInputChange}
        />
        <Input
          label='ZIP code'
          htmlFor='code'
          placeholder='10001'
          id='code'
          name='code'
          value={code}
          onChange={handleInputChange}
        />
        <Input
          label='city'
          htmlFor='city'
          id='city'
          name='city'
          placeholder='Dublin'
          value={city}
          onChange={handleInputChange}
        />
        <Input
          label='country'
          htmlFor='country'
          id='country'
          name='country'
          placeholder='Ireland'
          value={country}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className={classes.form__payment}>
        <legend className='sub-title'>payment details</legend>
        <h6>Payment Method</h6>
        <Input
          htmlFor='money'
          type='radio'
          id='money'
          name='payment'
          label='e-Money'
          value='money'
          radio
          checked={isPaymentSelected('money')}
          onChange={handleRadioClick}
        />
        <Input
          label='Cash on Delivery'
          htmlFor='cash'
          type='radio'
          id='cash'
          name='payment'
          value='cash'
          radio
          checked={isPaymentSelected('cash')}
          onChange={handleRadioClick}
        />
        {payment === 'money' ? (
          <>
            <Input
              htmlFor='number'
              id='number'
              name='number'
              label='e-Money Number'
              placeholder='238521993'
              value={number}
              onChange={handleInputChange}
            />
            <Input
              label=' e-Money PIN'
              id='pin'
              name='pin'
              htmlFor='pin'
              placeholder='5891'
              value={pin}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <div className={classes.cash}>
            <div className={classes.cash__icon}>
              <CashIcon />
            </div>
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default Form;
