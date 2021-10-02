import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OrdersCard from "./OrdersCard";
import VisitorCard from "./VisitorCard";

export default function TopCards() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        <Grid item xs={12} md={5.5}>
          <VisitorCard />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <OrdersCard />
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
    zIndex: 2,
    marginBottom: "24px",
    overflow: "hidden auto",
  },
}));
