import Banner from "../Banner/Banner";
import CategoriList from "../CaregoriList/CategoriList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="max-w-[1320px] mx-auto ">
            <Banner></Banner>
            </div>
            </div>
            <CategoriList></CategoriList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;