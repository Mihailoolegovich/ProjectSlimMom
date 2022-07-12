import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';

const products = [
  {
    id: 1,
    weight: 100,
    title: { ua: 'Appleplant' },
    calories: 353,
  },
  {
    id: 2,
    weight: 100,
    title: { ua: 'Poultry meat' },
    calories: 340,
  },
  {
    id: 3,
    weight: 100,
    title: { ua: 'Bread' },
    calories: 320,
  },
  {
    id: 4,
    weight: 100,
    title: { ua: 'Nut' },
    calories: 320,
  },
  {
    id: 5,
    weight: 100,
    title: { ua: 'Pork meat' },
    calories: 320,
  },
  {
    id: 6,
    weight: 100,
    title: { ua: 'Potato' },
    calories: 320,
  },
];

const DiaryProductsList = () => {
  return (
    <div className={s.productList_container}>
      <ul className={s.productList}>
        {products.map(product => (
          <DiaryProductsListItem
            key={product.id}
            id={product.id}
            title={product.title.ua}
            weight={product.weight}
            calories={product.calories}
          />
        ))}
      </ul>
      <div className={s.productList_downboard}></div>
    </div>
  );
};

export default DiaryProductsList;
