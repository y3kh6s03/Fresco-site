"use client"

import { motion } from "framer-motion"

import "app/components/ContentsTitle/ContentsTitle.scss"

export const ContentsTitle = ({ enTitle, jaTitle }) => {
    return (
        <div className="contents__title">
            <div className="contents__title__inner">
                <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }}
                    transition={{
                        duration: .5,
                        delay: .3,
                        ease: [0.83, 0, 0.17, 1]
                    }}
                    viewport={{ once: true, amount: 0 }}
                >
                    {enTitle}
                </motion.h2>
            </div>
            <motion.span
                whileInView={{ scaleX: .08 }}
                transition={{ duration: .5, delay: .3, ease: [0.83, 0, 0.17, 1] }}
                viewport={{ once: true, amount: 0 }}
                className="contents__title__holizon"></motion.span>
            <motion.span
                initial={{ opacity: 0, x: "5%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .5, delay: .5, ease: [0.83, 0, 0.17, 1] }}
                viewport={{ once: true, amount: 0 }}
                className="contents__title__jaText">
                {jaTitle}
            </motion.span>
        </div >
    )
}