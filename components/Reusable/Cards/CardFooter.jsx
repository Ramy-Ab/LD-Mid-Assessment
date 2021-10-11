import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight } from "react-feather";

export default function CardFooter({ footer, arrow, color }) {
  const classes = useStyles({ color });
  return (
    <>
      <Grid container>
        <Typography
          sx={{ textDecoration: "underline" }}
          mr={2}
          variant="bluetext1"
          className={classes.text}
        >
          {footer}
        </Typography>
        {!arrow && <ArrowRight className={classes.arrow} />}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  text: {
    color: (props) => (props.color ? props.color : ""),
  },
  arrow: {
    color: (props) => (props.color ? props.color : "#21B8F9"),
  },
}));
