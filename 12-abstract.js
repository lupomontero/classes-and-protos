function Animal() {
  if (this.constructor === Animal) {
    throw new Error('I\'m an abstract constructor!');
  }
}

Animal.prototype.poop = function () {
  return '💩';
};

class AbstractClass {
  constructor() {
    if (this.constructor === AbstractClass) {
      throw new Error('I\'m an abstract class!');
    }
  }
}

// console.log(new Animal()); // -> Error: I'm an abstract constructor!
// console.log(new AbstractClass()); // -> Error: I'm an abstract class!

class Cat extends Animal {}
// console.log(new Cat());

class ConcreteClass extends AbstractClass {}
// console.log(new ConcreteClass());
