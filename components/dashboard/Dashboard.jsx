import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import LeftFrame from "./LeftFrame/LeftFrame";
import RightFrame from "./RightFrame/RightFrame";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={8}>
          <LeftFrame />
        </Grid>
        <Grid item xs={12} md={4}>
          <RightFrame />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
}));
