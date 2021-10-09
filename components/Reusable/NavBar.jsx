import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Zap } from "react-feather";
import { Badge, Grid } from "@mui/material";
import useSwr from "swr";
import { getPersonalInfo } from "../../api/getPersonalInfo";
import { useDrawer } from "../../contexts/DrawerContext";

export default function NavBar() {
  const open = useDrawer();

  const url = "/admin/me";
  const { data } = useSwr(url, getPersonalInfo);
  const personelleInfo = data?.data;
  const error = data?.error;
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar} color="white">
        <Toolbar>
          <Grid
            container
            xs={12}
            sm={open ? 10.5 : 12}
            md={open ? 10.5 : 12}
            className={classes.container}
          >
            <Grid className={classes.center}>
              <Typography
                variant="cardOrderPrice"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
            </Grid>
            <Grid item className={classes.item} xs={2}>
              <Button color="inherit">
                {" "}
                <Zap />
                {personelleInfo && !error && (
                  <Badge
                    badgeContent={personelleInfo.unseen_news + 1}
                    color="error"
                  >
                    <Typography variant="bold2" component="div">
                      What's new
                    </Typography>
                  </Badge>
                )}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  appBar: {
    minHeight: "64px",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    position: "fixed",
    zIndex: "1000",
    marginBottom: "64px",
  },
  center: {
    display: "flex",
    alignItems: "center",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "3rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
