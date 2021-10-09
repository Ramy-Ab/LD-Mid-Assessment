import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import logo from "../../assets/images/logo.vetrinalive.svg";
import React from "react";
import { Menu } from "@mui/icons-material";
import { useDrawer, useDrawerToggle } from "../../contexts/DrawerContext";

function DrawerHeader() {
  const open = useDrawer();
  const toggleDrawer = useDrawerToggle();
  const classes = useStyles({ open });
  return (
    <Grid container className={classes.drawerHeader}>
      <Grid item className={classes.logo}>
        <Image src={logo} alt="Picture of the author" width={94} height={14} />
      </Grid>
      <Grid item className={classes.menu}>
        <Menu onClick={toggleDrawer} />
      </Grid>
    </Grid>
  );
}

export default DrawerHeader;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  menu: {
    cursor: "pointer",
  },
  logo: {
    display: (props) => (props.open ? "flex" : "none"),
  },
}));
