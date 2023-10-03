"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "app/Home/components/Works/Works.scss";
import "swiper/scss";
import { HolizonScroll } from "@/app/components/Scroll/Scroll";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";

export const HomeWorks = () => {
    return (
        <section className="homeWorks container">
            <ContentsTitle enTitle={"Works"} jaTitle={"私たちのアーカイブ"}/>
            <Swiper
                className="homeWorks__swiper"
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={10000}
                breakpoints={{
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }}
                modules={[Autoplay]}
                loop={true}
            >
                <SwiperSlide>
                    <img src="/images/Home/catering.jpg" alt="image" />
                    <span>事業名</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Home/catering4.JPG" alt="image" />
                    <span>事業名</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Home/catering6.jpg" alt="image" />
                    <span>事業名</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Home/catering2.jpg" alt="image" />
                    <span>事業名</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Home/catering3.jpg" alt="image" /
                    ><span>事業名</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?.</span>
                </SwiperSlide>
            </Swiper>

            <HolizonScroll addClass={"homeWorks__holizonScroll"} />

        </section>
    )
}