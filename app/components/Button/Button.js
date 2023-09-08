import "app/components/Button/Button.scss";
import Link from "next/link";


export const LgButton = ({ href, buttonName }) => {
    return (
        <Link href={href} className="lgbutton">
            <span className="lgbutton__name">{buttonName}</span>
            <span className="lgbutton__holizon"></span>
            <span className="lgbutton__arrow"></span>
            <div className="lgbutton__text">
                <span>Read more ...</span>
            </div>
        </Link>
    )
}