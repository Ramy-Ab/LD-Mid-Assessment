import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DrawerHeader from "./DrawerHeader";
import DrawerList from "./DrawerList";
import SelectShop from "./SelectShop";

function LeftSideBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <DrawerHeader />
      <DrawerList />
      <SelectShop />
    </Container>
  );
}

export default LeftSideBar;

const useStyles = makeStyles((theme) => ({
  container: {
    // position: "fixed",
    height: "100vh",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    overflow: "hidden auto",
    padding: "15px",
    transition: "all 1000ms",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
}));
