import React, { useState } from 'react'

const ServicesCard = ({ service }) => {

    return (
        <>
            {/* Main div */}
            <div className='mb-7 hover:scale-110 hover:ease-in hover:duration-500 hover:cursor-pointer'>
                {/* For first circle and content */}
                <div className='flex flex-col justify-center items-center'>
                    {/* For circle */}
                    <div className='mb-8 rounded-full flex items-center justify-center h-72 w-72' style={{ backgroundImage: 'linear-gradient(139deg, #a71331 6%, #8a15ab 96%)' }}>
                        <img src={service.image} className='h-32' />
                    </div>

                    {/* For content */}
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-semibold text-center mb-2'>{service.heading}</h1>
                        <p className='text-[#5c5c5c] w-4/5 md:w-11/12 text-center'>{service.paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard