import React from 'react';
import DiaryDateCalendar from '../components/DiaryDateCalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import bgTabletSidebar from '../images/bgTablet_Sidebar.png';
import bgCalendar from '../images/bgCalendar.png';
import RightSideBar from 'components/RightSideBar';

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
  margin: '0 0px 0 -16px',
  backgroundRepeat: 'no-repeat',
  overflow: 'auto',
  [theme.breakpoints.between('tablet', 'desktop')]: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%',
    margin: '0',
    backgroundPosition: '100% 100%',
  },
  [theme.breakpoints.up('desktop')]: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '517px',
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
          <Grid item mobile={12} tablet={12} desktop={5}>
            <Item2>
              <RightSideBar />
            </Item2>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
