import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import './MySwiper.scss'

const MySwiper = ({ slides }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                style={{ height: '100%' }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className='slider-content'
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                alignItems: 'start',
                                color: 'white',
                                textAlign: 'start',
                                paddingLeft: '20px',
                            }}
                        >
                            <p>{slide.title}</p>
                            <span>{slide.description}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MySwiper;
