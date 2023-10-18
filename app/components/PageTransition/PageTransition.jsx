"use client"

import { motion } from "framer-motion"

import "app/components/PageTransition/PageTransition.scss";

export const PageTransition = ({ children }) => {
    return (
        <main>

            <motion.div
                className="slide-path"
                initial={{ clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" }}
                animate={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            >
                <motion.div
                    initial={{ scaleY: "100%" }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1, delay: 1, ease: [.22, 1, .36, 1] }}
                    className="slide-in"
                >
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
            >
                {children}
            </motion.div>
        </main>
    )
}