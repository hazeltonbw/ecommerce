const baseUrl = "https://fakestoreapi.com/";

export async function getProducts() {
  const params = "products";
  const fetchUrl = baseUrl + params;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  return json;
}
