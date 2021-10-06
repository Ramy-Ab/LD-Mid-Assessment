import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#21B8F9",
    },
    orange: {
      main: "#FFA26B",
    },
    green: {
      main: "#00C48C",
    },
    red: {
      main: "#F33451",
    },
    white: {
      main: "#FFFFFF",
    },
    blueTinte: {
      main: "#E9F8FE",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h6: {
      // fontFamily: "Noto Sans HK",
      fontWeight: "500",
      fontSize: "20px",
      color: "#103B66",
    },
    bold2: {
      fontFamily: "SourceSansPro",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "20px",
      color: "#103B66",
    },
    bold1: {
      fontFamily: "NotoSansHK",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#233B53",
    },
    dashboardHeader: {
      fontFamily: "SourceSansPro",
      fontWeight: "600",
      fontSize: "34px",
      lineHeight: "39px",
      color: "#FFFFFF",
    },
    dashboardUrl: {
      fontFamily: "NotoSansHK",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "22px",
      color: "#FFFFFF",
    },
    cardsTitle: {
      fontFamily: "NotoSansHK",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "25px",
      color: "#103B66",
    },
    cardsPeriod: {
      fontFamily: "NotoSansHK",
      fontWeight: "300",
      fontSize: "13px",
      lineHeight: "18px",
      color: "#666666",
    },
    cardOrderInfo: {
      fontFamily: "NotoSansHK",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "22px",
      color: "#6C7C8C",
    },
    cardOrderPrice: {
      fontFamily: "NotoSansHK",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "22px",
      color: "#103B66",
    },
    bluetext1: {
      color: "#21B8F9",
      fontFamily: "SourceSansPro",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "20px",
    },
    blogTitle: {
      fontFamily: "NotoSansHK",
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "13px",
      color: "#21B8F9",
    },
    blogBody: {
      fontFamily: "NotoSansHK",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "20px",
      color: "#103B66",
    },
    blogFooter: {
      fontFamily: "NotoSansHK",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "12px",
      color: "#103B66",
    },
  },
});
