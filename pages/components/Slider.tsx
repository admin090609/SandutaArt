import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] sm:[70%] text-center">
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
            <div className="w-[100%] sm:[70%] text-center">
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
    </div>
  );
}
