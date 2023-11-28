import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
function MySlider() {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    const slider_data = [
        {
            id: 1,
            pre_title: "Contract Manufacturing",
            title: "Successful Partnerships in Contract Manufacturing",
            bg: "/assets/img/slider/res11.webp",
        },
        {
            id: 2,
            pre_title: "Global Distribution",
            title: "Key Considerations in Global Distribution",
            bg: "/assets/img/slider/res22.webp",
        },
        {
            id: 3,
            pre_title: "Contract Manufacturing",
            title: "Strategies for Global Distribution",
            bg: "/assets/img/slider/res33.webp",
        },
    ];
    return (
        <div className=''>
            <Swiper
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
                }}
                slidesPerView={1}
                loop={loop}
                className="slider__active swiper-container rounded mySwiper"
                effect="fade"
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                style={{ height: "250px" }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
            >
                {slider_data.map((item, i) => (
                    <SwiperSlide
                        key={item.id}
                        className="bg-cover"
                    >
                        <div
                            className="slider__bg "
                            // style={{ backgroundImage: `url(${item.bg})`, width: '100%', height: '100%',objectFit: 'contain' }}
                            style={{ backgroundImage: `url(${item.bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", verticalAlign: "top" }}
                        ></div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-102">
                                    <div className="slider__content text-center">
                                        <span className="slider__title-pre p-4 ">
                                            {item.pre_title}
                                        </span>
                                        <h3 className="text-white display-6 fw-bold pb-4 mb-4 ">{item.title}</h3>
                                        {/* <div className="slider__form">
                        <SliderForm />
                      </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}

export default MySlider