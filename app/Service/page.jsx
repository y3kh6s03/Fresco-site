import { Service } from "@/app/Service/components/Service";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";

const Home = () => {
    return (
        <>
            <PageTransition>
                <Service />
            </PageTransition>
        </>
    )
}

export default Home;