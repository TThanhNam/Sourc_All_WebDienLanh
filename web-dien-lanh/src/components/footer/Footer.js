import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { URL } from '../../share/constance'
import RepairServices from '../content/repair_services/RepairServices'

const reapaireItems = [
  {
    lable: 'Sửa chữa máy lạnh',
    href: URL.REPAIR_SERVICES.AIR_CONDITION_REPAIRING
  },
  {
    lable: "Sửa chữa tủ lạnh",
    href: URL.REPAIR_SERVICES.REFRIGERATOR_MACHINE_REPAIR_SERVICE
  },
  {
    lable: 'Sửa chữa máy giặt',
    href: URL.REPAIR_SERVICES.WASHING_MACHINE_REPAIR_SERVICE
  },
]
const maintanceItems = [
  {
    lable: 'Bảo trì máy lạnh',
    href: URL.MAINTENANCES.REGULAR_AIR_CONDITIONING_MAINTENANCE
  },
  {
    lable: 'Bảo trì máy giặt',
    href: URL.MAINTENANCES.CLEANING_THE_WASHING_MACHINE
  },
]

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-infor col-lg-12'>
        <div className='contact-infor-container col-lg-4 col-12'>
          <div className='footer-name title'>
            ĐIỆN LẠNH HỢP NHẤT
          </div>
          <div className='footer-addressed contact-row'>
            <div className='left-col'>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='right-col'>
              Số 34/3 Đường số 7, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí Minh
            </div>
          </div>
          <div className='footer-phone contact-row'>
            <div className='left-col'>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className='right-col'>
              Hotline: 0355034827
            </div>
          </div>
          <div className='footer-email contact-row'>
            <div className='left-col'>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className='right-col'>
              Email: abc@123.com
            </div>
          </div>
          <div className='footer-website contact-row'>
            <div className='left-col'>
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className='right-col'>
              Website: www.hdl.com
            </div>
          </div>
        </div>
        <div className='footer-reapaire-container col-lg-3 col-12'>
          <div className='footer-title title'>
            DỊCH VỤ SỬA CHỮA
          </div>
          {
            reapaireItems.map((item, index) => {
              return <div key={index} className='footer-row'>
                <i className="fa-solid fa-arrow-right"></i>
                <Link to={item.href}>
                  {item.lable}
                </Link>
              </div>
            })
          }
        </div>
        <div className='footer-maintance-container col-lg-3 col-12'>
          <div className='footer-title title'>
            DỊCH VỤ BẢO TRÌ
          </div>
          {
            maintanceItems.map((item, index) => {
              return <div key={index} className='footer-row'>
                <i className="fa-solid fa-arrow-right"></i>
                <Link to={item.href}>
                  {item.lable}
                </Link>
              </div>

            })
          }
        </div>
        <div className='about-us-container col-lg-2 col-12'>
          <div className='footer-title title'>
            LIÊN HỆ
          </div>
          <div className='icon-contact'>
            <ul className='col-12'>
              <li className='col-3'>
                <a href="#"><i className="fab fa-facebook-f icon"></i></a>
              </li>
              <li className='col-3'>
                <a href="#"><i className="fab fa-twitter icon"></i></a>
              </li>
              <li className='col-3'>
                <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
              <li className='col-3'>
                <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='design-infor-container'>
        <span >Copyright 2024 © <strong>ĐIỆN LẠNH HỢP NHẤT</strong></span>
      </div>
    </div>
  )
}

export default Footer
