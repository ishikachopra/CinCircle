import './App.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CineCircleLandingPage from "./pages/Movies/Movies";
import Login from "./pages/Authorization/Login";
import SignUp from "./pages/Authorization/Signup";
import Home from "./pages/Landing/home";
import Verify from './pages/Authorization/Verify';
import ForgotPassword from './pages/Authorization/ForgotPassword';
import ResetPasswordPage from './pages/Authorization/ResetPassword';
import { Toaster } from "react-hot-toast";
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
            <Route path="/verify-email" element={<Verify/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/> }/>
            <Route path="/reset-password/:token" element={<ResetPasswordPage/> }/>
          </Routes>


          {/* Fixed Footer */}
          <Footer className="fixed bottom-0 w-full" />
        </div>
      </Router>
    <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#6B46C1", // Purple shade
            color: "#fff",
            borderRadius: "8px",
          },
          success: {
            iconTheme: {
              primary: "#9F7AEA", // Light purple
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#E53E3E", // Red for error
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );

}

export default App
