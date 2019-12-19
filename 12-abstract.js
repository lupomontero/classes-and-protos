function Animal() {
  throw new Error('I\'m an abstract constructor!');
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
