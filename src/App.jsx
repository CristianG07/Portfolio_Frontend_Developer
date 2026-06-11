// components
import About from "./components/layout/About"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
