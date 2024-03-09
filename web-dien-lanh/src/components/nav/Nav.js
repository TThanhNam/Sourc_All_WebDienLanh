import React, { useState } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import className from 'classnames'
import { Drawer, Dropdown, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ProfileOutlined, SettingOutlined, ToolOutlined } from '@ant-design/icons';
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
        // RACM = Regular Air Conditioning Maintenance = Bảo trì máy lạnh định kỳ
         <Link to="/RACM">
            Bảo trì máy lạnh
         </Link>
      ),
   },
   {
      key: '2',
      label: (
         <Link to="/ACC">
            Vệ sinh máy lạnh
         </Link>
      ),
   },
   {
      key: '3',
      label: (
         <Link to="/ACGP">
            Bơm ga máy lạnh
         </Link>
      ),
   },
   {
      key: '4',
      label: (
         // CWM = Cleaning the washing machine = vệ sinh máy giặt
         // CWM = Cleaning the washing machine = Bảo trì máy giặt
         <Link to="/CWM">
            Bảo trì máy giặt
         </Link>
      ),
   },
]

const menuItem = [
   {
      key: HOME_ACT,
      icon: <HomeOutlined style={{ fontSize: '30px' }} />,
      label: "Trang Chủ",
   },
   {
      icon: <InfoCircleOutlined style={{ fontSize: '30px' }} />,
      key: INTRODUCTION_ACT,
      label: "Giới Thiệu",
   },
   {
      icon: <ToolOutlined style={{ fontSize: '30px' }} />,
      key: REPAIRSERVICE_ACT,
      label: "Dịch Vụ Sửa Chữa",
      children: [
         {
            // icon: <ToolOutlined style={{ fontSize: '30px' }} />,
            key: "sfdg",
            label: "Sửa Chữa Máy Lạnh",
         },
         {
            // icon: <ToolOutlined style={{ fontSize: '30px' }} />,
            key: "ádf",
            label: "Sửa Chữa Máy Giặt",
         },
         {
            // icon: <ToolOutlined style={{ fontSize: '30px' }} />,
            key: "đà",
            label: "Sửa Chữa Tủ Lạnh",
         },
      ]
   },
   {
      icon: <SettingOutlined style={{ fontSize: '30px' }} />,
      key: MAINTENANCE_ACT,
      label: "Dịch Vụ Bảo trì",
      type:'vertical',
      children: [
         {
            // icon: <ToolOutlined style={{ fontSize: '30px' }} />,
            key: "ádf",
            label: "Bảo Trì Máy Lạnh",
         },
         {
            // icon: <ToolOutlined style={{ fontSize: '30px' }} />,
            key: "ádfa",
            label: "Bảo Trì Máy Giặt",
         },
      ]
   },
   {
      icon: <HomeOutlined style={{ fontSize: '30px' }} />,
      key: PRICE_LIST_ACT,
      label: "Bảng Giá",
   },
   {
      icon: <ProfileOutlined style={{ fontSize: '30px' }} />,
      key: CONTACT_ACT,
      label: "Liên Hệ",
   },
]
const Nav = () => {
   const [currentActive, setCurrentActive] = React.useState(HOME_ACT);
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <div className='nav-container'>
         <div className='main-content-lg col-lg-12'>
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
                        <Link to={"/repair-services"}
                           onClick={() => setCurrentActive(REPAIRSERVICE_ACT)}>
                           Dịch Vụ Sửa Chữa
                           <i className="fa-solid fa-caret-down"></i>
                        </Link>
                     </Dropdown>
                  </li>
                  <li className={className({ 'active': currentActive === MAINTENANCE_ACT })}>
                     <Dropdown menu={{ items: maintenanceItems }} placement="bottomRight" arrow>
                        <Link to={"/maintenance"}
                           onClick={() => setCurrentActive(MAINTENANCE_ACT)}>
                           Dịch Vụ Bảo Trì
                           <i className="fa-solid fa-caret-down"></i>
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
         <div className='main-content-md col-12'>
            <div className='logo col-lg-4 active'>
               LOGO HERE
            </div>
            <div className='nav-content col-lg-8'>
               <div className='icon-open-drawer' onClick={() => setOpenDrawer(true)}>
                  <i class="fa-solid fa-bars"></i>
               </div>
               <Drawer
                  placement={'left'}
                  onClose={() => setOpenDrawer(!openDrawer)}
                  open={openDrawer}
                  width={'500px'}
                  closeIcon={null}
               >
                  <Menu
                     style={{
                        width: '100%',
                        fontSize: '33px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                     }}
                     mode="inline"
                     // defaultSelectedKeys={currentActive}
                     // defaultOpenKeys={currentActive}
                     
                     items={menuItem}
                  />
               </Drawer>
            </div>
         </div>


      </div>
   )
}

export default Nav
