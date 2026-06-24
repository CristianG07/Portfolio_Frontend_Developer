// components
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/layout/Projects";
import Services from "./components/layout/Services";
import Skills from "./components/layout/Skills";
import ClickSpark from "./components/reactbits/ClickSpark";

function App() {
  return (
    <>
      <ClickSpark sparkColor="#0EA5E9">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </ClickSpark>
    </>
  );
}

export default App;
