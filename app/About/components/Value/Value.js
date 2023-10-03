"use client"

import {motion} from "framer-motion"

import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle"
import "app/About/components/Value/Value.scss"

export const Value = () => {
    return (
        <section className="value container">
            <ContentsTitle enTitle={"Value"} jaTitle={"私たちの価値観"} />


            <div className="value__contents">
                <div className="value__contents__title">
                    <h3 className="value__contents__title__h3">
                        たくさんの笑顔をつくるために、私たちが大切にしている価値観。
                    </h3>
                </div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    viewport={{ once: true }}
                    className="value__contents__description">
                    考えることを諦めず、情熱を持って行動します。<br />
                    <br />
                    思いやりを忘れず、気持ちに寄り添います。<br />
                    <br />
                    ものごとへ誠実に向き合い、信頼関係を築きます。<br />
                    <br />
                    より良い未来のために挑戦し続けます。<br />
                    <br />
                    成長のために学び続けます。<br />
                    <br />
                    感謝の気持ちを持って、社会や地域に貢献します。<br />
                    <br />
                </motion.div>
            </div>
        </section >
    )
}