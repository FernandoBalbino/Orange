import CardsCruzeiros from '../CardsCruzeiros/Main'
import About from './About'
import Cards from '../MainCruzeirosNacionais/Cards'
import './Main.css'
import Slide from "./Slide"
export default function Main(){
    return(
        <>
            <main id='mainCruzeirosInternacionais'>
                <Slide />
                <About/>
                <CardsCruzeiros />
                <Cards />
            </main>
        </>
    )
}