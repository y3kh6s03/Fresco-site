import { Hero } from "@/app/Home/components/Hero/Hero"
import { HomeFuture } from "@/app/Home/components/Future/Future"
import { HomeService } from "@/app/Home/components/Service/Service"
import { HomeWorks } from "@/app/Home/components/Works/Works"
import { HomeRecruit } from "@/app/Home/components/Recruit/Recruit"
import { HomeInfo } from "@/app/Home/components/Info/Info"
import { HomeContact } from "@/app/Home/components/Contact/Contact"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"

export const Home = () => {

    const variants = {
        initial: {
            opacity: 0,
            x: 100
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay: .3,
            type: "tween"
        }
    }

    return (
        <>
            <Hero variants={variants}/>
            <HomeFuture variants={variants}/>
            <HomeService/>
            <HomeWorks/>
            <HomeRecruit/>
            <HomeInfo/>
            <HomeContact/>
        </>
    )
}
