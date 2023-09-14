"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <Image
              src="/images/banner.JPG"
              alt="banner"
              width={100}
              height={50}
              layout='responsive'
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
              src="/images/banner.JPG"
              alt="banner"
              width={100}
              height={50}
              layout='responsive'
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
