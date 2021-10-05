import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExternalLink, Share } from "react-feather";

export default function Header({ fullName }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item xs={12} md={4}>
        <Typography variant="dashboardHeader">Welcome {fullName}!</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <span>
          <Typography variant="dashboardUrl" className={classes.rightItem}>
            app.vetrinalive.it/french-store
            <ExternalLink className={classes.icon} />
          </Typography>
        </span>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    top: "0px",
    left: "0px",
    right: "0px",
    position: "relative",
    background:
      "linear-gradient(rgb(33, 184, 249) 0%, rgb(205, 255, 255) 132.05%)",
    minHeight: "182px",
    padding: "2rem",
    marginTop: "64px",
  },
  rightItem: {
    // paddingRight: "25%",
    textDecoration: "underline",
    display: "flex",
    alignItems: "center",
    paddingRight: "0",
  },
  icon: {
    marginLeft: "1rem",
  },
}));
