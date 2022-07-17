import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { getCurrentDay } from 'redux/products';
import RightSideBar from 'components/RightSideBar';
// import Summary from '../components/RightSideBar/Summary';
// import FoodNotRecommend from '../components/RightSideBar/FoodNotRecommend';
import DiaryFormButton from 'components/DiaryAddProductForm/DiaryFormButton';
import Modal from 'components/Modal/Modal';


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
});

const Item1 = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'column',
  width: 'auto',
  height: 'auto',
  marginBottom: '60px',
}));

const Item2 = styled('div')(({ theme }) => ({
  backgroundColor: '#f0f1f3',
  display: 'flex',
  width: 'auto',
  height: 'auto',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    margin: '0 0 0 -20px',
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    backgroundPosition: '100% 100%',
  },
  [theme.breakpoints.up('desktop')]: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '517px',
    height: '100%',
  },
}));

//    <DiaryFormButton/> приймає:  type, action.
export default function DiaryPage() {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);




  useEffect(() => {
    date && dispatch(getCurrentDay(date));
  },[date]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          display={'flexbox'}
          width={'auto'}
          height={'100vh'}
          overflow={'scroll'}
        >
          <Grid item mobile={12} tablet={12} desktop={7}>
            <Item1>
              <DiaryDateCalendar setDate={setDate} />
              <DiaryAddProductForm date={ date} />
              <DiaryProductsList date={date} />
              <DiaryFormButton />
            </Item1>
          </Grid>
          <Grid item mobile={12} tablet={12} desktop={5}>
            <Item2>
              <RightSideBar date={date} />
              {/* <Summary date={date} />
              <FoodNotRecommend /> */}
            </Item2>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
