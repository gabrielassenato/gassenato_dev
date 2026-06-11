import styled from "styled-components";
import { colors } from "../../styles";

export const MyProjectsContainer = styled.div`
  scroll-margin-top: 100px;
  margin: 200px 0;

  h1 {
    text-align: center;
    margin-bottom: 64px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${colors.white};
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.05);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }

  .swiper {
    padding-bottom: 100px;
  }

  .swiper {
    padding-bottom: 90px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: auto;
    bottom: 16px;
    width: 38px;
    height: 38px;
  }

  .swiper-button-prev {
    left: calc(50% - 190px);
    right: auto;
  }

  .swiper-button-next {
    left: calc(50% + 150px);
    right: auto;
  }

  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: auto;
    z-index: 1;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    margin: 0 6px !important;
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.green};
    transform: scale(1.2);
  }


.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-bottom: 32px;
    height: 400px;
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
    margin-bottom: 8px;
  }
`

export const Description = styled.p`
  margin-bottom: 10px;
`

export const CardLinks = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
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

  &.full-width {
    width: 100%;
    display: block;
    margin: 24px 0 0 0;
    border-radius: 30px;
    font-weight: bold;
    font-size: 18px;
  }
`