import { usePathname } from "next/navigation";

import detailItems from "app/Service/[slug]/components/components/DetailContent.json";
import "app/Service/[slug]/components/components/DetailContent.scss"

export const DetailContent = () => {

    const router = usePathname();
    const path = router.replace("/Service/", "");

    const contentItem = detailItems.filter((detailItem) => {
        return path === detailItem.slug;
    })

    console.log(contentItem[0]);



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
                    <img src="/images/Service/salada.jpg" alt="detail-image" />
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
                    <img src="/images/Service/salada.jpg" alt="detail-image" />
                </div>
            </div>
        </section>
    )
}

// パス＝＝＝json.slugだった場合
// filterを使ってしていすることで実現できるかな