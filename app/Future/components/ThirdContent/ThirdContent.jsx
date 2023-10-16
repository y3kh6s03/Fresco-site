import { motion } from "framer-motion"

import { ContactButton } from "@/app/components/Button/Button";
import "app/Future/components/ThirdContent/ThirdContent.scss";
import { forwardRef } from "react";

export const ThirdContent = forwardRef(({ transformYValue }, ref) => {
        return (
            <section className="thirdContent container">

                <div className="thirdContent__title">
                    <span className="thirdContent__title__span">
                        Energize Those Around You.
                    </span>
                </div>
                <div className="thirdContent__inner">
                    <div className="thirdContent__inner__description">
                        <h3 className="thirdContent__inner__description__h3">
                            地域のみなさまとともに<br />長野を元気に
                        </h3>
                        <p className="thirdContent__inner__description__p">
                            私たちのサービスは、地域のみなさまや生産者のみなさまが欠かせません。地域課題の解決に
                            向けて、そして長野の素晴らしさをさらに多くの人に知っていただけるように。調理場を飛び出して、地域の一員として長野県を元気にする地域貢献活動にも力を注いでいきます。<br />
                            <br />
                            2022年にはファイネスト合同会社を設立し、戸倉上山田温泉街でフローズンヨーグルト専門店
                            「フロスタ」をオープン。地場のフルーツや特産品とコラボしたメニュー開発を通じて、県内外を問わずたくさんの人に長野の美味しさをお届けしています。また、千曲市・あんずの里を保全するシェア農園事業もスタート。大地の恵みをいただくだけでなく、恵みを与えてくれる環境の保全や農業課題の解決に向けたアクションも行っています。
                        </p>
                    </div>
                    <motion.div
                        ref={ref}
                        style={{ y: transformYValue }}
                        className="thirdContent__inner__image">
                        <img src="/images/Future/sun.jpg" alt="thirdContents-image" />
                    </motion.div>
                </div>

                <ContactButton />
            </section>
        )
    }
)