import { useState } from 'react'
import {
  HeaderBar,
  LinkItens,
  LinkList,
  Logo,
  MenuButton,
  NavContainer
} from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderBar>
      <Logo>GASSENATO</Logo>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </MenuButton>
      <NavContainer menuOpen={menuOpen}>
        <LinkList>
          <LinkItens>
            <a href="#about">Sobre</a>
          </LinkItens>
          <LinkItens>
            <a href="#about">Projetos</a>
          </LinkItens>
          <LinkItens>
            <a href="#about">Skills</a>
          </LinkItens>
          <LinkItens>
            <a href="#about">Contato</a>
          </LinkItens>
        </LinkList>
      </NavContainer>
    </HeaderBar>
  )
}

export default Header
