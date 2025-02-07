import styled from "styled-components";
import { colors } from "../../styles";

export const SkillsContainer = styled.div`
  margin-bottom: 200px;
  background-color: ${colors.grey};
  display: block;
  padding: 60px;

  h1 {
    text-align: center;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 50px;
  }
`

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {

  }
`

export const SkillCard = styled.div`
  padding: 4px;
  margin: 0 auto;
  img {
    background-color: ${colors.lightGrey};
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0px;
  }
`