import { Parallax } from "react-parallax";

const Cover = ({ img, title, details }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="cover image"
            strength={0} // Prevent distortion
            bgImageStyle={{ objectFit: "cover", width: "100vw", height: "auto" }} // Full width
        >
            <div className="relative h-[600px] w-full flex items-center justify-center"> {/* Ensure content stays over image */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay */}
                <div className="relative z-10 text-center text-white px-4"> {/* Content styling */}
                    <h1 className="mb-5 text-4xl font-bold md:text-5xl">{title}</h1> {/* Responsive font sizes */}
                    <p className="mb-5 text-sm md:text-lg">{details}</p> {/* Adjust font size for responsiveness */}
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
