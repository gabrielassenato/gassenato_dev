import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  green: '#60B98C',
  grey: '#1C1C1C',
  white: '#FFF',
  black: '#020304',
  lightGrey: '#3A3A3A',
  lightBlue: '#B0BEC5'
}

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", serif;
      background-color: black;
    }

    body {
      background-color: ${colors.black};
      color: ${colors.white};

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    }
`