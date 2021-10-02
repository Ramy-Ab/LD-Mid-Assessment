import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Trustpilot() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        Trustpilot
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "500px",
    borderRadius: "10px",
    marginBottom: "24px",
  },
}));
