import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        {["0", "1", "2", "0", "1", "2"].map((x) => (
          <BlogItem x={x} />
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
