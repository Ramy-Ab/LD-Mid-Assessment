import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { Collapse, Divider, Typography } from "@mui/material";
import {
  AllInbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import SubItem from "./SubItem";
import { useDrawer } from "../../../contexts/DrawerContext";

export default function CollapseItem({ icon, text, children }) {
  const openDrawer = useDrawer();
  const classes = useStyles({ openDrawer });
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton className={classes.listeItem} onClick={handleClick}>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText
          className={classes.text}
          primary={<Typography variant="bold1"> {text} </Typography>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.collapseItem} component="div" disablePadding>
          {children.map((subItem) => (
            <SubItem
              key={subItem.text}
              icon={subItem?.icon}
              url={subItem.url}
              text={subItem.text}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  listeItem: {
    padding: "0",
    display: (props) => (props.openDrawer ? "" : "none"),
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginButtom: (props) => (props.openDrawer ? "0px" : "16px"),
    minWidth: "35px",
    color: "#103B66",
  },
  item: {
    paddingTop: "0 !important",
    paddingButtom: "0 !important",
  },
  collapseItem: {
    backgroundColor: "#E9F8FE",
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
