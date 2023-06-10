import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
