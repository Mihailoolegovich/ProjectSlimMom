import s from './DiaryFormWrapper.module.scss';

const DiaryFormWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default DiaryFormWrapper;
