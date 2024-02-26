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
import ACC from './maintenance/ACC/ACC.js'
import ACGP from './maintenance/ACGP/ACGP.js'
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
        <Route index path='/' element={<HomePage/>} />
        <Route index path='/home-page' element={<HomePage/>} />
        <Route index path='/introduction' element={<Intro/>} />
        <Route index path='/maintenance' element={<Maintenance/>}/>
        <Route index path='/RACM' element={<RACM/>}/>
        <Route index path='/ACGP' element={<ACGP/>}/>
        <Route index path='/CWM' element={<CWM/>}/>
        <Route index path='/ACC' element={<ACC/>}/>.
      </Routes>
    </div>
  )
}

export default Index
