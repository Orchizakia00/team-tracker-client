import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <Testimonial></Testimonial>
            <Services></Services>
        </div>
    );
};

export default Home;