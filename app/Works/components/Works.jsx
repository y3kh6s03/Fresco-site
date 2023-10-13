import { WorksContents } from "@/app/Works/components/Contents/WorksContents"
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero"

export const Works = () => {
    const worksHeroItem = {
        enTitle: "Works",
        jaTitle: "わたしたちのアーカイブ",
        src: "/images/Works/WorksHero.jpg",
        headline: ""
    }
    return (
        <>
            <SubPageHero item={worksHeroItem} />
            <WorksContents />
        </>
    )
}

