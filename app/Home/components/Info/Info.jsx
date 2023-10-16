
import { motion, stagger, useInView } from "framer-motion";

import { MdButton } from "@/app/components/Button/Button";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";
import infoItems from "app/Home/components/Info/Info.json"
import "app/Home/components/Info/Info.scss";


export const HomeInfo = () => {

    return (
        <section className="homeInfo container">
            <ContentsTitle enTitle={"Infomation"} jaTitle={"インフォメーション"} />
            <div className="homeInfo__link">
                {infoItems.map((item, i) => {
                    return (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.075, 0.82, 0.165, 1]
                            }}
                            className="homeInfo__link__button">
                            <MdButton href={item.href} buttonEnName={item.buttonEnName} buttonJaName={item.buttonJaName} image={item.image} />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}