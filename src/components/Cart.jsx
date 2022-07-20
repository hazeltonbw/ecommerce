import { selectCart } from "../store/commerceSlice";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import {
  ProductsList,
  EditCart,
  CartIcon,
  Flex,
  LinkButton,
  Card,
  SideBar,
  HeaderText,
} from "../styles/StyledComponents";

import { removeProductFromCart } from "../store/commerceSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  if (cart.length === 0) {
    return (
      <Flex>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Nothing in your cart!
        </h1>
        <LinkButton to="/products">Check out our products here</LinkButton>
      </Flex>
    );
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <>
      <HeaderText>My Cart</HeaderText>
      <hr></hr>
      <Card>
        <ProductsList>
          {
          cart.map((product, index)=> (
              <Flex key={index}>
                <Product
                  product={product}
                  key={product.id}
                  showingCart
                />
                <Card>
                  <h3>Quantity: </h3>
                  <span>&nbsp;{product.quantity}</span>
                </Card>
                <EditCart onClick={() => handleRemoveFromCart(product.id)}>
                  Remove from cart
                  <CartIcon size="1.2rem" />
                </EditCart>
              </Flex>
              ))
        }

        </ProductsList>
        <SideBar>
          <LinkButton to="/checkout" style={{ position: "sticky", top: 0 }}>
            Proceed to checkout
          </LinkButton>
        </SideBar>
      </Card>
    </>
  );
};

export default Cart;
