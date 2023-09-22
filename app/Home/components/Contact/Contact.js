import { ContactButton } from "@/app/components/Button/Button"
import "app/Home/components/Contact/Contact.scss"

export const HomeContact =()=>{
    return(
        <section className="homeContact container">
                <div className="homeContact__inner__title contents__title">
                    <h2 className="homeContact__inner__title__h2">
                        Contact
                        <span className="homeContact__inner__title__span">
                            お問い合わせ
                        </span>
                    </h2>
                </div>
                <div className="homeContact__inner">
                    <p className="homeContact__inner__description">
                        事業やお仕事など、<br />お気軽にお問い合わせください。
                    </p>
                    <ContactButton />
                </div>
        </section>
    )
}