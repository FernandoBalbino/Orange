import destinos from '../MainHome/icons/escolhaDestino.png'
import planos from '../MainHome/icons/plano.png'
import embarque from '../MainHome/icons/embarque.png'
import explore from '../MainHome/icons/explore.png'
import personalização from '../MainHome/icons/personalização.png'
import traslado from '../MainHome/icons/traslado.png'
import calendario from '../MainHome/icons/calendario.png'
export default function Destinos(props){
    return(
        <>
            <article id="articleDestinos">
                <section>
                    <div className="container">
                    <h2 className=""><span>Qualquer lugar</span></h2>
                        <div className="row justify-content-center align-items-center text-center">
                            <div className="col-md-6">
                                <img id='imgDestinos' className="img-fluid" src={props.destinos} width='600px' height='400px' alt="imgDestinosMapa" />
                            </div>
                            <div className="col-md-6">
                            <div id='flexDestinos'>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={destinos} alt="escolhaDestinoIcons" />
                            </div>
                            <div>
                                <h3>Escolha o Destino</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={planos} alt="ViagensInternacionaisIcon" />
                            </div>
                            <div>
                                <h3>Escolha o pacote ideal</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={embarque} alt="SegurançaIcon" />
                            </div>
                            <div>
                                <h3>Embarque</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' data-aos-offset='150' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={explore} alt="hospedagemIcon" />
                            </div>
                            <div>
                                <h3>Férias</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        
                    </div>
                            </div>
                        </div>

                    </div>

                    <div  id='resumo'>
                        <div className='container h-100'>
                            <div className='h-100' id='flexResumo'>
                                <div>
                                <h2>O lugar ideal para o pacote ideal!</h2>
                                </div>
                                <div>
                                <div>
                        <section id="sectionCards">
                    <article>
                        
                            <div className="row justify-content-around align-items-center">
                                <div className="col-md-3 cards ">
                                    <div className='divImgIconResumo'>
                                        <img width='24px' height='24px' src={personalização} alt="atendimentoIcon" />
                                    </div>
                                    <div>
                                        Personalização
                                    </div>
                                </div>
                                <div className="col-md-3 cards">
                                    <div className='divImgIconResumo'>
                                        <img width='24px' height='24px' src={traslado} alt="atendimentoIcon" />
                                    </div>
                                    <div>
                                        Traslado (opcional)
                                    </div>
                                </div>
                                <div className="col-md-3 cards">
                                <div className='divImgIconResumo'>
                                <img width='24px' height='24px' src={calendario} alt="atendimentoIcon" /> 
                                    </div>
                                    <div>
                                        Inesquecível
                                    </div>
                                </div>
                            </div>
                        
                    </article>
                </section>
                        </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </section>
            </article>
        </>
    )
}