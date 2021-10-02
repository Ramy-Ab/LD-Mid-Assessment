import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InviteFreinds from "./InviteFreinds";
import ShopConfiguration from "./ShopConfiguration";
import SupportClient from "./SupportClient";
import Trustpilot from "./Trustpilot";

export default function RightFrame() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12} md={12}>
        <Grid item className={classes.shop} xs={12} md={12}>
          <ShopConfiguration />
        </Grid>
        <Grid item className={classes.shop} xs={12} md={12}>
          <Trustpilot />
        </Grid>
        <Grid item className={classes.shop} xs={12} md={12}>
          <SupportClient />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-start",
    padding: "1rem",
  },
  shop: {
    zIndex: "2",
  },
}));
