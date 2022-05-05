import { Card, Flex, StyledLink } from "../styles/StyledComponents";
export default function LandingPage() {
  return (
    <>
      <Flex>
        <Card>
          <h2>Easily shop online from anywhere in the world.</h2>
          <StyledLink to="/products">Shop now</StyledLink>
        </Card>
      </Flex>
    </>
  );
}
