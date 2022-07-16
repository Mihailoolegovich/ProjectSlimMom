import s from './DiaryAddProductForm.module.scss';
const DiaryDataList = ({ productList, handleClick }) => {
  return (
    <div className={s.dataContainer}>
      <ul className={s.dataList}>
        {productList.map(({ title, _id }) => {
          return (
            <li key={_id} className={s.option} onClick={handleClick}>
              <option value={title.en} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DiaryDataList;
