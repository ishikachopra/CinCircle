import './App.css'
import Page from './pages/base'
function App() {

  // return (
  //   <div className="min-h-screen bg-blue-950 bg-opacity-90 backdrop-blur-xl">
  //     {/* <CineCircleLandingPage/> */}
  //     <Page/>

  //   </div>
  // )
  return (
    <>

      <div>
      <div className="relative bg-gray-950 overflow-hidden flex items-center justify-center">
        {/* Blurry Moving White Balls */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute w-[30vw] h-[30vw] bg-white opacity-10 blur-3xl rounded-full top-10 left-10 animate-moveWave"></div>
          {/* Ball 2 */}
          <div className="absolute w-[25vw] h-[25vw] bg-white opacity-15 blur-2xl rounded-full top-1/2 left-1/3 animate-moveWaveReverse"></div>
          {/* Ball 3 */}
          <div className="absolute w-[35vw] h-[35vw] bg-white opacity-10 blur-3xl rounded-full bottom-10 right-10 animate-moveWave"></div>
          {/* Ball 4 */}
          <div className="absolute w-[20vw] h-[20vw] bg-white opacity-20 blur-2xl rounded-full bottom-1/3 right-1/4 animate-moveWaveReverse"></div>
        </div>

        {/* Main Content */}
        
        <Page />
      </div>
    </div>
    </>
  );

}

export default App
