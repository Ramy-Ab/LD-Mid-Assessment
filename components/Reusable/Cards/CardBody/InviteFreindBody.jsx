import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function InviteFreindBody() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.bodyText}>
        <span className={classes.greenText}> Receive 50 products </span> by
        inviting a friend who subscribes to a plan. Your friend will receive a
        30% discount coupon valid for any plan.
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyText: {
    color: "#103B66",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "22px",
  },
  greenText: {
    color: "#00C48C",
    fontFamily: "NotoSansHK",
    fontWeight: "700",
    fontSize: "17px",
    lineHeight: "22px",
  },
}));
