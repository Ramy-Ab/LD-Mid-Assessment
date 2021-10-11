import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function OrderBody({ orders, error }) {
  const classes = useStyles();
  return (
    <>
      <Stack>
        <Grid className={classes.cardHeader} container xs={12}>
          <Grid item className={classes.rightGreed} xs={6}>
            <Typography variant="cardOrderInfo"> Orders received:</Typography>
          </Grid>
          <Grid className={classes.leftGreed} item xs={4}>
            <Typography variant="cardOrderPrice">
              {orders.month.count}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.cardHeader} container xs={12}>
          <Grid item className={classes.rightGreed} xs={6}>
            <Typography variant="cardOrderInfo">Earnings:</Typography>
          </Grid>
          <Grid className={classes.leftGreed} item xs={4}>
            <Typography variant="cardOrderPrice">
              £{orders.month.price}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightGreed: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  leftGreed: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));
