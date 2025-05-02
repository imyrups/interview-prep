import { useState } from "react";

const withCounter = (OldComponent, increamentBy = 1) => {
  return (props) => {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        increamentCounter={() => setCount(count + increamentBy)}
      />
    );
  };
};

export default withCounter;
