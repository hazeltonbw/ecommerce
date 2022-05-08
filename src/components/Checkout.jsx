import { useSelector } from "react-redux";
import { selectCart } from "../store/commerceSlice";
import {
  Flex,
  SideBar,
  CheckoutWrapper,
  FlexRow,
  ImgWrapper,
} from "../styles/StyledComponents";
const Checkout = () => {
  const cart = useSelector(selectCart);
  return (
    <>
      <h1 style={{ margin: "10px", borderBottom: "1px solid white" }}>
        Checkout
      </h1>
      <FlexRow>
        <CheckoutWrapper>
          <Flex>
            {Object.keys(cart).map((productId) => {
              return (
                <FlexRow>
                  <ImgWrapper>
                    <img src={cart[productId].image} alt="" />
                  </ImgWrapper>
                  <h4>{cart[productId].title}</h4>
                  <h4>x{cart[productId].quantity}</h4>
                  <h4>${cart[productId].price.toFixed(2)}</h4>
                </FlexRow>
              );
            })}
          </Flex>
        </CheckoutWrapper>
        <SideBar>
          <h1>Subtotal</h1>
        </SideBar>
      </FlexRow>
    </>
  );
};

export default Checkout;
