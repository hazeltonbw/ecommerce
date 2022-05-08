import { useNavigate } from "react-router-dom";
import { numToStar } from "../helpers/numToStar";
import { LinkButton } from "../styles/StyledComponents";
import { ProductContainer, Rating } from "../styles/StyledComponents";

function Product({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${product.id}`);
  };

  return (
    <ProductContainer>
      <img src={product.image} alt={product.title} />
      <LinkButton to={"/products/" + product.id}>{product.title}</LinkButton>
      <Rating onClick={handleClick}>
        {numToStar(product.rating.rate)}
        <span>{product.rating.count}</span>
      </Rating>
      <h4>${product.price.toFixed(2)}</h4>
    </ProductContainer>
  );
}

export default Product;
