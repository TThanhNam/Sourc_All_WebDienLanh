import React, { useEffect, useState } from 'react'
import './Nav.scss'
import { Link, useLocation } from 'react-router-dom'
import className from 'classnames'
import { Drawer, Dropdown, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ProfileOutlined, SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { URL } from '../../share/constance';
const HOME_ACT = 'home-page';
const INTRODUCTION_ACT = 'introduction';
const REPAIRSERVICE_ACT = 'repair-services';
const REPAIRSERVICE_ACT_1 = 'air-condition-repairing'
const REPAIRSERVICE_ACT_2 = 'washing-machine-repair-service'
const REPAIRSERVICE_ACT_3 = 'refrigerator-machine-repair-service'
const MAINTENANCE_ACT = 'maintenance';
const MAINTENANCE_ACT_1 = 'regular-air-conditioning-maintenance';
const MAINTENANCE_ACT_2 = 'cleaning-the-washing-machine';
const CONTACT_ACT = 'contact-us';

const Nav = () => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const location = useLocation();
   const maintenanceItems = [

      {
         key: '1',
         label: (
            // RACM = Regular Air Conditioning Maintenance = Bảo trì máy lạnh định kỳ
            <Link to="/regular-air-conditioning-maintenance" style={{ textDecoration: 'none' }}>
               Bảo trì máy lạnh
            </Link>
         ),
      },
      {
         key: '4',
         label: (
            // CWM = Cleaning the washing machine = Bảo trì máy giặt
            <Link to="/cleaning-the-washing-machine" style={{ textDecoration: 'none' }}>
               Bảo trì máy giặt
            </Link>
         ),
      },
   ]
   const repairserviceItems = [
      {
         key: '1',
         label: (
            <Link to={URL.REPAIR_SERVICES.AIR_CONDITION_REPAIRING} style={{ textDecoration: 'none' }}>
               Sửa chữa máy lạnh
            </Link>
         ),
      },
      {
         key: '2',
         label: (
            <Link to={URL.REPAIR_SERVICES.REFRIGERATOR_MACHINE_REPAIR_SERVICE} style={{ textDecoration: 'none' }}>
               Sửa chữa tủ lạnh
            </Link>
         ),
      },
      {
         key: '3',
         label: (
            <Link to={URL.REPAIR_SERVICES.WASHING_MACHINE_REPAIR_SERVICE} style={{ textDecoration: 'none' }}>
               Sửa chữa máy giặt
            </Link>
         ),
      },
   ]
   const menuItem = [
      {
         key: HOME_ACT,
         icon: <HomeOutlined style={{ fontSize: '30px' }} />,
         label: <Link to={URL.HOME}

         >Trang Chủ </Link>,
      },
      {
         icon: <InfoCircleOutlined style={{ fontSize: '30px' }} />,
         key: INTRODUCTION_ACT,
         label: <Link to={URL.INTRODUCTION}
         >
            Giới Thiệu
         </Link>,
      },
      {
         icon: <ToolOutlined style={{ fontSize: '30px' }} />,
         key: REPAIRSERVICE_ACT,
         label: <Link to={URL.REPAIR_SERVICE}
         >
            Dịch Vụ Sửa Chữa
         </Link>,
         children: [
            {
               key: REPAIRSERVICE_ACT_1,
               label: <Link to={URL.REPAIR_SERVICES.AIR_CONDITION_REPAIRING} style={{ textDecoration: 'none' }}>
                  Sửa chữa máy lạnh
               </Link>,
            },
            {
               key: REPAIRSERVICE_ACT_2,
               label: <Link to={URL.REPAIR_SERVICES.WASHING_MACHINE_REPAIR_SERVICE} style={{ textDecoration: 'none' }}>
                  Sửa chữa máy giặt
               </Link>,
            },
            {
               key: REPAIRSERVICE_ACT_3,
               label: <Link to={URL.REPAIR_SERVICES.REFRIGERATOR_MACHINE_REPAIR_SERVICE} style={{ textDecoration: 'none' }}>
                  Sửa chữa tủ lạnh
               </Link>,
            },
         ]
      },
      {
         icon: <SettingOutlined style={{ fontSize: '30px' }} />,
         key: MAINTENANCE_ACT,
         label: <Link to={URL.MAINTENANCE}

         >
            Dịch Vụ Bảo Trì
         </Link>,
         type: 'vertical',
         children: [
            {
               key: MAINTENANCE_ACT_1,
               label: <Link to={URL.MAINTENANCES.REGULAR_AIR_CONDITIONING_MAINTENANCE} style={{ textDecoration: 'none' }}>
                  Bảo trì máy lạnh
               </Link>,
            },
            {
               key: MAINTENANCE_ACT_2,
               label: <Link to={URL.MAINTENANCES.CLEANING_THE_WASHING_MACHINE} style={{ textDecoration: 'none' }}>
                  Bảo trì máy giặt
               </Link>,
            },
         ]
      },
      {
         icon: <ProfileOutlined style={{ fontSize: '30px' }} />,
         key: CONTACT_ACT,
         label: <Link to={URL.CONTACT_US}
         >
            Liên hệ
         </Link>,
      }
   ]

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
                  <li className={className({ 'active': location.pathname.substring(1) === HOME_ACT ||  location.pathname.substring(1) === ""})}>
                     <Link to={URL.HOME}
                     >
                        Trang Chủ
                     </Link>
                  </li>
                  <li className={className({ 'active': location.pathname.substring(1) === INTRODUCTION_ACT })}>
                     <Link to={URL.INTRODUCTION}>
                        Giới Thiệu
                     </Link>
                  </li>
                  <li
                     className={className({
                        'active': location.pathname.substring(1) === REPAIRSERVICE_ACT ||
                           location.pathname.substring(1) === REPAIRSERVICE_ACT_1 ||
                           location.pathname.substring(1) === REPAIRSERVICE_ACT_2 ||
                           location.pathname.substring(1) === REPAIRSERVICE_ACT_3
                     })}>
                     <Dropdown menu={{ items: repairserviceItems }} placement="bottomRight" arrow>
                        <Link to={URL.REPAIR_SERVICE}
                        >
                           Dịch Vụ Sửa Chữa
                           <i className="fa-solid fa-caret-down"></i>
                        </Link>
                     </Dropdown>
                  </li>
                  <li
                     className={className({
                        'active': location.pathname.substring(1) == MAINTENANCE_ACT ||
                           location.pathname.substring(1) == MAINTENANCE_ACT_1 ||
                           location.pathname.substring(1) == MAINTENANCE_ACT_2
                     })}>
                     <Dropdown menu={{ items: maintenanceItems }} placement="bottomRight" arrow>
                        <Link to={URL.MAINTENANCE}
                        >
                           Dịch Vụ Bảo Trì
                           <i className="fa-solid fa-caret-down"></i>
                        </Link>
                     </Dropdown>
                  </li>
                  <li className={className({ 'active': location.pathname.substring(1) === CONTACT_ACT })}>
                     <Link to={URL.CONTACT_US}>
                        Liên hệ
                     </Link>
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
                  <i className="fa-solid fa-bars"></i>
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
                     defaultSelectedKeys={HOME_ACT}
                     selectedKeys={location.pathname.substring(1)}
                     onClick={() => setOpenDrawer(false)}
                     items={menuItem}
                  />
               </Drawer>
            </div>
         </div>


      </div>
   )
}

export default Nav
