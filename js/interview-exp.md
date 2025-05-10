# Geminus Tech

## Write a program to remove duplicate from array ['a','a','b','c','b','e']
There are a couple of ways to do this:
1. push all the elements into a `Set`, iterate over set and return array
```js
const array = ['a','a','b','c','b','e']
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: ['a','b','c,'e']
```
2. Using `filter` method, `reduce` could also work
```js
const array = ['a','a','b','c','b','e']
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // Output:['a','b','c,'e']
```

3. Sort the array and use two pointers
```js
let array = ['a','a','b','c','b','e'];
let res = [];
array = array.sort((a,b) => a>b)
for(let i=0;i<array.length;i++){
  if(i===array.length-1 && array[i-1] !== array[i]) {
  res.push(array[i]);
  break;
  }
  if(array[i] === array[i+1]) continue;
  res.push(array[i])
}
console.log(res);
```


## What is the output of the following code:
```js
a={};
b={key:'b'}
c={key:'c'}
a[b]=123
a[c]=456
console.log(a[b]);
```
Answer is: 456, didn't get the trick during interview. when you use object as keys to map it works but to object it converts it to toString() and this here return [object Object] for both. Hence it overrides.

## From given array find the no whose left and right sum are equal. Follow on, the left & right sum equals item itself. (equilibrium index)
done using two passes:
```js
  a=[1,2,3,0,-2,-1,-1,-2];
  resL=[]
  preSum =0;
  for(let i=0;i<n;i++){
    resL[i]=preSum;
    preSum+=a[i]  
  }

  resR=[]
  preSum =0;
  for(let i=n-1;i>=0;i--){
    resR[i]=preSum;
    preSum+=a[i]  
  }

  for(let i=0;i<n;i++) {
    if(resL[i)===resR[i]){ // For follow on, resL[i]+resR[i]===a[i]
      return a[i];
    }
  }
  
```

---

# Global Logic
## R1- Write a function makeCounter which returns a function, calling which should display an increamented count
```js
function makeCounter(){
  let count =0;
  return () => {
    console.log(count++);
  }
}
const counter = makeCounter()
counter();
counter();
```

## R1 - Write a recursive function to print array in order
```js
function printArray(arr, index = 0) {
  if (index >= arr.length) return;
  console.log(arr[index]);
  printArray(arr, index + 1);
}
const myArray = [1, 2, 3, 4, 5];
printArray(myArray);
```

## R2- Implement makeStepper using closure
```js
/* 
Description:
Create a function makeStepper(start, step) that returns another function.
Each call to the returned function adds step to the previous number, but must not exceed 100.

Requirements:
• Use closures (no global variables)
• Do not exceed the max value of 100
• Do not modify input parameters
 */
 
const max = 100;

const makeStepper = (start, step) => {
	let currentStep = start;
  return () => {
  	if(currentStep+step > max){
    	console.log(currentStep);
    	return -1;
    }
  	currentStep+=step
    console.log(currentStep);
  	return currentStep;
  }
}
 
const stepper = makeStepper(90, 5);

stepper(); // 90
stepper(); // 95
stepper(); // 100
stepper(); // 100
```
## What is `this` keyword in js?
Explained with the example detailed in Azodha.
## Can we bind a diff this to any function?
## How does this behaves if instead of a fn(method) an arrow function was declared in object?
## Can we somehow bind a diff this to arrow functions?
No They cannot be bound by a diff this

## What is event loop?
## What are higher ordered functions, give some builtin examples?
## How do we process an array of billions of data length with say a .map or something else?
## What will happen to the memory in that case?
## What are web workers, somehow can you move the processing on to a web worker or service worker?
I told Web worker can help in this, service worker have all togetehr a diff usecase

- 


# Azodha
## what is closure, give some practical application
## What is event loop
## what are some of the browser APIs
## Explain the output of the following code
```js
const myObject = {
  normalFn: function () {
    console.log("Normal: ", this); // myObject
    function innerNormalFn() {
      console.log("Inner:", this); // window
    }
    innerNormalFn();
  },
  arrowFn: () => {
    console.log("Arrow: ", this); // window
  },
};

myObject.normalFn();
myObject.arrowFn();
```
## create a myDebounce function
```js
 const myDebounce = (cb, delay) => {

  let timer;
  return (...props)  => {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...props);
    }, delay)
  }

}

const debouncedSearch = myDebounce(() => {
  console.log("wait complete");
}, 500);

debouncedSearch();
debouncedSearch();

setTimeout(() => debouncedSearch(), 1000);
```
### guess the output
```js
class Site {
  name = "BFE";
  getHandle() {
    return {
      name: "bigfrontend",
      getName1() {
        return this.name;
      },
      getName2: () => {
        return this.name;
      },
      getName3: function () {
        return this.name;
      },
    };
  }
}

const site = new Site();
alert(site.getHandle().getName1()); // window.name
alert(site.getHandle().getName2()); // BFE
alert(site.getHandle().getName3()); // bigfrontend
```
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let displayName = function () {
  if (this && this.age) {
    alert(`my name is ${this.name} & my age is ${this.age}.`);
  } else {
    alert("error");
  }
};

