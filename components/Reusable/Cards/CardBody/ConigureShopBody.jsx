import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { usePercentage } from "../../../../hooks/usePercentage";
import Spinner from "../../Spinner";

export default function ConigureShopBody({ data, error }) {
  const percentage = data?.shops[0].products_allowed;

  const color = usePercentage(percentage);
  console.log("color : ", color);
  const classes = useStyles({ color });
  return (
    <>
      {!data && !error && <Spinner />}
      {data && !error && (
        <Stack>
          <Typography className={classes.configPercentage}>
            {percentage}%
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
    color: (props) => (props.color ? props.color : "000000"),
    fontFamily: "SourceSansPro",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "39px",
  },
  completed: {
    color: (props) => (props.color ? props.color : "000000"),
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
