import { Header } from '@/app/components/Header/Header'
import { Footer } from '@/app/components/Footer/Footer'
import 'styles/_globals.scss'
import { Noto_Sans_Javanese, Noto_Sans, Noto_Nastaliq_Urdu } from 'next/font/google'



const noto_jp = Noto_Sans_Javanese({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['javanese'],
  display: "swap",
  variable: "--font-notojp"
})
export const noto = Noto_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['latin'],
  display: "swap",
  variable: "--font-noto"
})
export const numFont = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['latin'],
  display: "swap",
  variable: "--font-num"
})

export const metadata = {
  title: '有限会社 Fresco company',
  description: '長野県北進を中心として、食の総合サービス提供企業です。',
}

export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <body className={`${noto_jp.className} ${noto.className} ${numFont.variable}`}>
        <div className="body__wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