let obj1 = new Person("A", 31);
let obj2 = new Person("B", 21);
let obj3 = new Person("C", 11);
let obj4 = new Person("D", 1);

displayName(obj1); // error
Person.prototype.displayName = displayName;

displayName(obj2); // error
displayName(obj4); // error
displayName.call(obj3, obj4); // C, 11
```
```js
const person = { name: "Lydia", age: 21 };
const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person); // Lydia, 22
```

## Implement flatten method
```js
const flatten = (arr) => {
	return arr.reduce((acc, item) => {
  	if(Array.isArray(item)) {
    	acc.push(...flatten(item));
    } else {
    acc.push(item);
    }
    return acc;
   }, []);
}

console.log(flatten([1,[2,[3,4]]]));
```
### Maximise profit for stock price given in array
```js
function getMaxProfit(prices) {
  let max = 0, l=0,r=1;
  while(r<prices.length) {
    if(prices[r] < prices[l]) {l=r;}
    max = Math.max(max, prices[r]-prices[l]);
    r++;
  }
  
  return max;
}

console.log(getMaxProfit([7,1,5,3,6,4]));
console.log(getMaxProfit([7,6,4,13,1]));
```


# Micro1 AI
## diff between throttle and debounce
- Debounce: It'll wait until the event stops occuring and then wait for delay, for eg user stops typing in searchbar
- Throttle: It'll not wait until user stops but rather wait for delay. for eg. mouse move after say every 1 sec it'll print mouse position, but debounce will keep waiting as user never stops mouse move.
## code for own debounce/ throttle implementation
```js
const throttle = function(cb, delay) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if(waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay)
    } 
  }

  return (...args) => {
    if(shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args)
    shouldWait = true;

    setTimeout(timeoutFunc, delay)
  }
}
const debounce = function(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  }
}

const searchAPI = (query) => console.log(`Searching for: ${query}`);
const throttledSearch = throttle(searchAPI, 1000);
throttledSearch('a');
throttledSearch('ap');
throttledSearch('app');
throttledSearch('appl');
throttledSearch('apple');
// it should only log Searching for Apple

let count = 0;
const counter = () => count++;
debouncedCounter = debounce(counter, 500)
for(let i=0;i<10;i++){
  debouncedCounter()
}
setTimeout(() => console.log(count), 600); // should print 1
```

# Confiz
## Explain the output of the below code
```js
const person = {
  name: "Alice",
  greet: function() {
  // alice
    setTimeout(function() {
    // window / undefined if in strict mode
      console.log("Hi, I'm " + this.name); // This actually printed Hi, I'm Result. I was confused too but jsfiddle set the window.name to "Result" :D
    }, 1000);
  }
};
person.greet();
```
## Create a deep copy of an object.
```js
function deepClone(val){
    const res = {};
    for(let key in val) {
    if(val.hasOwnProperty(key)) {
      if(typeof val[key] === "object"){
        res[key] = deepClone(val[key]);
      } else {
      res[key] = val[key];
      }
    }
  }
  return res;
  }
  
  const original = { a: 1, b: { c: 2 } };
  const copy = deepClone(original);
  console.log(copy);
  
  copy.b.c = 42;
  console.log(original.b.c); // 2 (original unchanged  
  console.log(copy)
```

## Convert an array to tree level order. 
```js
/*
// Input
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//expected output; 
{
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: 8, right: 9 },
    right: { value: 5, left: 10, right: null }
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
}
*/
function TreeNode(val) {
	this.val = val;
  this.left = null;
  this.right = null;
}
function createTree(arr) {
  const root = new TreeNode(arr[0]);
  let queue = [{ ref: root, key: "left"}, {ref: root, key: "right"}];
  for(let i=1;i<arr.length;i++) {
  	const {ref, key} = queue.shift();
    const child = new TreeNode(arr[i]);
    ref[key] = child;
    queue.push({ref: child, key: "left"});
    queue.push({ref: child, key: "right"});
  }
  
  console.log(JSON.stringify(root))
  
  return root;
}
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
createTree(arr);

```

