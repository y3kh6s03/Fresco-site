import { Mission } from "@/app/About/components/Mission/Mission";
import { Value } from "@/app/About/components/Value/Value";
import { Philosophy } from "@/app/About/components/Philosophy/Philosophy";
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero";
import { Message } from "@/app/About/components/Message/Message";
import { ContactButton } from "@/app/components/Button/Button";


export const About = () => {
    const AboutHeroItem = {
        enTitle: "About",
        jaTitle: "私たちについて",
        src: "/images/About/AboutHero.jpg"
    }
    return (
        <>
            <SubPageHero item={AboutHeroItem} />
            <Philosophy />
            <Mission />
            <Value />
            <Message />
            <ContactButton />
        </>
    )
}
