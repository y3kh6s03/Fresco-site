import { Contact } from "@/app/Contact/components/Contact";
import { PageTransition } from "@/app/components/PageTransition/PageTransition";

const Home = () => {
    return (
        <>
            <PageTransition>
                <Contact />
            </PageTransition>
        </>
    )
}

export default Home;