import Header from '../components/Header'
import Section from "../components/Section"
import Footer from "../components/Footer"

const DemoPage = () => {
  return (<Section
    className="pt-[6rem] -mt-[6rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
  >
    <Header />
    <div className="container relative z-1 max-w-[62rem] mx-auto text-center align-top">
      DEMO: This is an empty page.
    </div>
    <Footer />
  </Section>
  )
}

export default DemoPage