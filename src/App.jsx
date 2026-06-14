// components
import About from "./components/layout/About"
import Contact from "./components/layout/Contact"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"
import Projects from "./components/layout/Projects"
import Services from "./components/layout/Services"
import Skills from "./components/layout/Skills"
import ClickSpark from "./components/reactbits/ClickSpark"

function App() {

  return (
    <>
      <Navbar />
      <ClickSpark sparkColor="#0EA5E9" >
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </ClickSpark>
    </>
  )
}

export default App
