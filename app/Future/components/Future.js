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

    return (
        <>
            <SubPageHero item={FutureHeroItem} />
            <FirstContent />
            <SecondContent />
            <ThirdContent />
        </>
    )
}