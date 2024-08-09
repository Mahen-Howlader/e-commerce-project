import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


function Offer() {
    const image = [
        {
            image: "https://i.ibb.co/2ZkPb8c/Yellow-Modern-Summer-Banner.png"
        },
        {
            image: "https://i.ibb.co/3cQYrKC/Red-Blue-Playful-Kids-Outing-Event-Outdoor-Banner.png"
        }
    ]
    return (
        <>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper mt-20  h-60 rounded-lg w-full">
            {
                image.map((item, index) => <SwiperSlide key={index}><img  src={item?.image} alt="" className='h-full w-full bg-black object-cover' /></SwiperSlide>)
            }

        </Swiper>
    </>
    );
}

export default Offer;