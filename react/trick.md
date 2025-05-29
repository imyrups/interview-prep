## Guess the output of this code:
```jsx
function App() {
  const [count, setCount] = useState(0)
  const boxes = [1,2,3,4];

  const handleClear = (i) => console.log(i);

  return (
    <>
      {
      boxes.map((box, index) => (
        <button onClick={(index) => handleClear(index)}>
          X
        </button>
        ))
      
      }
    </>
  )
}
```

## Guess the output of this code:
```jsx
function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
  }

  return (
    <>
        <div>{count}</div>
        <button onClick={handleClick}>
          Click
        </button>
        
    </>
  )
}
```
