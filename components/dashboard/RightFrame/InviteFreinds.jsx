import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Tool, Users } from "react-feather";

export default function InviteFreinds() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid item xs={12}>
              <Users className={classes.usersIcon} size={24} />
              <Typography variant="cardsTitle">Invite freind</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.bodyText}>
            <span className={classes.greenText}> Receive 50 products </span> by
            inviting a friend who subscribes to a plan. Your friend will receive
            a 30% discount coupon valid for any plan.
          </Typography>
          <Grid container>
            <Typography
              sx={{ textDecoration: "underline" }}
              mr={2}
              variant="bluetext1"
            >
              Complete the setup!{" "}
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
    marginBottom: "24px",
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
  usersIcon: {
    marginRight: "1rem",
  },
  bodyText: {
    color: "#103B66",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "22px",
  },
  greenText: {
    color: "#00C48C",
    fontFamily: "NotoSansHK",
    fontWeight: "700",
    fontSize: "17px",
    lineHeight: "22px",
  },
  arrow: {
    color: "#21B8F9",
  },
}));
