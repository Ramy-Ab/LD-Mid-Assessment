import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { Collapse, Divider, Typography } from "@mui/material";
import { listeItems, listeItems2 } from "./ListItems";
import {
  AllInbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

export default function CollapseItem({ icon, text, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton className={classes.item} onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={<Typography variant="bold1"> {text} </Typography>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((subItem) => (
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                primary={<Typography variant="bold1"> {subItem} </Typography>}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "0",
  },
}));
