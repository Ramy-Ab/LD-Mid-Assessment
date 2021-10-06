import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect } from "react";
import useSwr from "swr";
import { getShopInfo } from "../../../helpers/api/getShopInfo";
import Spinner from "../../Spinner";
import OrdersCard from "./OrdersCard";
import VisitorCard from "./VisitorCard";

export default function TopCards() {
  const url = "/admin/dashboard?shop_id=3105";
  const { data } = useSwr(url, getShopInfo);
  const shopInfo = data?.data;
  const error = data?.error;
  const classes = useStyles();
  return (
    <>
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
    marginBottom: "24px",
    overflow: "hidden auto",
  },
}));
