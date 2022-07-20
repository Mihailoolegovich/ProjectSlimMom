import React from 'react';
import { Link } from 'react-router-dom';
import s from './DailyCaloriesIntake.module.scss';
import { useSelector } from 'react-redux';

import {
  getCalories,
  getNotRecommendProd,
} from '../../redux/dailyCalorieIntakes/dailyCalorieIntake-selectors';

const DailyCaloriesIntake = ({ closeModal }) => {
  const calories = useSelector(getCalories);
  const notRecommendProduct = useSelector(getNotRecommendProd);
  //console.log(calories);
  //console.log(notRecommendProduct);

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <h3 className={s.title}>Your recommended daily calorie intake is</h3>
        <div className={s.value}>
          <span className={s.calories}>{calories}</span>
          <span className={s.text}> kcal</span>
        </div>
      </div>

      <div className={s.containerFood}>
        <h3 className={s.productsTitle}>Foods you should not eat</h3>
        <ol className={s.productsList}>
          {notRecommendProduct.map((product, id) => (
            <li key={id} className={s.productItem}>
              {product.en}
            </li>
          ))}
        </ol>
      </div>

      <Link type="button" to="/auth/signup">
        <button
          onClick={() => {
            closeModal();
          }}
          className={s.button}
        >
          Start losing weight
        </button>
      </Link>
    </div>
  );
};
export default DailyCaloriesIntake;
