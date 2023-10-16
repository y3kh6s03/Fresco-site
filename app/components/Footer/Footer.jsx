import Link from "next/link"

import "app/components/Footer/Footer.scss"
import menuItems from "app/components/Header/Header.json"

export const Footer = () => {
    return (
        <>
            <div className="footer__wrapper">
                <Link className="footer__logo" href="/"></Link>
                <Link href={"#Hero"}>
                    <div className="return">
                        <div className="return__wrapper">
                            <svg className="return__wrapper__inner" viewBox="0 0 100 100">
                                <path id="return__wrapper__inner__path" className="return__wrapper__inner__path" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                                <text className="return__wrapper__inner__text">
                                    <textPath href="#return__wrapper__inner__path">
                                        Fresco company. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meal for smile.
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </Link>

                <nav className="footer">
                    <table>
                        <tbody>
                            <tr>
                                <th>Tell</th>
                                <td>026-247-8770</td>
                            </tr>
                            <tr>
                                <th>Fax</th>
                                <td>026-247-8771</td>
                            </tr>
                            <tr>
                                <th>E-mail</th>
                                <td>honbu-f@fresco-c.com</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="footer__nav">
                        <ul className="footer__nav__ul">
                            {menuItems.map((item) => {
                                return (
                                    <li>
                                        <Link href={item.url}>
                                            {item.title}
                                            <span>{item.jaTitle}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
                <small>&copy; 2023 Fresco company .All rights reserved.</small>
            </div>
        </>
    )
}