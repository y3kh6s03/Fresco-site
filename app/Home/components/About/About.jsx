"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import { LgButton } from "@/app/components/Button/Button"
import "app/Home/components/About/About.scss"
import { useRef } from "react"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"

export const HomeAbout = ({ variants }) => {

    const [firstRef, secondRef, thirdRef] = [useRef(null), useRef(null), useRef(null)];
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: firstRef
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: secondRef
    });
    const { scrollYProgress } = useScroll({
        target: thirdRef
    });
    const transformYValue1 = useTransform(scrollYProgress1, [0, 1], [50, 150])
    const transformYValue2 = useTransform(scrollYProgress2, [0, 1], [0, 30])
    const transformXValue = useTransform(scrollYProgress, [0, 1], [0, 30])


    return (
        <section className="homeAbout">
            <ContentsTitle enTitle={"About"} jaTitle={"私たちについて"} />

            <motion.div
                ref={firstRef}
                style={{ y: transformYValue1 }}
                className="homeAbout__title__image"></motion.div>

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
                <LgButton href={"/About"} buttonName={"About"} />


                <div className="homeAbout__description__inner">
                    <motion.div
                        ref={secondRef}
                        style={{ y: transformYValue2 }}
                        className="homeAbout__description__image1">
                    </motion.div>
                    <motion.div
                        ref={thirdRef}
                        style={{ x: transformXValue }} className="homeAbout__description__image2"></motion.div>
                </div>
            </div>
        </section>
    )
}