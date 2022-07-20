import React, { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import CalendarContent from './CalendarContent';
import styles from './DiaryDateCalendar.module.scss';
import { uk } from 'date-fns/esm/locale';
import PropTypes from 'prop-types';
import { ReactComponent as LogoCalendar } from '../../icons/logoCalendar.svg';

const DiaryDateCalendar = ({ setDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setDate(startDate);
  }, [setDate, startDate]);
  // const getDateUser = newDate => {
  //   console.log(
  //     'запрос за списком продуктов по выбранной дате ---  ' + newDate
  //   );
  // };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button type="button" className={styles.btn} onClick={onClick} ref={ref}>
        {value}
        <LogoCalendar />
      </button>
    </>
  ));

  return (
    <>
      <DatePicker
        wrapperClassName={styles.datepicker}
        selected={startDate}
        close={true}
        input={true}
        onChange={newDate => {
          if (startDate.getDate() === newDate.getDate()) {
            return;
          }
          setStartDate(newDate);
          // getDateUser(newDate);
        }}
        locale={uk}
        dateFormat="dd.MM.yyyy"
        calendarContainer={CalendarContent}
        todayButton="Сьогодні"
        customInput={<ExampleCustomInput />}
        autoFocus
      />
    </>
  );
};

export default DiaryDateCalendar;

DiaryDateCalendar.propTypes = {
  setDate: PropTypes.func,
};
