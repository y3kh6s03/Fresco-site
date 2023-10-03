
import "app/Future/components/SecondContent/SecondContent.scss";
import { motion } from "framer-motion"

export const SecondContent = ({ref, transformYValue}) => {
    return (
        <section className="secondContent container">

            <div className="secondContent__title">
                <span className="secondContent__title__span">
                    Create Healthy.
                </span>
            </div>
            <div className="secondContent__inner">
                <div className="secondContent__inner__description">
                    <h3 className="secondContent__inner__description__h3">
                        人生100年時代の<br />健康をつくる。
                    </h3>
                    <p className="secondContent__inner__description__p">
                        私たちが生きていくのに欠かすことができない「食」。<br />
                        <br />
                        近年の研究により、食材の栄養素が私たちの体に与えるさまざまな影響が明らかになってきています。これからの健康づくりには、カロリーや塩分量といった従来の栄養バランスはもちろん、最新研究によるエビデンスを取り入れた食の提案が必要です。そのために、腸内環境改善や予防医学の観点から考える食の提案を強化していきます。
                    </p>
                </div>
                <div className="secondContent__inner__image">
                    <motion.div
                    ref={ref}
                    style={{y: transformYValue}}
                    className="secondContent__inner__image__img">
                        <img src="/images/Future/healthy.jpg" alt="secondContent__image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}