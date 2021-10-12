import { useEffect, useState } from "react";

export const usePercentage = (percentage) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (percentage) {
      getColor(percentage);
    }
  }, [percentage]);

  const getColor = (percentage) => {
    switch (true) {
      case percentage < 30:
        setColor("#F33451");
        console.log("object");
        break;
      case percentage > 30 && percentage < 60:
        setColor("#F33451");
        break;
      case percentage < 30:
        setColor("#FFA26B");
        break;
      case percentage > 60:
        setColor("#00C48C");
        break;
      default:
        setColor("#000000");
        break;
    }
  };
  return color;
};
