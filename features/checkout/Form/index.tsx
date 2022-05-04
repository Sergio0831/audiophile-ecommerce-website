import classes from './Form.module.scss';
import { useState } from 'react';
import { FormDataTypes } from '../../../types/formData-types';
import Input from '../../../components/ui/Input';
import CashIcon from '../../../components/ui/CashIcon';
import { useAppDispatch } from '../../../app/hooks';
import { modalOpen } from '../checkoutModalSlice';

const Form = () => {
  const [payment, setPayment] = useState<string>('money');
  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    city: '',
    country: '',
    paymentMethod: '',
    eMoneyNumber: '',
    eMoneyPin: ''
  });
  const dispatch = useAppDispatch();

  const {
    address,
    city,
    code,
    country,
    email,
    name,
    phone,
    eMoneyNumber,
    eMoneyPin,
    paymentMethod
  } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(modalOpen());
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      code: '',
      city: '',
      country: '',
      paymentMethod: '',
      eMoneyNumber: '',
      eMoneyPin: ''
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} id='checkoutForm'>
      <fieldset className={classes.form__billing}>
        <legend className='sub-title'>billing details</legend>
        <div className={classes.form__group}>
          <Input
            htmlFor='name'
            id='name'
            placeholder='Alexei Ward'
            name='name'
            label='name'
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form__group}>
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
        </div>
        <div className={classes.form__group}>
          <Input
            label='phone number'
            htmlFor='phone'
            type='tel'
            id='phone'
            name='phone'
            placeholder='+1 202-555-0136'
            value={phone}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset className={classes.form__shipping}>
        <legend className='sub-title'>shipping info</legend>
        <div className={classes.form__group}>
          <Input
            label='address'
            htmlFor='address'
            id='address'
            name='address'
            placeholder='1137 Williams Avenue'
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form__group}>
          <Input
            label='ZIP code'
            htmlFor='code'
            placeholder='10001'
            id='code'
            name='code'
            value={code}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form__group}>
          <Input
            label='city'
            htmlFor='city'
            id='city'
            name='city'
            placeholder='Dublin'
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form__group}>
          <Input
            label='country'
            htmlFor='country'
            id='country'
            name='country'
            placeholder='Ireland'
            value={country}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset className={classes.form__payment}>
        <legend className='sub-title'>payment details</legend>
        <h6>Payment Method</h6>
        <div className={classes.form__group}>
          <Input
            htmlFor='money'
            type='radio'
            id='money'
            name='paymentMethod'
            label='e-Money'
            value='money'
            radio
            radioInput
            checked={payment === 'money'}
            onChange={(e) => {
              setPayment(e.target.value);
              setFormData({
                ...formData,
                paymentMethod: e.target.value
              });
            }}
          />
        </div>
        <div className={classes.form__group}>
          <Input
            label='Cash on Delivery'
            htmlFor='cash'
            type='radio'
            id='cash'
            name='paymentMethod'
            value='cash'
            radio
            radioInput
            checked={payment === 'cash'}
            onChange={(e) => {
              setPayment(e.target.value);
              setFormData({
                ...formData,
                paymentMethod: e.target.value
              });
            }}
          />
        </div>
        {payment === 'money' ? (
          <>
            <div className={classes.form__group}>
              <Input
                htmlFor='number'
                id='number'
                name='eMoneyNumber'
                label='e-Money Number'
                placeholder='238521993'
                value={eMoneyNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.form__group}>
              <Input
                label=' e-Money PIN'
                id='pin'
                name='eMoneyPin'
                htmlFor='pin'
                placeholder='5891'
                value={eMoneyPin}
                onChange={handleInputChange}
              />
            </div>
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
