import s from './RightSideBar.module.scss';

const RightSideBar = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  return (
    <div className={s.container}>
      <div className={s.summaryForDate}>
        <p className={s.title}>Summary for {currentDate}</p>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.text}>Left</p>
            <p className={s.text}>000 kcal</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Consumed</p>
            <p className={s.text}>000 kcal</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Daily rate</p>
            <p className={s.text}>000 kcal</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>n% of normal</p>
            <p className={s.text}>000 kcal</p>
          </li>
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
