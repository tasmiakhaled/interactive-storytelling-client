import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../Banner/Banner.css';

import banner1 from "../../../assets/banners/banner1.jpg";
import banner2 from "../../../assets/banners/banner2.jpeg";
import banner3 from "../../../assets/banners/banner3.jpg";
import banner4 from "../../../assets/banners/banner4.jpg";
import banner5 from "../../../assets/banners/banner5.jpg";
import banner6 from "../../../assets/banners/banner6.jpeg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContexts";

const Banner = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="relative">
            {/* Carousel Section */}
            <Carousel
                className="carousel-image-container"
                showThumbs={false}
                showStatus={false}
                autoPlay
                interval={2000} // Adjust interval in milliseconds (3000ms = 3 seconds)
                infiniteLoop
            >
                <div>
                    <img src={banner1} className="carousel-image" />
                </div>
                <div>
                    <img src={banner2} className="carousel-image" />
                </div>
                <div>
                    <img src={banner3} className="carousel-image" />
                </div>
                <div>
                    <img src={banner4} className="carousel-image" />
                </div>
                <div>
                    <img src={banner5} className="carousel-image" />
                </div>
                <div>
                    <img src={banner6} className="carousel-image" />
                </div>
            </Carousel>

            {/* Hero Section Overlaid on the Carousel */}
            <div className="hero-content">
                <div>
                    <h1 className="text-5xl font-bold">Welcome to BranchTales!</h1>
                    <p className="py-6">
                        Unleash your creativity with BranchTales! Explore a diverse collection of interactive stories across genres like Sci-Fi, Mystery, and more. Choose your path, shape your narrative, and experience stories like never before. Whether you're a reader or a writer, there's always a new adventure waiting for you.
                    </p>
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn px-4 py-1.5 text-white bg-gradient-to-r from-cyan-800 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg transition-transform transform hover:scale-105">Log Out</button>
                            </> :
                            <>
                                <NavLink
                                    to="/login"
                                    className="btn px-4 py-1.5 text-white bg-gradient-to-r from-cyan-800 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                                > Log In
                                </NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;