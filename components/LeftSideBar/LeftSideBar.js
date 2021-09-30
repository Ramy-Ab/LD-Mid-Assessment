import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DrawerHeader from "./DrawerHeader";

function LeftSideBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <DrawerHeader />
    </Container>
  );
}

export default LeftSideBar;

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
}));
