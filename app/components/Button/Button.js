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

export const MdButton = ({ href, buttonEnName, buttonJaName, image }) => {
    return (
        <Link href={href} className="mdbutton">
            <img className="mdbutton__image" src={image}></img>
            <div className="mdbutton__inner">
                <span className="mdbutton__inner__en__name">{buttonEnName}</span>
                <span className="mdbutton__inner__holizon"></span>
                <span className="mdbutton__inner__arrow"></span>
                <div className="mdbutton__inner__ja__name">
                    <span>{buttonJaName}</span>
                </div>
            </div>
        </Link>
    )
}