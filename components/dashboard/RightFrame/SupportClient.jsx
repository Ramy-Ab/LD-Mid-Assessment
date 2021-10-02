import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function SupportClient() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        Support client
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "250px",
    borderRadius: "10px",
    borderRadius: "10px",
    marginBottom: "24px",
  },
}));
