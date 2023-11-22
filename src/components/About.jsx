import React, { useEffect } from 'react'
import aboutImage from '../assets/about_img.jpg'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import loader from '../assets/loading.gif'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'

const About = () => {

  const pathname = useLocation()
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if(pathname.pathname === '/about') {
      setTimeout(() => {
        dispatch({ type: 'loading', payload: false })
      }, 1500)
    }
  }, [])

  return (
    <>
      {
        loading && pathname.pathname === '/about'
          ? <div className='flex justify-center'>
            <img src={loader} />
          </div>
          :
          <>
            {pathname.pathname !== '/' ? <Header /> : ''}
            <div className='mb-16 border-2 h-[950px] md:h-[1000px] lg:h-[570px] xl:h-[530px] w-full lg:flex md:px-24' style={{ backgroundImage: 'linear-gradient(to left, #8f1588 4%, #8316cc 32%' }}>
              <div className='px-5 mt-16 md:w-11/12 md:ml-10' data-aos="fade-right" data-aos-duration="1000">
                <h1 className='text-4xl text-white font-semibold font-inherit mb-3'>About Us</h1>
                <p className='text-left leading-7 w-full lg:w-11/12 text-white mb-1'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscureContrary to popular belief,
                  Lorem Ipsum is not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure
                </p>
                <button className='mb-10 font-semibold border-2 border-white bg-white rounded-lg px-14 py-4 mt-10 hover:text-white hover:bg-[#a034a4] hover:border-[#a034a4] hover:transition-all hover:ease-in hover:duration-500'>Read More</button>
              </div>

              <div className='px-5 w-auto md:pt-10 lg:w-11/12' data-aos="fade-left" data-aos-duration="1000">
                <img src={aboutImage} className='rounded-[50px] h-auto md:h-[400px]' />
              </div>

            </div>

            {pathname.pathname === '/about' ? <Footer /> : ''}
          </>
      }
    </>
  )
}

export default About