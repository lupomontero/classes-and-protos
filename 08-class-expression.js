const { getConstructorsChain, getProps } = require('./util');

const Animal = class {};
// console.log(Animal);
// console.log(getConstructorsChain(new Animal()));

const Cat = class extends Animal {
  meow() {
    return 'miau';
  }
};
// console.log(Cat);
// console.log(getConstructorsChain(new Cat()));

// Higher-Order Classes

const makeAnonSubClass = C => class extends C {};
// const Siamese = makeAnonSubClass(Cat);
// console.log((new Siamese).meow());
// console.log(getConstructorsChain(new Siamese()));
// console.log(getConstructorsChain(new (makeAnonSubClass(Cat))()));

const makeNamedSubClass = (C, name) => ({ [name]: class extends C {} })[name];
// const Siamese = makeNamedSubClass(Cat, 'Siamese');
// console.log(new Siamese);
// console.log(getConstructorsChain(new (makeNamedSubClass(Cat, 'Siamese'))()));
