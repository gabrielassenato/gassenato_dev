import { useState } from 'react'
import {
  Container,
  HeaderBar,
  LinkItens,
  LinkList,
  Logo,
  MenuButton,
  NavContainer
} from './styles'

import menu from '../../assets/images/icons/Menu.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <HeaderBar>
      <Container>
        <Logo>&lt;GASSENATO/&gt;</Logo>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menu} alt="Abrir menu" />
        </MenuButton>
        <NavContainer menuOpen={menuOpen}>
          <LinkList>
            <LinkItens>
              <a href="#about" onClick={handleLinkClick}>Sobre</a>
            </LinkItens>
            <LinkItens>
              <a href="#experience" onClick={handleLinkClick}>Experiencias</a>
            </LinkItens>
            <LinkItens>
              <a href="#projects" onClick={handleLinkClick}>Projetos</a>
            </LinkItens>
            <LinkItens>
              <a href="#skills" onClick={handleLinkClick}>Skills</a>
            </LinkItens>
            <LinkItens>
              <a href="#contact" onClick={handleLinkClick}>Contato</a>
            </LinkItens>
            <LinkItens>
              <a href="/curriculo.pdf" className="curriculo-link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                Currículo
              </a>
            </LinkItens>
          </LinkList>
        </NavContainer>
      </Container>
    </HeaderBar>
  )
}

export default Header
