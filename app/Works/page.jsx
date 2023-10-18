import { PageTransition } from "@/app/components/PageTransition/PageTransition";

const { Works } = require("@/app/Works/components/Works")

const Home = () => {
    return (
        <PageTransition>
            <Works />
        </PageTransition>
    )
}

export default Home;