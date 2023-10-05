import { Contents } from "@/app/Contact/components/contents/Contents"
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero"

export const Contact = () => {

    const contactHero = {
        enTitle: "Contact",
        jaTitle: "お問い合わせ",
        src: "/images/Contact/contact.jpg",
        headline: "ご不明点やご要望などがございましたら、\n以下よりお気軽にお問い合わせください。"
    }

    return (
        <>
            <SubPageHero item={contactHero} />
            <Contents />
        </>
    )
}