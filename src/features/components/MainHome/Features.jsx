import { Link } from "react-router-dom";
import ic1 from './icons/ic1.png'
import ic2 from './icons/world.png'
import ic3 from './icons/viagens.png'
import ic4 from './icons/hotel.png'

export default function Features(props){
    return(
        <>
        <article id="articleFastServices">
            <section>
                <div className="container">
                    <div data-aos="fade-up"   id="description">
                        <h2><span>Viaje & Explore</span></h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint possimus, natus dolorum maxime fugiat tempore nesciunt ut, laborum veniam.</p>
                    </div>

                    <div id="flexAnimation">
                        <div>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={ic1} alt="atendimentoIcon" />
                            </div>
                            <div>
                                <h3>Planejamento Rápido</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={ic2} alt="ViagensInternacionaisIcon" />
                            </div>
                            <div>
                                <h3>Viagens internacionais</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={ic3} alt="SegurançaIcon" />
                            </div>
                            <div>
                                <h3>Segurança</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' data-aos-offset='200' className="fastDescription">
                            <div>
                                <img width='24px' height='24px' src={ic4} alt="hospedagemIcon" />
                            </div>
                            <div>
                                <h3>Hospedagem</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem! Itaque dolorum, ipsam explicabo maxime.</p>
                            </div>
                        </div>
                        
                    </div>
                        <div>
                            <img width="600px" height="400px" className="img-fluid" src={props.services} alt="navioIcon" />
                        </div>
                    </div>
                    
                </div>
            </section>
            <section id="sectionPacotesCards">
                <div className="container">
                    <div data-aos='fade-up'>
                    <h2><span>Nossos Pacotes</span></h2>
                    <p id="pPacotes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, unde porro cupiditate illo eaque sit nesciunt accusantium incidunt nihil non quisquam.</p>
                    </div>
                    
                   
                        
                          
                            <div id="card-group" className="card-group">
                                <div className="card">

                                <img width='500px' height='500px' className="img-fluid" src={props.card1} title='Pacotes Especiais' alt="imgpacotesespeciais" />
                                
                                <div className="card-body">
                                    <h3 className="card-title">Pacotes<br /> especiais</h3>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolorum, enims nemo eum delectus at repudiandae ex error cupiditate sequi, nihil provident. Voluptatem praesentium dolorem amet, odio laudantium aut adipisci quas neque.</p>       
                                </div>

                                <div className="card-footer">
                                    <Link to='/pacotes-especiais'>Ver mais</Link>
                                    </div>

                                </div>
                                <div className="card">

                                <img width='500px' height='500px' className="img-fluid" src={props.card2} title='Pacotes Internacionais' alt="imgpacotesinternacionais" />
                                
                                <div className="card-body">
                                    <h3 className="card-title">Pacotes<br/> Internacionais</h3>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolorum, enim, accusamus vel natus delectus magnam facilis soluta sint dicta maiores odio inventore quis.</p>
                                    
                                </div>
                                <div className="card-footer">
                                    <Link to='/pacotes-especiais'>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="card">

                                <img className="img-fluid" src={props.card3} width='500px' height='500px' title="Pacotes Nacionais" alt="imgpacotesnacionais" />
                                
                                <div className="card-body">
                                    <h3 className="card-title">Pacotes<br /> Nacionais</h3>
                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illo modi iste veniam ex voluptatum excepturi impedit suscipit rem! Quam fuga, voluptate debitis placeat saepe possimus ratione temporibus corrupti libero.</p>
                                    
                                </div>
                                <div className="card-footer">
                                    <Link to='/pacotes-especiais'>Ver mais</Link>
                                    </div>

                                </div>
                            </div>
                        
                        
                        
                    
                </div>
            </section>
            
        </article>
            
        </>
    )
}