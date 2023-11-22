import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import mics from '../exports/shopExports'
import ShopCircle from './ShopCircle'
import Header from './Header'
import Footer from './Footer'
import loader from '../assets/loading.gif'
import { useDispatch, useSelector } from 'react-redux'

const Shop = () => {

  const pathname = useLocation()
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pathname.pathname === '/shop') {
      setTimeout(() => {
        dispatch({ type: 'loading', payload: false })
      }, 1500)
    }
  }, [])

  return (
    <>
      {
        loading && pathname.pathname === '/shop'
          ? <div className='flex justify-center'>
            <img src={loader} />
          </div>
          : <>
            {pathname.pathname !== '/' ? <Header /> : ''}
            <div className='mb-16'>
              <div data-aos="fade-down" data-aos-duration="1000">
                <h1 className='text-3xl font-bold text-center mb-3'>Our <span>{pathname.pathname === '/' ? 'Mics' : 'Shop'}</span></h1>
                <p className='text-center text-[#b5b1b1] text-lg px-12 mb-20 md:px-24 lg:px-44 xl:px-64'>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable. If you
                </p>
              </div>

              {/* For */}
              <div className='flex justify-center' data-aos="fade-up" data-aos-duration="1000">
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
            {pathname.pathname === '/shop' ? <Footer /> : ''}
          </>
      }
    </>
  )
}

export default Shop