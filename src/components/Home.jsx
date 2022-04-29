import { Link, Outlet } from "react-router-dom";
import {
  Nav,
  Logo,
  Form,
  Input,
  Button,
  ColorTheme,
  CartIcon,
} from "./StyledComponents";
import { FaSearch } from "react-icons/fa";
const Home = ({ theme, setTheme }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Nav>
        <Logo href="#">Shoppo</Logo>
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
          <CartIcon size="2rem" />
        </Link>
      </Nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
