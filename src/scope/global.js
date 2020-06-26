var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

const helloWorld = () => {
  globalVasr = "Im global";
};

helloWorld();
console.log(globalVasr);

const anotherFunction = () => {
  var localVar = (globalVasr = "Im global");
};

anotherFunction();
console.log(globalVasr);
