import { AboutContainer, Avatar, TextAbout } from "./styles"
import avatar from '../../assets/images/sobre.png'

const About = () => (
  <AboutContainer>
    <TextAbout>
      <h1>Sobre mim</h1>
      <p>Meu nome é Gabriel, sou formado em Análise e Desenvolvimento de Sistemas. Durante minha jornada,  adquiri sólidos conhecimentos em REACT e JavaScript, além de aprender a utilizar SASS, Vue, Grunt e outras tecnologias. Estou sempre em busca de aprimorar minhas habilidades e me manter atualizado com as tendências do mercado de desenvolvimento.</p>
    </TextAbout>
    <Avatar>
      <img src={avatar} alt="" />
    </Avatar>
  </AboutContainer>
)

export default About