import React from 'react'
import test from '../assets/test.png'
import icon from '../assets/icon.png'
import icon_right from '../assets/icon_right.png'

const ClientCard = ({ client }) => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center'>
                    <img src={test} height={80} width={80} />
                </div>
                <div className='border-2 border-white bg-white rounded-tl-[70px] rounded-tr-[70px] rounded-bl-[70px] rounded-br-[70px] justify-center items-center text-center mx-12 h-[340px] md:h-72 lg:h-[300px] lg:mx-36 xl:mx-64 xl:h-[250px]'>
                    <div className='flex justify-start ml-8 mt-8 sm:mt-12 md:mt-8 xl:mt-6 xl:ml-12'>
                        <img src={icon} />
                    </div>
                    <p className='text-center w-auto h-auto mt-6 mx-8 sm:mt-12 sm:w-11/12 md:mt-7'>
                        {client.para}
                    </p>
                    <div className='flex justify-end mt-5 sm:mt-9 md:mt-6 mr-7 xl:mr-12 xl:mt-6'>
                        <img src={icon_right} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientCard