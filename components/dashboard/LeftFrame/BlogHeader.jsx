import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExternalLink, FileText } from "react-feather";

export default function BlogHeader() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.blogHeader} container xs={12}>
        <Grid item xs={3} className={classes.flexCenter}>
          <FileText className={classes.usersIcon} size={24} />
          <Typography variant="cardsTitle">Latest news</Typography>
        </Grid>
        <Grid className={classes.flexCenter} item xs={3}>
          <Typography variant="bluetext1" sx={{ textDecoration: "underline" }}>
            Visit our blog{" "}
          </Typography>
          <ExternalLink className={classes.blueIcon} />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  blogHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: "1rem",
  },
  blueIcon: {
    marginLeft: "1rem",
    color: "#21B8F9",
  },
  usersIcon: {
    marginRight: "1rem",
  },
}));
