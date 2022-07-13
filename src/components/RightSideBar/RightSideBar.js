import s from './RightSideBar.module.scss';
import { useState, useEffect } from 'react';

const RightSideBar = () => {
  const currentDate = new Date().toLocaleDateString('en-GB');

  const totalData = 1800; // повинна бути сумма спожитих калорій (зума з'їдених калорій за день)
  const [consumed, setConsumed] = useState();
  const consumedData = useEffect(() => {
    setConsumed(totalData);
  }, [totalData]);

  const rateData = 2800; // повинна бути сумма калорій які можна спожити за день (береться з даних юзера)
  const [dailyRate, setDailyRate] = useState();
  const dailyRateData = useEffect(() => {
    setDailyRate(rateData);
  }, [rateData]);

  const left = dailyRate - consumed;
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

  return (
    <div className={s.container}>
      <div className={s.summaryForDate}>
        <p className={s.title}>Summary for {currentDate}</p>
        <ul className={s.list}>
          {elements.map(el => (
            <li className={s.item} key={el.id}>
              <p className={s.text}>{el.type}</p>
              <p className={s.text}>{el.data} kcal</p>
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
        <p className={s.text}>(millet, barley, wheat)</p>
      </div>
    </div>
  );
};

export default RightSideBar;
