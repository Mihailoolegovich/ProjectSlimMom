import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';
import { useSelector } from 'react-redux';
import { ProductsSelectors } from 'redux/products';

const DiaryProductsList = ({ date }) => {
  const products = useSelector(ProductsSelectors.consumedProducts);

  return (
    <div className={s.productList_container}>
      {products.length > 0 ? (
        <ul className={s.productList}>
          {products.map(product => (
            <DiaryProductsListItem
              key={product.id}
              id={product.id}
              title={product.name.en}
              weight={product.weight}
              calories={product.calories}
              date={date}
            />
          ))}
        </ul>
      ) : (
        <p className={s.placeholder}>
          You have not yet added used products on the selected date
        </p>
      )}

      {products.length > 0 && <div className={s.productList_downboard}></div>}
    </div>
  );
};

export default DiaryProductsList;
