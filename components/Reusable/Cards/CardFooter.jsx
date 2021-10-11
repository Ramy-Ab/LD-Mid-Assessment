import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight } from "react-feather";

export default function CardFooter() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Typography
          sx={{ textDecoration: "underline" }}
          mr={2}
          variant="bluetext1"
        >
          Do you want more visits?contact us!{" "}
        </Typography>
        <ArrowRight className={classes.arrow} />
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "#21B8F9",
  },
}));
