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
import bgDesctop_Sidebar from '../images/bgDesctop_Sidebar.png';
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
  height: 'auto',
  width: 'auto',
  backgroundColor: '#ffffff',
}));

const Item2 = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  padding: '80px 20px 80px 20px',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    flexDirection: 'row',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '100%',
    backgroundColor: 'transporent',
    padding: '40px 0px auto',
    margin: '0px 20px 0 20px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'transporent',
  },
}));
const Item3 = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  alignContent: 'stretch',
  backgroundColor: '#F0F1F3',
  margin: '0 0px 0 -20px',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    margin: '0px 0 0 -32px',
    border: '2px #212121',
    backgroundImage: `url("${bgTabletSidebar}")`,
    bottom: '0',
    backgroundPosition: '100% 100%',
    padding: '40px 0 20px 0px',
  },
  [theme.breakpoints.up('desktop')]: {
    position: 'absolute',
    display: 'block',
    right: '-20px',
    top: '0',
    backgroundPosition: '100% 100%',
    width: '600px',
    height: '100vh',
    backgroundImage: `url("${bgDesctop_Sidebar}")`,
    backgroundColor: '#F0F1F3',
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
          height={'auto'}
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
            <Item3>
              <Item2>
                <Summary date={date} />
                <FoodNotRecommend />
              </Item2>
            </Item3>
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
