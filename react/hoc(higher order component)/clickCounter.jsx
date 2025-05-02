import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count, increamentCounter } = props;

  return (
    <>
      <button onClick={increamentCounter}>Click</button>
      <div>Count is {count}</div>
    </>
  );
};

export default withCounter(ClickCounter, 10);
