"use client"

import { motion } from "framer-motion"

import { LgButton } from "@/app/components/Button/Button"
import serviceItems from "app/Service/components/Contents/Contents.json"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"
import "app/Service/components/Contents/Contents.scss"

export const Contents = () => {



    return (
        <>
            {
                serviceItems.map((item) => {
                    return (
                        <section key={item.enTitle} className="serviceContents container">
                            <ContentsTitle enTitle={item.enTitle.toUpperCase()} jaTitle={item.jaTitle} />

                            <div className="serviceContents__inner">
                                <div className="serviceContents__inner__description">
                                    <div className="serviceContents__inner__description__headline">
                                        <h3>
                                            {item.jaHeadline}
                                        </h3>
                                        <span>
                                            {item.enHeadline}
                                        </span>
                                    </div>
                                    <motion.p
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1,
                                            delay: .5,
                                            ease: [0.83, 0, 0.17, 1]
                                        }}
                                        className="serviceContents__inner__description__p">
                                        {item.description.split("\n").map((splitItem, index) => {
                                            return (
                                                <>
                                                    <span key={index}>
                                                        {splitItem}
                                                    </span>
                                                    <br />
                                                </>
                                            )
                                        })}
                                    </motion.p>
                                    <LgButton href={item.href} buttonName={item.enTitle} />
                                </div>
                                <motion.div
                                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                                    whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                    viewport={{once: true}}
                                    transition={{
                                        duration: 1,
                                        delay: .3,
                                        ease: [0.83, 0, 0.17, 1]
                                     }}
                                    className="serviceContents__inner__image">
                                    <img src={item.image} alt={item.enTitle} />
                                </motion.div>
                            </div>
                        </section>
                    )
                })

            }
        </>
    )
}