"use client"
import { usePathname } from "next/navigation";

import detailItems from "app/Service/[slug]/components/components/DetailContent.json";
import { DetailContent } from "@/app/Service/[slug]/components/components/DetailContent";
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero";

export const Detail = () => {

    const router = usePathname();
    const path = router.replace("/Service/", "");
    const contentItem = detailItems.filter((detailItem) => {
        return path === detailItem.slug;
    })

    const detailHeroItem = {
        enTitle: contentItem[0].slug,
        jaTitle: contentItem[0].jaTitle,
        src: contentItem[0].src,
        headline: contentItem[0].heroHeadline
    }

    return (
        <>
            <SubPageHero item={detailHeroItem} />
            <DetailContent contentItem={contentItem} />
        </>
    )
}