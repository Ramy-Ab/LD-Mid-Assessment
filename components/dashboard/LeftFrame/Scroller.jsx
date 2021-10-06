import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Users } from "react-feather";
import ScrollerItems from "./ScrollerItems";

export default function Scroller({ extensions }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={5}>
        <Stack spacing={5} className={classes.card}>
          <Grid className={classes.cardHeader} container xs={12}>
            <Grid item xs={12}>
              <Users className={classes.usersIcon} size={24} />
              <Typography variant="cardsTitle">
                {" "}
                Extensions Marketplace{" "}
              </Typography>
            </Grid>
          </Grid>
          <ScrollerItems extensions={extensions} xs={6} />
          <Grid container>
            <Typography
              sx={{ textDecoration: "underline" }}
              mr={2}
              variant="bluetext1"
            >
              Discover all extensions
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
    borderRadius: "10px",
    padding: "24px",
    minHeight: "343px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  usersIcon: {
    marginRight: "1rem",
  },
  arrow: {
    color: "#21B8F9",
  },
}));
