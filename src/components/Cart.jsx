import { selectCart } from "../store/commerceSlice";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { ProductsList } from "../styles/StyledComponents";
const Cart = () => {
  const cart = useSelector(selectCart);

  if (Object.keys(cart).length === 0) {
    return <h1 style={{ textAlign: "center" }}>Nothing in your cart!</h1>;
  }

  return (
    <ProductsList>
      {Object.keys(cart).map((productId) => {
        return (
          <Product
            product={cart[productId]}
            key={productId}
            deleteProductFromCart
          />
        );
      })}
    </ProductsList>
  );
};

export default Cart;
