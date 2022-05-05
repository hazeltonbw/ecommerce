import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "../store/commerceSlice";
import { ProductsList } from "../styles/StyledComponents";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  const { error, isLoading } = useSelector((state) => state.commerceSlice);
  // console.log(products);

  if (error) {
    return <h1 style={{ textAlign: "center" }}>Error!</h1>;
  } else if (isLoading)
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <>
      <ProductsList>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductsList>
    </>
  );
};

export default Products;
