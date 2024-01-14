import React from 'react'
import './Header.scss'
import { Row, Col } from 'antd'
const Header = () => {
    return (
        <div className='header-container col-lg-12'>
            <div className='header-infor col-lg-12'>
                <div className='left-infor col-lg-6'>
                    <div className='time-infor'>
                        <i className="icon fa-solid fa-clock fa-lg"></i>
                        THỨ 2 - CHỦ NHẬT : 8:00 - 19:00
                    </div>
                    <div className='divider-vertical-with'></div>
                    <div className='phone-infor'>
                        <i className="icon fa-solid fa-phone-volume"></i>
                        0355034827
                    </div>
                </div>
                <div className='right-infor col-lg-6'>
                    <ul>
                        <li>
                            <a href='#'>Cẩm nang</a>
                        </li>
                        <div className='divider-vertical-with'></div>
                        <li>
                            <a href='#'> Công trình </a>
                        </li>
                        <div className='divider-vertical-with'></div>
                        <li>
                            <a href='#'>
                                Tuyển dụng
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Header
