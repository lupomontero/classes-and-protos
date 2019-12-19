const { getConstructorsChain, getProps } = require('./util');

function Animal() {}
Animal.prototype.poop = function () {
  return '💩';
};

const a = new Animal();
// console.log(a);
// console.log(a.poop());

// console.log(a.hasOwnProperty('poop')); // -> false
// La propiedad no está en la instancia, sino en el prototipo!!

// console.log(a);
// console.log(getProps(a));
