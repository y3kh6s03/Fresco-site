"use client"

import "app/Contact/components/Form/Form.scss"
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        furigana: "",
        tel: "",
        mail: "",
        text: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        localStorage.setItem(name, value);
    }

    const router = useRouter();
    const formSubmit = (e) => {
        e.preventDefault()
        router.push("/Contact/Confirmation");
    }

    const localDatas = () => {
        const keys = ["name", "furigana", "tel", "mail", "text"]
        const data = {};
        keys.forEach((key) => {
            data[key] = localStorage.getItem(key);
        })
        return data;
    }
    const localStrageData = localDatas();
    console.log(localStrageData)

    return (
        <section className="form container">

            <form action="#" className="form__form" onSubmit={formSubmit}>

                <h3 className="form__title" id="form__title">
                    お問い合わせフォーム
                </h3>
                <div className="form__form__item">
                    <label htmlFor="name">お名前</label>
                    <input id="name" type="text" name="name" placeholder="お名前（フルネーム）" value={localStrageData.name ? localStrageData.name : formData.name} onChange={handleChange} />
                </div>

                <div className="form__form__item">
                    <label htmlFor="name">フリガナ</label>
                    <input id="furigana" type="text" name="furigana" placeholder="ふりがな（カタカナ）" value={localStrageData.furigana ? localStrageData.furigana : formData.furigana} onChange={handleChange} />
                </div>

                <div className="form__form__item">
                    <label htmlFor="name">電話番号</label>
                    <input id="tel" type="tel" name="tel" placeholder="電話番号（ハイフンなし）" value={localStrageData.tel ? localStrageData.tel : formData.tel} onChange={handleChange} />
                </div>

                <div className="form__form__item">
                    <label htmlFor="name">メールアドレス</label>
                    <input id="mail" type="text" name="mail" placeholder="メールアドレス（例：example@example.com）" value={localStrageData.mail ? localStrageData.mail : formData.mail} onChange={handleChange} />
                </div>

                <div className="form__form__item">
                    <label htmlFor="name">お問い合わせ内容</label>
                    <textarea id="text" type="text" name="text" placeholder="お問い合わせ内容をご記入ください" value={localStrageData.text ? localStrageData.text : formData.text} onChange={handleChange} />
                </div>

                <div className="form__form__policy">
                    <h3>
                        プライバシーポリシー
                    </h3>
                    <p>

                        有限会社　フレスコ・カンパニー（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底することにより、個人情報の保護を推進致します。<br />
                        <br />
                        個人情報の管理<br />
                        当社は、お問い合わせいただいた方の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。<br />
                        <br />
                        個人情報の利用目的<br />
                        お問い合わせいただいた方からお預かりした個人情報は、当社からのご連絡やご案内、ご質問に対する回答として、電子メールや資料の送付に利用させていただきます。<br />
                        <br />
                        個人情報の第三者への開示・提供の禁止<br />
                        当社は、お問い合わせいただいた方よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。<br />
                        <br />
                        ・お問い合わせいただいた方の同意がある場合<br />
                        ・お問い合わせいただいた方が希望されるサービスを行なうために当方が業務を委託する業者に対して開示する場合<br />
                        <br />
                        ・法令に基づき開示することが必要である場合<br />
                        個人情報の安全対策<br />
                        <br />
                        当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。<br />
                        ご本人の照会<br />
                        <br />
                        お問い合わせいただいた方がご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。<br />
                        <br />
                        法令、規範の遵守と見直し<br />
                        当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。<br />
                        <br />
                        お問い合せ<br />
                        当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br />
                        <br />
                        有限会社　フレスコ・カンパニー<br />
                        〒381-2203　長野県長野市真島町川合263-3<br />
                        TEL：026-247-8770　FAX：026-247-8771<br />
                        E-mail：honbu-f@fresco-c.com<br />
                        上記プライバシーポリシーに同意の上、確認画面へお進みください。<br />
                    </p>

                </div>

                <div className="form__form__checkbox">
                    <input className="" type="checkbox" name="privacy_policy" />
                    プライバシーポリシーに同意します。
                </div>
                <div className="form__form__button">
                    <button
                        type="submit" name="form__submit" id="formText__confirmation">
                        確認画面へ進む
                    </button >
                    <span className="form__form__button__enText">
                        Continue to Review
                    </span>
                    <span className="form__form__button__arrow"></span>
                </div>
            </form>

        </section>
    )
}