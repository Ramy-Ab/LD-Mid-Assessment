import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Zap } from "react-feather";
import { Badge } from "@mui/material";

export default function NavBar({ unseen_news }) {
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar} color="white">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">
            {" "}
            <Zap />
            <Badge classN badgeContent={unseen_news + 1} color="error">
              <Typography variant="bold1" component="div" sx={{ flexGrow: 1 }}>
                What's new
              </Typography>
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  appBar: {
    position: "stickyd",
    minHeight: "64px",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));
