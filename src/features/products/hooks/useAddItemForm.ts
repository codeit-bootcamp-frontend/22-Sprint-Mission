import { useState } from 'react';

export function useAddItemFrom() {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (
    field: 'name' | 'description' | 'price',
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (!value || value.trim() === '') {
      setErrors((prev) => ({ ...prev, [field]: '필수 입력 항목입니다.' }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const isFormVaild =
    values.name.trim() !== '' &&
    values.description.trim() !== '' &&
    values.price.trim() !== '' &&
    Object.values(errors).every((err) => err === '');

  return { values, errors, handleChange, isFormVaild };
}
