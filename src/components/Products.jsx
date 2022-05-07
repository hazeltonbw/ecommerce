import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "../store/commerceSlice";
import { ProductsList } from "../styles/StyledComponents";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const { error, isLoading } = useSelector((state) => state.commerceSlice);
  useEffect(() => {
    // Don't refetch products we already have
    if (products.length !== 0) return;
    dispatch(fetchProducts());
  }, [dispatch, products.length]);

  if (error) {
    return <h1 style={{ textAlign: "center" }}>Error!</h1>;
  } else if (isLoading)
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <ProductsList>
      {products.map((product) => (
        <Product cursor product={product} key={product.id} />
      ))}
    </ProductsList>
  );
};

export default Products;
