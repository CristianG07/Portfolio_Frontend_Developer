// components
import About from "./components/layout/About"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"
import Services from "./components/layout/Services"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  )
}

export default App
