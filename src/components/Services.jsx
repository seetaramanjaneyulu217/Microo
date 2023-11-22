import React, { useEffect } from 'react'
import services from '../exports/serviesExports'
import ServicesCard from './ServicesCard'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import loader from '../assets/loading.gif'
import { useDispatch, useSelector } from 'react-redux'

const Services = () => {

  const pathname = useLocation()
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pathname.pathname === '/services') {
      setTimeout(() => {
        dispatch({ type: 'loading', payload: false })
      }, 1500)
    }
  }, [])

  return (
    <>
      {
        loading && pathname.pathname === '/services'
          ? <div className='flex justify-center'>
            <img src={loader} />
          </div>
          : <>
            {pathname.pathname !== '/' ? <Header /> : ''}
            <div className='mb-16'>
              <div className='lg:px-24 mb-12 transition ease-linear' initial="hidden" data-aos="fade-down" data-aos-duration="1000">
                <h1 className='flex justify-center text-5xl font-bold'>Our Services</h1>
                <p className='text-[#b5b1b1] px-12 md:px-24 text-center lg:text-lg leading-7 mt-5'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                </p>
              </div>

              <div className='md:flex md:px-32' data-aos="fade-up" data-aos-duration="1000">
                {
                  services.map(service => {
                    return (
                      <ServicesCard key={service.id} service={service} />
                    )
                  })
                }
              </div>
            </div>
            {pathname.pathname === '/services' ? <Footer /> : ''}
          </>
      }
    </>
  )
}

export default Services