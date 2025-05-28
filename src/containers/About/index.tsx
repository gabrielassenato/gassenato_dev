import { AboutContainer, Avatar, TextAbout } from "./styles"
import avatar from '../../assets/images/sobre.png'

const About = () => (
  <AboutContainer>
    <TextAbout>
      <h1>Sobre mim</h1>
      <p>Olá! Sou <span>Gabriel</span>, especializado em desenvolvimento de <span>sistemas</span> e <span>aplicações</span>. Tenho experiência em <span>criar</span> sites e aplicativos <span>modernos e fáceis de usar</span>, utilizando tecnologias como <span>React</span> e <span>JavaScript</span>. Se você <span>precisa</span> de um <span>profissional capacitado</span>, um <span>site</span> ou <span>melhorias em um projeto</span>, posso <span>ajudar</span> a entregar soluções <span>eficientes</span> e de <span>qualidade</span>, estou sempre me atualizando com as <span>tendências do mercado</span>.</p>
    </TextAbout>
    <Avatar>
      <img src={avatar} alt="" />
    </Avatar>
  </AboutContainer>
)

export default About