import "app/components/Scroll/Scroll.scss";

export const HolizonScroll = ({ addClass }) => {
    return (
        <div className={`holizon__scroll ${addClass}`}>
            <span className="holizon__scroll__bar"></span>
            <span className="holizon__scroll__text">Swipe</span>
        </div>
    )
}