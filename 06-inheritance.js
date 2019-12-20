const util = require('util');
const {
  getConstructorsChain,
  getProtoChain,
  getProps,
  getTree,
  printTree,
} = require('./util');

function Animal() {}
Animal.prototype.poop = function () {
  return '💩';
};

function Mammal() {}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

function Feline() {}
Feline.prototype = Object.create(Mammal.prototype);
Feline.prototype.constructor = Feline;

function Cat() {}
Cat.prototype = Object.create(Feline.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.meow = function () { return 'meow'; };

// const cat = new Cat();
// console.log(cat.meow());
// console.log(cat.poop());
// console.log(getConstructorsChain(new Cat()));
// console.log(getProtoChain(new Cat()));
// console.log(getProps(new Cat()));

// Los caninos son notorios por la cantidad de popó que producen...
function Canine() {}
Canine.prototype = Object.create(Mammal.prototype);
Canine.prototype.constructor = Canine;
Canine.prototype.poop = function () {
  const superPoop = Mammal.prototype.poop.bind(this);
  return `${superPoop()}${superPoop()}`;
};

function Dog() {}
Dog.prototype = Object.create(Canine.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () { return 'woof!'; };

// const dog = new Dog();
// console.log(dog.poop());
// console.log(dog.bark());

// console.log(util.inspect(getTree([Cat, Dog]), {
//   depth: Infinity,
//   colors: true,
// }));

// printTree([Cat, Dog]);
