import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header/Header";
import LeftFrame from "./LeftFrame/LeftFrame";
import RightFrame from "./RightFrame/RightFrame";

export default function Dashboard({ blogs, extensions, fullName }) {
  const classes = useStyles();
  return (
    <>
      <Header fullName={fullName} />
      <Grid container className={classes.secContainer}>
        <Grid item xs={12} md={8}>
          <LeftFrame blogs={blogs} extensions={extensions} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RightFrame />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  // container: {
  //   marginLeft: "auto",
  // },
  secContainer: {
    marginLeft: "0",
    display: "flex",
    alignItems: "flex-start",
    margin: "1rem",
    marginTop: "-70px",
    zIndex: "2",
  },
}));
