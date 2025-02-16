import styled, { createGlobalStyle } from 'styled-components'
import background from '../assets/images/background.jpg'

export const colors = {
  green: '#60B98C',
  grey: '#1C1C1C',
  white: '#FFF',
  black: '#020304',
  lightGrey: '#3A3A3A',
  lightBlue: '#B0BEC5'
}

export const Container = styled.div`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", serif;
    }

    body {
      color: ${colors.white};
      background-color: ${colors.black};
      background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
        url(${background});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
`