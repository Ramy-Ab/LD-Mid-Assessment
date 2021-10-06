import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { Divider, Typography } from "@mui/material";
import { listeItems, listeItems2 } from "./ListItems";
import CollapseItem from "./CollapseItem";
import SubItem from "./SubItem";

export default function DrawerList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {listeItems.map((item, idx) => (
        <>
          {item.type === "item" && (
            <SubItem key={idx} icon={item.icon} text={item.text} />
          )}
          {item.type === "collapse" && (
            <CollapseItem
              key={idx}
              icon={item.icon}
              text={item.text}
              children={item.children}
            />
          )}
        </>
      ))}

      <Divider className={classes.divider} />

      {listeItems2.map((item, idx) => (
        <>
          <SubItem key={idx} icon={item.icon} text={item.text} />
        </>
      ))}
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "16px 0",
  },
}));
