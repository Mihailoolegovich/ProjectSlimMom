import { useState } from 'react';
import s from './DiaryAddProductForm.module.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const resetForm = () => {
    setProduct('');
    setGrams('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'product' && setProduct(value);
    name === 'grams' && setGrams(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { product, grams };
    console.log('Product:', data);
    resetForm();
  };

  return (
    <form className={s.diaryForm} onSubmit={handleSubmit}>
      <input
        className={s.diaryInput}
        onChange={handleChange}
        type="number"
        placeholder="Grams"
        name="grams"
        value={grams}
        required
      />

      <button className={s.diaryButton} type="submit"></button>
    </form>
  );
};

export default DiaryAddProductForm;
