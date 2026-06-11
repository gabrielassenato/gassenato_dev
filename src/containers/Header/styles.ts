import styled from "styled-components";
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Logo = styled.h1`
  font-weight: 900;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  z-index: 1101;

  img {
    width: 40px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.nav<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding-top: 80px;
    z-index: 1100;
    transition: transform 0.3s cubic-bezier(.4,0,.2,1);
    transform: ${({ menuOpen }) => menuOpen ? 'translateY(0)' : 'translateY(-100%)'};
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.2);
    display: flex;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
    align-items: center;
  }
`;

export const LinkItens = styled.li`
  margin-left: 40px;

  :first-child {
    margin-left: 0;
  }

  :hover {
    color: ${colors.green};
  }

  a {
    color: ${colors.white};
    font-family: "Poppins", serif;
      font-size: 17px;
    align-items: center;
    height: 64px;
    @media (max-width: 768px) {
      height: auto;
    }
  }

  @media (max-width: 768px) {
    margin: 18px 0;
    width: 100%;
    text-align: center;
  }

  .curriculo-link {
    border: 2px solid #00c896;
    border-radius: 24px;
    padding: 6px 18px;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s, color 0.2s;
    margin-left: 8px;
    display: inline-block;
    height: auto;
  }

  .curriculo-link:hover {
    background: #00c896;
    color: #fff;
  }
`;