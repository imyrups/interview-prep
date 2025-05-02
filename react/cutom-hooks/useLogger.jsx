import { useEffect } from "react";

const useLogger = (value) => {
  useEffect(() => console.log(value), [value]);
};
export default useLogger;
