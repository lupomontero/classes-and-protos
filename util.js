const getConstructorsChainHack = obj => (
  (!obj.__proto__)
    ? []
    : [obj.__proto__.constructor.name].concat(getConstructorsChainHack(obj.__proto__))
);

const getProtoChain = (obj) => {
  const proto = Object.getPrototypeOf(obj);
  return (
    !proto
      ? []
      : [proto].concat(getProtoChain(proto))
  );
};

const getConstructorsChain = (obj) => {
  const proto = Object.getPrototypeOf(obj);
  return (
    !proto
      ? []
      : [proto.constructor.name].concat(getConstructorsChain(proto))
  );
};

const getProps = obj => {
  const recurse = (o, prefix = '') => {
    const props = Object.getOwnPropertyNames(o).map(name => `${prefix}${name}`);
    const proto = Object.getPrototypeOf(o);
    return (
      !proto
        ? props
        : props.concat(recurse(proto, `${prefix}${proto.constructor.name}::`))
    );
  };
  return recurse(obj);
};

const buildTree = ([head, ...tail]) => (
  !head
    ? []
    : !head.prototype
      ? buildTree(tail)
      : [{
        name: head.name,
        value: head.prototype,
        parent: Object.getPrototypeOf(head.prototype),
      }].concat(buildTree(
        !Object.getPrototypeOf(head.prototype)
        || tail.find(C => C === Object.getPrototypeOf(head.prototype).constructor)
          ? tail
          : tail.concat(
            Object.getPrototypeOf(head.prototype).constructor,
          ),
      ))
);

const getRoot = nodes => nodes.find(({ parent }) => parent === null);
const getChildren = (nodes, node) => nodes.filter(({ parent }) => parent === node.value);

const getTree = (constructors) => {
  const nodes = buildTree(constructors);
  const recurse = node => ({
    name: node.name,
    children: getChildren(nodes, node).map(recurse),
  });
  return recurse(getRoot(nodes));
};

const printTree = (constructors) => {
  const nodes = buildTree(constructors);
  const recurse = (node, indent = '') => {
    console.log(`${indent}${node.name}`);
    getChildren(nodes, node).forEach(child => recurse(child, `${indent}  `));
  };
  recurse(getRoot(nodes));
};


module.exports = {
  getProtoChain,
  getConstructorsChain,
  getProps,
  getTree,
  printTree,
};
