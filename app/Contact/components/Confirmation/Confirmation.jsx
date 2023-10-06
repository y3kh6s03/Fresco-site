import "app/Contact/components/Confirmation/Confirmation.scss";

export const Confirmation = ({ formText, show }) => {

    const [isShow, setIsShow] = show;

    const showForm = () => {
        setIsShow(true)
    }
    return (
        <section className={isShow ? "confirmation__hidden" : "confirmation"}>
            <h3 className="confirmation__title">
                お問い合わせ内容
            </h3>
            <table className="confirmation__list">
                <thead>
                    <tr className="confirmation__list__item">
                        <th>お名前</th>
                        <td>{formText.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="confirmation__list__item">
                        <th>フリガナ</th>
                        <td>{formText.furigana}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>電話番号</th>
                        <td>{formText.tel}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>メールアドレス</th>
                        <td>{formText.mail}</td>
                    </tr>
                    <tr className="confirmation__list__item">
                        <th>お問い合わせ内容</th>
                        <td>{formText.text}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={showForm} className="modification__button">問い合わせ内容の修正</button>
            <button className="submit__button">送信</button>
        </section>
    )
}