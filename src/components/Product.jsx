import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import { StyledLink } from "../styles/StyledComponents";
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

  return (
    <ProductContainer onClick={handleClick}>
      <ImgWrapper>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <h3>{product.title}</h3>
      <Rating>
        {numToStar(product.rating.rate)} <span>{product.rating.count}</span>
      </Rating>
      <h4>${product.price.toFixed(2)}</h4>
      <StyledLink to={`/products/${product.id}`}>View more details</StyledLink>
    </ProductContainer>
  );
}

export default Product;
