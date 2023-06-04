import SectionTitle from "../../../Components/SectionTitle";
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import '@smastrom/react-rating/style.css'
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-10">
            <SectionTitle
                subheading={'What Our Client Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className="mx-24 my-16 flex flex-col items-center">

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <h3 className="text-6xl font-bold mt-8"><FaQuoteLeft></FaQuoteLeft></h3>

                                <p className="my-4">{review.details}</p>
                                <h4 className="text-2xl text-orange-400 font-semibold my-5">{review.name}</h4>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>

        </section>
    );
};

export default Testimonials;