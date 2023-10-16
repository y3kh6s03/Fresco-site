"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, stagger, useAnimate } from "framer-motion";

import heroItems from "app/components/Header/Header.json"
import "app/Home/components/Hero/Hero.scss"
import { HomeAbout } from "@/app/Home/components/About/About"

export const Hero = ({ variants }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        gsap.to(".hero", {
            y: "-90vh",
            marginBottom: "-90vh",
            ease: "Power3.easeInOut",
            duration: .5,

            scrollTrigger: {
                trigger: ".hero",
                start: "bottom center+=40%",
                toggleActions: "play none none reverse"
            }
        })
    }, [])


    return (
        <>
            <div className="hero loading" id="hero">
                <div className="hero__title">
                    <div className="hero__title__inner">
                        <span className="hero__title__inner__span">
                            FRESCO COMPANY
                        </span>
                        <h1>
                            Meal For Smile.
                        </h1>
                        <span className="hero__title__inner__line"></span>
                    </div>
                    <span className="hero__title__span">
                        Bringing Joy Through Food
                    </span>
                </div>

                <div className="hero__link">
                    <Link href="#">
                        <span className="hero__link__line"></span>
                        <span>Recruit Site</span>
                        <span>フレスコ・カンパニー採用情報</span>
                    </Link>
                    <Link href="#">
                        <span className="hero__link__line"></span>
                        <span>Catering Site</span>
                        <span>あなたの食べたい場所・食事をプレオーダー</span>
                    </Link>
                </div>

                <nav className="hero__nav">
                    <ul className="hero__nav__ul">
                        {
                            heroItems.map((heroItem, index) => {
                                return (
                                    <motion.li
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.5 + 0.05 * index, type: "tween", ease: [0.83, 0, 0.17, 1] }}
                                        key={heroItem.title} className={`hero__nav__li ${heroItem.title}`}>
                                        <Link href={heroItem.url}>
                                            {heroItem.title}
                                            <span>{heroItem.jaTitle}</span>
                                        </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <HomeAbout variants={variants} />
        </>
    )
}