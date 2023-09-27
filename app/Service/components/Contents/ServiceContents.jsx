import "app/Service/components/Contents/ServiceContents.scss"

export const ServiceContents = () => {
    return (
        <section className="serviceContents container">
            <div className="serviceContents__title contents__title">
                <h2 className="serviceContents__title__h2">
                    Kyushoku
                    <span className="serviceContents__title__h2__span">
                        給食受託事業
                    </span>
                </h2>
                <div className="serviceContents__title__image"></div>
            </div>

            <div className="serviceContents__inner">
                <div className="serviceContents__inner__description">
                    <div className="serviceContents__inner__description__headline">
                        <h3>
                            五感で食事を楽しむ
                        </h3>
                        <span>
                            Enjoying through the five senses.
                        </span>
                    </div>
                    <p className="serviceContents__inner__description__p">
                        老健施設、特養施設、グループホーム、障害者支援施設などの施設へ給食を提供するサービスです。<br />
                        栄養基準にのっとった献立の立案、食材発注、調理までを一気通貫して行っています。地元・長野の食材や四季折々の旬の食材をふんだんに使ったバラエティ豊かな日常の献立に加えて、季節の移り変わりを感じるイベント食、施設様に合わせた企画食などもご提案。<br />
                        <br />
                        おいしく食べることはもちろん、楽しく食べる時間を大切にする「五感で楽しむ食体験」を提供します。
                    </p>
                </div>
                <div className="serviceContents__inner__image">
                    <img src="/images/Home/kyushoku.jpg" alt="" />
                </div>
            </div>

        </section>
    )
}