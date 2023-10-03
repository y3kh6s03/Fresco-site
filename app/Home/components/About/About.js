"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import { LgButton } from "@/app/components/Button/Button"
import "app/Home/components/About/About.scss"
import { useRef } from "react"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"

export const HomeAbout = ({variants}) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });
    const transformYValue = useTransform(scrollYProgress, [0, 1], [0, 50])
    const transformXValue = useTransform(scrollYProgress, [0, 1], [0, 30])


    return (
        <section className="homeAbout">
            <ContentsTitle enTitle={"About"} jaTitle={"私たちについて"}/>

            <div className="homeAbout__description">
                <motion.p
                    variants={variants}
                    initial="initial"
                    whileInView="whileInView"
                    transition="transition"

                    className="homeAbout__description__p">
                    フレスコカンパニーは、北信地域を中心に施設給食事業を展開し、全国各地に向けてケータリン
                    グ事業などを行う”食の専門企業”です。みなさまの笑顔をつくるあらゆる食体験を提供していま
                    す。
                </motion.p>
                <LgButton href={"#"} buttonName={"About"} />


                <div className="homeAbout__description__inner">
                    <motion.div
                        ref={ref}
                        style={{ y: transformYValue }}
                        className="homeAbout__description__image1">
                    </motion.div>
                    <motion.div
                        ref={ref}
                        style={{ x: transformXValue }} className="homeAbout__description__image2"></motion.div>
                </div>
            </div>
        </section>
    )
}