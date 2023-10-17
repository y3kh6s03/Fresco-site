"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

import workContentsItem from "app/Works/components/Contents/Contents.json"
import "app/Works/components/Contents/Contents.scss";
import { ContactButton } from "@/app/components/Button/Button";

export const Contents = () => {

    const scrollTarget = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget
    })
    const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 2])




    return (
        <div className="worksContents__wrapper">
            {
                workContentsItem.map((workContentItem, index) => {
                    return (
                        <section id={workContentItem.enTitle} key={index} className="worksContents container">
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
                                        {workContentItem.enTitle}
                                        <span>{workContentItem.jaTitle}</span>
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
                                            style={{ scale: scrollScale }}
                                            src={workContentItem.image} alt="works-image" />
                                    </motion.div>
                                </div>
                                <h4 className="worksContents__inner__headline">
                                    customer: <br />
                                    {workContentItem.customer}&nbsp;さま
                                </h4>
                                <p className="worksContents__inner__description">
                                    {workContentItem.description}
                                </p>
                            </div>

                            <div src="" alt="" className="worksContents__subimage" >
                                <img src={workContentItem.subImage} alt="works-image" />
                            </div>
                        </section>
                    )
                })
            }
            < ContactButton />
        </div>
    )
}