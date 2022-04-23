import Input from '../Input';
import classes from './Form.module.scss';

const Form = () => {
  return (
    <form className={classes.form}>
      <fieldset className={classes.form__billing}>
        <legend className='sub-title'>billing details</legend>
        <Input
          htmlFor='name'
          id='name'
          placeholder='Alexei Ward'
          name='name'
          label='name'
        />
        <label htmlFor='email'>
          Email Address
          <input
            type='email'
            id='email'
            name='email'
            placeholder='alexei@mail.com'
          />
        </label>
        <label htmlFor='tel'>
          Phone Number
          <input type='tel' id='tel' name='tel' placeholder='' />
        </label>
      </fieldset>
      <fieldset className={classes.form__shipping}>
        <legend className='sub-title'>shipping info</legend>
        <label htmlFor='address'>
          Address
          <input type='text' id='address' name='address' />
        </label>
        <label htmlFor='code'>
          ZIP Code
          <input type='text' id='code' name='code' />
        </label>
        <label htmlFor='city'>
          City
          <input type='text' id='city' name='city' />
        </label>
        <label htmlFor='country'>
          Country
          <input type='text' id='country' name='country' />
        </label>
      </fieldset>
      <fieldset className={classes.form__payment}>
        <legend className='sub-title'>payment details</legend>
        <label htmlFor='payment'>Payment Method</label>
        <label htmlFor='money'>
          e-Money
          <input type='radio' id='money' name='money' />
        </label>
        <label htmlFor='cash'>
          Cash on Delivery
          <input type='radio' id='cash' name='cash' />
        </label>
        <label htmlFor='number'>
          e-Money Number
          <input type='text' id='number' name='number' />
        </label>
        <label htmlFor='tel'>
          e-Money PIN
          <input type='text' id='pin' name='pin' />
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
