import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Eye } from "react-feather";
import DateMenu from "../../dashboard/LeftFrame/Menu";

export default function CardHeader({ title, rightSubTitle, icon }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.cardHeader} container xs={12}>
        <Grid className={classes.rightGreed} item xs={rightSubTitle ? 6 : 12}>
          {icon}
          <Typography variant="cardsTitle" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        {rightSubTitle && (
          <Grid className={classes.leftGreed} item xs={6}>
            <Typography variant="cardPeriod"> {rightSubTitle}</Typography>
            <DateMenu />
          </Grid>
        )}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: "1rem",
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
