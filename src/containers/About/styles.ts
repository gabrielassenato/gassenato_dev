import styled from "styled-components";
import { colors } from "../../styles";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 40%;
  gap: 32px;
  background-color: ${colors.black};
  border: 1px solid ${colors.green};
  border-radius: 10px;
  padding: 62px;
`

export const TextAbout = styled.div`
  h1 {
    margin-bottom: 26px;
  }
`

export const Avatar = styled.div`
  align-items: center;

  img{
    width: 90%;
  }
`