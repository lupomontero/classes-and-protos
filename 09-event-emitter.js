const assert = require('assert');


class Event {
  constructor(name, payload) {
    this.name = name;
    this.payload = payload;
  }
}

class EventEmitter {
  #events = {};

  on(eventName, fn) {
    if (this.#events[eventName]) {
      this.#events[eventName].push(fn);
    } else {
      this.#events[eventName] = [fn];
    }
  }

  off(eventName, fn) {
    if (!this.#events[eventName]) {
      return;
    }
    const idx = this.#events[eventName].indexOf(fn);
    if (idx >= 0) {
      this.#events[eventName].splice(idx, 1);
    }
  }

  emit(eventName, payload) {
    if (!this.#events[eventName]) {
      return;
    }

    this.#events[eventName].forEach((fn) => {
      fn(new Event(eventName, payload));
    });
  }
}

// const ee = new EventEmitter();
// ee.on('foo', console.log);
// ee.emit('foo', 'bar');
// ee.off('foo', console.log);
// ee.emit('foo', 'baz');
// console.log(ee);


class LivingBeing extends EventEmitter {
  constructor({ heartRate, lifespan }) {
    super();
    assert(typeof heartRate === 'number');
    assert(typeof lifespan === 'number');
    this.heartRate = heartRate;
    this.lifespan = lifespan;
    this.bornAt = Date.now();
    const intvl = setInterval(() => {
      if (Date.now() - this.bornAt > this.lifespan * this.heartRate) {
        this.diedAt = Date.now();
        clearInterval(intvl);
        return this.emit('dead');
      }
      return this.emit('heartbeat');
    }, this.heartRate);
  }
}

class Mosquito extends LivingBeing {
  constructor() {
    super({ heartRate: 1000, lifespan: 3 });
  }
}

const m = new Mosquito();

m.on('heartbeat', () => {
  console.log('❤️ ', m);
});

m.on('dead', () => {
  console.log('⚰️ ', m);
});

console.log(m);
