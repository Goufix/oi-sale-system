export function saleValidator(sale) {
  return sale.filter((value) => value.COMBO.includes());
}
