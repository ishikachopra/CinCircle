import Explore from "../sections/Explore";
import Insights from "../sections/Insights";
import World from "../sections/World";
import GridBackground from "../components/BgGrid";

const Home = () => (
    <>
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
        </div>
    </>
);

export default Home;
