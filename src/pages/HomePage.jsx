import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyForm';
import Modal from '../components/Modal/Modal';
// import DailyKkalIntake from "../../components/kkalInfo/DailyKkalIntake";

// const BASE_URL = "https://slimmom-backend.goit.global";

const transformString = obj => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = Number(value);
  }
  return newObj;
};
const HomePage = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const onSubmit = async values => {
    const data = transformString(values);
    const res = await axios.post(`/daily-calorie-intakes`, data);
    setData(res.data);

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
          {/* <DailyKkalIntake {...data} /> */}
        </Modal>
      )}
    </>
  );
};

export default HomePage;
