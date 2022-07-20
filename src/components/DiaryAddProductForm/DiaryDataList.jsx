import s from './DiaryAddProductForm.module.scss';
import { ProductsSelectors } from 'redux/products';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const DiaryDataList = ({ productList, handleClick }) => {
  const isLoading = useSelector(ProductsSelectors.isLoading);
  const products = useSelector(ProductsSelectors.getProducts);
  return (
    <div className={s.dataContainer}>
      {isLoading && <p className={s.notification}>Loading...</p>}
      {products.length === 0 && (
        <p className={s.notification}>No matches found</p>
      )}
      {products.length > 0 && !isLoading && (
        <ul className={s.dataList}>
          {productList.map(({ title, _id }) => {
            return (
              <li key={_id} className={s.option} onClick={handleClick}>
                {title.en}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DiaryDataList;


DiaryDataList.propTypes = {
  productList: PropTypes.array,
  handleClick: PropTypes.func,
};