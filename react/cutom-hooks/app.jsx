import useWindowSize from "./windowSize";
import useLogger from "./logger";

export default function App() {
  const windowSize = useWindowSize();
  useLogger(windowSize);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {windowSize &&
        windowSize.length > 1 &&
        `<h2>window height, width = ${windowSize[0]}, ${windowSize[1]}</h2>`}
    </div>
  );
}



import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;

