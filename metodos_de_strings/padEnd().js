/* El método padEnd() rellena la cadena actual con un cadena (repetida, si es necesario) para que la cadena resultante alcance una longitud determinada. El El relleno se aplica desde el final de la cadena actual. */

const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
