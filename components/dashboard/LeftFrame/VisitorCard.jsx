import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Eye } from "react-feather";
import Spinner from "../../Spinner";
import DateMenu from "./Menu";
import Menu from "./Menu";

export default function VisitorCard({ visitor, shopInfo, error }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid className={classes.rightGreed} item xs={6}>
              <Eye className={classes.eyeIcon} size={24} />
              <Typography variant="cardsTitle">visitors</Typography>
            </Grid>
            <Grid className={classes.leftGreed} item xs={6}>
              <Typography variant="cardPeriod"> This month</Typography>
              <DateMenu />
            </Grid>
          </Grid>
          {!visitor && !error && <Spinner />}
          {visitor && !error && (
            <Typography className={classes.number}>{visitor.month}</Typography>
          )}
          <Grid container>
            <Typography
              sx={{ textDecoration: "underline" }}
              mr={2}
              variant="bluetext1"
            >
              Do you want more visits?contact us!{" "}
            </Typography>
            <ArrowRight className={classes.arrow} />
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
  eyeIcon: {
    marginRight: "1rem",
  },
  arrow: {
    color: "#21B8F9",
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
  number: {
    color: "#103B66",
    fontSize: "42px",
    fontWeight: "500",
  },
}));
