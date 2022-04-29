import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 0.8rem 111px;
`;

export const Logo = styled.a`
  font-family: "Lobster", sans-serif;
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.nav.text};
  margin-right: 10px;
  text-decoration: none;
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

export const ColorTheme = styled(MdDarkMode)`
  fill: ${({ theme }) => theme.iconFill};
`;

export const CartIcon = styled(IoCartOutline)`
  color: ${({ theme }) => theme.iconFill};
`;
