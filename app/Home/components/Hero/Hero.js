"use client"

import Link from "next/link"

import heroItems from "app/components/Header/Header.json"
import "app/Home/components/Hero/Hero.scss"
import { useEffect, useState } from "react"

export const Hero = () => {

    const [loadinAnimation, setLoadingAnimation] = useState(false);

    useEffect(() => {
        console.log(loadinAnimation);
        setLoadingAnimation(prev => !prev);
        console.log(loadinAnimation);
    }, [])

    return (
        <div className="hero loading">
            <div className="hero__title">
                <div className="hero__title__inner">
                    <span className="hero__title__inner__span">
                        FRESCO COMPANY
                    </span>
                    <h1>
                        Meal For Smile.
                    </h1>
                    <span className="hero__title__inner__line"></span>
                </div>
                <span className="hero__title__span">
                    Bringing Joy Through Food
                </span>
            </div>

            <div className="hero__link">
                <Link href="#">
                    <span className="hero__link__line"></span>
                    <span>Recruit Site</span>
                    <span>フレスコ・カンパニー採用情報</span>
                </Link>
                <Link href="#">
                    <span className="hero__link__line"></span>
                    <span>Catering Site</span>
                    <span>あなたの食べたい場所・食事をプレオーダー</span>
                </Link>
            </div>

            <nav className="hero__nav">
                <ul className="hero__nav__ul">
                    {
                        heroItems.map((heroItem) => {
                            return (
                                <li key={heroItem.title} className="hero__nav__li">
                                    <Link href={heroItem.url}>
                                        {heroItem.title}
                                        <span>{heroItem.jaTitle}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}