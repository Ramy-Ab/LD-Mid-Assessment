import { Grid, Stack } from "@mui/material";
import LeftSideBar from "../LeftSideBar";
import NavBar from "./NavBar";
import { makeStyles } from "@mui/styles";
import { useDrawer, useDrawerToggle } from "../../contexts/DrawerContext";

export default function Layout({ children }) {
  const classes = useStyles();
  const open = useDrawer();
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          className={classes.sideBar}
          item
          xs={2}
          sm={open ? 2 : 0.5}
          md={open ? 2 : 0.5}
        >
          <LeftSideBar />
        </Grid>
        <Grid
          className={classes.main}
          item
          xs={10}
          sm={open ? 10 : 11.5}
          md={open ? 10 : 11.5}
        >
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
