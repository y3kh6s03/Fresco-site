"use client"

import { forwardRef, useRef } from "react";
import { motion } from "framer-motion"

import "app/Future/components/FirstContent/FirstContent.scss";

export const FirstContent = forwardRef(
    ({transformXValue, transformYValue }, ref) => {

        return (
            <section className="firstContent container">

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

                <div className="firstContent__title">
                    <span className="firstContent__title__span">
                        The Act Of Eating Is The Act Of Living.
                    </span>
                </div>
                <div className="firstContent__inner">
                    <div className="firstContent__inner__description">
                        <h3 className="firstContent__inner__description__h3">
                            食べることは、<br />生きること。
                        </h3>
                        <p className="firstContent__inner__description__p">
                            私たちは創業以来、介護福祉施設の給食受託業務を通じて利用者のみなさまの笑顔あふれる食卓のお手伝いをしてきました。食事からとる栄養は、生きていくために欠かせないものです。<br />
                            しかし、生きるために必要なことは食事だけではありません。健康づくりや地球環境保全など人生
                            のためのあらゆる物事を、食事を通じてよりよくしていきたい。<br />
                            <br />
                            食べることは、生きること。<br />
                            <br />
                            フレスコカンパニーは、”食べる”を通じて今を生きる私たちや未来の子供たちに笑顔あふれる人
                            生を提供します。
                        </p>
                    </div>
                    <div
                        className="firstContent__inner__image">
                        <motion.div
                            ref={ref}
                            style={{ y: transformYValue }} className="firstContent__inner__image__img1">
                            <img src="/images/Future/fruits.jpg" alt="firstContent__image" />
                            <img src="/images/Future/rice.jpg" alt="firstContent__image" />
                            <img src="/images/Future/liveAndMeal.jpg" alt="firstContent__image" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            style={{ x: transformXValue }}
                            className="firstContent__inner__image__img2">
                            <img src="/images/Future/rice2.jpg" alt="firstContent__image" />
                            <img src="/images/Future/liveAndMeal2.jpg" alt="firstContent__image" />
                            <img src="/images/Future/liveAndMeal2.jpg" alt="firstContent__image" />
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }
)