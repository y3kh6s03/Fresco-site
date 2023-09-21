import { LgButton } from "@/app/components/Button/Button";
import "app/Home/components/Recriot/Recruit.scss";

export const HomeRecruit = () => {
    return (
        <section className="homeRecruit container">
            <div className="homeRecruit__image"></div>
            <div className="homeRecruit__inner">
                <div className="homeRecruit__inner__title contents__title">
                    <h2 className="homeRecruit__inner__title__h2">
                        Recruit
                        <span className="homeRecruit__inner__title__span">
                            フレスコ・カンパニーの求人
                        </span>
                    </h2>
                </div>
                <div className="homeRecruit__inner__content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate, inventore saepe eveniet voluptatum dolor provident veniam quas nisi dignissimos necessitatibus voluptas dolorum ex! Perferendis odio quisquam culpa nisi quibusdam!
                    </p>
                </div>
                <LgButton href={"#"} buttonName={"Recruit"} />
            </div>
        </section>
    )
}