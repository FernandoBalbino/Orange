import {Routes, Route, useParams} from 'react-router-dom';
import Home from '../pages/Home/Home'
import Header from '../features/components/Header/Header'
import Faq from '../pages/Faq/Faq'
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/Sobre/About';
import CInternacionais from '../pages/Cruzeiros/CruzeirosInternacionais/Internacionais'
import Especiais from '../pages/Pacotes/Especiais/Especiais'
import Internacionais from '../pages/Pacotes/Internacionais/Internacionais'
import Nacionais from '../pages/Pacotes/Nacionais/Nacionais'
import CTematicos from '../pages/Cruzeiros/CruzeirosTematicos/Main'
import Destinos from '../pages/Cruzeiros/CruzeirosNacionais/Destinos'
export default function routes(){
    return(
        <>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='pacotes-especiais' element={<Especiais />}></Route>
                    <Route path='/pacotes-internacionais' element={<Internacionais />}></Route>
                    <Route path='/pacotes-nacionais' element={<Nacionais />}></Route>
                    <Route path='/cruzeiros-nacionais' element={<Destinos  />}></Route>
                    <Route path='/cruzeiros-internacionais' element={<CInternacionais />}></Route>
                    <Route path='/cruzeiros-tematicos' element={<CTematicos />}></Route>
                    <Route path='/perguntas-frequentes' element={<Faq />}></Route>
                    <Route path='/sobre-a-orangetour' element={<About />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                
        </>
    )
}