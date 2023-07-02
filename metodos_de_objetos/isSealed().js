/* El método Object.isSealed() si el objeto está sellado. */

const obj1 = { prop: "value" };
console.log(Object.isSealed(obj1)); // false

const obj2 = Object.seal({ prop: "value" });
console.log(Object.isSealed(obj2)); // true
