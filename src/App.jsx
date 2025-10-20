import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App