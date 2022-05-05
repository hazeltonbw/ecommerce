import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-family: "Lobster", sans-serif;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => (props.nav ? props.theme.nav.text : props.theme.text)};
  text-decoration: none;
`;

export const LinkButton = styled(Link)`
  font-family: inherit;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: #d0d0ff;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0.5rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.product.border};
  gap: 10px;
  text-align: center;

  a,
  img,
  h3,
  svg,
  button {
    cursor: pointer;
  }

  img {
    width: 100%;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${LinkButton} {
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 0.8rem 111px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 8px;
  border: ${({ theme }) => theme.inputBorder};
  font-size: 1rem;
  flex: 3 0 auto;
  outline: 0;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.text}

  &:hover {
    border: 2px solid ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  position: relative;
  left: -34px;
  top: 2px;
  height: 1rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  font-size: 1rem;
  fill: black;
  background: ${({ theme }) => theme.nav.searchForm.background};
`;

export const AddToCart = styled.button`
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.body};
  color: #d0d0ff;
  display: flex;
  align-items: center;
`;

export const ColorTheme = styled(MdDarkMode)`
  fill: ${({ theme }) => theme.iconFill};
`;

export const CartIcon = styled(IoCartOutline)`
  color: ${(props) => (props.nav ? props.theme.iconFill : props.theme.text)};
  text-align: center;
`;

export const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 2rem 111px;

  ${StyledLink} {
    font-family: inherit;
    font-size: 1rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export const Rating = styled.span`
  color: orange;

  // Span inside is count of ratings
  span {
    color: white;
  }
`;

export const Flex = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  height: 33vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
