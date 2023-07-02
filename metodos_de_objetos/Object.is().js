/* El método Object.is() determina si dos valores son iguales. */

//Object.is(value1, value2)

console.log(Object.is(5, 5)); // true
console.log(Object.is("foo", "foo")); // true
console.log(Object.is([], [])); // false
console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
