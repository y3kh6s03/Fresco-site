import "app/Works/components/Contents/WorksContents.scss";

export const WorksContents = () => {
    return (
        <section className="worksContents container">
            <div className="worksContents__inner">
                <div className="worksContents__inner__title">
                    <h3 className="worksContents__inner__title__h3">
                        SUPPORT
                        <span>直営給食サポート</span>
                    </h3>
                    <div className="worksContents__inner__title__image">
                        <img src="/images/Home/catering.jpg" alt="works-image" />
                    </div>
                </div>
                <h4 className="worksContents__inner__headline">
                    customer: <br />
                    千曲市ワーケーションウエルカムデイズ
                </h4>
                <p className="worksContents__inner__description">
                    千曲市観光局と株式会社ふろしきやが運営する「千曲市ワーケーションウェルカムデイズ」にて、出張シェフを実施。千曲市・あんずの里や姨捨の棚田などあらゆるロケーションで青空レストランを行いました。
                </p>
            </div>

            <div src="" alt="" className="worksContents__subimage" >
                <img src="/images/Home/catering3.jpg" alt="works-image" />
            </div>
        </section>
    )
}