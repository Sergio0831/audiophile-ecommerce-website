export const formData = [
  {
    field: 'billing details',
    formGroups: [
      {
        type: 'text',
        placeholder: 'Alexei Ward',
        inputName: 'name',
        label: 'Name',
        pattern: /^[A-Za-z]+$/
      },
      {
        type: 'email',
        placeholder: 'alexei@mail.com',
        inputName: 'email',
        label: 'Email',
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      },
      {
        type: 'tel',
        placeholder: '+1 202-555-0136',
        inputName: 'phone',
        label: 'Phone Number',
        pattern: /\d+/
      }
    ]
  },
  {
    field: 'shipping info',
    formGroups: [
      {
        type: 'text',
        placeholder: '1137 Williams Avenue',
        inputName: 'address',
        label: 'Address',
        pattern: /\d+/
      },
      {
        type: 'text',
        placeholder: '10001',
        inputName: 'code',
        label: 'ZIP Code',
        pattern: /\d+/
      },
      {
        type: 'text',
        placeholder: 'Dublin',
        inputName: 'city',
        label: 'City',
        pattern: /^[A-Za-z]+$/
      },
      {
        type: 'text',
        placeholder: 'Ireland',
        inputName: 'country',
        label: 'Country',
        pattern: /^[A-Za-z]+$/
      }
    ]
  },
  {
    field: 'payment details',
    formGroups: [
      {
        type: 'radio',
        inputName: 'eMoney',
        label: 'e-Money'
      },
      {
        type: 'radio',
        inputName: 'cash',
        label: 'Cash'
      }
    ]
  }
];
