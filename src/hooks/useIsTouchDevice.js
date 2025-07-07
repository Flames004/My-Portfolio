// src/hooks/useIsTouchDevice.js
import { useEffect, useState } from "react";

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () =>
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    checkTouch();
  }, []);

  return isTouch;
};

export default useIsTouchDevice;
