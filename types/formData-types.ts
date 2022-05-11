export type Field = {
  field: string;
};

export type FormGroup = {
  type: string;
  inputName: string;
  label: string;
  placeholder?: string;
  pattern?: RegExp;
};

export type FormData = {
  field: Field[];
  formGroups: FormGroup[];
};

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  code: string;
  city: string;
  country: string;
  paymentMetod?: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};
