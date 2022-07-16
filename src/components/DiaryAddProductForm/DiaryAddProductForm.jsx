import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DiaryAddProductForm.module.scss';
import useDebounce from 'hooks/useDebounce';
import DiaryDataList from './DiaryDataList';
import { ProductsSelectors, addProduct, fetchProducts } from 'redux/products';

const DiaryAddProductForm = ({ date = '2022-07-13' }) => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [datalistVisible, setDataListVisible] = useState(false);

  const products = useSelector(ProductsSelectors.getProducts);
  const dispatch = useDispatch();

  const search = useDebounce(product, 500);

  const resetForm = () => {
    setProduct('');
    setWeight('');
  };

  useEffect(() => {
    if (search) {
      dispatch(fetchProducts(search));
    }
  }, [search, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'product' && setProduct(value);
    name === 'weight' && setWeight(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (product.length === 0 || weight.length === 0) {
      return;
    }
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
    console.log('123');
    setProduct(e.currentTarget.value);
    setDataListVisible(false);
  };

  return (
    <form className={s.diaryForm} onSubmit={handleSubmit}>
      <input
        className={s.diaryInput}
        onInput={handleChange}
        type="text"
        placeholder="Enter product name"
        name="product"
        value={product}
        autoComplete="off"
        autoSave="off"
        maxLength={250}
        required
        onFocus={() => setDataListVisible(true)}
        onBlur={() => {
          setTimeout(() => {
            setDataListVisible(false);
          }, 250);
        }}
      />

      <input
        className={s.diaryInput}
        onInput={handleChange}
        type="number"
        placeholder="Grams"
        name="weight"
        pattern="[0-9]+"
        value={weight}
        maxLength={4}
        autoComplete="off"
        autoSave="off"
        required
      />

      <button className={s.diaryButton} type="submit"></button>
      {datalistVisible && (
        <DiaryDataList productList={products} handleClick={handleClick} />
      )}
    </form>
  );
};

export default DiaryAddProductForm;
