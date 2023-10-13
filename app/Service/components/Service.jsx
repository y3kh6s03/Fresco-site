import { ServiceContents } from "@/app/Service/components/Contents/ServiceContents"
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero"

export const Service = () => {
    const serviceHero = {
        enTitle: "Service",
        jaTitle: "わたしたちの出来ること",
        src: "/images/Service/ServiceHero.jpg",
        headline: ""
    }
    return (
        <>
            <SubPageHero item={serviceHero} />
            <ServiceContents />
        </>
    )
}