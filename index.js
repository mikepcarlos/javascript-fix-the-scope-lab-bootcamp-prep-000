var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var yourAnimal = 'cat';
  return yourAnimal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function outsideFunction() {
  return function insideFunction() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

//var theFunk = funkyFunction();

console.log(funkyFunction()());

