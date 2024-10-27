import styled from "styled-components";
import { colors } from "../../styles";

export const HeroContainer = styled.div`
  margin-top: 60px;

  h1 {
    font-family: "Bakbak One", serif;
    font-size: 50px;
    font-weight: 200;
  }

  h4 {
    font-family: "Poppins", serif;
    font-weight: 300;
  }
`

export const Button = styled.button`
  background: linear-gradient(90deg, ${colors.green}, ${colors.black});
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
  margin: 60px 0;

  &:hover {
    background: linear-gradient(90deg, ${colors.black}, ${colors.green}); 
  }
`