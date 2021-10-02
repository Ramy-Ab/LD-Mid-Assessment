import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function InviteFreinds() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        invite freinds
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "226px",
    borderRadius: "10px",
    marginBottom: "24px",
  },
}));
