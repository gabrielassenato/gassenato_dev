import styled from "styled-components";
import { colors } from "../../styles";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${colors.black};
  border: 1px solid ${colors.green};
  border-radius: 10px;
  padding: 40px;
  gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 55% 40%;
    text-align: left;
    gap: 32px;
    padding: 62px;
  }
`;

export const TextAbout = styled.div`
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Avatar = styled.div`
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
`;
