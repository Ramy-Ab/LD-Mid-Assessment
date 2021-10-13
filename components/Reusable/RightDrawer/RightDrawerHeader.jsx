import { Cancel } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { X } from "react-feather";

function RightDrawerHeader() {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12} className={classes.container}>
        <Grid item xs={3}>
          <Typography variant="cardsTitle">News</Typography>
        </Grid>
        <Grid item xs={3} className={classes.icon}>
          <X />
        </Grid>
      </Grid>
    </>
  );
}

export default RightDrawerHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "64px",
    padding: "16px",
    backgroundColor: "#FFFF",
  },
  icon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
  },
}));
