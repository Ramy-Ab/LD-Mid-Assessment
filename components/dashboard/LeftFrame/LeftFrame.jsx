import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Blogs from "./Blogs/Blogs";
import ScrollContainer from "./MiddleContainer/MiddleContainer";
import TopCards from "./TopCards/TopCards";

export default function LeftFrame({ blogs, extensions }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        <TopCards />
        <ScrollContainer extensions={extensions} />
        <Blogs blogs={blogs} />
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
