import "app/About/components/Philosophy/Philosophy.scss";

export const Philosophy = () => {
    return (
        <section className="philosophy container">
            <div className="philosophy__title contents__title">
                <h2 className="philosophy__title__h2">
                    Philosophy
                    <span className="philosophy__title__span">
                        企業理念
                    </span>
                </h2>
            </div>

            <div className="philosophy__contents">
                <div className="philosophy__contents__title">
                    <h3 className="philosophy__contents__title__h3">
                        MEAL FOR SMILE.
                    </h3>
                </div>
                <div className="philosophy__contents__description">
                    おいしいものを食べたとき、<br />
                    私たちは笑顔の花を咲かせます。<br />
                    食は、しあわせをつくる種だと<br />
                    私たちは考えています。<br />
                    新しい何かと繋がったり、<br />
                    知らなかった世界の扉をたたいたり、<br />
                    ワクワクする瞬間をおいしさとともに届けたい。<br />
                    フレスコカンパニーは、食事という体験を通じて、<br />
                    全ての人を笑顔にします。
                </div>
            </div>
        </section>
    )
}