/* el metodo String.fromCodePoint() devuelve una cadena creada por una secuencia de puntos de codigo.
A diferencia del método fromCharCode(), que acepta códigos Unicode de 16 bits (valores entre 0 y 65535), fromCodePoint() acepta puntos de código Unicode de 21 bits (valores entre 0 y 1114111). Esto significa que fromCodePoint() puede representar caracteres que están fuera del rango de los caracteres básicos del plano multilingüe básico (BMP).*/

console.log(String.fromCodePoint(9731));
