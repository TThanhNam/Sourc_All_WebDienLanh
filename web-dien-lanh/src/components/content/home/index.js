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
         <div className='main-content'>
            <br />
            <div className='middle-content why-choose-us'>
               <center>
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
               </center>
            </div>
            <div className='list-card-introduction col-12'>
               <div className="card-container col-12 col-lg-4">
                  <div className="card">
                     <Link to="">
                        <div className="card--display">
                           <div className='title'>
                              <i className="fa-solid fa-headset fa-2xl" style={{ marginBottom: '10px' }} F></i>
                              <br />
                              DỊCH VỤ
                           </div>
                        </div>
                        <div className="card--hover content">
                           <div>Nhanh chóng, mọi nơi mọi lúc</div>
                           <p>Phục vụ 24/7, chỉ cần bạn gọi chúng tôi luôn sẵn sàng.</p>
                        </div>
                     </Link>
                     <div className="card--border"></div>
                  </div>
               </div>
               <div className="card-container col-12 col-lg-4">
                  <div className="card">
                     <Link to="">
                        <div className="card--display">
                           <div className='title'>
                              <i className="fa-regular fa-thumbs-up fa-2xl" style={{ marginBottom: '10px' }}></i>
                              <br />
                              THÁI ĐỘ
                           </div>
                        </div>
                        <div className="card--hover content">
                           <div>Ân cần, chuyên nghiệp</div>
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
                           <div className='title'>
                              <i className="fa-solid fa-medal fa-2xl" style={{ marginBottom: '10px' }}></i>
                              <br />
                              CHẤT LƯỢNG
                           </div>
                        </div>
                        <div className="card--hover content">
                           <div>Số 1 Tp.HCM</div>
                           <p>Chất lượng sản phẩm luôn được đặt lên hàng đầu</p>
                        </div>
                     </Link>
                     <div className="card--border"></div>
                  </div>
               </div>
            </div>
            <div className='middle-content why-choose-us'>
               <center>
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
               </center>
            </div>

            <div className='repair-service-container'>
               <div className='title' style={{ fontWeight: '700', marginBottom: '10px' }}>
                  DỊCH VỤ SỬA CHỮA
               </div>
               <div className='list-service row'>
                  {
                     repairServiceCardItems.map((item, index) => {
                        return <Link
                           style={{ marginBottom: '25px' }}
                           key={index}
                           className='col-12 col-lg-4 tile'
                           to={'#'}>
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
               <div className='title' style={{ fontWeight: '700', marginBottom: '10px' }}>
                  DỊCH VỤ BẢO TRÌ
               </div>
               <div className='list-service row'>
                  {
                     constructionService.map((item) => {
                        return <>
                           <Link
                              className='col-12 col-lg-4 tile'
                              style={{ marginBottom: '30px' }}
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
