import React from 'react'
import logo from '../assets/logo.png'
import footer from '../assets/footer.jpg'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className='h-[1250px] md:h-[500px] bg-cover bg-center bg-no-repeat relative px-5' style={{ backgroundImage: `url(${footer})` }}>
            <img src={logo} className='absolute top-[540px] md:top-[150px]' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 absolute top-[660px] md:top-[300px]'>
                <div>
                    <h1 className='text-2xl text-white font-semibold mb-2'>Addreess</h1>
                    <p className='text-white text-lg leading-7 w-3/5 mb-14'>
                        Jobify Inc Canada. 545 Younge St,
                        Suite 11 Toronto, Ontario M4K 6F4
                    </p>

                    <div className='flex gap-11 text-white mb-9'>
                        <HashLink to='/' className='hover:text-red-500 cursor-pointer'>HOME</HashLink>
                        <HashLink to='/about#top' className='hover:text-red-500 cursor-pointer'>ABOUT</HashLink>
                        <HashLink to='/services#top' className='hover:text-red-500 cursor-pointer'>SERVICES</HashLink>
                        <HashLink to='/shop#top' className='hover:text-red-500 cursor-pointer'>SHOP</HashLink>
                        <HashLink to='/contact#top' className='hover:text-red-500 cursor-pointer'>CONTACT</HashLink>
                    </div>
                </div>



                <div className='text-white'>
                    <h1 className='text-2xl font-semibold mb-2'>Contact Us</h1>
                    <p className='mb-2'>(+71) 897648934</p>
                    <p className='mb-4'>name@domain.com</p>
                    <div className='flex gap-3 mb-7'>
                        <Facebook size={32} className='hover:text-red-500 cursor-pointer hover:transition hover:ease-in hover:duration-500' />
                        <Twitter size={32} className='hover:text-red-500 cursor-pointer hover:transition hover:ease-in hover:duration-500' />
                        <Instagram size={32} className='hover:text-red-500 cursor-pointer hover:transition hover:ease-in hover:duration-500' />
                    </div>
                </div>


                <div className='text-white mr-5 lg:w-1/2 lg:-ml-24'>
                    <h1 className='text-2xl font-semibold mb-2'>Newsletter</h1>
                    <input className='mb-5 outline-none border-2 border-[#dbdada] bg-[#dbdada] p-4 w-full' type='text' placeholder='Enter your email' />
                    <button className='border-2 border-red-600 bg-red-600 px-6 py-4'>SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer