import { Link, Outlet } from "react-router-dom";
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
        {/* <MdOutlineDarkMode size="2rem" /> */}
        {/* <MdDarkMode size="2rem" /> */}
        {/* <IoCartOutline size="2rem" /> */}
        <Link to="/cart">
          <CartIcon nav size="2rem" />
        </Link>
      </Nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
