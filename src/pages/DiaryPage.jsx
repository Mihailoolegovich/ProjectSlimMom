import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import FoodNotRecommend from '../components/RightSideBar/FoodNotRecommend';
import DiaryFormButton from 'components/DiaryAddProductForm/DiaryFormButton';
import Summary from '../components/RightSideBar/Summary';
import Modal from 'components/Modal/Modal';
import { getCurrentDay } from 'redux/products';
import bgDesctop_Sidebar from '../images/bgDesctop_Sidebar.png';
import bgTabletSidebar from '../images/bgTablet_Sidebar.png';

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
  // margin: '160px 0 0 0',
  height: 'auto',
  width: 'auto',
  backgroundColor: '#ffffff',

  // [theme.breakpoints.between('tablet', 'desktop')]: {
  //   margin: '180px 32px 0 32x',
  // },
  // [theme.breakpoints.up('desktop')]: {
  //   margin: '290px 16px 0 16px',
  // },
}));

const Item2 = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  padding: '80px 20px 80px 20px',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '100%',
    backgroundColor: 'transporent',
    padding: '80px 32px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'transporent',
  },
}));
const Item3 = styled('div')(({ theme }) => ({
  position: 'absolute',

  width: '100%',
  height: '45.3vh',
  left: 0,
  alignContent: 'stretch',
  backgroundColor: '#F0F1F3',
  backgroundRepeat: 'no-repeat',
  // [theme.breakpoints.between('mobile')]: {

  // },
  [theme.breakpoints.between('tablet', 'desktop')]: {
    display: 'flex',
    height: 'auto',

    right: '0',

    border: '2px #212121',
    backgroundImage: `url("${bgTabletSidebar}")`,
    bottom: '0',
    backgroundPosition: '100% 100%',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'block',
    left: 'auto',
    right: '0',
    top: '0',
    backgroundPosition: '100% 100%',
    width: '517px',
    height: '100vh',
    backgroundImage: `url("${bgDesctop_Sidebar}")`,
    backgroundColor: '#F0F1F3',
  },
}));

export default function DiaryPage({ toggleModal, isOpen }) {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  const mobile_size = useMediaQuery('(max-width:767px)');
  const tablet_size = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    if (tablet_size) {
      return toggleModal(false);
    }
  }, [tablet_size]);

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
          maxHeight={'100%'}
          // overflowY={'scroll'}
        >
          <Grid item xs={12} mobile={12} tablet={12} desktop={7}>
            <Item1>
              <DiaryDateCalendar setDate={setDate} />
              {tablet_size && <DiaryAddProductForm date={date} />}
              <DiaryProductsList date={date} />
              <DiaryFormButton type={'button'} action={toggleModal} />

              {mobile_size && (
                <>
                  {isOpen && (
                    <Modal onClose={toggleModal}>
                      <DiaryAddProductForm
                        date={date}
                        closeModal={toggleModal}
                      />
                    </Modal>
                  )}
                </>
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
