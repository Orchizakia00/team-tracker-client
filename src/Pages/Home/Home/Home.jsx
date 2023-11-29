import About from "../About/About";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FilteredServices from "../Services/FilteredServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <FilteredServices></FilteredServices>
            <About></About>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;