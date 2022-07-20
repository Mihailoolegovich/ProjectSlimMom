import { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../sass/base/BaseStyles.scss';

import styles from './DiaryDateCalendar.module.scss';

const CalendarContent = ({ style, children }) => {
  return (
    <div>
      <label className={styles.label}>
        <style>
          {`.react-datepicker__header{
        text-align: center;
        width: auto;
        margin-top: 10px;
        font-size: 18px;
        color:  #FC842D;
        }`}

          {`.react-datepicker__current-month{
        margin-top: 10px;
        width: auto;
        }`}

          {`.react-datepicker-popper{
        padding:5px;
        text-align: center;
        color:  #FC842D;
        background-color:  #F0F1F3;
        }`}
        </style>

        <CalendarContainer>
          <div>Переглянути дату</div>
          <div>{children}</div>
        </CalendarContainer>
      </label>
    </div>
  );
};

export default CalendarContent;
