import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Computer from "./components/Computer";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";


const App = () => {
  return (
    <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/playwithcomputer" element={<Computer/>}/>
            <Route exact path="/" element={
              <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              {/* <Experience /> */}
              <Tech />
              <Works />
              {/* <Feedbacks /> */}
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
            }></Route>
          </Routes>
          <Footer/>

      
      
    </Router>
  );
}

export default App;
