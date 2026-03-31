import './App.css'
import Header from './components/header/Header'
import MainSection from './components/mainSection/MainSection'
import AboutUs from './components/aboutUs/AboutUs'
import Services from './components/services/Services'
import Method from './components/methods/Method'
import Gallery from './components/gallery/Gallery'
import DetailedServices from './components/detailedServices/DetailedServices'
import Location from './components/location/Location'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-bg-gray">
      <Header />
      <main>
        <MainSection />
        <AboutUs />
        <Services />
        <Method />
        <Gallery />
        <DetailedServices />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
