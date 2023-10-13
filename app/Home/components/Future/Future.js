"use client"

import { LgButton } from "@/app/components/Button/Button"
import "app/Home/components/Future/Future.scss"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"

export const HomeFuture = ({ variants }) => {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const vh = window.innerHeight;
        console.log(vh)

        gsap.to(".homeFuture__path", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "Power4.easeInOut",
            duration: 2,

            scrollTrigger: {
                trigger: ".homeFuture",
                start: `top-=${.5 * vh} bottom`,
                toggleActions: "play none none reverse",
            }
        })
        gsap.to(".homeFuture__description__image", {
            scale: 1.2,

            scrollTrigger: {
                trigger: ".homeFuture",
                start: `top-=${.5 * vh} bottom`,
                end: `bottom-=${.3 * vh} center`,
                scrub: true,
                markers: true
            }
        })
    }, [])

    return (
        <section className="homeFuture container">
            <ContentsTitle enTitle={"Future"} jaTitle={"私たちのこれから"} />
            <div className="homeFuture__path">
                <motion.div
                    className="homeFuture__description">
                    <h3 className="homeFuture__description__headline">
                        食を通じて、すこやかな未来をつくりたい
                    </h3>
                    <motion.p
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        transition={{
                            delay: .5,
                            type: "tween"
                        }}
                        className="homeFuture__description__p">
                        食事からとる栄養は、生きていくために欠かせないものです。<br />しかし、生きるために必要なことは
                        食事だけではありません。健康づくりや地球環境保全など人生のためのあらゆる物事を、食事を
                        通じてよりよくしていきたい。<br />
                        フレスコカンパニーは、”食べる”を通じて今を生きる私たちや未来の
                        子供たちに笑顔あふれる人生を提供します。
                    </motion.p>
                    <LgButton href={"/Future"} buttonName={"Future"} />
                    <div className="homeFuture__description__image"></div>
                </motion.div>
            </div>
        </section>
    )
}