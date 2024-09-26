import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Earnings from "./components/earnings/earnings";
import Status from "./components/status/status";
import Subscribe from "./components/subscribe/Subscribe";


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
  
    </>
  )
}

export default App
