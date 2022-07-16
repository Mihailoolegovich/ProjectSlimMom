import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DiaryAddProductForm.module.scss';
import useDebounce from 'hooks/useDebounce';
import DiaryDataList from './DiaryDataList';
import DiaryFormButton from './DiaryFormButton';
import { ProductsSelectors, addProduct, fetchProducts } from 'redux/products';

const DiaryAddProductForm = ({ date = '2022-07-13' }) => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [datalistVisible, setDataListVisible] = useState(false);

  const products = useSelector(ProductsSelectors.getProducts);
  const isLoaded = useSelector(ProductsSelectors.isLoaded);
  const dispatch = useDispatch();

  const search = useDebounce(product, 500);

  const resetForm = () => {
    setProduct('');
    setWeight('');
  };

  useEffect(() => {
    if (search !== '') {
      dispatch(fetchProducts(search.toString()));
    }
  }, [search, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'product' && setProduct(value.trim());
    name === 'product' && setDataListVisible(true);
    name === 'weight' && setWeight(value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      date,
      item: {
        weight,
        name: product,
      },
    };

    dispatch(addProduct(data));
    resetForm();
  };

  const handleClick = e => {
    setProduct(e.currentTarget.textContent);
    setDataListVisible(false);
  };

  return (
    <form className={s.diaryForm} onSubmit={handleSubmit}>
      <input
        className={s.diaryInput}
        onChange={handleChange}
        type="text"
        placeholder="Enter product name"
        name="product"
        value={product}
        autoComplete="off"
        autoSave="off"
        maxLength={250}
        required
      />

      <input
        className={s.diaryInput}
        onInput={handleChange}
        type="number"
        placeholder="Grams"
        name="weight"
        min={0}
        step="10"
        pattern="[0-9]+"
        value={weight}
        maxLength={4}
        autoComplete="off"
        autoSave="off"
        required
      />

      <DiaryFormButton
        class_name={s.diaryButton}
        type={'submit'}
        title={'Add'}
      />
      {isLoaded && datalistVisible && (
        <DiaryDataList productList={products} handleClick={handleClick} />
      )}
    </form>
  );
};

export default DiaryAddProductForm;
