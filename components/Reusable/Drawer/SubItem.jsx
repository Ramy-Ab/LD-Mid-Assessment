/* eslint-disable @next/next/link-passhref */
import {
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDrawer } from "../../../contexts/DrawerContext";
import Link from "next/link";

export default function SubItem({ icon, text, url, badge }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [myPath, setMyPath] = useState(router.pathname);

  const open = useDrawer();

  const mouseIn = () => {
    setHover(true);
  };
  const mouseOut = () => {
    setHover(false);
  };
  const clickHandler = () => {
    // router.push(url);
    setMyPath(url);
  };

  useEffect(() => {
    setMyPath(router.pathname);
  }, [router]);

  const classes = useStyles({ hover, myPath, url, open });
  return (
    <Link href={url ? url : "/"}>
      <ListItemButton
        className={classes.item}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        onClick={clickHandler}
      >
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText
          className={classes.text}
          primary={
            <Typography variant="bold1" className={classes.text}>
              {" "}
              {open ? text : ""}{" "}
            </Typography>
          }
        />
        {open && badge}
      </ListItemButton>
    </Link>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: (props) => (props.open ? "0px 0px" : "5px 0px"),
    minWidth: "35px",
    color: (props) =>
      props.hover || props.myPath === props.url
        ? theme.palette.primary.main
        : theme.palette.blackTeinte.main,
  },
  text: {
    // display: (props) => (props.open ? "" : "none"),
    color: (props) =>
      props.hover || props.myPath === props.url
        ? theme.palette.primary.main
        : theme.palette.blackTeinte.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
