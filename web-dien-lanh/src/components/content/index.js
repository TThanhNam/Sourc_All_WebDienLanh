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
import RACM from './maintenance/RACM/RACM.js'
import CWM from './maintenance/CWM/CWM.js'
const Index = () => {
  return (
    <div className='content-all-continer'>

        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/home-page' element={<HomePage />} />
          <Route path='/introduction' element={<Intro />} />
          <Route path='/repair-services' element={<RepairServices />} />
          <Route path='/air-condition-repairing' element={<AirConditionerRepairing />} />
          <Route path='/washing-machine-repair-service' element={<WashingMachineRepairService />} />
          <Route path='/refrigerator-machine-repair-service' element={<RefrigeratorRepairService />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/RACM' element={<RACM />} />
          <Route path='/CWM' element={<CWM />} />
        </Routes>
    </div>
  )
}

export default Index
