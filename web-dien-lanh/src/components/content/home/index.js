import React from 'react'
import Banner from './banner/Banner.js'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'
import repair01 from '../../../images/sua-tu-lanh.jpg'
import repair02 from '../../../images/sua-may-giat-02.jpg'
import repair03 from '../../../images/may-lanh.jpg'

import maintenance01 from '../../../images/sua-may-lanh.jpg'
import maintenance02 from '../../../images/may-giat-02.jpg'
import maintenance03 from '../../../images/tu-lanh.jpg'

const { Meta } = Card;

const repairServiceCardItems = [
   {
      alt: '',
      src: repair03,
      title: 'SỬA CHỮA MÁY LẠNH',
      description: '',
   },
   {
      alt: '',
      src: repair02,
      title: 'SỬA CHỮA MÁY GIẶT',
      description: '',
   },
   {
      alt: '',
      src: repair01,
      title: 'SỬA CHỮA TỦ LẠNH',
      description: '',
   },
]
const constructionService = [
   {
      alt: '',
      src: maintenance01,
      title: 'BẢO TRÌ MÁY LẠNH',
      description: '',
   },
   {
      alt: '',
      src: maintenance02,
      title: 'BẢO TRÌ MÁY GIẶT',
      description: '',
   },
   {
      alt: '',
      src: maintenance03,
      title: 'BẢO TRÌ TỦ LẠNH',
      description: '',
   },
]
const Index = () => {

   return (
      <div className='all-service-container'>
         <Banner />
         <div className='content'>
            <br />
            <div className='middle-content why-choose-us'>
               <div className='row-1'>
                  Dịch vụ điện lạnh & máy giặt
               </div>
               <div className='row-2'>
                  TẠI SAO <span style={{ color: '#427D9D' }}>NÊN CHỌN CHÚNG TÔI</span>
               </div>
               <div className='row-3' style={{ marginTop: '10px' }}>
                  Với chúng tôi
               </div>
               <div className='row-3'>
                  Uy tín tạo nên thương hiệu.
               </div>
            </div>
            <div className='list-card-introduction col-12'>
               <div className="card-container col-12 col-lg-4">
                  <div className="card">
                     <Link to="">
                        <div className="card--display">
                           <i className="fa-solid fa-headset fa-2xl"></i>
                           <h2>DỊCH VỤ</h2>
                        </div>
                        <div className="card--hover">
                           <h2>Nhanh chóng, mọi nơi mọi lúc</h2>
                           <p>HOPNHAT cam kết phục vụ khách hàng 24/7 dù năng hay mưa dù sáng hay tối, chỉ cần bạn gọi chúng tôi lập tức có mặt.</p>
                        </div>
                     </Link>
                     <div className="card--border"></div>
                  </div>
               </div>
               <div className="card-container col-12 col-lg-4">
                  <div className="card">
                     <Link to="">
                        <div className="card--display">
                           <i className="fa-regular fa-thumbs-up fa-2xl"></i>
                           <h2>THÁI ĐỘ</h2>
                        </div>
                        <div className="card--hover">
                           <h2>Ân cần, chuyên nghiệp</h2>
                           <p>
                              Vấn đề của khách hàng là vấn đề của chúng tôi
                           </p>
                        </div>
                     </Link>
                     <div className="card--border"></div>
                  </div>
               </div>
               <div className="card-container col-12 col-lg-4">
                  <div className="card">
                     <Link to="">
                        <div className="card--display">
                           <i className="fa-solid fa-medal fa-2xl"></i>
                           <h2>CHẤT LƯỢNG</h2>
                        </div>
                        <div className="card--hover">
                           <h2>Số 1 Tp.HCM</h2>
                           <p>Chất lượng sản phẩm luôn được đặt lên hàng đầu</p>
                        </div>
                     </Link>
                     <div className="card--border"></div>
                  </div>
               </div>
            </div>
            <div className='middle-content why-choose-us'>
               <div className='row-1'>
                  Dịch vụ điện lạnh & máy giặt
               </div>
               <div className='row-2'>
                  <span style={{ color: '#427D9D' }}>DỊCH VỤ</span> CỦA CHÚNG TÔI
               </div>
               <div className='row-3' style={{ marginTop: '10px' }}>
                  Phục vụ tận tâm
               </div>
               <div className='row-3'>
                  Luôn đặt chất lượng lên hàng đầu.
               </div>
            </div>

            <div className='repair-service-container'>
               <h2 className=''>
                  DỊCH VỤ SỬA CHỮA
               </h2>
               <div className='list-service row'>
                  {
                     repairServiceCardItems.map((item, index) => {
                        return <Link key={index} className='col-12 col-lg-4 tile' to={'#'}>
                           <img src={item.src} />
                           <div className="details">
                              <span className="title">{item.title}</span>
                              <span className="info">{item.description}</span>
                           </div>
                        </Link>
                     })
                  }
               </div>
            </div>
            <div className='maintenance-service-container'>
               <h2 className=''>
                  DỊCH VỤ BẢO TRÌ
               </h2>
               <div className='list-service row'>
                  {
                     constructionService.map((item) => {
                        return <>
                           <Link
                              className='col-12 col-lg-4 tile'
                              to={'#'}>
                              <img src={item.src} />
                              <div className="details">
                                 <span className="title">{item.title}</span>
                                 <span className="info">{item.description}</span>
                              </div>
                           </Link>
                        </>
                     })
                  }
               </div>
            </div>
         </div>

      </div>
   )
}

export default Index
