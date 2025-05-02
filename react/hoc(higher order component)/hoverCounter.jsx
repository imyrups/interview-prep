import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count, increamentCounter } = props;

  return (
    <>
      <button onMouseOver={increamentCounter}>Click</button>
      <div>Count is {count}</div>
    </>
  );
};

export default withCounter(HoverCounter, 5);
