import s from './RightSideBar.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from 'redux/products/products-selectors';
import { fetchProducts } from 'redux/products';

// data from post('https://weightbusters-api.herokuapp.com/days/user')
// const resBodyProducts = {
//   _id: '62cea662cc424fa1ef67bcb3',
//   date: '7/13/2022',
//   owner: '62ce9e64a0b503a49ae3fdba',
//   items: [
//     {
//       weight: 200,
//       name: {
//         ru: 'Булгур',
//         ua: 'Булгур',
//         en: 'Bulgur',
//       },
//       calories: 684,
//       id: 'b8e48284-b416-4c9f-8575-b0829cc8328b',
//     },
//     {
//       weight: 100,
//       name: {
//         ru: 'Яичница глазунья',
//         ua: 'Яєчня глазунья',
//         en: 'Fried eggs',
//       },
//       calories: 215,
//       id: 'de5d0db1-115b-48dc-b567-88b80ffa5705',
//     },
//   ],
//   createdAt: '2022-07-13T11:02:58.556Z',
//   updatedAt: '2022-07-13T11:07:40.823Z',
// };

// data from post('https://weightbusters-api.herokuapp.com/daily-calorie-intakes/private')
const resBodyCalories = {
  status: 'success',
  code: 200,
  message: 'Information created successfully',
  data: {
    user: {
      _id: '62ce9e64a0b503a49ae3fdba',
      name: 'Samlafutra',
      email: 'samlafutra@vusra.com',
      height: 170,
      age: 25,
      currentWeight: 70,
      desiredWeight: 60,
      bloodType: 1,
      dailyCalorieIntake: 2377,
      notRecommendedProducts: ['зерновые', 'молочные', 'мучные', 'яйца'],
    },
  },
};

const RightSideBar = () => {
  // теперішня дата на заміну дати з бази
  const currentDateNow = new Date().toLocaleDateString('en-GB');
  // const date = resBodyProducts.date;

  // 1. отримуємо суму спожитих калорій
  const productsData = useSelector(getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log('productsData:', productsData);

  const consumedData = () => {
    let totalCalories = [];
    // productsData.items.map якщо відповідь з бази
    productsData.map(product => totalCalories.push(product.calories));
    return totalCalories.reduce((partialSum, a) => partialSum + a, 0);
  };
  const consumed = consumedData();
  console.log('Consumed:', consumed);

  // 2. отримуємо денну норму споживання калорій
  // відповідь по запиту на /daily-calorie-intakes/private
  const dailyRate = resBodyCalories.data.user.dailyCalorieIntake;
  // console.log('Rate data:', rateData);

  // 3. розраховуємо залишок скільки ще можна спожити калорій
  const left = dailyRate - consumed;

  // 4. розраховуємо відсоткове значення спожитих калорій
  const caloriesPercentage = () => {
    const result = (100 * consumed) / dailyRate;
    return `${result.toFixed()}%`;
  };

  const elements = [
    {
      type: 'Left',
      data: left,
    },
    {
      type: 'Consumed',
      data: consumed,
    },
    {
      type: 'Daily rate',
      data: dailyRate,
    },
    {
      type: 'n% of normal',
      data: caloriesPercentage(),
    },
  ];

  // 5. Отримуємо нерекомендовані для споживання продукти
  // відповідь по запиту на /daily-calorie-intakes/private
  const foodNotRecommend =
    resBodyCalories.data.user.notRecommendedProducts.join(', ');
  function capitalizeFirstLetter(data) {
    return data[0].toUpperCase() + data.slice(1);
  }

  return (
    <div className={s.container}>
      <div className={s.summaryForDate}>
        <p className={s.title}>Summary for {currentDateNow}</p>
        <ul className={s.list}>
          {elements.map(({ type, data, id }) => (
            <li className={s.item} key={id}>
              <p className={s.text}>{type}</p>
              <p className={s.text}>{data} kcal</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.foodNotRecommend}>
        <p className={s.title}>Food not recommend</p>
        <p className={s.text}>
          All broths / decoctions, oily fish, caviar and meat, mushrooms,
          cereals
        </p>
        <p className={s.text}>{capitalizeFirstLetter(foodNotRecommend)}</p>
      </div>
    </div>
  );
};

export default RightSideBar;
