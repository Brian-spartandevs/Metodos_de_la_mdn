/* El método propertyIsEnumerable() regresa un Boleano indicando si la propiedad especificada es enumerable. */

const obj = {
  prop1: "value1",
  prop2: "value2",
};

console.log(obj.propertyIsEnumerable("prop1")); // true
console.log(obj.propertyIsEnumerable("toString")); // false
