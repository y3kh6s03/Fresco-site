import { LgButton } from "@/app/components/Button/Button";
import "app/Home/components/Recruit/Recruit.scss";

export const HomeRecruit = () => {
    return (
        <section className="homeRecruit container">
            <div className="homeRecruit__image"></div>
            <div className="homeRecruit__inner">
                <div className="homeRecruit__inner__title contents__title">
                    <h2 className="homeRecruit__inner__title__h2">
                        Recruit
                        <span className="homeRecruit__inner__title__span">
                            フレスコ・カンパニーの求人
                        </span>
                    </h2>
                </div>
                <div className="homeRecruit__inner__content">
                    <h4>食で未来を変えていく。</h4>
                    <p>
                        生まれてからこの世を去るまで、誰もが行う食事。<br />
                        しかし、食の可能性は私たちの体を生かすことだけにとどまりません。<br />
                        たくさんの人の健康を、環境保全を、生産者のみなさまの課題解決を、
                        あらゆることを食のチカラで実現したい。<br />
                        食のチカラを信じる仲間とともに、新たな未来を一緒に作りませんか?<br />
                    </p>
                </div>
                <LgButton href={"#"} buttonName={"Recruit"} />
            </div>
        </section>
    )
}