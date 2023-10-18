import { Future } from "@/app/Future/components/Future";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";

const Home = () => {
    return (
        <>
            <PageTransition>
                <Future />
            </PageTransition>

        </>
    )
}

export default Home;