import React from 'react'
import HomePage from './home/index.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Intro from './intro/Intro.js'
import Maintenance from './maintenance/Maintenance.js'
import RACM from './maintenance/RACM/RACM.js'
import ACC from './maintenance/ACC/ACC.js'
import ACGP from './maintenance/ACGP/ACGP.js'
import CWM from './maintenance/CWM/CWM.js'
const Index = () => {
  return (
    <div>
      <Routes>
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
