"use client"

import { LgButton } from "@/app/components/Button/Button"
import "app/Home/components/About/About.scss"

export const HomeAbout = () => {
    return (
        <section className="homeAbout">
            <div className="homeAbout__title contents__title">
                <h2 className="homeAbout__title__h2">
                    About
                    <span className="homeAbout__title__h2__span">
                        大切にしていること
                    </span>
                </h2>
                <div className="homeAbout__title__image"></div>
            </div>
            <div className="homeAbout__description">
                <p className="homeAbout__description__p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim assumenda modi cumque illo quod laudantium? Optio explicabo incidunt enim quo id nesciunt cum odit itaque omnis. Rerum, laboriosam aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam accusantium laborum amet quos provident laboriosam obcaecati? Atque ex maiores totam, magnam id facilis, quisquam alias sed laborum excepturi distinctio!
                </p>
                <LgButton href={"#"} buttonName={"About"}/>


                <div className="homeAbout__description__inner">
                    <div className="homeAbout__description__image1"></div>
                    <div className="homeAbout__description__image2"></div>
                </div>
            </div>
        </section>
    )
}