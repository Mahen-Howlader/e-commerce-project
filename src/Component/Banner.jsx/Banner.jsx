import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Banner() {
    const bannerData = [
        {
            image: "https://icms-image.slatic.net/images/ims-web/78c5cc09-f50f-40f7-bd6c-f0815e9546a6.jpg_1200x1200.jpg"
        },
        {
            image: "https://icms-image.slatic.net/images/ims-web/702f1519-f505-4037-9984-f7a66bfca6d4.jpg"
        },
        {
            image: "https://icms-image.slatic.net/images/ims-web/47ab63c9-96ab-47b5-b774-7157c15a17a1.jpg"
        },
        {
            image: "https://icms-image.slatic.net/images/ims-web/6fd47e45-aa82-45c1-9c34-8afee392f1b0.jpg"
        },
    ];
    return (
        <>
            <Swiper  navigation={true}  loop={true} modules={[Navigation]} className="mySwiper h-[40vh] sm:h-[50vh] md:h-[60] lg:h-[80vh] rounded-lg w-full">
                {
                    bannerData.map(item => <SwiperSlide ><img src={item?.image} alt="" className='h-full w-full bg-black ' /></SwiperSlide>)
                }

            </Swiper>
        </>
    );
}