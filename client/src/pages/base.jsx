import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Authentication from "./Authorization.jsx/Authentication";
import CineCircleLandingPage from "./Movies";
import Home from "./home";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const Base = () => {
  return (
    <Router>
      <div className="w-full">
        <Navbar className="fixed top-0 w-full z-50" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<CineCircleLandingPage />} />
          <Route path='/*' element={<Authentication/>}/>
        </Routes>


        {/* Fixed Footer */}
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </Router>
  );
};

export default Base;