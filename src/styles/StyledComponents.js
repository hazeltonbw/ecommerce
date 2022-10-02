import styled from 'styled-components'
import { MdDarkMode } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink, Link } from 'react-router-dom'

export const StyledLink = styled(NavLink)`
  font-family: 'Lobster', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => (props.nav ? props.theme.nav.text : props.theme.text)};
  border: ${({ nav, theme }) => (nav ? 'none' : `1px solid ${theme.text}`)};
  text-decoration: none;
  border-radius: ${({ nav }) => (nav ? '0' : '.5rem')};
  padding: ${({ nav }) => (nav ? '0' : '.5rem')};
`

export const LinkButton = styled(Link)`
  font-family: inherit;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1rem;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.linkColor};
`

export const Category = styled.h4`
  text-transform: capitalize;
`

export const Description = styled.h4`
  max-width: 50ch;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: ${({ detailsLayout }) => (detailsLayout ? 'row' : 'column')};
  padding: 0px 0.5rem;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  gap: 10px;
  text-align: center;

  img {
    display: block;
    background: #fff;
    max-height: 200px;
    max-width: 400px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${LinkButton} {
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 0.5rem;
  column-gap: 10px;

  svg {
    cursor: pointer;
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  padding: 0.5rem 0.2rem;
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

`

export const Button = styled.button`
  position: relative;
  left: -24px;
  top: 9px;
  height: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  font-size: 1rem;
  fill: black;
  background: ${({ theme }) => theme.nav.searchForm.background};
`

export const EditCart = styled.button`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.linkColor};
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ColorTheme = styled(MdDarkMode)`
  fill: ${({ theme }) => theme.iconFill};
`

export const CartIcon = styled(IoCartOutline)`
  color: ${(props) => (props.nav ? props.theme.iconFill : props.theme.text)};
  text-align: center;
`

export const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 2rem 111px;

  ${StyledLink} {
    font-family: inherit;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
`

export const Rating = styled.span`
  color: orange;
  // Span inside is count of ratings
  span {
    color: ${({ theme }) => theme.text};
  }
  cursor: pointer;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    background: #fff;
    height: 200px
    max-width: 400px;
    width: 100%;
    object-fit: contain;
  }
`

export const FlexRow = styled(Flex)`
  flex-direction: row;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
  }
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`

export const Card = styled.div`
  display: flex;
  align-items: baseline;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const QuantityInput = styled.input`
  padding: 0.5rem 0px 0.5rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
`

export const SideBar = styled.div`
  position: sticky;
  top: 25px;
  min-width: 20ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  margin: 10px;
  gap: 30px;
  justify-content: flex-start;

  ${FlexRow} {
    align-items: center;
  }

  @media (max-width: 678px) {
    ${FlexRow} {
      flex-direction: column;
    }
  }
`
export const Title = styled.h4`
  flex: 3;
`

export const Quantity = styled.h4`
  flex: 1;
`

export const HeaderText = styled.h1`
  margin: 10px;
`

export const Price = styled(Quantity)``

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;

  ${Input} {
    width: 50ch;
  }
`
