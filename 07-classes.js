const { getProps } = require('./util');

class Animal {
  poop() {
    return '💩';
  }
}

class Mammal extends Animal {}

class Canine extends Mammal {
  poop() {
    return `${super.poop()}${super.poop()}`;
  }
}

class Dog extends Canine {
  bark() {
    return 'woof!';
  }
}

const dog = new Dog();
// console.log(dog.poop());
// console.log(dog.bark());
// console.log(getProps(dog));


function Wolf() {}
Wolf.prototype = Object.create(Canine.prototype);
Wolf.prototype.constructor = Wolf;

// console.log((new Wolf).poop());
