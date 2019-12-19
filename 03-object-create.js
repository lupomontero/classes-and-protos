const { getProtoChain, getConstructorsChain, getProps } = require('./util');

// Los objetos literales heredan de Object.prototype a través de su prototipo.
// console.log(getProps({}));
// console.log(getProtoChain({}));
// console.log(getConstructorsChain({}));

// Y si quisiéramos un objeto sin prototipo, que no herede de nadie?
// console.log(Object.create(null));
// console.log(getProps(Object.create(null)));
// console.log(getProtoChain(Object.create(null)));
// console.log(getConstructorsChain(Object.create(null)));

// Con `Object.create()` podemos crear objetos que tengan como prototipo el
// objeto que nosotros queramos...
// console.log(Object.create(Date.prototype));
// console.log(getProps(Object.create(Date.prototype)));
// console.log(getProtoChain(Object.create(Date.prototype)));
// console.log(getConstructorsChain(Object.create(Date.prototype)));

// !!!! Tiene el prototipo correcto, pero no ha sido "construido".
// El valor de `this` no es del _tipo_ esperado al invocar `.toString()`.
// console.log(Object.create(Date.prototype).toString());

// Para solucionar esto necesitamos _constructores_!!
