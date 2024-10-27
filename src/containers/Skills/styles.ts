import styled from "styled-components";
import { colors } from "../../styles";

export const SkillsContainer = styled.div`
  margin-bottom: 200px;
  background-color: ${colors.grey};
  display: flex;
  padding: 60px;
  h1 {
    text-align: center;
  }
`

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 5px;
  width: 100%;
  max-width: 600px;
`

export const SkillCard = styled.div`


  img {
    background-color: ${colors.lightGrey};
  }
`