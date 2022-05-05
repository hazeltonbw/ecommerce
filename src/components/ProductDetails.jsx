import { Flex } from "../styles/StyledComponents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/commerceSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  // const product = useSelector(selectProduct); TODO
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  console.log(id);
  return <Flex>test</Flex>;
};

export default ProductDetails;
