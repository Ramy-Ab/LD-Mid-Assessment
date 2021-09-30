import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#21B8F9',
    },
    orange:{
        main: '#FFA26B',
    },
    green:{
        main : '#00C48C',
    },
    red:{
        main : '#F33451',
    },
    white:{
        main : '#FFFFFF'
    },
    blueTinte:{
        main : '#E9F8FE'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography : {
      bold1 : {
        fontFamily : 'Noto Sans HK',
        fontWeight : '400',
        fontSize : '14px',
        
      }
  }
});
