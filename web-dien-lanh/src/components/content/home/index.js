import React from 'react'
import Banner from './banner/Banner.js'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'

import repair01 from '../../../images/main-page-dv-sua-chua-may-lanh.jpg'
import repair02 from '../../../images/main-page-dv-sua-may-giat.jpg'
import repair03 from '../../../images/main-page-sua-tu-lanh.jpg'

import maintenance01 from '../../../images/main-page-dv-bao-tri-may-lanh.jpg'
import maintenance02 from '../../../images/main-page-dv-bao-tri-may-giat.jpg'
import maintenance03 from '../../../images/main-page-dv-bao-tri-tu-lanh.jpg'

import member01 from '../../../images/member01.jpg'
import member02 from '../../../images/member02.jpg'
import member03 from '../../../images/member03.jpg'

const repairServiceCardItems = [
   {
      alt: '',
      src: repair01,
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
      src: repair03,
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
            <div className='middle-content why-choose-us' style={{ margin: '70px 0px' }}>
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
            <div className='middle-content why-choose-us' style={{ margin: '70px 0px' }}>
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
                           <img src={item.src} loading='lazy'/>
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
                     constructionService.map((item, index) => {
                        return <Link
                           key={index}
                           className='col-12 col-lg-4 tile'
                           style={{ marginBottom: '30px' }}
                           to={'#'}>
                           <img src={item.src} loading='lazy'/>
                           <div className="details">
                              <span className="title">{item.title}</span>
                              <span className="info">{item.description}</span>
                           </div>
                        </Link>
                     })
                  }
               </div>
            </div>
         </div>
         <div className='achievement col-12' style={{ backgroundColor: 'rgb(79 176 229)' }}>
            <div className='main-content achievement-content col-lg-12'>
               <div className='col-12 col-lg-4 achievement-content-wrapper'>
                  <div className='achievement-content-icon col-4 col-lg-6'>
                     <i className="fa-solid fa-fan"></i>
                  </div>
                  <div className='achievement-content-detail col-8 col-lg-6'>
                     <div className='achievement-content-row-1'>
                        1000 +
                     </div>
                     <div className='achievement-content-row-2'>
                        Dự án thành công
                     </div>
                  </div>
               </div>
               <div className='col-12 col-lg-4 achievement-content-wrapper'>
                  <div className='achievement-content-icon col-4 col-lg-6'>
                     <i className="fa-regular fa-face-smile-beam"></i>
                  </div>
                  <div className='achievement-content-detail col-8 col-lg-6'>
                     <div className='achievement-content-row-1'>
                        1000 +
                     </div>
                     <div className='achievement-content-row-2'>
                        Khách hàng được phục vụ
                     </div>
                  </div>
               </div>
               <div className='col-12 col-lg-4 achievement-content-wrapper'>
                  <div className='achievement-content-icon col-4 col-lg-6'>
                     <i className="fa-regular fa-hourglass-half"></i>
                  </div>
                  <div className='achievement-content-detail col-8 col-lg-6'>
                     <div className='achievement-content-row-1'>
                        10 +
                     </div>
                     <div className='achievement-content-row-2'>
                        Năm Kinh Nghiêm
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='main-content'>
            {/*<div className='our-team col-12'>*/}
            {/*   <div className='middle-content why-choose-us row-all-team-infor col-12 col-lg-3'>*/}
            {/*      <center>*/}
            {/*         <div className='row-1'>*/}
            {/*            Đội ngũ chuyên nghiệp*/}
            {/*         </div>*/}
            {/*         <div className='row-2'>*/}
            {/*            <span style={{ color: '#427D9D' }}>NHÂN VIÊN</span> CỦA CHÚNG TÔI*/}
            {/*         </div>*/}
            {/*         <div className='row-3' style={{ marginTop: '10px' }}>*/}
            {/*            Phục vụ tận tâm*/}
            {/*         </div>*/}
            {/*         <div className='row-3'>*/}
            {/*            Cam đoan cung cấp dịch vụ chất lượng đáng tin cậy.*/}
            {/*         </div>*/}
            {/*      </center>*/}
            {/*   </div>*/}
            {/*   <div className='row-member-infor col-12 col-lg-3'>*/}
            {/*      <img src={member01} loading='lazy'/>*/}
            {/*      <div className="placehoder">*/}
            {/*         <div className='title'>*/}
            {/*            Đặng Đức Hợp*/}
            {/*         </div>*/}
            {/*         <div className='content'>*/}
            {/*            CỦA HÀNG TRƯỞNG*/}
            {/*         </div>*/}
            {/*         <div className='icon-contact'>*/}
            {/*            <ul className='col-12'>*/}
            {/*               <li className='col-3'>*/}
            {/*                  <a href="#"><i className="fab fa-facebook-f icon"></i></a>*/}
            {/*               </li>*/}
            {/*               <li className='col-3'>*/}
            {/*                  <a href="#"><i className="fab fa-twitter icon"></i></a>*/}
            {/*               </li>*/}
            {/*               <li className='col-3'>*/}
            {/*                  <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>*/}
            {/*               <li className='col-3'>*/}
            {/*                  <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>*/}
            {/*            </ul>*/}
            {/*         </div>*/}
            {/*      </div>*/}

            {/*   </div>*/}
            {/*   /!*<div className='row-member-infor col-12 col-lg-3'>*!/*/}
            {/*   /!*   <img src={member02} loading='lazy'/>*!/*/}
            {/*   /!*   <div className="placehoder">*!/*/}
            {/*   /!*      <div className='title'>*!/*/}
            {/*   /!*         TRẦN VĂN LONG*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*      <div className='content'>*!/*/}
            {/*   /!*         NHÂN VIÊN SỬA CHỮA*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*      <div className='icon-contact'>*!/*/}
            {/*   /!*         <ul className='col-12' >*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-facebook-f icon"></i></a>*!/*/}
            {/*   /!*            </li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-twitter icon"></i></a>*!/*/}
            {/*   /!*            </li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>*!/*/}
            {/*   /!*         </ul>*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*   </div>*!/*/}
            {/*   /!*</div>*!/*/}
            {/*   /!*<div className='row-member-infor col-12 col-lg-3'>*!/*/}
            {/*   /!*   <img src={member03} loading='lazy'/>*!/*/}
            {/*   /!*   <div className="placehoder">*!/*/}
            {/*   /!*      <div className='title'>*!/*/}
            {/*   /!*         Đặng Văn B*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*      <div className='content'>*!/*/}
            {/*   /!*         NHÂN VIÊN BẢO TRÌ*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*      <div className='icon-contact'>*!/*/}
            {/*   /!*         <ul className='col-12'>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-facebook-f icon"></i></a>*!/*/}
            {/*   /!*            </li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-twitter icon"></i></a>*!/*/}
            {/*   /!*            </li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>*!/*/}
            {/*   /!*            <li className='col-3'>*!/*/}
            {/*   /!*               <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>*!/*/}
            {/*   /!*         </ul>*!/*/}
            {/*   /!*      </div>*!/*/}
            {/*   /!*   </div>*!/*/}
            {/*   /!*</div>*!/*/}
            {/*</div>*/}
         </div>

      </div>
   )
}

export default Index
