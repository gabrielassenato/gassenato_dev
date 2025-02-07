import styled from "styled-components";
import {colors} from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 24px 0;
  position: relative;
`

export const Logo = styled.h1`
  font-weight: 900;
`

export const MenuButton = styled.button`
  width: 32px;

  span {
    height: 4px;
    display: block;
    width: 100%;
    background-color: #000;
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.nav<{ menuOpen: boolean }>`
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ${colors.black};
    width: 200px;
    display: ${(props) => (props.menuOpen ? "block" : "none")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export const LinkList = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const LinkItens = styled.li`
  margin-left: 40px;

  :hover {
    color: ${colors.green};
  }

  a {
    color: ${colors.white};
    font-family: "Poppins", serif;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;