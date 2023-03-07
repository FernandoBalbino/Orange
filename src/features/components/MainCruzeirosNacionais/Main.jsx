import Cards from "./Cards";
import Slide from "./Slide";

import About from "./About";
import CardsCruzeiros from "../CardsCruzeiros/Main";
export default function Main(){
    return(
        <>
            <main id="mainCruzeirosNacionais">
                <Slide/>
                <About />
                <CardsCruzeiros  />
                <Cards/>
            </main>
        </>
    )
}