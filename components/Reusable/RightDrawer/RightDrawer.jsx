import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NewsCard from "../../dashboard/News/NewsCard";
import News from "../../dashboard/News/News";
import RightDrawerHeader from "./RightDrawerHeader";

export default function RightDrawer({ state, setState }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350, backgroundColor: "#F7F7F7" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <RightDrawerHeader />
      <News />
    </Box>
  );

  return (
    <div>
      <>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </>
    </div>
  );
}
