import './App.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CineCircleLandingPage from "./pages/Movies/Movies";
import Login from "./pages/Authorization/Login";
import SignUp from "./pages/Authorization/Signup";
import Home from "./pages/Landing/home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // return (
  //   <div className="min-h-screen bg-blue-950 bg-opacity-90 backdrop-blur-xl">
  //     {/* <CineCircleLandingPage/> */}
  //     <Page/>

  //   </div>
  // )
  return (
    <>
      <Router>
        <div className="w-full">
          <Navbar className="fixed top-0 w-full z-50" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<CineCircleLandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>


          {/* Fixed Footer */}
          <Footer className="fixed bottom-0 w-full" />
        </div>
      </Router>

      {/* <div>
      <div className="relative bg-gray-950 overflow-hidden flex items-center justify-center">
       
        <div className="absolute top-0 left-0 w-full h-full">
          
          <div className="absolute w-[30vw] h-[30vw] bg-white opacity-10 blur-3xl rounded-full top-10 left-10 animate-moveWave"></div>
          
          <div className="absolute w-[25vw] h-[25vw] bg-white opacity-15 blur-2xl rounded-full top-1/2 left-1/3 animate-moveWaveReverse"></div>
         
          <div className="absolute w-[35vw] h-[35vw] bg-white opacity-10 blur-3xl rounded-full bottom-10 right-10 animate-moveWave"></div>
          
          <div className="absolute w-[20vw] h-[20vw] bg-white opacity-20 blur-2xl rounded-full bottom-1/3 right-1/4 animate-moveWaveReverse"></div>
        </div>

        
        
        <Page />
      </div>
    </div> */}
    </>
  );

}

export default App
