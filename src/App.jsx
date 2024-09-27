import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Earnings from './components/earnings/Earnings.jsx';
import Status from "./components/status/status";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
  <Navbar />
  <Hero />
  <Companies />
  <Pricing />
  <Earnings />
  <Status />
  <Subscribe />
  <Footer />
  
    </>
  )
}

export default App
