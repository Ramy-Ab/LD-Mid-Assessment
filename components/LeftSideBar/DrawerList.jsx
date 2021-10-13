import * as React from "react";
import List from "@mui/material/List";

import { makeStyles } from "@mui/styles";
import { Divider, Typography } from "@mui/material";
import { listeItems, listeItems2 } from "../../utils/ListItems";
import CollapseItem from "../Reusable/Drawer/CollapseItem";
import SubItem from "../Reusable/Drawer/SubItem";

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
      {listeItems.map((item) => (
        <>
          {item.type === "item" && (
            <SubItem
              key={item.text}
              icon={item.icon}
              url={item.url}
              text={item.text}
              badge={item?.badge}
            />
          )}
          {item.type === "collapse" && (
            <CollapseItem
              key={item.text}
              icon={item.icon}
              url={item.url}
              text={item.text}
              // eslint-disable-next-line react/no-children-prop
              children={item.children}
            />
          )}
        </>
      ))}

      <Divider className={classes.divider} />

      {listeItems2.map((item) => (
        <>
          <SubItem
            key={item.text}
            icon={item.icon}
            url={item.url}
            text={item.text}
          />
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
