import { ChangeEvent, useState } from 'react';
import { FormDataTypes } from '../types/formData-types';

const useForm = () => {
  const [payment, setPayment] = useState('money');
  const [formSubmited, setFormSubmited] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    city: '',
    country: '',
    paymentMethod: payment === 'money' ? { number: '', pin: '' } : 'cash'
  });

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPayment(e.target.value);

  const isPaymentSelected = (value: string): boolean => payment === value;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormSubmited(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      code: '',
      city: '',
      country: '',
      paymentMethod: payment === 'money' ? { number: '', pin: '' } : 'cash'
    });
    console.log('Form Submitted');
  };

  return {
    handleSubmit,
    formData,
    payment,
    handleInputChange,
    handleRadioClick,
    isPaymentSelected
  };
};

export default useForm;
