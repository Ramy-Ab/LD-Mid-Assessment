import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function OrdersCard() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        orders
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "226px",
  },
}));
