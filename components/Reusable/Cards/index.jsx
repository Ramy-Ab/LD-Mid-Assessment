import { Paper, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function CardLayout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3} className={classes.card}>
          {children}
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "226px",
    borderRadius: "10px",
    marginBottom: "5px",
    padding: "24px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
