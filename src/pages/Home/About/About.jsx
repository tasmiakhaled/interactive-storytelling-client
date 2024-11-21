import about from "../../../assets/about/about.jpg";
import '../About/About.css'; // Custom styles if needed

const About = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <img src={about} alt="About Us" className="w-full h-auto object-cover block mx-auto my-4 md:my-20" />

            {/* White Background for Text (Partial coverage) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-8 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">BranchTales</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                        Our interactive storytelling platform allows you to craft unique stories, explore various genres,
                        and dive into new adventures. Whether you are an avid reader or a creative writer,
                        there is always a new journey to embark upon. Join us in creating and discovering endless narratives!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
