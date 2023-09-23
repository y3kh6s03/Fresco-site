import "app/About/components/Mission/Mission.scss"

export const Mission = () => {
    return (
        <section className="mission container">
            <div className="mission__title contents__title">
                <h2 className="mission__title__h2">
                    Mission
                    <span className="mission__title__span">
                        ミッション
                    </span>
                </h2>
            </div>

            <div className="mission__contents">
                <div className="mission__contents__title">
                    <h3 className="mission__contents__title__h3">
                        人生に最高の食体験を
                    </h3>
                </div>
                <div className="mission__contents__description">
                    食べるものが体をつくり、食体験が人生をつくる。<br />
                    <br />
                    人生100年時代、私たちは生まれてから死ぬまでに約10万回の食事をする。<br />
                    その1つひとつがかけがえのない体験になれば、人生はもっと豊かになる。<br />
                    <br />
                    料理のおいしさ、盛り付けの美しさ、食欲をそそる香り、みんなで食卓をかこむ時間。<br />
                    私という人間を、私という人生を、この1食が作っていく。<br />
                    <br />
                    特別な日だけでなく、日常にも最高の食体験を。<br />
                </div>
            </div>
        </section>
    )
}