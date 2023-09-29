"use client"

import { DetailContent } from "@/app/Service/[slug]/components/components/DetailContent";
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero";
import { usePathname } from "next/navigation";

export const Detail = () => {

    const detailHeroItem = {
        enTitle: "Kyushoku",
        jaTitle: "給食受託事業",
        src: "/images/Home/kyushoku.jpg",
        headline: "長野市、上田市、千曲市を中心に、老健施設、特養施設、グループホーム、障害者支援施設などの施設へ給食を提供するサービスです。栄養基準にのっとった献立の立案、食材発注、調理までを一気通貫して行っています。"
    }

    return (
        <>
            <SubPageHero item={detailHeroItem} />
            <DetailContent/>
        </>
    )
}