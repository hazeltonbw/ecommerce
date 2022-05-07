import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import { LinkButton } from "../styles/StyledComponents";
import {
  ProductContainer,
  ImgWrapper,
  Rating,
} from "../styles/StyledComponents";

function Product({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${product.id}`);
  };

  return (
    <ProductContainer>
      <ImgWrapper>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <LinkButton to={"/products/" + product.id}>
        <h3>{product.title}</h3>
      </LinkButton>
      <Rating onClick={handleClick}>
        {numToStar(product.rating.rate)}
        <span>{product.rating.count}</span>
      </Rating>
      <h4>${product.price.toFixed(2)}</h4>
    </ProductContainer>
  );
}

export default Product;
