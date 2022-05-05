import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import {
  addProductToCart,
  removeProductFromCart,
  setQuantity,
} from "../store/commerceSlice";
import { LinkButton, EditCart, CartIcon } from "../styles/StyledComponents";
import {
  ProductContainer,
  ImgWrapper,
  Flex,
  Quantity,
  Rating,
} from "../styles/StyledComponents";

function Product({ product, showingCart }) {
  // setProductId(product.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    // janky fix to not navigate out of page while viewing cart
    if (showingCart) return;
    navigate(`${product.id}`);
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleChange = (e) => {
    dispatch(setQuantity(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target[0].value);
    dispatch(setQuantity(e.target[0].value));
    handleAddToCart();
  };

  return (
    <ProductContainer>
      <ImgWrapper onClick={handleClick}>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <h3 onClick={handleClick}>{product.title}</h3>
      <Rating onClick={handleClick}>
        {numToStar(product.rating.rate)}
        <span>{product.rating.count}</span>
      </Rating>
      <h4>${product.price.toFixed(2)}</h4>
      {!showingCart ? (
        <>
          <LinkButton to={`/products/${product.id}`}>
            View more details
          </LinkButton>
          <EditCart
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add to cart
            <CartIcon size="1.2rem" />
          </EditCart>
        </>
      ) : (
        <>
          <Flex>
            <h3>Quantity: </h3>
            <span>&nbsp;{product.quantity}</span>
          </Flex>
          <EditCart
            onClick={() => {
              handleRemoveFromCart();
            }}
          >
            Remove from cart
            <CartIcon size="1.2rem" />
          </EditCart>
        </>
      )}
    </ProductContainer>
  );
}

export default Product;
