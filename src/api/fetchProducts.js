const baseUrl = "https://fakestoreapi.com/";

export async function getProducts() {
  const params = "products";
  const fetchUrl = baseUrl + params;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  return json;
}

export async function getProduct(productId) {
  const params = "products/";
  const fetchUrl = baseUrl + params + productId;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  return json;
}
