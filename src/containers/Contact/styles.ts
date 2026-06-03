import styled from 'styled-components'

export const ContactContainer = styled.div`
  text-align: center;
  margin-top: 28px;

  a {
    color: #fff;
    font-weight: bold;
  }

  span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
    img {
      height: 24px;
    }
  }
`

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 42px;
`

export const LinksItem = styled.li`
  height: 100px;
  margin: 0 13px;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    margin: 0 6px;
  }

  img {
    height: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
`