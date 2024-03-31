import React from 'react'
import HomePage from './home/index.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Intro from './intro/Intro.js'
import RepairServices from './repair_services/RepairServices.js'
import AirConditionerRepairing from './repair_services/air_conditioner_repairing/AirConditionerRepairing.js'
import './index.scss'
import WashingMachineRepairService from './repair_services/washing_machine_repair_service/WashingMachineRepairService.js'
import RefrigeratorRepairService from './repair_services/refrigerator_repair_service/RefrigeratorRepairService.js'

import Maintenance from './maintenance/Maintenance.js'
import RACM from './maintenance/regular-air-conditioning-maintenance/RACM.js'
import CWM from './maintenance/cleaning_the_washing_machine/CWM.js'
import Contact from './contact/Contact.js'
import { URL } from '../../share/constance.js'
const Index = () => {
  return (
    <div className='content-all-continer'>

      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path={URL.HOME} element={<HomePage />} />
        <Route path={URL.INTRODUCTION} element={<Intro />} />
        <Route path={URL.REPAIR_SERVICE} element={<RepairServices />} />
        <Route path={URL.REPAIR_SERVICES.AIR_CONDITION_REPAIRING} element={<AirConditionerRepairing />} />
        <Route path={URL.REPAIR_SERVICES.WASHING_MACHINE_REPAIR_SERVICE} element={<WashingMachineRepairService />} />
        <Route path={URL.REPAIR_SERVICES.REFRIGERATOR_MACHINE_REPAIR_SERVICE} element={<RefrigeratorRepairService />} />
        <Route path={URL.MAINTENANCE} element={<Maintenance />} />
        <Route path={URL.MAINTENANCES.REGULAR_AIR_CONDITIONING_MAINTENANCE} element={<RACM />} />
        <Route path={URL.MAINTENANCES.CLEANING_THE_WASHING_MACHINE} element={<CWM />} />
        <Route path={URL.CONTACT_US} element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default Index
