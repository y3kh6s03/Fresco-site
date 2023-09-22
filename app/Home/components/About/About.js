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
                        私たちについて
                    </span>
                </h2>
                <div className="homeAbout__title__image"></div>
            </div>
            <div className="homeAbout__description">
                <p className="homeAbout__description__p">
                    フレスコカンパニーは、北信地域を中心に施設給食事業を展開し、全国各地に向けてケータリン
                    グ事業などを行う”食の専門企業”です。みなさまの笑顔をつくるあらゆる食体験を提供していま
                    す。
                </p>
                <LgButton href={"#"} buttonName={"About"} />


                <div className="homeAbout__description__inner">
                    <div className="homeAbout__description__image1"></div>
                    <div className="homeAbout__description__image2"></div>
                </div>
            </div>
        </section>
    )
}