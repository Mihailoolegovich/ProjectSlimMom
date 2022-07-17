import s from './DiaryFormButton.module.scss';
const DiaryFormButton = ({
  type,
  title,
  action,
  class_name = s.diaryFormButton
}) => {
  return (
    <button className={class_name} type={type} onClick={action}>
      {title}
    </button>
  );
};

export default DiaryFormButton;
