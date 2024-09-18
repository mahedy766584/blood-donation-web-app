/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroContent from './HeroContent';

// hero background image;
import heroBg1 from "../../../assets/heroImages/heroBg8.webp"
import heroBg2 from "../../../assets/heroImages/heroBg1.jpg"
import heroBg3 from "../../../assets/heroImages/heroBg2.jpg"
import heroBg4 from "../../../assets/heroImages/heroBg3.jpg"
import heroBg5 from "../../../assets/heroImages/heroBg4.jpg"
import heroBg6 from "../../../assets/heroImages/heroBg6.webp"
import heroBg7 from "../../../assets/heroImages/heroBg7.jpeg"
import heroBg8 from "../../../assets/heroImages/heroBg8.webp"
import heroBg9 from "../../../assets/heroImages/heroBg5.jpg"



const Hero = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide> <HeroContent heroImg={heroBg8}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg1}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg2}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg3}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg4}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg5}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg6}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg7}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg8}/> </SwiperSlide>
                    <SwiperSlide> <HeroContent heroImg={heroBg9}/> </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end" >
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle stroke='red' cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span className='text-[#EA062B]' ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default Hero;