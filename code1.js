// write a js function merge two objects, combining alll their properties

let obj1 = {
  a: 21,
  b: "key",
};

let obj2 = {
  c: 35,
  d: "helllo",
};

function mergeObject(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
}
mergeObject(obj1, obj2);
