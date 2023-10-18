"use client"

import { motion } from "framer-motion"

import "app/components/SubPageHero/SubPageHero.scss"

export const SubPageHero = ({ item }) => {
    return (
        <>
            <section className="subPageHero" id="hero">
                <div className="subPageHero__title">
                    <motion.h1
                        initial={{ y: "-150%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: .5,
                            delay: 1.3, ease: [0.83, 0, 0.17, 1] }}
                        className="subPageHero__title__h1">{item.enTitle.toUpperCase()}</motion.h1>
                    <motion.span
                        animate={{ scaleX: .1 }}
                        transition={{ duration: .8, delay: 1.6, ease: [0.83, 0, 0.17, 1] }}
                        className="subPageHero__title__holizon"></motion.span>
                    <motion.span
                        initial={{ x: "100", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{duration: .5, delay: 1.8, ease: [0.83, 0, 0.17, 1]}}
                        className="subPageHero__title__span">
                        {item.jaTitle}
                    </motion.span>
                </div>
                <div className="subPageHero__image">
                    <img src={item.src} alt="subpageHero-image" className="subPageHero__image__img" />
                </div>
            </section>

            <h3 className="subPageHero__headline">
                {item.headline.split("\n").map((text, index)=>{
                    return(
                        <span key={index}>
                            {text}<br/>
                        </span>
                    )
                })}
            </h3>
        </>
    )
}