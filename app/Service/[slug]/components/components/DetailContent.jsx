
import { LgButton } from "@/app/components/Button/Button";
import "app/Service/[slug]/components/components/DetailContent.scss"

export const DetailContent = ({contentItem}) => {

    console.log(contentItem);

    return (
        <section className="detailContent container">

            <div className="detailContent__inner">
                <div className="detailContent__inner__description">
                    <h3>
                        {contentItem[0].headline1}
                    </h3>
                    <p>
                        {contentItem[0].description1}
                    </p>
                </div>

                <div className="detailContent__inner__image">
                    <img src={contentItem[0].image1} alt="detail-image" />
                </div>
            </div>
            <div className="detailContent__inner">
                <div className="detailContent__inner__description">
                    <h3>
                        {contentItem[0].headline2}

                    </h3>
                    <p>
                        {contentItem[0].description2}
                    </p>
                </div>

                <div className="detailContent__inner__image">
                    <img src={contentItem[0].image2} alt="detail-image" />
                </div>
            </div>

            <LgButton href={"/Service"} buttonName={"Service list"}/>
        </section>
    )
}