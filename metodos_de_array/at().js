/* el metodo at() recibe un valor numerico entero y devuelve el elemento en esa posicion, permitiendo valores positivos y negativos. los valores negativos contaran desde el ultimo elemento del array

Esto no sugiere que haya algo mal con usar la notación de corchetes. Por ejemplo, array[0] devolvería el primer elemento. Sin embargo, en lugar de usar array.length para los últimos elementos; ej. array[array.length-1] para el último elemento, puede llamar array.at(-1).*/

console.log(["Hi", "How", "are", "you?"].at(-1));

console.log(["Hi", "How", "are", "you?"].at(-2));

console.log(["Hi", "How", "are", "you?"].at(1));

console.log(["Hi", "How", "are", "you?"].at(0));
