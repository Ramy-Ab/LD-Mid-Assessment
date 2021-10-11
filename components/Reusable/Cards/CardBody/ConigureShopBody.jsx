import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Spinner from "../../Spinner";

export default function ConigureShopBody({ data, error }) {
  const classes = useStyles();
  return (
    <>
      {!data && !error && <Spinner />}
      {data && !error && (
        <Stack>
          <Typography className={classes.configPercentage}>
            {data?.shops[0].products_allowed}%
          </Typography>
          <Typography className={classes.completed}>Completed</Typography>
        </Stack>
      )}
      <Typography className={classes.configText}>
        Complete all the steps to have a complete shop to best present to your
        customers.{" "}
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  configPercentage: {
    color: "#FFA26B",
    fontFamily: "SourceSansPro",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "39px",
  },
  completed: {
    color: "#FFA26B",
    fontFamily: "NotoSansHK",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "20px",
  },
  configText: {
    color: "#103B66",
    fontFamily: "NotoSansHK",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "22px",
  },
}));
