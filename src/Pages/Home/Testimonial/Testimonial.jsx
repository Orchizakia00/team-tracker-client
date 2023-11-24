import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <SectionTitle heading={'Testimonials'} subHeading={'Our Employees Say'}></SectionTitle>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-16 flex flex-col items-center">

                            <FaQuoteLeft className="mt-8 text-6xl" />

                            <p className="my-8"> {review.testimonial_text} </p>
                            <h3 className="text-2xl text-blue-500">{review.employee_name}</h3>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>slider 1</SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Testimonial;