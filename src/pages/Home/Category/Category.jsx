import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import category1 from "../../../assets/category/category1.jpg";
import category2 from "../../../assets/category/category2.png";
import category3 from "../../../assets/category/category3.jpg";
import category4 from "../../../assets/category/category4.jpg";
import category5 from "../../../assets/category/category5.png";
import category6 from "../../../assets/category/category6.jpg";
import '../Category/Category.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Categories"}
                heading={"Journey Through Genres"}>
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={category1} alt="Sci-Fi" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Sci-Fi
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={category2} alt="Mystery" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Mystery
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={category3} alt="Adventure" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Adventure
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={category4} alt="Fantasy" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Fantasy
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={category5} alt="Horror" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Horror
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={category6} alt="Historical" className="w-full h-auto object-cover" />
                        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-center text-white text-shadow w-full px-2">
                            Historical
                        </h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
