import Explore from "./sections/Explore";
import Insights from "./sections/Insights";
import World from "./sections/World";
import GridBackground from "./sections/BgGrid";
import Subscription from "./sections/Subscription";

const Home = () => (
  <>

    <div className="relative bg-gray-950 overflow-hidden flex items-center justify-center">

      <div className="w-full">
        <GridBackground />
        <div className="relative">
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          {/* <Insights /> */}
          <div className="gradient-04 z-0" />
        </div>
        <World />
        <div className="relative">
          <Subscription />
          <div className="gradient-04 z-0" />
        </div>
      </div>


    </div>


  </>
);

export default Home;
