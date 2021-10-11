import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Eye } from "react-feather";
import DateMenu from "../../dashboard/LeftFrame/Menu";

export default function CardHeader() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  eyeIcon: {
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
