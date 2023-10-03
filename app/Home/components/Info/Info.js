
import { MdButton } from "@/app/components/Button/Button";
import { ContentsTitle } from "@/app/components/ContentsTitle/ContentsTitle";

import "app/Home/components/Info/Info.scss";
import Link from "next/link";

export const HomeInfo = () => {
    return (
        <section className="homeInfo container">
            <ContentsTitle enTitle={"Infomation"} jaTitle={"インフォメーション"}/>

            <div className="homeInfo__link">

                <MdButton href={"#"} buttonEnName={"Support"} buttonJaName={"直営給食サポート事業"} image={"/images/Home/dietician3.jpg"} />
                <MdButton href={"#"} buttonEnName={"Catering"} buttonJaName={"ケータリング事業"} image={"/images/Home/catering3.jpg"} />
                <MdButton href={"#"} buttonEnName={"Taisei Sangyo"} buttonJaName={"大成産業"} image={"/images/Home/taisei.jpg"} />
            </div>

        </section>
    )
}