import React from 'react'
import './Contact.scss'
import { Alert, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import backgroundImage from '../../../images/qafSyKvOOOoWkA8EIYe6cC.jpg'

const Contact = () => {
    return (
        //radial-gradient(circle at top right, #210b00 10%, rgba(33, 25, 21, 0) 100%), url(https://www.elegantthemes.com/layouts/wp-content/uploads/2018/08/Carpenter-Image-21.jpg) ;

        <div className='contact-infor-page-container' style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='left-content col-12 col-lg-6'>
                <div className='contact-info'>
                    <div className='row-1'>
                        Thông Tin Liên Hệ
                    </div>
                    <div className='row-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis, perferendis aliquam.
                    </div>
                </div>
                <div className='contact-address'>
                    <div className='address col-12 col-lg-6'>
                        <div className='address-title'>
                            TP.Hồ Chí Minh
                        </div>
                        <div className='address-content'>
                            <ul class="list-style">
                                <li>
                                    <span className='icon'><i class="fa-solid fa-map"></i></span>
                                    Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh
                                </li>
                                <li>
                                    <span className='icon'><i class="fa-solid fa-phone"></i></span>
                                    0355034827
                                </li>
                                <li>
                                    <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                                    abc@123.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='address col-12 col-lg-6'>
                        <div className='address-title'>
                            Bình Phước
                        </div>
                        <div className='address-content'>
                            <ul class="list-style">
                                <li>
                                    <span className='icon'><i class="fa-solid fa-map"></i></span>
                                    Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh
                                </li>
                                <li>
                                    <span className='icon'><i class="fa-solid fa-phone"></i></span>
                                    0355034827
                                </li>
                                <li>
                                    <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                                    abc@123.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-content col-12 col-lg-6'>
                <center>
                    <div className='contact-now'>
                        LIÊN HỆ NGAY CHO CHÚNG TÔI
                    </div>
                </center>
                <div className='form-info'>
                    <div className='row-1 col-12'>
                        <div className='col-6 input-name'>
                            <input placeholder='Tên' className='style-input' />
                        </div>
                        <div className='col-6 input-phone-number'>
                            <input placeholder='Số Điện Thoại' className='style-input' />
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className='col-lg-12'>
                            <input placeholder='Địa Chỉ' className='style-input' />
                        </div>
                    </div>
                    <div className='row-3'>
                        <div className='col-lg-12 text-content-support'>
                            <TextArea placeholder='Nội Dung Hỗ Trợ' className='style-input' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
