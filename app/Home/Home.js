import { Hero } from "@/app/Home/components/Hero/Hero"
import { HomeAbout } from "@/app/Home/components/About/About"
import { HomeFuture } from "@/app/Home/components/Future/Future"
import { HomeService } from "@/app/Home/components/Service/Service"
import { HomeWorks } from "@/app/Home/components/Works/Works"

export const Home = () => {
    return (
        <>
            <Hero />
            <HomeAbout/>
            <HomeFuture/>
            <HomeService/>
            <HomeWorks/>
        </>
    )
}