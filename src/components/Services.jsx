import React from 'react'
import services from '../exports/serviesExports'
import ServicesCard from './ServicesCard'
import Header from './Header'
import { useLocation } from 'react-router-dom'

const Services = () => {
  const pathname = useLocation()

  return (
    <>
      {pathname.pathname !== '/' ? <Header/> : ''}
      <div className='mb-16'>
        <div className='lg:px-24 mb-12'>
          <h1 className='flex justify-center text-5xl font-bold'>Our Services</h1>
          <p className='text-[#b5b1b1] px-12 md:px-24 text-center lg:text-lg leading-7 mt-5'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you
          </p>
        </div>

        <div className='md:flex md:px-32'>
          {
            services.map(service => {
              return (
                <ServicesCard key={service.id} service={service} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Services