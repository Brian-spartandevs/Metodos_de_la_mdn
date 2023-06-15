/* el metodo at() toma un valor entero y devuelve un nuevo objeto string que consta de la unica unidad de codigo UTF-16 ubicada en el desplazamiento especificado. Este metodo permite enteros positivos y negativos. Los enteros negativos cuentan hacia atras desde el ultimo caracter de la cadena. */

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.at(0));
console.log(sentence.at(1));
console.log(sentence.at(2));
