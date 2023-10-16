"use client"

import { forwardRef, useRef } from "react";
import { motion } from "framer-motion"

import Items from "app/Future/components/Content/Contents.json"
import "app/Future/components/Content/Content.scss";

export const Content = forwardRef(
    ({ transformXValue, transformYValue }, ref) => {

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
                                    <span className="content__title__span">
                                        {item.enTitle}
                                    </span>
                                    <span className="content__title__span__num">
                                        {item.num}
                                    </span>
                                </div>
                                <div className="content__inner">
                                    <div className="content__inner__description">
                                        <h3 className="content__inner__description__h3">
                                            {item.jaTitle}
                                        </h3>
                                        <p className="content__inner__description__p">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="content__inner__image">
                                        {item.image2
                                            ?
                                            <motion.div
                                                ref={ref}
                                                style={{ y: transformYValue }} className="content__inner__image__img1">
                                                <img src={item.image1} alt="content__image" />
                                                <img src={item.image2} alt="content__image" />
                                                <img src={item.image3} alt="content__image" />
                                            </motion.div>
                                            :
                                            <motion.div
                                                ref={ref}
                                                style={{ y: transformYValue }}
                                                className="content__inner__image__img1">
                                                <img src={item.image1} alt="content__image" />
                                            </motion.div>
                                        }
                                        {
                                            item.image4
                                                ?
                                                <motion.div
                                                    ref={ref}
                                                    style={{ x: transformXValue }}
                                                    className="content__inner__image__img2">
                                                    <img src={item.image4} alt="content__image" />
                                                    <img src={item.image5} alt="content__image" />
                                                    <img src={item.image6} alt="content__image" />
                                                </motion.div>
                                                :
                                                <span></span>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
)