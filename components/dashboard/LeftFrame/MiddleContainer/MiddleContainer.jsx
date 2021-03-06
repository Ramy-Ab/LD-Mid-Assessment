import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MobileApp from "./MobileApp";
import Scroller from "./Scroller/Scroller";

export default function ScrollContainer({ extensions }) {
  const classes = useStyles();

  return (
    <>
      {" "}
      <Grid className={classes.container} container xs={12} md={12}>
        <Grid className={classes.item} item xs={12} md={5.5}>
          <MobileApp />
        </Grid>
        <Grid className={classes.item} item xs={12} md={5.5}>
          <Scroller extensions={extensions} />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    alignContent: "stretch",
  },
}));
