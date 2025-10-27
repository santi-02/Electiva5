import './App.css'
import { Home } from './components/Home'
import { Features } from './components/Features'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Features />
      <CTA />
      <Footer />
      <Navbar />
    </div>
  )
}

export default App
