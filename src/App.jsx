import Home from "./components/home"
import ContactUs from "./components/contactUs"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/home" element={<Home/>} /> 
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </Router>
  )
}

export default App
