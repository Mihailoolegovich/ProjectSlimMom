import React from 'react';
import { Formik, Field, Form } from 'formik';
import DailyCaloriesFormValidator from './DailyFormValidator';
import styles from './DailyForm.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/auth-selectors';

const DailyCaloriesForm = ({
  onSubmit,
  initialValues,
  enableReinitialize = true,
}) => {
  const isAuth = useSelector(authSelectors.getLoggedOn);

  return (
    <div className={styles.calculator}>
      <div className={!isAuth ? styles.container : styles.container__active}>
        <h1 className={styles.title}>
          Calculate your daily calorie intake right now
        </h1>
        {/* <div className={styles.inputWrapper}> */}
        <Formik
          enableReinitialize={enableReinitialize}
          initialValues={initialValues}
          validationSchema={DailyCaloriesFormValidator}
          onSubmit={onSubmit}
          render={({ errors, touched, values }) => (
            <Form className={styles.formContainer}>
              <div className={styles.formWrapper}>
                <div className={styles.inputCont}>
                  <label htmlFor="height" className={styles.formInput}>
                    Height *
                  </label>
                  <Field name="height" type="text" className={styles.field} />

                  {errors.height && touched.height && (
                    <div className={styles.fieldErrorNew}>
                      <p className={styles.notificationF}>{errors.height}</p>
                    </div>
                  )}
                  <label htmlFor="age" className={styles.formInput}>
                    Age *
                  </label>
                  <Field name="age" type="text" className={styles.field} />

                  {errors.age && touched.age && (
                    <div className={styles.fieldErrorNew}>
                      <p className={styles.notificationF}>{errors.age}</p>
                    </div>
                  )}
                  <label htmlFor="currentWeight" className={styles.formInput}>
                    Current weight *
                  </label>
                  <Field
                    name="currentWeight"
                    type="text"
                    className={styles.field}
                  />

                  {errors.currentWeight && touched.currentWeight && (
                    <div className={styles.fieldErrorNew}>
                      <p className={styles.notificationF}>
                        {errors.currentWeight}
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.radioWrapper}>
                  <label htmlFor="desiredWeight" className={styles.formInput}>
                    Desired weight *
                  </label>
                  <Field
                    name="desiredWeight"
                    type="text"
                    className={styles.field}
                  />

                  {errors.desiredWeight && touched.desiredWeight && (
                    <div
                      className={
                        styles.fieldErrorNew + ' ' + styles.fieldErrorNewLast
                      }
                    >
                      <p className={styles.notificationF}>
                        {errors.desiredWeight}
                      </p>
                    </div>
                  )}
                  <div id="my-radio-group" className={styles.formInput}>
                    Blood type *
                  </div>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className={styles.radio}
                  >
                    <label className={styles.formRadio}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="1"
                        checked={values.bloodType === '1'}
                        className={styles.customRadio}
                      />
                      <span></span>
                      <small>1</small>
                    </label>
                    <label className={styles.formRadio}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="2"
                        checked={values.bloodType === '2'}
                        className={styles.customRadio}
                      />
                      <span></span>
                      <small>2</small>
                    </label>
                    <label className={styles.formRadio}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="3"
                        checked={values.bloodType === '3'}
                        className={styles.customRadio}
                      />
                      <span></span>
                      <small>3</small>
                    </label>
                    <label className={styles.formRadio}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="4"
                        checked={values.bloodType === '4'}
                        className={styles.customRadio}
                      />
                      <span></span>
                      <small>4</small>
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className={styles.button}>
                Start losing weight
              </button>
            </Form>
          )}
        />
        {/* </div> */}
      </div>
      {/* <div className={!isAuth ? styles.sideBar : styles.sideBar__active}>
        {!isAuth ? <p></p> : <RightSideBar />}
      </div> */}
    </div>
  );
};

export default DailyCaloriesForm;

DailyCaloriesForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  enableReinitialize: PropTypes.bool,
};
