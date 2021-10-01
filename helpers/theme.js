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
    bold1: {
      fontFamily: ["Noto Sans HK", "Sans-Serif"],
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
});
