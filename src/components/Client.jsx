import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Client.css'
import clients from '../exports/clientExports'
import ClientCard from './ClientCard'

const Client = () => {

    const settings = {
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='mb-16'>
            <div className='border-2 h-[700px] xl:h-[650px] w-full' style={{ backgroundImage: 'linear-gradient(62deg, #9a145b 12%, #95146d 19%, #8915a0 30%, #7f16ca 100%)' }}>
                <h1 className='mb-5 text-white text-4xl font-bold text-center mt-12'>Our Client Says</h1>
                <p className='text-white text-center leading-7 mb-7 px-11 md:px-28 lg:px-48 xl:px-96'>
                    Contrary to popular belief,
                    Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical
                    Latin literature from
                </p>

                <Slider {...settings}>
                    {
                        clients.map(client => {
                            return (
                                <ClientCard key={client.id} client={client} />
                            )
                        })
                    }
                </Slider>

            </div>
        </div>
    )
}

export default Client