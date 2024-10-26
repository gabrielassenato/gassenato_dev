import { HeaderBar, LinkItens, LinkList, Logo } from "./styles"

const Header = () => (
  <HeaderBar>
    <Logo>GASSENATO</Logo>
    <nav>
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
    </nav>
  </HeaderBar>
)

export default Header