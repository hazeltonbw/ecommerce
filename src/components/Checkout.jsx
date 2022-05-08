import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart, clearState } from "../store/commerceSlice";
import {
  Flex,
  SideBar,
  CheckoutWrapper,
  FlexRow,
  LinkButton,
  ImgWrapper,
  Title,
  Quantity,
  Price,
  HeaderText,
  Input,
  CheckoutForm,
} from "../styles/StyledComponents";
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);

  if (Object.keys(cart).length === 0) {
    return (
      <Flex>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Nothing in your cart!
        </h1>
        <LinkButton to="/products">Check out our products here</LinkButton>
      </Flex>
    );
  }

  let price = 0;
  for (const item in cart) price += cart[item].price * cart[item].quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearState());
    navigate("/products");
  };

  return (
    <>
      <HeaderText>Checkout</HeaderText>
      <hr></hr>
      <FlexRow>
        <CheckoutWrapper>
          <Flex>
            {Object.keys(cart).map((productId, index) => {
              return (
                <FlexRow key={index}>
                  <ImgWrapper>
                    <img src={cart[productId].image} alt="" />
                  </ImgWrapper>
                  <Title>{cart[productId].title}</Title>
                  <Quantity>x{cart[productId].quantity}</Quantity>
                  <Price>${cart[productId].price.toFixed(2)}</Price>
                </FlexRow>
              );
            })}
          </Flex>
        </CheckoutWrapper>
        <SideBar>
          <h2>Subtotal:</h2>
          <h3>${price.toFixed(2)}</h3>
        </SideBar>
      </FlexRow>
      <HeaderText>Ordering/Shipping Information</HeaderText>
      <hr></hr>
      <CheckoutForm onSubmit={handleSubmit}>
        {/* Display a checkout form with inputs for
  Name
  Shiping Address
  Billing Address
  Credit Card Info
  Submit button
  Submitting the order form should clear the cart and return the user to the main products page */}
        <label htmlFor="name">Name</label>
        <Input type="text" id="name"></Input>
        <label htmlFor="shipping-address">Shipping address</label>
        <Input type="text" id="shipping-address"></Input>
        <label htmlFor="billing-address">Billing address</label>
        <Input type="text" id="billing-address"></Input>
        <label htmlFor="credit-card-info">Credit card number</label>
        <Input type="text" id="credit-card-info"></Input>
        <label htmlFor="expiration-date">Expiration date</label>
        <Input type="text" id="expiration-date"></Input>
        <Input type="submit" style={{ cursor: "pointer" }}></Input>
      </CheckoutForm>
    </>
  );
};

export default Checkout;
