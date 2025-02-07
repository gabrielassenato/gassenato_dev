import { Container, GlobalStyle } from './styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import About from './containers/About'
import MyProjects from './containers/MyProjects'
import Skills from './containers/Skills'
import { Contact } from './containers/Contact'
import { Footer } from './containers/Footer'

function App() {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Header />
      </Container>
        <Hero />
      <Container>
        <About />
        <MyProjects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
