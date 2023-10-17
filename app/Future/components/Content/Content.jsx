"use client"

import { forwardRef, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

import Items from "app/Future/components/Content/Contents.json"
import "app/Future/components/Content/Content.scss";

export const Content = () => {

    return (
        <section className="content container">

            <motion.div
                initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{
                    duration: 1.2,
                    ease: [0.83, 0, 0.17, 1]
                }}
                viewport={{ once: true }}
                className="future__title">
                <h2
                    className="future__title__h2">
                    食を通じて、<br />すこやかな未来をつくりたい
                </h2>
            </motion.div>
            {
                Items.map((item, index) => {
                    return (
                        <div key={index} className="content__wrapper">
                            <div className="content__title">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{
                                        duration: .5,
                                        delay: .5
                                    }}
                                    className="content__title__span">
                                    {item.enTitle}
                                </motion.span>
                                <span className="content__title__span__num">
                                    {item.num}
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: .5 }}
                                    className="content__title__span__bar"></motion.span>
                            </div>
                            <div className="content__inner">
                                <div className="content__inner__description">
                                    <motion.h3
                                        initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{once: true}}
                                        transition={{
                                            duration: .5,
                                            delay: 1,
                                            ease: [0.83, 0, 0.17, 1]
                                        }}
                                        className="content__inner__description__h3"
                                    >
                                        {item.jaTitle}
                                    </motion.h3>
                                    <p className="content__inner__description__p">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="content__inner__image">
                                    {item.image2
                                        ?
                                        <div className="content__inner__image__img1">
                                            <img src={item.image1} alt="content__image" />
                                            <img src={item.image2} alt="content__image" />
                                            <img src={item.image3} alt="content__image" />
                                        </div>
                                        :
                                        <div className="content__inner__image__img1">
                                            <img src={item.image1} alt="content__image" />
                                        </div>
                                    }
                                    {
                                        item.image4
                                            ?
                                            <div
                                                className="content__inner__image__img2">
                                                <img src={item.image4} alt="content__image" />
                                                <img src={item.image5} alt="content__image" />
                                                <img src={item.image6} alt="content__image" />
                                            </div>
                                            :
                                            <span></span>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}