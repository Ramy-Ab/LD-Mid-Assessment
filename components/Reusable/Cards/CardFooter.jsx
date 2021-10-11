import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight } from "react-feather";

export default function CardFooter({ footer, arrow }) {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Typography
          sx={{ textDecoration: "underline" }}
          mr={2}
          variant="bluetext1"
        >
          {footer}
        </Typography>
        {!arrow && <ArrowRight className={classes.arrow} />}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "#21B8F9",
  },
}));
