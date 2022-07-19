import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import DiaryFormButton from 'components/DiaryAddProductForm/DiaryFormButton';
import Modal from 'components/Modal/Modal';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { getCurrentDay } from 'redux/products';
import bgTabletSidebar from '../images/bgTablet_Sidebar.png';
import bgCalendar from '../images/bgCalendar.png';
import Summary from '../components/RightSideBar/Summary';
import FoodNotRecommend from '../components/RightSideBar/FoodNotRecommend';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from '@mui/material';

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
  margin: '160px 20px 0 20px',
  height: 'auto',
  width: 'auto',
  backgroundColor: '#ffffff',

  [theme.breakpoints.between('tablet', 'desktop')]: {
    margin: '180px 32px 0 32x',
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '290px 16px 0 16px',
  },
}));

const Item2 = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '0px  20px 0px 40px',
  /*margin: '0 0px 0 -20px',*/
  backgroundColor: '#F0F1F3',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: '350px',
    padding: '80px 0 0 40px',
    margin: '0 0px 0 0px',
    backgroundImage: `url("${bgTabletSidebar}")`,
    backgroundPosition: '100% 100%',
  },
  [theme.breakpoints.up('desktop')]: {
    position: 'absolute',
    top: '0',
    right: '32px',
    width: '600px',
    height: '100vh',
    padding: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundImage: `url("${bgCalendar}")`,
    backgroundPosition: '100% 100%',
  },
}));

export default function DiaryPage({toggleModal, isOpen}) {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  

  const mobile_size = useMediaQuery('(max-width:767px)');
  const tablet_size = useMediaQuery('(min-width:768px)');

 useEffect(()=>{if(tablet_size){return toggleModal(false)}}, [tablet_size])

 

  useEffect(() => {
    date && dispatch(getCurrentDay(date));
  }, [date, dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          margin={
            ({
              xs: '-20px',
              tablet: '-32px',
              desktop: '-32px',
              lg: '-156px',
            },
            {
              xs: '-20px',
              tablet: '-20px',
              desktop: '-20px',
              lg: '-20px',
            },
            {
              xs: '-20px',
              tablet: '-32px',
              desktop: '-32px',
              lg: '-64px',
            },
            {
              xs: '-20px',
              tablet: '-20px',
              desktop: '-20px',
              lg: '-64px',
            })
          }
          display={'flexbox'}
          width={'100%'}
          height={'100%'}
          overflow={'scroll'}
        >
          <Grid item xs={12} mobile={12} tablet={12} desktop={7}>
            <Item1>
              <DiaryDateCalendar setDate={setDate} />
              {tablet_size && 
                  <DiaryAddProductForm date={date} />
              }
              <DiaryProductsList date={date} />
              <DiaryFormButton type={'button'} action={toggleModal} />
              
            {mobile_size && <> {isOpen && (
                  <Modal onClose={toggleModal}>
                    <DiaryAddProductForm date={date} closeModal={toggleModal} />
                  </Modal>
              )}</>}
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
