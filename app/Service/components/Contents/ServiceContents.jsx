

import { LgButton } from "@/app/components/Button/Button"
import serviceItems from "app/Service/components/Contents/ServiceContents.json"
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"
import "app/Service/components/Contents/ServiceContents.scss"

export const ServiceContents = () => {



    return (
        <>
            {
                serviceItems.map((serviceItem) => {
                    return (
                        <section key={serviceItem.enTitle} className="serviceContents container">
                            <ContentsTitle enTitle={"Service"} jaTitle={"わたしたちの事業について"}/>

                            <div className="serviceContents__inner">
                                <div className="serviceContents__inner__description">
                                    <div className="serviceContents__inner__description__headline">
                                        <h3>
                                            {serviceItem.jaHeadline}
                                        </h3>
                                        <span>
                                            {serviceItem.enHeadline}
                                        </span>
                                    </div>
                                    <p className="serviceContents__inner__description__p">
                                        {serviceItem.description.split("\n").map((splitItem, index) => {
                                            return (
                                                <>
                                                    <span key={index}>
                                                        {splitItem}
                                                    </span>
                                                    <br />
                                                </>
                                            )
                                        })}
                                    </p>
                                    <LgButton href={serviceItem.href} buttonName={serviceItem.enTitle} />
                                </div>
                                <div className="serviceContents__inner__image">
                                    <img src={serviceItem.image} alt={serviceItem.enTitle} />
                                </div>
                            </div>
                        </section>
                    )
                })

            }
        </>
    )
}