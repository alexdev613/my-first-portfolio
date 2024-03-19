import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import FAQSection from "./sections/CommonQuestions/FAQSection"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import Skills from "./sections/Skills/Skills"

const Home = () => {

    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <FAQSection />
        <Footer />
      </>
    )
  }
  
  export default Home
  