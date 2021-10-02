import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Blogs from "./Blogs";
import ScrollContainer from "./ScrollContainer";
import TopCards from "./TopCards";

export default function LeftFrame() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        <TopCards />
        <ScrollContainer />
        <Blogs />
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem",
  },
}));