import { useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { deleteProduct } from 'redux/products/products-operations';
import s from './DiaryProductsListItem.module.scss';

const DiaryProductsListItem = ({ id, title, weight, calories, date }) => {
  const dispath = useDispatch();

  const data = { id, date };
  const roundedCalories = Math.round(calories);

  const upperTitle = title[0].toUpperCase() + title.substring(1);
  return (
    <li className={s.listItem}>
      <span className={s.listItem_title}>
        <EllipsisText text={upperTitle} length={30} tailClassName={s.elipsis} />
      </span>
      <span className={s.listItem_weight}>{weight} g</span>
      <span className={s.listItem_kcal}>
        {roundedCalories} <span className={s.mark}>kcal</span>
      </span>
     
      <button
        className={s.listItem_btn}
        onClick={() => dispath(deleteProduct(data))}
        ></button>
    </li>
  );
};

export default DiaryProductsListItem;
