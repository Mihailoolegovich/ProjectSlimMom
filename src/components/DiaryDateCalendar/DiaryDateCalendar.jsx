import React, { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import CalendarContent from './CalendarContent';
import styles from './DiaryDateCalendar.module.scss';
import { uk } from 'date-fns/esm/locale';
import { ReactComponent as LogoCalendar } from '../../icons/logoCalendar.svg';

const DiaryDateCalendar = ({ setDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setDate(startDate);
  }, [setDate, startDate]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button type="button" className={styles.btn} onClick={onClick} ref={ref}>
        {value}
        <LogoCalendar />
      </button>
    </>
  ));
  const handleCalendarOpen = () => console.log('Calendar opened');
  return (
    <>
      <DatePicker
        wrapperClassName={styles.datepicker}
        selected={startDate}
        closeOnScroll={true}
        input={true}
        onCalendarOpen={handleCalendarOpen}
        onChange={newDate => {
          if (startDate.getDate() === newDate.getDate()) {
            return;
          }
          setStartDate(newDate);
          // console.log('запрос за данными по выбранной дате' + newDate );
        }}
        locale={uk}
        dateFormat="dd.MM.yyyy"
        calendarContainer={CalendarContent}
        todayButton="Сьогодні"
        customInput={<ExampleCustomInput />}
        autoFocus

        // minDate={dateRegUser} дата регистрации юзера
      />
    </>
  );
};

export default DiaryDateCalendar;
