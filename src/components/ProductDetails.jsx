import { Flex } from "../styles/StyledComponents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../store/commerceSlice";
import {
  ProductContainer,
  ImgWrapper,
  Rating,
  StyledLink,
} from "../styles/StyledComponents";
import { numToStar } from "../helpers/numToStar";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(selectProducts)[id - 1];

  console.log(product);
  return (
    <ProductContainer>
      <ImgWrapper>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <h3>{product.title}</h3>
      <Rating>
        {numToStar(product.rating.rate)} <span>{product.rating.count}</span>
      </Rating>
      <h4>${product.price.toFixed(2)}</h4>
    </ProductContainer>
  );
};

export default ProductDetails;
