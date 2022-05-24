import classes from './Form.module.scss';
import CashIcon from '../../../components/ui/CashIcon';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../../types/formData-types';
import { useAppDispatch } from '../../../app/hooks';
import { modalOpen } from '../checkoutModalSlice';
import { useState } from 'react';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormValues>({ mode: 'all' });
  const [method, setMethod] = useState('eMoney');

  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
    dispatch(modalOpen());
  };

  return (
    <form
      noValidate
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
      id='checkoutForm'
    >
      <fieldset className={classes.form__billing}>
        <legend className='sub-title'>billing details</legend>
        <div className={classes.form__group}>
          <input
            type='text'
            id='name'
            {...register('name', {
              required: 'Required',
              pattern: {
                value: /^[a-zA-Z0-9_ ]+$/,
                message: 'Wrong format'
              }
            })}
            placeholder='Alexei Ward'
            className={`${errors?.name && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='name'
            className={`${errors?.name && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            Name
          </label>
          {errors?.name && (
            <p className={classes.form__error}>{errors?.name.message}</p>
          )}
        </div>
        <div className={classes.form__group}>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Wrong format'
              }
            })}
            placeholder='alexei@mail.com'
            className={`${errors?.email && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='email'
            className={`${errors?.email && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            Email Address
          </label>
          {errors?.email && (
            <p className={classes.form__error}>{errors?.email.message}</p>
          )}
        </div>
        <div className={classes.form__group}>
          <input
            type='tel'
            id='phone'
            {...register('phone', {
              required: 'Required',
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: 'Wrong format'
              }
            })}
            placeholder='+1202-555-0136'
            className={`${errors?.phone && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='phone'
            className={`${errors?.phone && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            Phone Number
          </label>
          {errors?.phone && (
            <p className={classes.form__error}>{errors?.phone.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className={classes.form__shipping}>
        <legend className='sub-title'>shipping info</legend>
        <div className={classes.form__group}>
          <input
            type='text'
            id='address'
            {...register('address', {
              required: 'Required',
              pattern: {
                value: /\d+/,
                message: 'Wrong format'
              }
            })}
            placeholder='1137 Williams Avenue'
            className={`${errors?.address && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='address'
            className={`${errors?.address && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            Address
          </label>
          {errors?.address && (
            <p className={classes.form__error}>{errors?.address.message}</p>
          )}
        </div>
        <div className={classes.form__group}>
          <input
            type='text'
            id='code'
            {...register('code', {
              required: 'Required',
              pattern: {
                value: /\d+/,
                message: 'Wrong format'
              }
            })}
            placeholder='10001'
            className={`${errors?.code && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='code'
            className={`${errors?.code && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            ZIP Code
          </label>
          {errors?.code && (
            <p className={classes.form__error}>{errors?.code.message}</p>
          )}
        </div>
        <div className={classes.form__group}>
          <input
            type='text'
            id='city'
            {...register('city', {
              required: 'Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Wrong format'
              }
            })}
            placeholder='Dublin'
            className={`${errors?.city && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='city'
            className={`${errors?.city && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            City
          </label>
          {errors?.city && (
            <p className={classes.form__error}>{errors?.city.message}</p>
          )}
        </div>
        <div className={classes.form__group}>
          <input
            type='text'
            id='country'
            {...register('country', {
              required: 'Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Wrong format'
              }
            })}
            placeholder='Dublin'
            className={`${errors?.country && classes.form__inputError} ${
              classes.form__input
            }`}
          />
          <label
            htmlFor='country'
            className={`${errors?.country && classes.form__labelError} ${
              classes.form__label
            }`}
          >
            Country
          </label>
          {errors?.country && (
            <p className={classes.form__error}> {errors?.country.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className={classes.form__payment}>
        <legend className='sub-title'>payment details</legend>
        <h6>Payment Method</h6>
        <div className={classes.form__group}>
          <input
            type='radio'
            id='money'
            value='eMoney'
            checked={method === 'eMoney'}
            {...register('paymentMetod')}
            className={` ${classes.form__input}  ${classes.form__radioInput}`}
            onChange={(e) => setMethod(e.target.value)}
          />
          <label
            htmlFor='money'
            className={` ${classes.form__label}  ${classes.form__radio}`}
          >
            e-Money
            <span></span>
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            type='radio'
            id='cash'
            value='cash'
            checked={method === 'cash'}
            {...register('paymentMetod')}
            className={` ${classes.form__input}  ${classes.form__radioInput}`}
            onChange={(e) => setMethod(e.target.value)}
          />
          <label
            htmlFor='cash'
            className={` ${classes.form__label}  ${classes.form__radio}`}
          >
            Cash
            <span></span>
          </label>
        </div>
        {method === 'eMoney' ? (
          <>
            <div className={classes.form__group}>
              <input
                type='text'
                id='eMoneyNumber'
                {...register('eMoneyNumber', {
                  required: 'Required',
                  pattern: {
                    value: /\d+/,
                    message: 'Wrong format'
                  }
                })}
                placeholder='238521993'
                className={`${
                  errors?.eMoneyNumber && classes.form__inputError
                } ${classes.form__input}`}
              />
              <label
                htmlFor='eMoneyNumber'
                className={`${
                  errors?.eMoneyNumber && classes.form__labelError
                } ${classes.form__label}`}
              >
                e-Money Number
              </label>
              {errors?.eMoneyNumber && (
                <p className={classes.form__error}>
                  {errors?.eMoneyNumber.message}
                </p>
              )}
            </div>
            <div className={classes.form__group}>
              <input
                type='text'
                id='eMoneyPin'
                {...register('eMoneyPin', {
                  required: 'Required',
                  pattern: {
                    value: /\d+/,
                    message: 'Wrong format'
                  }
                })}
                placeholder='6891'
                className={`${errors?.eMoneyPin && classes.form__inputError} ${
                  classes.form__input
                }`}
              />
              <label
                htmlFor='eMoneyPin'
                className={`${errors?.eMoneyPin && classes.form__labelError} ${
                  classes.form__label
                }`}
              >
                e-Money Number
              </label>
              {errors?.eMoneyPin && (
                <p className={classes.form__error}>
                  {errors?.eMoneyPin.message}
                </p>
              )}
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
