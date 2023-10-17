"use client"

import { createContext, useRef } from "react"
import { useScroll, useTransform } from "framer-motion"


import { Content } from "@/app/Future/components/Content/Content"
// import { SecondContent } from "@/app/Future/components/SecondContent/SecondContent"
// import { ThirdContent } from "@/app/Future/components/ThirdContent/ThirdContent"
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero"
import { ContactButton } from "@/app/components/Button/Button"

export const Future = () => {

    const FutureHeroItem = {
        enTitle: "Future",
        jaTitle: "私たちのこれから",
        src: "/images/Future/FutureHero.jpg",
        headline: ""
    }

    // const firstRef = useRef(null);
    // const secondRef = useRef(null);
    // const thirdRef = useRef(null);
    // const { scrollYProgress: scrollYProgress1 } = useScroll({
    //     target: firstRef
    // });
    // const { scrollYProgress: scrollYProgress2 } = useScroll({
    //     target: secondRef
    // });
    // const { scrollYProgress: scrollYProgress3 } = useScroll({
    //     target: thirdRef
    // });
    // const transformYValue1 = useTransform(scrollYProgress1, [0, 1], [0, 30])
    // const transformYValue2 = useTransform(scrollYProgress2, [0, 1], [0, 50])
    // const transformYValue3 = useTransform(scrollYProgress3, [0, 1], [0, 50])
    // const transformXValue1 = useTransform(scrollYProgress1, [0, 1], [0, 20])

    return (
        <>
            <SubPageHero item={FutureHeroItem} />
            <Content/>
            <ContactButton/>
        </>
    )
}