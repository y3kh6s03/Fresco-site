"use client"

import "app/Contact/Confirmation/components/Contents/Contents.scss"
import Link from "next/link";

export const Contents = () => {

    const keys = ["name", "furigana", "tel", "mail", "text"]
    const strageItems = {};
    keys.forEach((key) => {
        const value = localStorage.getItem(key);
        strageItems[key] = value;
    })

    return (
        <section className="confirmation">
            <h3 className="confirmation__title">
                お問い合わせ内容
            </h3>
            <table className="confirmation__list">
                <thead>
                    <tr className="confirmation__list__item">
                        <th>お名前</th>
                        <td>{strageItems.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="confirmation__list__item">
                        <th>フリガナ</th>
                        <td>{strageItems.furigana}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>電話番号</th>
                        <td>{strageItems.tel}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>メールアドレス</th>
                        <td>{strageItems.mail}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>お問い合わせ内容</th>
                        <td>{strageItems.text}</td>
                    </tr>
                </tbody>
            </table>
            <div className="confirmation__button__container">
                <Link href={"/Contact#form__title"} className="returnBtn">
                    <span className="returnBtn__jaText">
                        内容の修正
                    </span>
                    <span className="returnBtn__holizon"></span>
                    <span className="returnBtn__enText">
                        Edit the content
                    </span>
                    <span className="returnBtn__arrow"></span>
                </Link>
                <button className="submitBtn">
                    <span className="submitBtn__jaText">送信</span>
                    <span className="submitBtn__bar"></span>
                    <span className="submitBtn__enText">Submit !!</span>
                    <span className="submitBtn__arrow"></span>
                </button>
            </div>
        </section>
    )
}