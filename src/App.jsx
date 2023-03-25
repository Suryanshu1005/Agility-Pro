import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, Footer } from './components'


const App =  () => { 
  return ( 
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <BrowserRouter>
      
        <div>
          <Navbar />
          <Hero />
        </div>
        <div>
          <Footer />
        </div>
      
      </BrowserRouter>
      </section>

   )

 }

export default App
