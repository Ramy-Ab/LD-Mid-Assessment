import { Paper, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function CardLayout({ children, spaces, heightMin, bgColor }) {
  const height = heightMin;
  const classes = useStyles({ heightMin, bgColor });
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={spaces ? spaces : 3} className={classes.card}>
          {children}
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: (props) => (props.heightMin ? props.heightMin : "220px"),
    borderRadius: "10px",
    marginBottom: "24px",
    padding: "24px",
    backgroundColor: (props) => (props.bgColor ? props.bgColor : "FFF"),
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
