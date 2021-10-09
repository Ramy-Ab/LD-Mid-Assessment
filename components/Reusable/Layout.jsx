import { Grid, Stack } from "@mui/material";
import LeftSideBar from "../LeftSideBar";
import NavBar from "./NavBar";
import { makeStyles } from "@mui/styles";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}>
        <Grid className={classes.sideBar} item xs={1} sm={2} md={2}>
          <LeftSideBar />
        </Grid>
        <Grid className={classes.main} item xs={11} sm={10} md={10}>
          <Stack>
            <NavBar />
            <Grid container className={classes.page}>
              {children}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  sideBar: {
    position: "fixed",
  },
  main: {
    marginLeft: "auto",
  },
  page: {
    marginTop: "64px",
  },
}));