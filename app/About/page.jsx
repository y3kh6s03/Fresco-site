import { About } from "@/app/About/components/About";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";
import { SubPageHero } from "@/app/components/SubPageHero/SubPageHero";


const Home = () => {
    return (
        <PageTransition>
            <About />
        </PageTransition>
    )
}

export default Home;