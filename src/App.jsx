import { About } from "./About"
import  Footer  from "./Footer"
import Tours from "./Tours"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App
