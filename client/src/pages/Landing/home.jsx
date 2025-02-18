import Explore from "./sections/Explore";
import Insights from "./sections/Insights";
import World from "./sections/World";
import GridBackground from "./sections/BgGrid";
import Subscription from "./sections/Subscription";

const Home = () => (
  <>

    <div className="relative bg-gray-950 overflow-hidden flex items-center justify-center">

      {/* <div className="absolute top-0 left-0 w-full h-full">

        <div className="absolute w-[30vw] h-[30vw] bg-white opacity-10 blur-3xl rounded-full top-10 left-10 animate-moveWave"></div>

        <div className="absolute w-[25vw] h-[25vw] bg-white opacity-15 blur-2xl rounded-full top-1/2 left-1/3 animate-moveWaveReverse"></div>

        <div className="absolute w-[35vw] h-[35vw] bg-white opacity-10 blur-3xl rounded-full bottom-10 right-10 animate-moveWave"></div>

        <div className="absolute w-[20vw] h-[20vw] bg-white opacity-20 blur-2xl rounded-full bottom-1/3 right-1/4 animate-moveWaveReverse"></div>
      </div> */}


      <div className="w-full">
        <GridBackground />
        <div className="relative">
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
        </div>
        <div className="relative">
          <Subscription />
          <div className="gradient-04 z-0" />
        </div>
      </div>


    </div>


  </>
);

export default Home;
