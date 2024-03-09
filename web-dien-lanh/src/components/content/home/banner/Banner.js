import React from 'react'
import './Banner.scss'
import { Carousel } from 'antd';

import banner01 from '../../../../images/banner-home-01.jpg';

const Banner = () => {
    const carouselID = React.useRef();

    return (
        <div className='banner-container'>
            <img src={banner01} className='banner-image'></img>
        </div>

    )
}

export default Banner
