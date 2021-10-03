import { StarOutlined } from "@mui/icons-material";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowRight, Star } from "react-feather";

export default function Trustpilot() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Stack spacing={3}>
          <Grid container>
            <Grid item>
              <StarOutlined className={classes.star} />
            </Grid>
            <Grid item>
              <Typography className={classes.cardTitle}>Trustpilot</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.textBody}>
            Show us your love by leaving a positive review on trust pilot and
            receive the extension of 50 additional products
          </Typography>
          <Grid container>
            <Typography
              sx={{ textDecoration: "underline" }}
              mr={2}
              className={classes.textButtom}
            >
              Write a review on Trustpilot{" "}
            </Typography>
            <ArrowRight className={classes.arrow} />
          </Grid>
        </Stack>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "232px",
    borderRadius: "10px",
    marginBottom: "24px",
    backgroundColor: "#000032",
    padding: "24px",
  },
  star: {
    color: "#00B67A",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontFamily: "NotoSansHK",
    fontWeight: "700",
    fontSize: "17px",
    lineHeight: "22px",
  },
  textBody: {
    color: "#FFFFFF",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "22px",
  },
  textButtom: {
    color: "#00C48C",
    fontFamily: "SourceSansPro",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "20px",
  },
  arrow: {
    color: "#00C48C",
  },
}));
