import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import './Footer.scss'
import { Link } from 'react-router-dom'

const aboutUsItems = [
  {
    lable: 'Về chúng tôi',
    href: '#'
  },
  {
    lable: 'Cẩm nang',
    href: '#'
  },
  {
    lable: 'Tuyển dụng',
    href: '#'
  },
  {
    lable: 'Bảng giá',
    href: '#'
  },
]
const reapaireItems = [
  {
    lable: 'Về chúng tôi',
    href: '#'
  },
  {
    lable: 'Cẩm nang',
    href: '#'
  },
  {
    lable: 'Tuyển dụng',
    href: '#'
  },
  {
    lable: 'Bảng giá',
    href: '#'
  },
]
const maintanceItems = [
  {
    lable: 'Về chúng tôi',
    href: '#'
  },
  {
    lable: 'Cẩm nang',
    href: '#'
  },
  {
    lable: 'Tuyển dụng',
    href: '#'
  },
  {
    lable: 'Bảng giá',
    href: '#'
  },
]

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-infor col-lg-12'>
        <div className='contact-infor-container col-lg-4 col-12'>
          <div className='footer-name title'>
            CỬA HÀNG HỢP ĐIỆN LẠNH
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
        <div className='about-us-container col-lg-2 col-12'>
          <div className='footer-title title'>
            THÔNG TIN
          </div>
          {
            aboutUsItems.map((item) => {
              return <>
                <div className='footer-row'>
                  <i className="fa-solid fa-arrow-right"></i>
                  <Link to={item.href}>
                    {item.lable}
                  </Link>
                </div>
              </>
            })
          }
        </div>
        <div className='footer-reapaire-container col-lg-3 col-12'>
          <div className='footer-title title'>
            DỊCH VỤ SỬA CHỮA
          </div>
          {
            aboutUsItems.map((item) => {
              return <>
                <div className='footer-row'>
                  <i className="fa-solid fa-arrow-right"></i>
                  <Link to={item.href}>
                    {item.lable}
                  </Link>
                </div>
              </>
            })
          }
        </div>
        <div className='footer-maintance-container col-lg-3 col-12'>
          <div className='footer-title title'>
            DỊCH VỤ BẢO TRÌ
          </div>
          {
            aboutUsItems.map((item) => {
              return <>
                <div className='footer-row'>
                  <i className="fa-solid fa-arrow-right"></i>
                  <Link to={item.href}>
                    {item.lable}
                  </Link>
                </div>
              </>
            })
          }
        </div>

      </div>
      <div className='design-infor-container'>
        ádfasdf
      </div>
    </div>
  )
}

export default Footer
