import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import useSwr from "swr";
import { fetcher } from "../../../api/fetcher";
import { shopInfoUrl } from "../../../utils/constants/apis";
import CustomizedSnackbars from "../../Reusable/Snackbar";
import OrdersCard from "./OrdersCard";
import VisitorCard from "./VisitorCard";

export default function TopCards() {
  const { data } = useSwr(shopInfoUrl, fetcher);
  const shopInfo = data?.data;
  const error = data?.error;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {error && !shopInfo && (
        <CustomizedSnackbars
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          error={error}
        />
      )}
      <Grid className={classes.container} container xs={12}>
        <Grid item xs={12} md={5.5}>
          <VisitorCard visitor={shopInfo?.views} error={error} />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <OrdersCard orders={shopInfo?.orders} error={error} />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    zIndex: 2,
    overflow: "hidden auto",
  },
}));
