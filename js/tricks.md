# Find js trick questions here

1. What is the output pf the below code
```js
  console.log("2" > "10"); // true
  console.log("2" > 10); // false
```

2. write a function which initialise object like "a.b.c.d.e" = 1 to {a : { b: { c: {d: {e: 1}} } } }
```js
function setNestedObj(strKey, value){
  const strArr = strKey.split(".");
  const obj = strArr.reduceRight(function(acc, next) {
  return {[next]: acc}
  }, value)
  return obj;
}
setNestedObj("a.b.c.d.e", 1)
```

3. 

 
