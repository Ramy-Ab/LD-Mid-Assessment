import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function TrustpilotBody() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.textBody}>
        Show us your love by leaving a
        <span style={{ color: "#00C48C" }}> positive </span> review on trust
        pilot and receive the extension of{" "}
        <span style={{ fontWeight: "700" }}> 50 additional products </span>
      </Typography>{" "}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  textBody: {
    color: "#FFFFFF",
    fontFamily: "NotoSansKR",
    fontWeight: "100",
    fontSize: "17px",
    lineHeight: "22px",
  },
}));
