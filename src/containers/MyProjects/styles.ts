import styled from "styled-components";
import { colors } from "../../styles";

export const MyProjectsContainer = styled.div`
  margin: 200px 0;

  h1 {
    text-align: center;
    margin-bottom: 64px;
  }


.swiper-slide {
  transition: transform 0.5s ease, filter 0.5s ease;
  transform: scale(0.8);
  opacity: 0.5;
  filter: blur(5px);
}

.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
  filter: blur(0);
  z-index: 2;
}

.swiper-slide-next,
.swiper-slide-prev {
  opacity: 0.7;
  transform: scale(0.85);
  filter: blur(3px);
}
`

export const Card = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 400px;
  overflow: hidden;
  background-color: #666;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
`

export const ProjectImage = styled.img`
  height: 100%;
  min-width: 100%;
`

export const CardDescription = styled.div`
  height: 140px;
  padding: 15px;
  text-align: center;

  h2 {
    margin-bottom: 26px;
  }
`
export const CardLinks = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  padding: 0 28px;
`

export const Button = styled.button`
  background: transparent;
  color: white;
  border: 1px solid ${colors.green};
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    border: 1px solid ${colors.lightBlue};
  }

  a {
    color: #fff;
  }
`