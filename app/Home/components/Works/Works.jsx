"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/scss";
import { Autoplay } from "swiper/modules"

import Contents from "app/Works/components/Contents/Contents.json"
import "app/Home/components/Works/Works.scss";
import { HolizonScroll } from "@/app/components/Scroll/Scroll";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";

export const HomeWorks = () => {
    return (
        <section className="homeWorks container">
            <ContentsTitle enTitle={"Works"} jaTitle={"私たちのアーカイブ"} />
            <Swiper
                className="homeWorks__swiper"
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={10000}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    600: {
                        slidesPerView: 1.5,
                        spaceBetween: 0,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1280: {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
                    },
                }}
                modules={[Autoplay]}
                loop={true}
            >
                {Contents.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link href={`/Works#${item.enTitle}`}>
                                <img src={item.image} alt="image" />
                                <span>{item.jaTitle}</span>
                                <span>{item.customer}</span>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <HolizonScroll addClass={"homeWorks__holizonScroll"} />

        </section>
    )
}