import { Flex, StyledLink } from "../styles/StyledComponents";
export default function LandingPage() {
  return (
    <Flex>
      <h2 style={{ textAlign: "center" }}>
        Easily shop online from anywhere in the world.
      </h2>
      <StyledLink to="/products">Shop now</StyledLink>
    </Flex>
  );
}
