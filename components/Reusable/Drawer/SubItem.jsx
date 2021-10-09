import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SubItem({ icon, text, url }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [myPath, setMyPath] = useState(router.pathname);

  const mouseIn = () => {
    setHover(true);
  };
  const mouseOut = () => {
    setHover(false);
  };
  const clickHandler = () => {
    router.push(url);
    setMyPath(url);
  };

  useEffect(() => {
    setMyPath(router.pathname);
  }, [router]);

  const classes = useStyles({ hover, myPath, url });
  return (
    <>
      <ListItemButton
        className={classes.item}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        onClick={clickHandler}
      >
        <ListItemIcon className={classes.icon} className={classes.icon}>
          {icon}
        </ListItemIcon>

        <ListItemText
          className={classes.text}
          primary={
            <Typography variant="bold1" className={classes.text}>
              {" "}
              {text}{" "}
            </Typography>
          }
        />
      </ListItemButton>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  item: {
    padding: "0 !important",
    backgroundColor: (props) => (props.myPath === props.url ? "#F7F7F7" : ""),
    borderLeft: (props) =>
      props.myPath === props.url ? "3px solid #21B8F9" : "",
  },
  icon: {
    minWidth: "35px",
    color: (props) =>
      props.hover || props.myPath === props.url
        ? theme.palette.primary.main
        : theme.palette.blackTeinte.main,
  },
  text: {
    color: (props) =>
      props.hover || props.myPath === props.url
        ? theme.palette.primary.main
        : theme.palette.blackTeinte.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
