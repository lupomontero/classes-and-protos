const { getConstructorsChain, getProps } = require('./util');

function Cat() {}
// console.log(new Cat()); // -> Cat {}

const Dog = function () {};
// console.log(new Dog()); // -> Dog {}

const PerroLobo = function CanisLupus() {};
// console.log(new PerroLobo()); // -> CanisLupus {}
// CanisLupus no está definido!!
// console.log(new CanisLupus());
// console.log(PerroLobo.name);

const Fox = () => {};
// FOX no es un constructor!!
// console.log(new Fox());

function Rabbit() {}
// console.log(Rabbit());
// console.log(new Rabbit());
// console.log(new Rabbit);

function Cuy() {
  if (this instanceof Cuy === false) {
    return new Cuy();
  }
}

// console.log(new Cuy());
// console.log(Cuy());

function Pigeon() {
  if (this instanceof Pigeon === false) {
    throw new Error('Pigeon must be invoked with new keyword.');
  }
}

// console.log(new Pigeon());
// console.log(Pigeon());
