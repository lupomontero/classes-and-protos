// Constructor with closure and instance methods
function OldSchoolThing(initialSecret) {
  let secret = initialSecret;
  this.setSecret = (newSecret) => { secret = newSecret; };
  this.getSecret = () => secret;
}

// const ost = new OldSchoolThing('xxx');
// console.log(ost);
// console.log(ost.getSecret());
// ost.setSecret('yyy');
// console.log(ost.getSecret());

// Class with closure and instance methods
class VintageThing {
  constructor(initialSecret) {
    let secret = initialSecret;
    this.setSecret = (newSecret) => { secret = newSecret; };
    this.getSecret = () => secret;
  }
}

// const vt = new VintageThing('xxx');
// console.log(vt);
// console.log(vt.getSecret());
// vt.setSecret('yyy');
// console.log(vt.getSecret());

// # Class with private field and instance methods
// https://github.com/tc39/proposal-class-fields#private-fields
class EclecticThing {
  #secret;
  constructor(initialSecret) {
    this.#secret = initialSecret;
    this.setSecret = (newSecret) => { this.#secret = newSecret; };
    this.getSecret = () => this.#secret;
  }
}

// const et = new EclecticThing('xxx');
// console.log(et);
// console.log(et.getSecret());
// et.setSecret('yyy');
// console.log(et.getSecret());

// # Class with private fields and prototype methods
class FuturisticThing {
  #secret;
  constructor(initialSecret) {
    this.#secret = initialSecret;
  }
  setSecret(newSecret) {
    this.#secret = newSecret;
  }
  getSecret() {
    return this.#secret;
  }
}

// const ft = new FuturisticThing('xxx');
// console.log(ft);
// console.log(ft.getSecret());
// ft.setSecret('yyy');
// console.log(ft.getSecret());
