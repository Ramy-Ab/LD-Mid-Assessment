import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Scroller() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={5}>
        scroller
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "400px",
  },
}));
