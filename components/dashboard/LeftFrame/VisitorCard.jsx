import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function VisitorCard() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} rounded elevation={3}>
        visitor
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "226px",
  },
}));
