"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

import workContentsItem from "app/Works/components/Contents/Contents.json"
import "app/Works/components/Contents/Contents.scss";
import { ContactButton } from "@/app/components/Button/Button";

export const Contents = () => {

    const scrollTargets = {
        firstRef: useRef(null),
        secondRef: useRef(null),
        thirdRef: useRef(null),
        forthRef: useRef(null),
    }


    const { scrollYProgress: first } = useScroll({
        target: scrollTargets.firstRef,
    })
    const { scrollYProgress: second } = useScroll({
        target: scrollTargets.secondRef,
    })
    const { scrollYProgress: third } = useScroll({
        target: scrollTargets.thirdRef,
    })
    const { scrollYProgress: forth } = useScroll({
        target: scrollTargets.forthRef,
    })

    const scales = {
        first : useTransform(first, [0, 1], [1, 1.1]),
        second : useTransform(second, [0, 1], [1, 1.1]),
        third : useTransform(third, [0, 1], [1, 1.1]),
        forth : useTransform(forth, [0, 1], [1, 1.1]),
    }




    return (
        <div className="worksContents__wrapper">
            {
                workContentsItem.map((Item, index) => {
                    const targerRef = scrollTargets[Item.ref]
                    const scaleStyle = scales[Item.scale]
                    return (
                        <section id={Item.enTitle} key={index} className="worksContents container">
                            <div className="worksContents__inner">
                                <div className="worksContents__inner__title">
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: .5,
                                            ease: [0.83, 0, 0.17, 1]
                                        }}
                                        className="worksContents__inner__title__bar"></motion.span>
                                    <h3 className="worksContents__inner__title__h3">
                                        {Item.enTitle}
                                        <span>{Item.jaTitle}</span>
                                    </h3>
                                    <motion.div
                                        initial={{ clipPath: "polygon(0 0,0 0, 0 100%, 0 100%)" }}
                                        whileInView={{ clipPath: "polygon(0 0,100% 0, 100% 100%, 0 100%)" }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: .5,
                                            delay: .5,
                                            ease: [0.83, 0, 0.17, 1]
                                        }}
                                        className="worksContents__inner__title__image">
                                        <motion.img
                                            ref={targerRef}
                                            style={{ scale: scaleStyle }}
                                            src={Item.image} alt="works-image" />
                                    </motion.div>
                                </div>
                                <h4 className="worksContents__inner__headline">
                                    customer: <br />
                                    {Item.customer}&nbsp;さま
                                </h4>
                                <p className="worksContents__inner__description">
                                    {Item.description}
                                </p>
                            </div>

                            <div src="" alt="" className="worksContents__subimage" >
                                <img src={Item.subImage} alt="works-image" />
                            </div>
                        </section>
                    )
                })
            }
            < ContactButton />
        </div>
    )
}