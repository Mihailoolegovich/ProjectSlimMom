import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';
import { useSelector } from 'react-redux';
import { ProductsSelectors } from 'redux/products';

const DiaryProductsList = () => {
  const products = useSelector(ProductsSelectors.consumedProducts);

  return (
    <div className={s.productList_container}>
      {products.items ? (
        <ul className={s.productList}>
          {products.items.map(product => (
            <DiaryProductsListItem
              key={product.id}
              id={product.id}
              title={product.name.en}
              weight={product.weight}
              calories={product.calories}
              date={products.date}
            />
          ))}
        </ul>
      ) : (
        <div></div>
      )}

      <div className={s.productList_downboard}></div>
    </div>
  );
};

export default DiaryProductsList;
