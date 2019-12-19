const { getConstructorsChain, getProps } = require('./util');

// console.log(getConstructorsChain({}));
// console.log(getProps({}));

// console.log(Object.create(null));
// console.log(getConstructorsChain(Object.create(null)));
// console.log(getProps(Object.create(null)));

// console.log(Object.create(Date.prototype));
// console.log(getConstructorsChain(Object.create(Date.prototype)));
// console.log(getProps(Object.create(Date.prototype)));
// !!!! Tiene el prototipo correcto, pero no ha sido construido.
// El valor de `this` no es del _tipo_ esperado al invocar `.toString()`.
// console.log(Object.create(Date.prototype).toString());
