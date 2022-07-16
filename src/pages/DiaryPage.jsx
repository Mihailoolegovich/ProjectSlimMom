import React from 'react';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import bgTabletSidebar from '../images/bgTablet_Sidebar.png';
import bgCalendar from '../images/bgCalendar.png';
import RightSideBar from 'components/RightSideBar';

import MUIForm from 'components/DiaryAddProductForm/MUIForm';


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
  backgroundColor: '#E5E5E5',
  display: 'flex',
  width: 'auto',
  height: 'auto',
  margin: '0 16px 0 -16px',
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: '0% 0%',
  flexDirection: 'column',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    backgroundImage: `url("${bgTabletSidebar}")`,
    backgroundRepeat: 'no-repeat',
    margin: '0 20px 0 -20px',
    backgroundPosition: '100% 100%',
    flexDirection: 'row',
    backgroundColor: 'transporent',
    justifyContent: 'space-around',
  },
  [theme.breakpoints.up('desktop')]: {
    justifyContent: 'center',
    paddimgTop: '257px',
    alignItems: 'center',
    marginBottom: '60px',
    backgroundImage: `url("${bgCalendar}")`,
    height: '100vh',
    width: 'auto',
    backgroundPosition: '100% 100%',
  },
}));

//    <DiaryFormButton/> приймає:  type, action.
export default function DiaryPage() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container display={'flexbox'} width={'auto'} height={'100vh'}>
          <Grid item mobile={12} tablet={12} desktop={7}>
            <Item1>
              <DiaryDateCalendar />
              <DiaryAddProductForm />
              <DiaryProductsList />
            </Item1>
          </Grid>
          {/* <Grid item mobile={12} tablet={12} desktop={5}>
            <Item2>
              <div // для проверки позиционирования
                style={{
                  textAlign: 'center',
                  border: '1px solid',
                  padding: '20px',
                  marginBottom: '60px',
                  backgroundColor: 'transporent',
                  width: '330px',
                  height: '168px',
                }}
              >
                Summary for 06/20/2020
              </div>
              <div // для проверки позиционирования
                style={{
                  textAlign: 'center',
                  border: '1px solid',
                  padding: '20px',
                  marginBottom: '60px',
                  backgroundColor: 'transporent',
                  width: '330px',
                  height: '168px',
                }}
              >
                Food not recommended
              </div>
            </Item2>
          </Grid> */}
          <RightSideBar />
        </Grid>
      </ThemeProvider>
    </>
  );
}
