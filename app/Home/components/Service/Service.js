import Link from "next/link"

import homeServiceItems from "app/Home/components/Service/Service.json"
import "app/Home/components/Service/Service.scss"
import { LgButton } from "@/app/components/Button/Button"

export const HomeService = () => {
    return (
        <section className="homeService container">

            <div className="homeService__title contents__title">
                <h2 className="homeService__title__h2">
                    Service
                    <span className="homeService__title__span">
                        フレスコ・カンパニーの事業について
                    </span>
                </h2>
            </div>

            <ul className="homeService__ul">
                {homeServiceItems.map((homeServiceItem) => {
                    return (
                        <li className={`homeService__ul__li ${homeServiceItem.enTitle.toLowerCase()}`}>
                            <div className="homeService__ul__li__image">
                                <img src={homeServiceItem.src} alt="" />
                                <p>Service <span>{homeServiceItem.num}</span></p>
                            </div>
                            <Link href={homeServiceItem.href}>
                                <span>
                                    {homeServiceItem.enTitle}
                                </span>
                                <span>
                                    {homeServiceItem.jaTitle}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="circle">
                <div className="circle__wrapper">
                    <svg className="circle__wrapper__inner" viewBox="0 0 100 100">
                        <path id="circle__wrapper__inner__path" className="circle__wrapper__inner__path" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                        <text className="circle__wrapper__inner__text">
                            <textPath href="#circle__wrapper__inner__path">
                                Fresco company. Meal for smile.
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

        </section>

    )
}