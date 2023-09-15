import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  const swiperRef = useRef<typeof Swiper | null>(null); // Specificăm tipul referinței ca Swiper | null

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) { // Accesăm swiper-ul folosind .swiper
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) { // Accesăm swiper-ul folosind .swiper
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative mt-10">
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] sm:w-[70%] text-center">
              <Image
                src="/images/banner.JPG"
                alt="banner"
                width={100}
                height={100}
                layout="responsive"
                className="border border-[#B1B1B1] inline-block"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] sm:w-[70%] text-center">
              <Image
                src="/images/banner.JPG"
                alt="banner"
                width={100}
                height={100}
                layout="responsive"
                className="border border-[#B1B1B1] inline-block"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div onClick={goPrev}>
        <Image
          src="/images/arrow.png"
          width={100}
          height={100}
          alt="Previous"
        className="rotate-180"
        />
      </div>
      <div onClick={goNext}>
        <Image src="/images/arrow.png" width={100} height={100} alt="Next" />
      </div>
    </div>
  );
}
