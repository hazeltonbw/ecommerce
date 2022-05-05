import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import { addProductToCart } from "../store/commerceSlice";
import { LinkButton, AddToCart, CartIcon } from "../styles/StyledComponents";
import {
  ProductContainer,
  ImgWrapper,
  Rating,
} from "../styles/StyledComponents";
import Skeleton from "react-loading-skeleton";

function Product({ product }) {
  // setProductId(product.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`${product.id}`);
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
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
      <LinkButton to={`/products/${product.id}`}>View more details</LinkButton>
      <AddToCart
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add to cart
        <CartIcon size="1.2rem" />
      </AddToCart>
    </ProductContainer>
  );
}

export default Product;
