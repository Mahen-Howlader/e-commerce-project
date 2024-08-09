import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
// https://i.ibb.co/kgKcW2D/bannermens.png
// https://i.ibb.co/H2y2cv7/banneroffer.png
// https://i.ibb.co/c84ffZx/bannerwomens.png
// https://i.ibb.co/P9tzqLr/bannerkids.png

export default function Banner() {
    const bannerData = [
        {
            image: "https://i.ibb.co/kgKcW2D/bannermens.png"
        },
        {
            image: "https://i.ibb.co/H2y2cv7/banneroffer.png"
        },
        {
            image: "https://i.ibb.co/c84ffZx/bannerwomens.png"
        },
        {
            image: "https://i.ibb.co/P9tzqLr/bannerkids.png"
        },
    ];
    return (
        <>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper mt-20 h-96  bg-red-500 rounded-lg w-full">
                {
                    bannerData.map((item, index) => <SwiperSlide key={index}><img src={item?.image} alt="" className='!h-full w-full bg-black ' /></SwiperSlide>)
                }
            </Swiper>
        </>
    );
}