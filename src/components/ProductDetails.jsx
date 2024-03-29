import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProducts,
  addProductToCart,
  setQuantity,
  selectQuantity,
} from "../store/commerceSlice";
import {
  ProductContainer,
  Description,
  TextWrapper,
  Category,
  Rating,
  EditCart,
  CartIcon,
  Flex,
} from "../styles/StyledComponents";
import { numToStar } from "../helpers/numToStar";
import NumericInput from "react-numeric-input";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(selectProducts)[id - 1];
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuantity(e.target[0].value));
    dispatch(addProductToCart(product));
    dispatch(setQuantity(1));
  };

  return (
    <ProductContainer detailsLayout={true}>
      <img src={product.image} alt={product.title} />
      <TextWrapper>
        <h3>{product.title}</h3>
        <Rating>
          {numToStar(product.rating.rate)} <span>{product.rating.count}</span>
        </Rating>
        <h4>${product.price.toFixed(2)}</h4>
        <Category>
          {`Category: ${product.category}`}
        </Category>
        <Description>{product.description}</Description>
        <Flex>
          <span>Quantity:</span>
          <form onSubmit={handleSubmit}>
            <NumericInput
              min={1}
              max={99}
              value={quantity}
              style={{
                input: {
                  width: "10ch",
                  padding: "0.5rem 0px 0.5rem 0.7rem",
                },
              }}
            />
            <EditCart type="submit">
              Add to cart
              <CartIcon size="1.2rem" />
            </EditCart>
          </form>
        </Flex>
      </TextWrapper>
    </ProductContainer>
  );
};

export default ProductDetails;
