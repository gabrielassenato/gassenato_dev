import styled from "styled-components";
import { colors } from "../../styles";

export const SkillsContainer = styled.div<{ expanded: boolean }>`
  min-height: ${(props) => (props.expanded ? "400px" : "250px")};
  background-color: ${colors.grey};
  display: block;
  padding: 50px;
  transition: max-height 1s ease, opacity 1s ease, padding 1s ease;

  h1 {
    text-align: center;
    margin-bottom: 18px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 14px;
    color: gray;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 50px;

    h2 {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const SkillCard = styled.div`
  padding: 10px;
  cursor: pointer;

  img {
    background-color: ${colors.lightGrey};
    border-radius: 18px;
    width: 80px;
    height: 80px;
    padding: 10px;
    transition: background-color 0.5s;

    &:hover {
    background-color: ${colors.green};
  }
  }

  @media (max-width: 1024px) {
    flex: 0 0 25%;
  }

  @media (max-width: 768px) {
    flex: 0 0 33.33%;
    margin: 0;
    padding: 0;
  }
`

export const SkillDetails = styled.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 1s ease, opacity 1s ease, padding 1s ease;

  &.expanded {
    max-height: 200px;
    opacity: 1;
    padding: 20px;
  }

  h2 {
    margin-bottom: 10px;
    color: black;
  }

  p {
    color: #555;
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: ${colors.green};
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
      background-color: ${colors.grey};
    }
  }
`;