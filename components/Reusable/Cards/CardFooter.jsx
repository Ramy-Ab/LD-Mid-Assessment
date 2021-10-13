import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function CardFooter({ footer, arrow, color }) {
  const classes = useStyles({ color });
  return (
    <>
      <Link href="https://vetrinalive.it/blog" passHref>
        <a className={classes.redirect}>
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
        </a>
      </Link>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  text: {
    color: (props) => (props.color ? props.color : ""),
    cursor: "pointer",
  },
  arrow: {
    color: (props) => (props.color ? props.color : "#21B8F9"),
  },
  redirect: {
    textDecoration: "none",
  },
}));
