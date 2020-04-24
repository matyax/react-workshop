export function format(price: number) {
  return price.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
}
