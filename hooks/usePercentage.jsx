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
        setColor("error");
        break;
      case percentage > 30 && percentage < 60:
        setColor("warning");
        break;
      case percentage > 60:
        setColor("success");
        break;
      default:
        setColor("error");
        break;
    }
  };
  return color;
};
