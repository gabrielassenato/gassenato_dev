import styled from "styled-components";
import {colors} from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 24px 0;
`

export const Logo = styled.h1`
  font-weight: 900;
`

export const LinkList = styled.ul`
  display: flex;
`

export const LinkItens = styled.li`
  margin-left: 40px;

  :hover {
      color: ${colors.green};
    }

  a {
    color: ${colors.white};
    font-family: "Poppins", serif;
  }
`