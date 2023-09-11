"use client"

import { useState } from "react"
import Link from "next/link"

import headerItems from "app/components/Header/Header.json"
import "app/components/Header/Header.scss"


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen((prev) => !prev)
        console.log(isOpen)
    }



    return (
        <>
            <div className="header">
                <Link className="header__logo" href="/"></Link>
                <div className={`header__menu__icon ${isOpen ? "isOpen" : ""}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <nav className={`header__nav ${isOpen ? "isOpen" : ""}`}>
                <p>
                    Navigation
                </p>
                <ul className="header__nav__ul">
                    {
                        headerItems.map((headerItem) => {
                            return (
                                <li key={headerItem.title} className="header__nav__li">
                                    <Link href={headerItem.url}>
                                        {headerItem.title}
                                        <span>{headerItem.jaTitle}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link className="header__nav__logo" href="/"></Link>
            </nav>
        </>
    )
}