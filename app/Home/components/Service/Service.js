import Link from "next/link"

import homeServiceItems from "app/Home/components/Service/Service.json"
import "app/Home/components/Service/Service.scss"
import { LgButton } from "@/app/components/Button/Button"

export const HomeService = () => {
    return (
        <section className="homeService container">

            <div className="homeService__title contents__title">
                <h2 className="homeService__title__h2">
                    Service
                    <span className="homeService__title__span">
                        フレスコ・カンパニーの事業について
                    </span>
                </h2>
            </div>

            <ul className="homeService__ul">
                {homeServiceItems.map((homeServiceItem) => {
                    return (
                        <li className={`homeService__ul__li ${homeServiceItem.enTitle.toLowerCase()}`}>
                            <div className="homeService__ul__li__image">
                                <img src={homeServiceItem.src} alt="" />
                                <p>Service <span>{homeServiceItem.num}</span></p>
                            </div>
                            <Link href={homeServiceItem.href}>
                                <span>
                                    {homeServiceItem.enTitle}
                                </span>
                                <span>
                                    {homeServiceItem.jaTitle}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="circle">
                <div className="circle__wrapper">
                    <svg className="circle__wrapper__inner" viewBox="0 0 100 100">
                        <path id="circle__wrapper__inner__path" className="circle__wrapper__inner__path" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                        <text className="circle__wrapper__inner__text">
                            <textPath href="#circle__wrapper__inner__path">
                                Fresco company. Meal for smile.
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

        </section>

        // フレックスでふたつに分ける
        // けどポジションアブソールートにしたら、分けてるいみがほどんどなくなるよね
        // そしたら、代わりに箱だけは明確に残しておいてその箱をレラティブにして、その中のをアブソルートにしたらいいんじゃないかな？

        // マップでまわしたときの形としては、どうなのか
        // 上記の形をなんども作成することになる。フレックスにしたときにはすべてが横並びになるから理想のようにはならないよね
        // ⇨

        //     liがたくさんできて、imagのコンテナーが一つ打た場合にはどのようになるんだ？
        // liもたくさん横並びになってこまるんだからulといイメージで分けたらいいのかな

        // ホバーしたときにどのように実装するかを悩んでいる
        // ulとイメージが連動していないから、ホバーしたときにどの画像を出力したらいいかわからなくなっている
        // liごとにホバーしたときの関数によってimageに対してクラス分けをして画像を分けさせる？
        // それは可能？イメージにクラス名をつけて、そこにurlを使い分けるこれを実現するためには
        // それぞれのliアイテムの参考演算子をつかうことになってしまう。
        // mapとかfilter関数を利用する事になる
        // それであれば実装可能だね。すべてを回してifこれがこうならここがこうみたいに計算させることで実装は可能
        // でもやけに重たいはずもっとスマートに実装できるはず。

        // さっきのが1番楽に実装はできそうだよね。
        // イメージの表示位置の調整ができてしまえば、三項演算子

        // 三項演算子の使い方を考えたらいいのかもしれない
        // クラス名を付与するための計算を考える
        // ようはキーかなにかを比較して、===だったら、そのクラス名をつけてねみたいにすることができれば実装できるよね
        // そのキーを比較することが可能なのか
        // たとえば、imgタグにキーをつけて、

        // 単純にマップ関数でまわすときに、クラス名をつけるだけでいいのではないか？
        // そしたら,liにホバーしたときにクラス名をばーっとつけておいて、連動させることができる
        // liのクラスにホバーしたら、イメージはこのurlを出力する。
        // みたいなことだよねこれならできそうだね！

        // 単純にポジションアブソルートで分けてもいいよね
        // 分けて、<ul></ul>に関しては、そのまま左に展開させてliの中にimgを入れ込む

    )
}