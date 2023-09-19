"use client"

import "app/Home/components/Future/Future.scss"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export const HomeFuture = () => {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        // let tl = gsap.timeline();

        gsap.to(".homeFuture__path", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "Power4.easeInOut",
            duration: 3,

            scrollTrigger: {
                trigger: ".homeFuture",
                start: "top-=25% bottom",
                toggleActions: "play none none reverse",
                markers: true
            }
        })
        gsap.to(".homeFuture__path", {
            scale: 1.15,

            scrollTrigger: {
                trigger: ".homeFuture__path",
                start: "top-=60% bottom",
                scrub: true,
                markers: true
            }
        })
    }, [])
    return (
        <section className="homeFuture container">
            <div className="homeFuture__title contents__title">
                <h2 className="homeFuture__title__h2">
                    Future
                    <span className="homeFuture__title__span">
                        フレスコ・カンパニーのこれから
                    </span>
                </h2>
            </div>
            <div className="homeFuture__path">
                <div className="homeFuture__description">
                    <h3 className="homeFuture__description__headline">
                        私たちは、より健康的で持続可能な食事を提供し、人々の生活を豊かに
                    </h3>
                    <p className="homeFuture__description__p">
                        私たちのビジョンは、食事を通じて人々の健康と幸福を支え、社会に良い影響をもたらすことです。私たちは食事を単なる食べ物ではなく、生活の中心であり、幸福の源と捉えています。<br />

                        忙しい現代の生活では、健康を犠牲にすることがありますが、私たちはそうさせません。高品質な食材と栄養バランスに優れた食事を提供し、お客様の健康的な生活をサポートします。<br />

                        食事は生活の質に大きな影響を与えます。私たちは、品質と持続可能性を重視し、地域社会と環境への貢献に取り組み、食品供給の未来を築いています。<br />

                        私たちのビジョンは不変です。食事を通じて健康と幸福を提供し、食事革命の旗手として未来を切り拓いていきます。私たちと共に、健康な未来を築きましょう。
                    </p>
                    <div className="homeFuture__description__image"></div>
                </div>
            </div>
        </section>
    )
}