import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {
  dailyCaloriesPrivate,
  dailyCaloriesPublic,
} from 'redux/dailyCalorieIntakes/dailyCalorieIntake-operations';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyForm';
import Modal from '../components/Modal/Modal';
import DailyCaloriesIntake from 'components/DailyCaloriesIntake/DailyCaloriesIntake';
import { getUserData } from 'redux/dailyCalorieIntakes/dailyCalorieIntake-selectors';

const CalculatorPage = ({onToggleModal, showModal}) => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getLoggedOn);

  
  const onSubmit = values => {
    isLoggedIn
      ? dispatch(dailyCaloriesPrivate(values))
      : dispatch(dailyCaloriesPublic(values));
    onToggleModal();
  };

 

  return (
    <>
      <DailyCaloriesForm
        onSubmit={onSubmit}
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        }}
      />

      {showModal && (
        <Modal onClick={onToggleModal} onClose={onToggleModal}>
          <DailyCaloriesIntake closeModal={onToggleModal} />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
