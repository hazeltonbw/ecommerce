import { useSelector } from "react-redux";
import { selectCart } from "../store/commerceSlice";
import Product from "../components/Product";
import {
  ProductsList,
  EditCart,
  CartIcon,
  Flex,
  LinkButton,
  Card,
  SideBar,
} from "../styles/StyledComponents";
const Checkout = () => {
  const cart = useSelector(selectCart);
  return (
    <Flex>
      <h1>Checkout</h1>
      {Object.keys(cart).map((productId) => {
        return (
          <>
            <h4>{cart[productId].title}:</h4>
            <h4>{cart[productId].quantity}</h4>
          </>
        );
      })}
    </Flex>
  );
};

export default Checkout;
