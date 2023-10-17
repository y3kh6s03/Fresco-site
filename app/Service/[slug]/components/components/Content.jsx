
import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import { LgButton } from "@/app/components/Button/Button";
import "app/Service/[slug]/components/components/Content.scss"


export const Content = ({ contentItem }) => {

    const rightRef = useRef(null);
    const leftRef = useRef(null);

    const { scrollYProgress: firstTarget } = useScroll({
        target: rightRef
    });
    const { scrollYProgress: secondTarget } = useScroll({
        target: leftRef
    });

    const firstY = useTransform(firstTarget, [0, 1], [0, 35])
    const secondY = useTransform(secondTarget, [0, 1], [0, 35])

    const variants = {
        initial: {
            opacity: 0,
            x: 50
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 1,
            delay: .5
        }
    }

    return (
        <section className="detailContent container">

            <div className="detailContent__inner">
                <div className="detailContent__inner__description">
                    <motion.h3
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition="transition"
                    >
                        {contentItem[0].headline1}
                    </motion.h3>
                    <motion.p
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition="transition"
                    >
                        {contentItem[0].description1}
                    </motion.p>
                </div>

                <motion.div
                    ref={rightRef}
                    style={{ translateY: firstY }}
                    className="detailContent__inner__image">
                    <img src={contentItem[0].image1} alt="detail-image" />
                </motion.div>
            </div>
            <div className="detailContent__inner">
                <div className="detailContent__inner__description">
                    <motion.h3
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition="transition"
                    >
                        {contentItem[0].headline2}

                    </motion.h3>
                    <motion.p
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition="transition"
                    >
                        {contentItem[0].description2}
                    </motion.p>
                </div>

                <motion.div
                    ref={leftRef}
                    style={{ translateY: secondY }}
                    className="detailContent__inner__image">
                    <img src={contentItem[0].image2} alt="detail-image" />
                </motion.div>
            </div>

            <LgButton href={"/Service"} buttonName={"Service list"} />
        </section>
    )
}