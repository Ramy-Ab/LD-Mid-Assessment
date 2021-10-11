import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function VisitorBody() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.number}>12</Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  number: {
    color: "#103B66",
    fontSize: "42px",
    fontWeight: "500",
  },
}));
