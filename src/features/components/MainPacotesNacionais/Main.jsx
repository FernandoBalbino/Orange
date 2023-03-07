import Slide from "./Slide";
import './Main.css'
import Footer from "../MainHome/Footer";
import Cards from "../MainPacotesEspeciais/Cards";
export default function Main(){
    return(
        <>
            <main id="mainPacotesNacionais">
                <Slide />
                <Cards />
            </main>
        </>
    )
}