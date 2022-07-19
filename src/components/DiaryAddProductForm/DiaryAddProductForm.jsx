import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DiaryAddProductForm.module.scss';
import useDebounce from 'hooks/useDebounce';
import DiaryDataList from './DiaryDataList';
import { ProductsSelectors, addProduct, fetchProducts } from 'redux/products';

const DiaryAddProductForm = ({ date, closeModal = null }) => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [datalistVisible, setDataListVisible] = useState(false);

  const products = useSelector(ProductsSelectors.getProducts);
  const dispatch = useDispatch();

  const search = useDebounce(product.trim(), 500);

  const resetForm = () => {
    setProduct('');
    setWeight('');
  };

  useEffect(() => {
    if (search !== '') {
      dispatch(fetchProducts(search));
    }
  }, [search, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'product' && setProduct(value.trim());
    name === 'weight' && setWeight(value.trim());
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
    if (closeModal) {
      closeModal();
    }
  };

  const handleClick = e => {
    setProduct(e.currentTarget.textContent);
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
        minLength={1}
        maxLength={100}
        required
        onFocus={() => setDataListVisible(true)}
        onBlur={() => {
          setTimeout(() => {
            setDataListVisible(false);
          }, 250);
        }}
      />

      <input
        className={s.diaryInput_weight}
        onInput={handleChange}
        type="number"
        placeholder="Grams"
        name="weight"
        pattern="[0-9]+"
        value={weight}
        min={1}
        max={5000}
        autoComplete="off"
        autoSave="off"
        required
      />

      <button className={s.diaryButton} type="submit">
        Add
      </button>
      {datalistVisible && (
        <DiaryDataList productList={products} handleClick={handleClick} />
      )}
    </form>
  );
};

export default DiaryAddProductForm;
