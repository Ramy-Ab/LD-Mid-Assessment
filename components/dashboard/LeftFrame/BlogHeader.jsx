import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExternalLink, FileText } from "react-feather";

export default function BlogHeader() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.blogHeader} container xs={12}>
        <Grid item xs={3}>
          <Typography variant="h6">
            {" "}
            <FileText /> Latest news
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">
            Visit our blog <ExternalLink />{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  blogHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "32px 0",
  },
}));
