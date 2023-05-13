import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {About,Contact,Experience,
  Feedbacks,Navbar,StarsCanvas,Computer,Footer} from '../components'
import {MobileHero,MobileAbout,Mobilework,Mobiletech} from '../mobile'
function Mobile() {
  return (
    <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/playwithcomputer" element={<Computer/>}/>
            <Route exact path="/" element={
              <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <MobileHero />
              </div>
              <MobileAbout />
              {/* <Experience /> */}
              <Mobiletech />
              <Mobilework />
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
export default Mobile;