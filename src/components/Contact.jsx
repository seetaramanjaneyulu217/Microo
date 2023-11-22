import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import loader from '../assets/loading.gif'
import { useDispatch, useSelector } from 'react-redux'

const Contact = () => {

  const pathname = useLocation()
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: ''
  })

  const formSubmission = (e) => {
    e.preventDefault()
    window.sessionStorage.setItem("details", JSON.stringify(details))
  }

  useEffect(() => {
    if (pathname.pathname === '/contact') {
      setTimeout(() => {
        dispatch({ type: 'loading', payload: false })
      }, 1500)
    }
  }, [])

  return (
    <>
      {
        loading && pathname.pathname === '/contact'
          ? <div className='flex justify-center'>
            <img src={loader} />
          </div>
          : <>
            {pathname.pathname !== '/' ? <Header /> : ''}
            <div className='px-7 xl:px-44 transition-all ease-in duration-1000'>
              <div className='mb-7' data-aos="fade-right" data-aos-duration="1000">
                <h1 className='text-4xl font-bold mb-5'>Request a call back.</h1>
                <p className='text-start text-lg leading-7'>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour,
                  or raThere are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour,
                  or raThere are many variations of passages of Lorem
                </p>
              </div>

              <form onSubmit={formSubmission} data-aos="fade-left" data-aos-duration="1000">
                <div className='mb-7'>
                  <input onChange={(e) => setDetails({ ...details, name: e.target.value })} className='outline-none border-2 border-[#dbdada] bg-[#dbdada] p-4 w-full' type='text' placeholder='Your Name' />
                </div>

                <div className='md:flex md:justify-between'>
                  <div className='mb-7 md:w-96 lg:w-[550px] xl:w-[560px]'>
                    <input onChange={(e) => setDetails({ ...details, email: e.target.value })} className='outline-none border-2 border-[#dbdada] bg-[#dbdada] p-4 w-full' type='email' placeholder='Email' />
                  </div>
                  <div className='mb-7 md:w-96 lg:w-[550px] xl:w-[560px]'>
                    <input onChange={(e) => setDetails({ ...details, phonenumber: e.target.value })} className='outline-none border-2 border-[#dbdada] bg-[#dbdada] p-4 w-full' type='text' placeholder='Phone Number' />
                  </div>
                </div>

                <div className='mb-7'>
                  <textarea onChange={(e) => setDetails({ ...details, message: e.target.value })} className='outline-none border-2 border-[#dbdada] bg-[#dbdada] p-4 w-full' placeholder='Message' rows="3" cols="20"></textarea>
                </div>

                <div className='flex justify-center'>
                  <button className='border-2 border-[#0c0909] bg-[#0c0909] text-white py-5 px-24 hover:text-white hover:bg-[#6f42c1] hover:border-[#6f42c1] hover:transition-all hover:ease-in hover:duration-500'>Send</button>
                </div>
              </form>
            </div>
            {pathname.pathname === '/contact' ? <Footer /> : ''}
          </>
      }
    </>
  )
}

export default Contact