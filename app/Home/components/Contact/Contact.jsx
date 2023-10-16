import { ContactButton } from "@/app/components/Button/Button"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"
import "app/Home/components/Contact/Contact.scss"

export const HomeContact =()=>{
    return(
        <section className="homeContact container">
            <ContentsTitle enTitle={"Contact"} jaTitle={"お問い合わせ"}/>
                <div className="homeContact__inner">
                    <p className="homeContact__inner__description">
                        事業やお仕事など、<br />お気軽にお問い合わせください。
                    </p>
                    <ContactButton />
                </div>
        </section>
    )
}