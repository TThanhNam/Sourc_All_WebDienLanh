import React from 'react'
import Banner from './banner/Banner.js'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'

const { Meta } = Card;

const repairServiceCardItems = [
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA MÁY LẠNH',
      description: '',
   },
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA MÁY GIẶT',
      description: '',
   },
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA TỦ LẠNH',
      description: '',
   },
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA BÌNH NÓNG LẠNH',
      description: '',
   },

]
const constructionService = [
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA MÁY LẠNH',
      description: '',
   },
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA MÁY GIẶT',
      description: '',
   },
   {
      alt: '',
      src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'SỬA CHỮA TỦ LẠNH',
      description: '',
   },
]
const Index = () => {
   const [onLayer, setOnLayer] = React.useState(false);
   return (
      <div className='all-service-container'>
         <Banner />
         <div className='repair-service-container'>
            <h2 className=''>
               DỊCH VỤ SỬA CHỮA
            </h2>
            <div className='list-service row'>
               {
                  repairServiceCardItems.map((item) => {
                     return <>
                        <Link className='col-12 col-lg-3' to={'#'}>
                           <div className='card-container'>
                              <div className='card-body'>
                                 <img src={item.src} />
                              </div>
                              <div className='card-title'>
                                 {item.title}
                              </div>
                           </div>
                        </Link>
                     </>
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
                  repairServiceCardItems.map((item) => {
                     return <>
                        <Link
                           className='col-12 col-lg-3'
                           to={'#'}>
                           <div className='card-container'>
                              <div className='card-body'>
                                 <img src={item.src} />
                              </div>
                              <div className='card-title'>
                                 {item.title}
                              </div>
                           </div>
                        </Link>
                     </>
                  })
               }
            </div>
         </div>
         <div className='construction-service-container'>
            <h2 className=''>
               DỊCH VỤ CÔNG TRÌNH
            </h2>
            <div className='list-service row'>
               {
                  constructionService.map((item) => {
                     return <>
                        <Link
                           className='col-12 col-lg-4'
                           to={'#'}>
                           <div className='card-container'>
                              <div className='card-body'>
                                 <img src={item.src} />
                              </div>
                              <div className='card-title'>
                                 {item.title}
                              </div>
                           </div>
                        </Link>
                     </>
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Index
