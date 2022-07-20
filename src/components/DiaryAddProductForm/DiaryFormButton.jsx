import s from './DiaryFormButton.module.scss';
import PropTypes from 'prop-types';
const DiaryFormButton = ({
  type,
  title,
  action,
  class_name = s.diaryFormButton,
}) => {
  return (
    <button className={class_name} type={type} onClick={action}>
      {title}
    </button>
  );
};

export default DiaryFormButton;

DiaryFormButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.func,
  class_name: PropTypes.string,
};
