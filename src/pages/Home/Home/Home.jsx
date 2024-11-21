import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BranchTales | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;