import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './components/About'
import "./index.css"
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="hero-container flex flex-row gap-6 w-screen mx-auto  ">
        <Routes>
          <Route>
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route>
            <Route path="/about" element={<About />} />
          </Route>
          <Route>
            <Route path="/" element={<Hero />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App
