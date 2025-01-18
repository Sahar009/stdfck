import ContactForm from "../components/contact/ContactForm"
import Events from "../components/events/Events"
import Features from "../components/features/Features"
import Hero from "../components/hero/Hero"
import SvgMap from "../components/map/SvgMap"
import Resources from "../components/resource/Resources"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Resources/>
       < SvgMap/>
        <Events/>
        <ContactForm/>
    </div>
  )
}

export default Home