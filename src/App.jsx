import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from './components/Model.jsx'
import Features from "./components/Features.jsx"
import A17 from "./components/A17.jsx"
import Footer from "./components/Footer.jsx"

import * as Sentry from '@sentry/react'

const App = () => {
  

  return (
  <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/> 
    <Model/>
    <Features/>
    <A17/>
    <Footer/>
    
  </main>
  )
}

export default Sentry.withProfiler(App);
