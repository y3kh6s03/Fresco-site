"use client"

import { motion } from "framer-motion";

import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";
import "app/About/components/Philosophy/Philosophy.scss";

export const Philosophy = () => {
    return (
        <section className="philosophy container">

            <ContentsTitle enTitle={"Philosophy"} jaTitle={"企業理念"} />

            <div className="philosophy__contents">
                <div className="philosophy__contents__title">
                    <h3 className="philosophy__contents__title__h3">
                        MEAL FOR SMILE.
                    </h3>
                </div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{duration: 1, ease: [0.83, 0, 0.17, 1]}}
                    viewport={{ once: true }}
                    className="philosophy__contents__description">
                    おいしいものを食べたとき、<br />
                    私たちは笑顔の花を咲かせます。<br />
                    食は、しあわせをつくる種だと<br />
                    私たちは考えています。<br />
                    新しい何かと繋がったり、<br />
                    知らなかった世界の扉をたたいたり、<br />
                    ワクワクする瞬間をおいしさとともに届けたい。<br />
                    フレスコカンパニーは、食事という体験を通じて、<br />
                    全ての人を笑顔にします。
                </motion.div>
            </div>
        </section>
    )
}