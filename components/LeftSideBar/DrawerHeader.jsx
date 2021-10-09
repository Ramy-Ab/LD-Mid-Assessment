import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import logo from "../../assets/images/logo.vetrinalive.svg";
import React from "react";
import { Menu } from "@mui/icons-material";

function DrawerHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.drawerHeader}>
      <Grid item>
        <Image src={logo} alt="Picture of the author" width={94} height={14} />
      </Grid>
      <Grid item>
        <Menu />
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
}));
