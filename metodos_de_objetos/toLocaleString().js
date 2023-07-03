/* El método toLocaleString() devuelve un string que representa a un objeto. Este método está pensado para ser redefinido en los objetos derivados, para los propósitos específicos de cada configuración regional. */

const product = {
  name: "Camiseta",
  price: 29.99,
  currency: "USD",
  quantity: 3,
};

const formattedProduct = {
  name: product.name,
  price: product.price.toLocaleString("en-US", {
    style: "currency",
    currency: product.currency,
  }),
  quantity: product.quantity.toLocaleString("en-US"),
};

console.log(formattedProduct);
// { name: 'Camiseta', price: '$29.99', quantity: '3' }
