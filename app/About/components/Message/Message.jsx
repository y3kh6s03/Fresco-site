"use client"

import {motion} from "framer-motion";

import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";
import "app/About/components/Message/Message.scss";

export const Message = () => {

    return (
        <section className="message container">

            <ContentsTitle enTitle={"Message"} jaTitle={"メッセージ"} />

            <div className="message__inner">
                <div className="message__inner__image">
                    <img src={"/images/About/president.jpg"} alt="" className="message__inner__image__img" />
                </div>

                <div className="message__inner__description">
                    <h4 className="message__inner__description__h3">
                        笑顔のために美味しいをお届けする。
                    </h4>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        viewport={{ once: true }}
                        className="message__inner__description__p">
                        フレスコ・カンパニーは介護福祉施設の給食受託事務を主な業務として2004年に創業し、皆様
                        のおかげでここまで成長することができました。<br />
                        <br />
                        現在は給食事業の枠を超え、直営給食サポート事業、ケータリング事業、食品物販などお客様
                        のニーズに合わせた新たなフードビジネスを展開し様々な挑戦をしております。
                        <br />フレスコ(fresco)とはイタリア語で「新しい・新鮮」という意味です。いつも新しい発想で食材も新鮮、新しいことの
                        チャレンジすることを忘れず、笑顔のために美味しいをお届けすることが私共の使命と考え社会
                        とともに成長していく企業を目指します。
                    </motion.p>
                    <div className="message__inner__description__author">
                        <p className="message__inner__description__author__p">
                            代表取締役
                        </p>
                        <span className="message__inner__description__author__span">
                            藤田 将徳
                        </span>

                    </div>
                </div>
            </div>
        </section>
    )
}