
import Frotas from './imagens/Frota.jpg'
import Suporte from './imagens/suporte.png'
import global from './imagens/global.png'
import Qualidade from './imagens/qualidade.png'
import pessoas from './imagens/pessoas.png'
export default function About(){
    return(
        <>
            <article id='articleAboutComp'>
                
            <section id='secHistory'>
                    <div className='container'>
                        <h2 id='historyH2'><span>História</span></h2>
                        <p id='historyP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi animi ad repudiandae, a cumque odio iure non veritatis, aperiam, quis recusandae nemo. Expedita culpa, corporis inventore ipsa similique dignissimos accusamus?</p>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='flexCardHistory'>
                                    <div className='iconHistory'>
                                    <img width='32px' height='32px' src={Suporte} alt="Suporte" />
                                    </div>
                                    <div id='titleHistory1'>
                                        <h3 className='h3HistoryCard'>Obsessão pelo Cliente</h3>
                                    </div>
                                    <div className='pHistoryCard'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio magnam quibusdam modi? Doloremque excepturi, qui velit quas ipsam obcaecati repellat asperiores sed fuga? Blanditiis.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className='col-md-4'>
                                <div className='flexCardHistory'>
                                    <div className='iconHistory'>
                                        <img width='32px' height='32px' src={pessoas} alt="Responsabilidade" />
                                    </div>
                                    <div id='titleHistory2'>
                                        <h3>Responsabilidade Pessoal</h3>
                                    </div>
                                    <div className='pHistoryCard'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio magnam quibusdam modi? Doloremque excepturi, qui velit quas ipsam obcaecati repellat asperiores sed fuga? Blanditiis debitis numquam expedita commodi pariatur!</p>
                                    </div>
                                </div>
                            </div> 
                            <div className='col-md-4'>
                                <div className='flexCardHistory'>
                                    <div className='iconHistory'>
                                        <img width='32px' height='32px' src={Qualidade} alt="Qualidade" />
                                    </div>
                                    <div id='titleHistory3'>
                                        <h3>Qualidade</h3>
                                    </div>
                                    <div className='pHistoryCard'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio magnam quibusdam modi? Doloremque excepturi, qui velit quas ipsam obcaecati.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>

                </section>
                <section id='secGlobal'>
                    <div className='container'>
                        <div>
                            <h2>Somos globais</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam ullam minus rerum corrupti dolores libero nobis dolor culpa.</p>
                            <img id='imgSvgAbout' width='600px' height='600px' className='img-fluid' src={global} alt="svgMapa" />
                        </div>
                    </div>
                </section>
                <div className='divisor'>
                <h2 className='historyLinhaDoTempo'><span>Surgimento</span></h2>
                <p className='historyP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore corrupti maiores voluptates.</p>
                </div>
                <section id='secFrota'>
                    <div className='h-100'>
                        
                        <div id='flexFrota'>
                            <h2>Nossa Frota</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur harum dolor. Facilis tempora eos voluptatibus cupiditate pariatur maiores, necessitatibus, quidem.</p>
                        </div>
                    </div>
                </section>
                <div className='divisor'>
                <h2 className='historyLinhaDoTempo'><span>Navegação</span></h2>
                <p className='historyP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore corrupti maiores voluptates.</p>
                </div>
                
                <section id='secNossosCruzeiros'>
                    <div className='h-100'>
                        <div id='flexNossosCruzeiros'>
                            <h2>Nossos Cruzeiros</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit quam eos placeat aut, tenetur repudiandae, cum voluptatum ullam cumque rerum iusto, omnis neque vel doloribus ipsam nesciunt voluptas modi.</p>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}