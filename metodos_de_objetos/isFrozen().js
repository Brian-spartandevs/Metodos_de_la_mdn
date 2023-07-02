/* El método Object.isFrozen() determina si un objeto está congelado. */

//Object.isFrozen(obj)

const obj1 = { prop: "value" };
console.log(Object.isFrozen(obj1)); // false

const obj2 = Object.freeze({ prop: "value" });
console.log(Object.isFrozen(obj2)); // true
