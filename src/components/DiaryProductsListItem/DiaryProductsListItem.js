import { useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { deleteProduct } from 'redux/products/products-operations';
import s from './DiaryProductsListItem.module.scss';

const DiaryProductsListItem = ({ id, title, weight, calories }) => {
  const dispath = useDispatch();

  return (
    <li className={s.listItem}>
      <span className={s.listItem_el}>
        <EllipsisText text={title} length={20} />
      </span>
      <span className={s.listItem_el}>{weight} g</span>
      <span className={s.listItem_el}>{calories} kcal</span>
      <button
        className={s.listItem_btn}
        onClick={() => dispath(deleteProduct(id))}
      ></button>
    </li>
  );
};

export default DiaryProductsListItem;
