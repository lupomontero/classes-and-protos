// # Constructor with closure and instance methods

// function Thing(initialSecret) {
//   let secret = initialSecret;
//   this.setSecret = (newSecret) => { secret = newSecret; };
//   this.getSecret = () => secret;
// }
//
// const thing = new Thing('xxx');
// console.log(thing);
// console.log(thing.getSecret());
// thing.setSecret('yyy');
// console.log(thing.getSecret());


// # Class with closure and instance methods

// class Thing {
//   constructor(initialSecret) {
//     let secret = initialSecret;
//     this.setSecret = (newSecret) => { secret = newSecret; };
//     this.getSecret = () => secret;
//   }
// }
//
// const thing = new Thing('xxx');
// console.log(thing);
// console.log(thing.getSecret());
// thing.setSecret('yyy');
// console.log(thing.getSecret());


// # Class with private field and instance methods
// https://github.com/tc39/proposal-class-fields#private-fields

// class Thing {
//   #secret;
//   constructor(initialSecret) {
//     this.#secret = initialSecret;
//     this.setSecret = (newSecret) => { this.#secret = newSecret; };
//     this.getSecret = () => this.#secret;
//   }
// }
//
// const thing = new Thing('xxx');
// console.log(thing);
// console.log(thing.getSecret());
// thing.setSecret('yyy');
// console.log(thing.getSecret());


// # Class with private fields and prototype methods

// class Thing {
//   #secret;
//   constructor(initialSecret) {
//     this.#secret = initialSecret;
//   }
//   setSecret(newSecret) {
//     this.#secret = newSecret;
//   }
//   getSecret() {
//     return this.#secret;
//   }
// }
//
// const thing = new Thing('xxx');
// console.log(thing);
// console.log(thing.getSecret());
// thing.setSecret('yyy');
// console.log(thing.getSecret());
