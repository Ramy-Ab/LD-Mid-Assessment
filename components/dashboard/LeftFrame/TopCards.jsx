import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect } from "react";
import useSwr from "swr";
import { getShopInfo } from "../../../helpers/api/getShopInfo";
import OrdersCard from "./OrdersCard";
import VisitorCard from "./VisitorCard";

export default function TopCards() {
  const url = "/admin/dashboard?shop_id=3105";
  console.log(url);
  const { data } = useSwr(url, getShopInfo);
  const classes = useStyles();
  return (
    <>
      {data && (
        <Grid className={classes.container} container xs={12}>
          <Grid item xs={12} md={5.5}>
            <VisitorCard visitor={data.views} />
          </Grid>
          <Grid item xs={12} md={5.5}>
            <OrdersCard orders={data.orders} />
          </Grid>
        </Grid>
      )}
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
