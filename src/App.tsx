import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-uhuy-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
