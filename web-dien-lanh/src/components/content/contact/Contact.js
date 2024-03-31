import React, { useState } from 'react'
import './Contact.scss'
import { Alert, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import backgroundImage from '../../../images/qafSyKvOOOoWkA8EIYe6cC.jpg'
import axios from 'axios';

const urlConfig = 'https://cors-anywhere.herokuapp.com/'
const urlFormSubmit = 'https://docs.google.com/forms/d/e/1FAIpQLSea-MzHm7zh0bXw-aJ4kdqfoqvBAq5uulPgQiaQ3E-9wbvX-A/formResponse';

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [contentSupport, setContentSupport] = useState('');
    const Form = new FormData;
    const [messageApi, contextHolder] = message.useMessage();

    const handleSubmitData = async () => {
        Form.append("entry.347246686", userName)
        Form.append("entry.2026061024", phoneNumber)
        Form.append("entry.1462627938", address)
        Form.append("entry.116376776", contentSupport)

        await axios({
            url: `${urlFormSubmit}`,
            method: 'post',
            data: Form,
        }).catch(err => {
            messageApi.open({
                type: 'success',
                content: 'Gửi Thành Công !'
            })
            setAddress("")
            setContentSupport("")
            setUserName("")
            setPhoneNumber("")
        })
    }

return (
    <div className='contact-infor-page-container' >
        {contextHolder}
        <div className='left-content col-12 col-lg-6'>
            <div className='contact-info'>
                <div className='row-1'>
                    Thông Tin Liên Hệ
                </div>
                <div className='row-2'>
                    Liên hệ ngay với chúng tôi để được tư vấn miễn phí các dịch vụ liên quan điến điện lạnh.
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
                        <input value={userName} placeholder='Tên' className='style-input' onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className='col-6 input-phone-number'>
                        <input value={phoneNumber} placeholder='Số Điện Thoại' className='style-input' onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='col-lg-12'>
                        <input value={address} placeholder='Địa Chỉ' className='style-input' onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='row-3'>
                    <div className='col-lg-12 text-content-support'>
                        <TextArea value={contentSupport} placeholder='Nội Dung Hỗ Trợ' className='style-input text-area' style={{ lineHeight: '30px', height: '150px' }} onChange={(e) => setContentSupport(e.target.value)} />
                    </div>
                </div>
                <div className='row-4'>
                    <div className="button_cont" align="center" onClick={handleSubmitData}>
                        <div class="example_d">Liên hệ ngay !</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact
