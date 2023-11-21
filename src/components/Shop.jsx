import React from 'react'
import { useLocation } from 'react-router-dom'
import mics from '../exports/shopExports'
import ShopCircle from './ShopCircle'
import Header from './Header'

const Shop = () => {
  const pathname = useLocation()
  return (
    <>
      {pathname.pathname !== '/' ? <Header/> : ''}
      <div className='mb-16'>
        <div>
          <h1 className='text-3xl font-bold text-center mb-3'>Our <span>{pathname.pathname === '/' ? 'Mics' : 'Shop'}</span></h1>
          <p className='text-center text-[#b5b1b1] text-lg px-12 mb-20 md:px-24 lg:px-44 xl:px-64'>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you
          </p>
        </div>

        {/* For */}
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
              mics.map(mic => {
                return (
                  <ShopCircle key={mic.id} mic={mic} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop