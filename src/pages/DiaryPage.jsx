import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import DiaryFormButton from 'components/DiaryAddProductForm/DiaryFormButton';
import DiaryFormWrapper from 'components/DiaryFormWrappers/DiaryFormWrapper';
import DiaryFormMobileWrapper from 'components/DiaryFormWrappers/DiaryFormMobileWrapper';
import Modal from 'components/Modal/Modal';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { getCurrentDay } from 'redux/products';
import bgTabletSidebar from '../images/bgTablet_Sidebar.png';
import bgCalendar from '../images/bgCalendar.png';
import Summary from '../components/RightSideBar/Summary';
import FoodNotRecommend from '../components/RightSideBar/FoodNotRecommend';
import { ToastContainer } from 'react-toastify';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobile: 320,
      tablet: 768,
      desktop: 1280,
      lg: 1800,
    },
  },
});

const Item1 = styled('div')(({ theme }) => ({
  display: 'flexbox',
  alignItems: 'flex-start',
  margin: '160px 0 0 0',
  height: 'auto',
  width: 'auto',
  backgroundColor: '#ffffff',
}));

const Item2 = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '40px 0 20px 0px',
  //  backgroundColor: '#F0F1F3',
  backgroundColor: 'red',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '400px',
    minHeight: '100%',
    padding: '80px 0 20px 0px',
    margin: '0 0px 0 0px',
    backgroundImage: `url("${bgTabletSidebar}")`,
    backgroundPosition: '100% 100%',
    backgroundColor: '#F0F1F3',
  },
  [theme.breakpoints.up('desktop')]: {
    position: 'absolute',
    top: '0',
    right: '-32px',
    width: '600px',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundImage: `url("${bgCalendar}")`,
    backgroundPosition: '100% 100%',
  },
}));

export default function DiaryPage() {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    date && dispatch(getCurrentDay(date));
  }, [date, dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          display={'flexbox'}
          width={'100%'}
          height={'100%'}
          overflowY={'scroll'}
        >
          <Grid item xs={12} mobile={12} tablet={12} desktop={7}>
            <Item1>
              <DiaryDateCalendar setDate={setDate} />
              {!isOpen && (
                <DiaryFormWrapper>
                  <DiaryAddProductForm date={date} />
                </DiaryFormWrapper>
              )}
              <DiaryProductsList date={date} />

              <DiaryFormButton type={'button'} action={toggleModal} />
              {isOpen && (
                <DiaryFormMobileWrapper>
                  <Modal onClose={toggleModal}>
                    <DiaryAddProductForm date={date} closeModal={toggleModal} />
                  </Modal>
                </DiaryFormMobileWrapper>
              )}
            </Item1>
          </Grid>
          <Grid item xs={12} mobile={12} tablet={12} desktop={5}>
            <Item2>
              <Summary date={date} />
              <FoodNotRecommend />
            </Item2>
          </Grid>
        </Grid>
      </ThemeProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
}
