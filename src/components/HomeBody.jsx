import React from 'react'
import rightSide from '../assets/right_side.png'

const HomeBody = () => {

    return (
        <div className='mb-32 lg:flex' >
            <div className='px-6 mt-16 mb-8 lg:mt-56 xl:ml-28' data-aos="fade-right" data-aos-duration="700">
                <h1 className='text-5xl md:text-6xl text-white font-bold'>The Air Mic</h1>
                <p className='text-lg md:text-lg lg:text-lg text-white mt-12'>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable. If you
                </p>
                <button className='font-semibold border-2 border-white bg-white rounded-lg px-14 py-4 mt-10 hover:text-white hover:bg-[#a034a4] hover:border-[#a034a4] hover:transition-all hover:ease-in hover:duration-500'>Book Now</button>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
                <img src={rightSide} className='h-[603px] w-[400px] mt-8 pb-12 ml-7 sm:h-[620px] sm:w-[480px] sm:ml-16 md:h-[620px] md:w-[490px] md:pl-7 lg:h-[800px] lg:w-[5000px] xl:h-[900px] xl:w-[600px] xl:mr-[750px] xl:-mt-12' />
            </div>
        </div>
    )
}

export default HomeBody