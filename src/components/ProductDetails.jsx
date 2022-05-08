import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProducts,
  addProductToCart,
  setQuantity,
} from "../store/commerceSlice";
import {
  ProductContainer,
  TextWrapper,
  Rating,
  EditCart,
  CartIcon,
  Flex,
  QuantityInput,
} from "../styles/StyledComponents";
import { numToStar } from "../helpers/numToStar";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(selectProducts)[id - 1];
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuantity(e.target[0].value));
    dispatch(addProductToCart(product));
  };

  return (
    <ProductContainer>
      <img src={product.image} alt={product.title} />
      <TextWrapper>
        <h3>{product.title}</h3>
        <Rating>
          {numToStar(product.rating.rate)} <span>{product.rating.count}</span>
        </Rating>
        <h4>${product.price.toFixed(2)}</h4>
        <h4
          style={{ textTransform: "capitalize" }}
        >{`Category: ${product.category}`}</h4>
        <h4>{product.description}</h4>
        <Flex>
          <span>Quantity:</span>
          <form onSubmit={handleSubmit}>
            <QuantityInput
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="999"
              required
            ></QuantityInput>

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
