import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { Collapse, Divider, Typography } from "@mui/material";
import { listeItems, listeItems2 } from "../../../utils/ListItems";
import {
  AllInbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export default function CollapseItem({ icon, text, children }) {
  const classes = useStyles();
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
            <ListItemButton
              className={classes.item}
              sx={{ pl: 4 }}
              onClick={() => router.push(subItem.url)}
            >
              <ListItemText
                primary={
                  <Typography variant="bold1"> {subItem.text} </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  listeItem: {
    padding: "0",
  },
  icon: {
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
