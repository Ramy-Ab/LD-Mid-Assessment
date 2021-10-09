import { FormatListBulleted } from "@mui/icons-material";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Eye } from "react-feather";
import Spinner from "../../Reusable/Spinner";
import DateMenu from "./Menu";
import Menu from "./Menu";

export default function OrdersCard({ orders, error }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid className={classes.rightGreed} item xs={6}>
              <FormatListBulleted className={classes.orderIcon} size={24} />
              <Typography variant="cardsTitle">Orders</Typography>
            </Grid>
            <Grid className={classes.leftGreed} item xs={6}>
              <Typography variant="cardPeriod"> This month</Typography>
              <DateMenu />
            </Grid>
          </Grid>
          <Stack>
            <Grid className={classes.cardHeader} container xs={12}>
              <Grid item className={classes.rightGreed} xs={6}>
                <Typography variant="cardOrderInfo">
                  {" "}
                  Orders received:
                </Typography>
              </Grid>
              <Grid className={classes.leftGreed} item xs={4}>
                {!orders && !error && <Spinner />}
                {orders && !error && (
                  <Typography variant="cardOrderPrice">
                    {orders.month.count}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid className={classes.cardHeader} container xs={12}>
              <Grid item className={classes.rightGreed} xs={6}>
                <Typography variant="cardOrderInfo">Earnings:</Typography>
              </Grid>
              <Grid className={classes.leftGreed} item xs={4}>
                {!orders && !error && <Spinner />}
                {orders && !error && (
                  <Typography variant="cardOrderPrice">
                    {orders.month.price}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Stack>
          <Grid container>
            <Typography
              sx={{ textDecoration: "underline" }}
              mr={2}
              variant="bluetext1"
            >
              10 free tips to increase your sales{" "}
            </Typography>
          </Grid>
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "226px",
    borderRadius: "10px",
    marginBottom: "5px",
    padding: "24px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  orderIcon: {
    marginRight: "1rem",
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
