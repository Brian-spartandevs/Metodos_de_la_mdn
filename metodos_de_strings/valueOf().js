/* El método valueOf() devuelve el valor primitivo de un objeto String. */

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"