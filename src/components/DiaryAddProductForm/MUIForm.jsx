import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DiaryAddProductForm.module.scss';
import useDebounce from 'hooks/useDebounce';
import DiaryFormButton from './DiaryFormButton';
import { ProductsSelectors, addProduct, fetchProducts } from 'redux/products';


import { Box, Autocomplete, TextField } from '@mui/material';












const MUIForm = ({ date = '2022-07-13' }) => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');

  const products = useSelector(ProductsSelectors.getProducts);
  const isLoading = useSelector(ProductsSelectors.isLoading)
  const dispatch = useDispatch();
  const search = useDebounce(product, 500);

  

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
    name === 'weight' && setWeight(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(product.length === 0 || weight.length === 0) {return}
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


  return (
    <form className={s.diaryForm} onSubmit={handleSubmit}>
        <Autocomplete
        id='search_products'
        loading={isLoading}
        value={product}
        loadingText={'Loading...'}
        options={products}
        filterOptions={(x) => x}
        noOptionsText={'No matches found'}
        getOptionLabel={(opt) => `${opt}`}
        isOptionEqualToValue={(option, value) => option.title.en.includes(value)}
        renderOption={(props, opt) => (<Box component="li" {...props} key={opt._id}>{`${opt.title.en}`}</Box>)}
        renderInput={(params) => (<TextField {...params} label={'Enter product name'} variant="standard"/>)}
        onInputChange={(e, value) => setProduct(`${value}`)}
        onChange={(e, value) => setProduct(`${value.title.en}`)}
        
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
    </form>
  );
};

export default MUIForm;