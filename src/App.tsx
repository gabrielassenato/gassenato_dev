import { Container, GlobalStyle } from './styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import About from './containers/About'
import Experiences from './containers/Experiences'
import MyProjects from './containers/MyProjects'
import Skills from './containers/Skills'
import { Contact } from './containers/Contact'
import { Footer } from './containers/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <About />
        <Experiences />
        <MyProjects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
