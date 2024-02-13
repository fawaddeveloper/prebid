import About from "./pages/about/About"
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home"
import NodeMailer from "./pages/nodeMailer/NodeMailer";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Quote from "./pages/quote/Quote";
import Rough from "./pages/rough/Rough";
import Services from "./pages/services/Services"
import Test from "./pages/test/Test"
import {BrowserRouter as Main, Route, Routes, Navigate} from 'react-router-dom';
function App() {

  return (
    <>
    <div className="app">
      <div className="sections">
      <Main>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/services' element={<Services />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/career' element={<Career />}></Route>
      <Route exact path='/Rough' element={<Rough />}></Route>
      <Route exact path='/quote' element={<Quote />}></Route>
      <Route exact path='/Test' element={<Test />}></Route>
      <Route exact path='/NodeMailer' element={<NodeMailer />}></Route>
      <Route exact path='/policy' element={<PrivacyPolicy />}></Route>
      </Routes>
      </Main>
      </div>
    </div>
    </>
  )
}

export default App
