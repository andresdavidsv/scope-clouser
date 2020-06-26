const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "I am Global";

const functionScope = () => {
  var scope = "I am just a local";
  const fun = () => {
    return scope;
  };
  console.log(fun());
};

functionScope();
