import React from 'react'

const ShopCircle = ({ mic }) => {
    return (
        <>
            <div className='hover:scale-110 hover:ease-in hover:duration-500 hover:cursor-pointer rounded-full mb-10 h-72 w-72 md:mb-7 md:mx-7 md:h-80 md:w-80 lg:mb-8 lg:mx-16 lg:h-[350px] lg:w-[350px] flex justify-center items-center' style={{ backgroundImage: 'linear-gradient(#b0130c 35%, #8316cc 60%)' }}>
                <img src={mic.image} className='rounded-full h-[278px] w-[278px] md:h-[308px] md:w-[308px] lg:h-[338px] lg:w-[338px]' />
            </div>
        </>
    )
}

export default ShopCircle