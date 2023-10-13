import "app/Works/components/Contents/WorksContents.scss";
import workContentsItem from "app/Works/components/Contents/WorksContents.json"

export const WorksContents = () => {
    return (
        <div className="worksContents__wrapper">
            {
                workContentsItem.map((workContentItem, index) => {
                    return (
                        <section id={workContentItem.enTitle} key={index} className="worksContents container">
                            <div className="worksContents__inner">
                                <div className="worksContents__inner__title">
                                    <h3 className="worksContents__inner__title__h3">
                                        {workContentItem.enTitle}
                                        <span>{workContentItem.jaTitle}</span>
                                    </h3>
                                    <div className="worksContents__inner__title__image">
                                        <img src={workContentItem.image} alt="works-image" />
                                    </div>
                                </div>
                                <h4 className="worksContents__inner__headline">
                                    customer: <br />
                                    {workContentItem.customer}&nbsp;さま
                                </h4>
                                <p className="worksContents__inner__description">
                                    {workContentItem.description}
                                </p>
                            </div>

                            <div src="" alt="" className="worksContents__subimage" >
                                <img src={workContentItem.subImage} alt="works-image" />
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}