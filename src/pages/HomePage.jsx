import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {
  dailyCaloriesPrivate,
  dailyCaloriesPublic,
} from 'redux/dailyCalorieIntakes/dailyCalorieIntake-operations';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyForm';
import Modal from '../components/Modal/Modal';
// import DailyKkalIntake from "../../components/kkalInfo/DailyKkalIntake";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getLoggedOn);

  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onSubmit = values => {
    isLoggedIn
      ? dispatch(dailyCaloriesPrivate(values))
      : dispatch(dailyCaloriesPublic(values));
    setShowModal(true);
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
          Here is modal
          {/* <DailyKkalIntake /> */}
        </Modal>
      )}
    </>
  );
};

export default HomePage;
