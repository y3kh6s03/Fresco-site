import { motion, useScroll, useTransform } from "framer-motion";

import { LgButton } from "@/app/components/Button/Button";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";
import "app/Home/components/Recruit/Recruit.scss";

export const HomeRecruit = ({ variants }) => {

    const { scrollYProgress } = useScroll();
    const scrollY = useTransform(scrollYProgress, [0, 1], [1, 1.5])

    return (
        <section className="homeRecruit container">
            <motion.div
                className="homeRecruit__image__container"
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1]
                }}
                viewport={{ once: true }}
            >
                <motion.div
                    inlist={{ scale: 1 }}
                    style={{ scale: scrollY }}
                // whileInView={{
                //     scale: 2
                // }}
                >
                </motion.div>
            </motion.div>
            <div className="homeRecruit__inner">
                <ContentsTitle enTitle={"Recruit"} jaTitle={"私たちの求人"} />
                <div className="homeRecruit__inner__content">
                    <h4>食で未来を変えていく。</h4>
                    <motion.p
                        variants={variants}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        生まれてからこの世を去るまで、誰もが行う食事。<br />
                        しかし、食の可能性は私たちの体を生かすことだけにとどまりません。<br />
                        たくさんの人の健康を、環境保全を、生産者のみなさまの課題解決を、
                        あらゆることを食のチカラで実現したい。<br />
                        食のチカラを信じる仲間とともに、新たな未来を一緒に作りませんか?<br />
                    </motion.p>
                </div>
                <LgButton href={"#"} buttonName={"Recruit"} />
            </div>
        </section>
    )
}