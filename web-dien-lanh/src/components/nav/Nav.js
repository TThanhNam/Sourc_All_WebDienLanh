import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import className from 'classnames'
import { Dropdown } from 'antd';
const HOME_ACT = 1;
const INTRODUCTION_ACT = 2;
const REPAIRSERVICE_ACT = 3;
const MAINTENANCE_ACT = 4;
const PRICE_LIST_ACT = 5;
const CONTACT_ACT = 6;

const repairserviceItems = [
   {
      key: '1',
      label: (
         <Link to="/air-condition-repairing">
            Sửa chữa máy lạnh
         </Link>
      ),
   },
   {
      key: '2',
      label: (
         <Link to="/refrigerator-machine-repair-service">
            Sửa chữa tủ lạnh
         </Link>
      ),
   },
   {
      key: '3',
      label: (
         <Link to="/washing-machine-repair-service">
            Sửa chữa máy giặt
         </Link>
      ),
   },
]

const maintenanceItems = [
   {
      key: '1',
      label: (
         // RACM = Regular Air Conditioning Maintenance = Bảo trì máy lạnh định kỳ
         <Link to="/RACM">      
            Bảo trì máy lạnh định kỳ 
         </Link>
      ),
   },
   {
      key: '2',
      label: (
         // ACC = air conditioner cleaning = vệ sinh máy lạnh
         <Link to="/ACC">
            Vệ sinh máy lạnh
         </Link>
      ),
   },
   {
      key: '3',
      label: (
         // ACGP = Air conditioner gas pump = bơm ga máy lạnh
         <Link to="/ACGP">
            Bơm ga máy lạnh
         </Link>
      ),
   },
   {
      key: '4',
      label: (
         // CWM = Cleaning the washing machine = vệ sinh máy giặt
         <Link to="/CWM">
            Vệ sinh máy giặt
         </Link>
      ),
   },
]
const Nav = () => {
   const [currentActive, setCurrentActive] = React.useState(HOME_ACT);

   return (
      <div className='nav-container'>
         <div className='main-content col-lg-12'>
            <div className='logo col-lg-4 active'>
               <h1>
                  LOGO HERE
               </h1>
            </div>
            <div className='nav-content col-lg-8'>
               <ul>
                  <li className={className({ 'active': currentActive === HOME_ACT })}>
                     <Link to={"/home-page"}
                        onClick={() => setCurrentActive(HOME_ACT)}
                     >
                        Trang Chủ
                     </Link>
                  </li>
                  <li className={className({ 'active': currentActive === INTRODUCTION_ACT })}>
                     <Link to={"/introduction"}
                        onClick={() => setCurrentActive(INTRODUCTION_ACT)}>
                        Giới Thiệu
                     </Link>
                  </li>
                  <li className={className({ 'active': currentActive === REPAIRSERVICE_ACT })}>
                     <Dropdown menu={{ items: repairserviceItems }} placement="bottomRight" arrow>
                        <a href={"#"}
                           onClick={() => setCurrentActive(REPAIRSERVICE_ACT)}>
                           Dịch Vụ Sửa Chữa
                           <i class="fa-solid fa-caret-down"></i>
                        </a>
                     </Dropdown>
                  </li>
                  <li className={className({ 'active': currentActive === MAINTENANCE_ACT })}>
                     <Dropdown menu={{ items: maintenanceItems }} placement="bottomRight" arrow>
                        <Link to={"/maintenance"}
                           onClick={() => setCurrentActive(MAINTENANCE_ACT)}>
                           Dịch Vụ Bảo Trì
                           <i class="fa-solid fa-caret-down"></i>
                        </Link>
                     </Dropdown>

                  </li>
                  <li className={className({ 'active': currentActive === PRICE_LIST_ACT })}>
                     <a href={"#"}
                        onClick={() => setCurrentActive(PRICE_LIST_ACT)}>
                        Bảng giá
                     </a>
                  </li>
                  <li className={className({ 'active': currentActive === CONTACT_ACT })}>
                     <a href={"#"}
                        onClick={() => setCurrentActive(CONTACT_ACT)}>
                        Liên hệ
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Nav
