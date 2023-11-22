import React, { useEffect, useState } from 'react'
import banner2 from '../assets/banner2.jpg'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'
import Services from '../components/Services'
import About from '../components/About'
import Shop from '../components/Shop'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'loading', payload: true })
    }, [])

    return (
        <>
            <div className='mb-28 h-[1072px] md:h-[1180px] lg:h-[990px] bg-cover bg-center bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${banner2})` }}>
                <Header />
                <HomeBody />
            </div>

            <Services />
            <About />
            <Shop />
            <Client />
            <Contact />
            <Footer />
        </>
    )
}

export default Home