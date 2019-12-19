const { getProtoChain, getConstructorsChain, getProps } = require('./util');

// `true` es un objeto y tiene propiedades, entre ellas `__proto__`, que a pesar
// de ser una propiedad _no estándar_, implementan la mayoría de motores de
// JavaScript.
// Ver: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
// console.log(true.__proto__);

// La manera _legal_ de acceder al _prototipo_ de un objeto es con
// `Object.getPrototypeOf()`
// console.log(Object.getPrototypeOf(true));
// console.log(true.__proto__ === Object.getPrototypeOf(true));

// Cadena de prototipos y resolución de nombres de propiedades

// El objeto `true` no tiene _propiedades de instancia_
// console.log(Object.getOwnPropertyNames(true));
// Aún así...
// console.log(true.constructor);
// Porque se encontró la propiedad `constructor` en la cadena de prototipos...
// console.log(Object.getPrototypeOf(true));

// Veamos las propiedades del prototipo...
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(true)));

// ************************************************************************** //

// Aporovechamos a introducir algunas funciones de ayuda (helpers) que usaremos
// para inspeccionar cadenas de prototipos.

// console.log(getProtoChain({}));
// console.log(getConstructorsChain({}));
// console.log(getProps({}));

// console.log(getConstructorsChain(true));
// console.log(getConstructorsChain(new Date()));
// console.log(getConstructorsChain(process.stdin));
// console.log(getProtoChain(process.stdin));
// console.log(getProps(process.stdin));
// console.log(getConstructorsChain(process.stdout));
