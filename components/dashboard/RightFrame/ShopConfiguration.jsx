import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Tool } from "react-feather";
import { useInfo } from "../../../contexts/InfoContext";
import Spinner from "../../Reusable/Spinner";

export default function ShopConfiguration() {
  const classes = useStyles();
  const info = useInfo();
  const { data, error } = info;
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
          {!data && !error && <Spinner />}
          {data && !error && (
            <Stack>
              <Typography className={classes.configPercentage}>
                {data?.shops[0].products_allowed}%
              </Typography>
              <Typography className={classes.completed}>Completed</Typography>
            </Stack>
          )}

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
