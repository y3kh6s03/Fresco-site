import { LgButton } from "@/app/components/Button/Button";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";
import "app/Home/components/Recruit/Recruit.scss";

export const HomeRecruit = () => {
    return (
        <section className="homeRecruit container">
            <div className="homeRecruit__image"></div>
            <div className="homeRecruit__inner">
                <ContentsTitle enTitle={"Recruit"} jaTitle={"私たちの求人"} />
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