import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner01 from '../../../../images/banner01.webp'
import banner02 from '../../../../images/banner02.webp'
import banner03 from '../../../../images/banner03.webp'
const Banner = () => {
    // const banerId = React.useRef();
    return (
        <div className='banner-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner01} className='banner-image'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner02} className='banner-image'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner03} className='banner-image'></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
