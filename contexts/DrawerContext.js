import React, { useContext, useState } from "react";

const DrawerContext = React.createContext();
const DrawerToggleContext = React.createContext();

export const useDrawer = () => {
  return useContext(DrawerContext);
};

export const useDrawerToggle = () => {
  return useContext(DrawerToggleContext);
};

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <DrawerContext.Provider value={open}>
      <DrawerToggleContext.Provider value={toggleDrawer}>
        {children}
      </DrawerToggleContext.Provider>
    </DrawerContext.Provider>
  );
};
