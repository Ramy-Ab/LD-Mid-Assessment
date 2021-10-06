import { Grid, Stack } from "@mui/material";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import NavBar from "../components/NavBar";
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
            {children}
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
}));
