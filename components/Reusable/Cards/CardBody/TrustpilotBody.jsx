import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function TrustpilotBody() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.textBody}>
        Show us your love by leaving a
        <span style={{ color: "#00C48C" }}> positive </span> review on trust
        pilot and receive the extension of 50 additional products
      </Typography>{" "}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  textBody: {
    color: "#FFFFFF",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "22px",
  },
}));
