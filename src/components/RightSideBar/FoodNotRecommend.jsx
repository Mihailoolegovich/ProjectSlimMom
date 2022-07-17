import s from './RightSideBar.module.scss';
import { useSelector } from 'react-redux';
import { getNotRecommendProd } from 'redux/dailyCalorieIntakes/dailyCalorieIntake-selectors';

const FoodNotRecommend = () => {
  const getNotRecommendProdData = useSelector(getNotRecommendProd);
  const notRecommendProd = getNotRecommendProdData?.map(
    product => product.en[0]
  );
  console.log(notRecommendProd);
  function capitalizeFirstLetter(data) {
    return data[0].toUpperCase() + data.slice(1);
  }

  const diet =
    getNotRecommendProdData.length !== 0
      ? capitalizeFirstLetter(notRecommendProd.join(', '))
      : 'Your diet weel be dispalayed here';

  return (
    <div className={s.foodNotRecommend}>
      <p className={s.title}>Food not recommend</p>
      <p className={s.text}>{diet}</p>
    </div>
  );
};

export default FoodNotRecommend;
