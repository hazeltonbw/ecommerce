const baseUrl = "https://fakestoreapi.com/";

export default async function fetchProducts() {
  const params = "products";
  const fetchUrl = baseUrl + params;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  return json;
}
