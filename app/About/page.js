import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero";


const About = () => {
    const AboutHeroItem = {
        enTitle: "About",
        jaTitle: "私たちについて",
        src: "/images/About/AboutHero.jpg"
    }
    return (
        <SubPageHero item={AboutHeroItem}/>
    )
}

export default About;