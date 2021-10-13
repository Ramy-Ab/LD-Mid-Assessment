import { useEffect, useState } from "react";

export const useCategory = (category) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (category) {
      getColor(category);
    }
  }, [category]);

  const getColor = (category) => {
    switch (category) {
      case "Marketing":
        setColor("primary");
        break;
      case "Updates":
        setColor("secondary");
        break;
      case "Funzionalità Negozio":
        setColor("secondary");
        break;
      default:
        setColor("warning");
        break;
    }
  };
  return color;
};
