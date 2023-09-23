import "app/components/SubPageHero/SubPageHero.scss"

export const SubPageHero = ({ item }) => {
    return (
        <section className="subPageHero">
            <div className="subPageHero__title">
                <h1 className="subPageHero__title__h1">{item.enTitle}</h1>
                <span className="subPageHero__title__span">
                    {item.jaTitle}
                </span>
            </div>
            <div className="subPageHero__image">
                <img src={item.src} alt="subpageHero-image" className="subPageHero__image__img" />
            </div>
        </section>
    )
}