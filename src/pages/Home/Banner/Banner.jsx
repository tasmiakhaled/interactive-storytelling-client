import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../Banner/Banner.css';

import banner1 from "../../../assets/banners/banner1.jpg";
import banner2 from "../../../assets/banners/banner2.jpeg";
import banner3 from "../../../assets/banners/banner3.jpg";
import banner4 from "../../../assets/banners/banner4.jpg";
import banner5 from "../../../assets/banners/banner5.jpg";
import banner6 from "../../../assets/banners/banner6.jpeg";

const Banner = () => {
    return (
        <Carousel
            className="carousel-image-container"
            showThumbs={false}
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
    );
};

export default Banner;
