"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"


import { FirstContent } from "@/app/Future/components/FirstContent/FirstContent"
import { SecondContent } from "@/app/Future/components/SecondContent/SecondContent"
import { ThirdContent } from "@/app/Future/components/ThirdContent/ThirdContent"
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero"

export const Future = () => {

    const FutureHeroItem = {
        enTitle: "Future",
        jaTitle: "私たちのこれから",
        src: "/images/Future/FutureHero.jpg"
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });
    const transformYValue = useTransform(scrollYProgress, [0, 1], [0, 50])
    const transformXValue = useTransform(scrollYProgress, [0, 1], [0, 30])

    return (
        <>
            <SubPageHero item={FutureHeroItem} />
            <FirstContent ref={ref} transformXValue={transformXValue} transformYValue={transformYValue}/>
            <SecondContent ref={ref} transformXValue={transformXValue} transformYValue={transformYValue}/>
            <ThirdContent ref={ref} transformXValue={transformXValue} transformYValue={transformYValue}/>
        </>
    )
}