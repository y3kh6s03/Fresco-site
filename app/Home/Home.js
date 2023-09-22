import { Hero } from "@/app/Home/components/Hero/Hero"
import { HomeFuture } from "@/app/Home/components/Future/Future"
import { HomeService } from "@/app/Home/components/Service/Service"
import { HomeWorks } from "@/app/Home/components/Works/Works"
import { HomeRecruit } from "@/app/Home/components/Recruit/Recruit"
import { HomeInfo } from "@/app/Home/components/Info/Info"
import { HomeContact } from "@/app/Home/components/Contact/Contact"

export const Home = () => {
    return (
        <>
            <Hero />
            {/* <HomeAbout/> */}
            <HomeFuture/>
            <HomeService/>
            <HomeWorks/>
            <HomeRecruit/>
            <HomeInfo/>
            <HomeContact/>
        </>
    )
}