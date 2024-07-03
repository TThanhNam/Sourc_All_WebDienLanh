import React from 'react'
import './Banner.scss'

import banner01 from '../../../../images/banner-home-01.jpg';

const Banner = () => {

    return (
        <div className='banner-container'>
            <img src={banner01} className='banner-image'></img>
        </div>

    )
}

export default Banner
