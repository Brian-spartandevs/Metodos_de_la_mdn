/* El método replaceAll() devuelve una nueva cadena con todas las coincidencias de a reemplazadas por un . El puede ser una cadena o un RegExp, y puede ser una cadena o una función a la que se llamará para cada coincidencia. La cadena original se deja sin cambios. */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));