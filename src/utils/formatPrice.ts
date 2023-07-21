export default function formatPrice(price: number) {
  return `R$ ${price.toFixed(2).toString().replace('.', ',')}`;
}
