export function saveProductsToLocaleStorage(products: any) {
  localStorage.setItem('dishes', JSON.stringify(products));
}

export function getProductsFromLocalStorage() {
  const products = localStorage.getItem('dishes');
  return products;
}