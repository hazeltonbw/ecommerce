import { selectCart, setQuantity } from "../store/commerceSlice";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import {
  ProductsList,
  EditCart,
  CartIcon,
  Flex,
  LinkButton,
  Card,
} from "../styles/StyledComponents";

import {
  addProductToCart,
  removeProductFromCart,
} from "../store/commerceSlice";
const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addProductToCart(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuantity(e.target[0].value));
  };

  if (Object.keys(cart).length === 0) {
    return (
      <Flex>
        <h1 style={{ textAlign: "center" }}>Nothing in your cart!</h1>
        <LinkButton to="/products">Checkout our products here</LinkButton>
      </Flex>
    );
  }

  return (
    <ProductsList>
      {Object.keys(cart).map((productId) => {
        return (
          <Flex>
            <Product product={cart[productId]} key={productId} showingCart />
            <Card>
              <h3>Quantity: </h3>
              <span>&nbsp;{cart[productId].quantity}</span>
            </Card>
            <EditCart
              onClick={() => {
                handleRemoveFromCart(productId);
              }}
            >
              Remove from cart
              <CartIcon size="1.2rem" />
            </EditCart>
          </Flex>
        );
      })}
    </ProductsList>
  );
};

export default Cart;
