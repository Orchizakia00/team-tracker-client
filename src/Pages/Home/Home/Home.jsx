import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <Services></Services>
            <About></About>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;