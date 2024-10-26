import { Button } from "../Hero/styles";
import { ContactContainer, LinksList, LinksItem } from "./styles";
import logoLinkedIn from '../../assets/images/contact_icons/LinkedIn.png'
import logoGitHub from '../../assets/images/contact_icons/GitHub.png'
import logoGmail from '../../assets/images/contact_icons/Gmail.png'
import logoWhatsApp from '../../assets/images/contact_icons/WhatsApp.png'
import Pin from '../../assets/images/contact_icons/Location.png'

export const Contact = () => (
  <ContactContainer id="contact">
    <h1>Contato</h1>
    <LinksList>
      <LinksItem>
        <a href="https://www.linkedin.com/in/gabriel-assenato/" target="blank">
          <img src={logoLinkedIn} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="https://github.com/gabrielassenato" target="blank">
          <img src={logoGitHub} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="mailto:gabrielassenato@gmail.com" target="blank">
          <img src={logoGmail} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="https://wa.me/5551998831217" target="blank">
          <img src={logoWhatsApp} alt="" />
        </a>
      </LinksItem>
    </LinksList>
    <span>
      <img src={Pin} alt="" />Porto Alegre - RS
    </span>
  </ContactContainer>
)