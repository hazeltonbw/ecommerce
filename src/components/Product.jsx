import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import {
  LinkButton,
  Button,
  AddToCart,
  CartIcon,
} from "../styles/StyledComponents";
import {
  ProductContainer,
  ImgWrapper,
  Rating,
} from "../styles/StyledComponents";
function Product({ product }) {
  // setProductId(product.id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${product.id}`);
  };

  const handleAddToCart = () => {
    console.log("hi");
  };

  return (
    <ProductContainer>
      <ImgWrapper onClick={handleClick}>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <h3 onClick={handleClick}>{product.title}</h3>
      <Rating onClick={handleClick}>
        {numToStar(product.rating.rate)} <span>{product.rating.count}</span>
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
