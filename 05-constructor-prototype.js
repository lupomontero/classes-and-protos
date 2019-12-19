const { getConstructorsChain, getProps } = require('./util');

function Animal() {}
Animal.prototype.poop = function () {
  return '💩';
};

const a = new Animal();
console.log(a); // -> Animal {}
console.log(a.poop()); // -> 💩

console.log(a.hasOwnProperty('poop')); // -> false
// La propiedad no está en la instancia, si no en el prototipo!!

// console.log(a);
// console.log(getProps(a));
