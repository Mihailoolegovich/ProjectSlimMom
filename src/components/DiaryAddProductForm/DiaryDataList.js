import s from './DiaryAddProductForm.module.scss';

const DiaryDataList = ({ productList, handleClick }) => {
  return (
    <div className={s.dataContainer}>
      <ul className={s.dataList}>
        {productList.map(({ title, id }) => {
          return (
            <li key={id} className={s.dataListItem} onClick={handleClick}>
              {title.ua}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DiaryDataList;
