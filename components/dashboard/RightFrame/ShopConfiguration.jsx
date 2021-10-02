import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Tool } from "react-feather";

export default function ShopConfiguration() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid item xs={12}>
              <Tool className={classes.toolIcon} size={24} />
              <Typography variant="cardsTitle">Configure your shop</Typography>
            </Grid>
          </Grid>
          <Stack>
            <Typography className={classes.configPercentage}>45%</Typography>
            <Typography className={classes.completed}>Completed</Typography>
          </Stack>
          <Typography className={classes.configText}>
            Complete all the steps to have a complete shop to best present to
            your customers.{" "}
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
  toolIcon: {
    marginRight: "1rem",
  },
  configPercentage: {
    color: "#FFA26B",
    fontFamily: "SourceSansPro",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "39px",
  },
  completed: {
    color: "#FFA26B",
    fontFamily: "NotoSansHK",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "20px",
  },
  configText: {
    color: "#103B66",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "22px",
  },
  arrow: {
    color: "#21B8F9",
  },
}));
