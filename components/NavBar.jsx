import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Zap } from "react-feather";
import { Badge, Grid } from "@mui/material";

export default function NavBar({ unseen_news }) {
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar} color="white">
        <Toolbar>
          <Grid container xs={11} className={classes.container}>
            <Grid item xs={2}>
              <Typography
                variant="cardOrderPrice"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
            </Grid>
            <Grid container className={classes.item} xs={3}>
              <Button color="inherit">
                {" "}
                <Zap />
                <Badge classN badgeContent={unseen_news + 1} color="error">
                  <Typography variant="bold2" component="div">
                    What's new
                  </Typography>
                </Badge>
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
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));
