import NavBar from "../../components/NavBar/NavBar"
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon"
import About from "./sections/About/About"
import FAQSection from "./sections/FAQSection/FAQSection"
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
        <WhatsappIcon />
      </>
    )
  }
  
  export default Home
  