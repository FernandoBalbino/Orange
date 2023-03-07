import Features from './Features'
import HeaderAbout from './HeaderAbout'
import Serviços from './Serviços'
import Sobre from './Sobre'
import Cruzeiros from './Cruzeiros'
import Destinos from './Destinos'
export default function Main(props){
    return(
        <>
        <main id='mainHome'>
            <HeaderAbout img1={props.img2} img2={props.img1} img3={props.img3} />
            <Serviços />
            <Sobre sobre={props.sobre} />
            <Features features={props.features} services={props.services} card1={props.card1} card2={props.card2} card3={props.card3} />
            <Cruzeiros />
            <Destinos destinos={props.destinos} />
        </main>
        </>
    )
}