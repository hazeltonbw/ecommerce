import { NavLink, Outlet } from "react-router-dom";
import {
  Nav,
  StyledLink,
  Form,
  Input,
  Button,
  ColorTheme,
  CartIcon,
} from "../styles/StyledComponents";
import { FaSearch } from "react-icons/fa";
const Home = ({ theme, setTheme }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Nav>
        <StyledLink nav to="/">
          Shoppo
        </StyledLink>
        <Form onSubmit={handleSubmit}>
          <Input type="search" placeholder="Search for items" autoFocus></Input>
          <Button type="submit">
            <FaSearch />
          </Button>
        </Form>
        <ColorTheme
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="2rem"
        />
        <NavLink to="/cart">
          <CartIcon nav size="2rem" />
        </NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
