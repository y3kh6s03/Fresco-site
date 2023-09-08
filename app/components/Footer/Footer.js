import Link from "next/link"

import "app/components/Footer/Footer.scss"

export const Footer = () => {
    return (
        <nav className="footer">
            <Link className="footer__logo" href="#"></Link>
            <table>
                <tbody>
                    <tr>
                        <th>所在地</th>
                        <td>381-2203 長野県長野市真島町川合263-3</td>
                    </tr>
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
            <small>&copy; 2023 Fresco company .All rights reserved.</small>
        </nav>
    )
}