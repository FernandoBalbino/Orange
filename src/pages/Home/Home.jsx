import Main from '../../features/components/MainHome/Main'
import Footer from '../../features/components/MainHome/Footer'
import img3 from './imagens/slide1.jpg'
import img1 from './imagens/slide2.jpg'
import img2 from './imagens/slide3.jpg'
import imgSobre from './imagens/sobre.jpg'
import imgFeatures from './imagens/features.jpg'
import imgFastServices from './imagens/fastServices.svg'
import imgCard1 from './imagens/card1.jpg'
import imgCard2 from './imagens/card2.jpg'
import imgCard3 from './imagens/card3.jpg'
import imgDestinos from './imagens/destinos.svg'
import './Home.css'
import GoToTop from '../../features/components/goToTop'
export default function Home(){

    return(
        <>
            
                <Main services={imgFastServices} features={imgFeatures} sobre={imgSobre} img3={img3} img2={img2} img1={img1} card1={imgCard1} card2={imgCard2} card3={imgCard3} destinos={imgDestinos} />
                <Footer />
                <GoToTop />
        </>
        
    )
}