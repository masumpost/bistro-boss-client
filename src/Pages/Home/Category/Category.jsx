import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subheading={'from 11.00am to 10.00pm'}
                heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className="uppercase text-3xl -mt-20 text-center text-white font-semibold">Salad</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className="uppercase text-3xl -mt-20 text-center text-white font-semibold">pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className="uppercase text-3xl -mt-20 text-center text-white font-semibold">Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className="uppercase text-3xl -mt-20 text-center text-white font-semibold">Desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className="uppercase text-3xl -mt-20 text-center text-white font-semibold">Salad</h4>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;