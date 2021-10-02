import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlogList from "./BlogList";
import BlogHeader from "./BlogHeader";

export default function Blogs() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container} xs={12}>
        <BlogHeader />
        <BlogList />
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
    backgroundColor: "#E9F8FE",
  },
}));
