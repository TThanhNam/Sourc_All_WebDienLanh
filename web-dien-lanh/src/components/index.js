import React from 'react'
import Header from './header/Header'
import './index.scss'
import Nav from './nav/Nav'
import Content from './content'
import Footer from './footer/Footer'
import '../css/colo.scss'
const index = () => {
    return (
        <div className='main'>
            <Header/>
            <Nav/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default index
