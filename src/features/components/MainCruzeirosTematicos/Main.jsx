import Slide from "./Slide";
import './Main.css'
import CardsCruzeiros from "../CardsCruzeiros/Main";
import Cards from "../MainCruzeirosNacionais/Cards";
export default function Main(){
    return(
        <>
            <main id="mainCruzeirosTematicos">
                <Slide />
                <CardsCruzeiros />
                <Cards/>
            </main>
        </>
    )
} 