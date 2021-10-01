import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopCards from "./TopCards";

export default function LeftFrame() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        <TopCards />
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "-50px",
    padding: "1rem",
  },
}));
