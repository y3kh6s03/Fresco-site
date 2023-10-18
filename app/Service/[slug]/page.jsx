import { Detail } from "@/app/Service/[slug]/components/Detail";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";

const Home = () => {
    return (
        <>
            <PageTransition>
                <Detail />
            </PageTransition>

        </>
    )
}

export default Home;