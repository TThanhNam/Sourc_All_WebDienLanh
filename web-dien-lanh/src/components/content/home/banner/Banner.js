import React from 'react'
import './Banner.scss'
import { Carousel } from 'antd';

import banner01 from '../../../../images/banner01.jpg'
import banner02 from '../../../../images/banner02.jpg'
import banner03 from '../../../../images/banner03.jpg'

const Banner = () => {
    const carouselID = React.useRef();

    return (
        <div className='banner-container'>
            <Carousel ref={carouselID}>
                <div>
                    <img src={banner01} className='banner-image'></img>
                </div>
                <div>
                    <img src={banner02} className='banner-image'></img>
                </div>
                <div>
                    <img src={banner03} className='banner-image'></img>
                </div>
            </Carousel>
            <div className='btn-view-left btn-dynamic' onClick={() => carouselID.current.prev()}>
                <i class="fa-solid fa-angles-right fa-rotate-180"></i>
            </div>
            <div className='btn-view-right btn-dynamic' onClick={() => carouselID.current.next()}>
                <i class="fa-solid fa-angles-right" st></i>
            </div>
        </div>

    )
}

export default Banner
