import iconPacotes from './icons/world.png'
import iconCruise from './icons/cruise.png'
import iconViagens from './icons/viagens.png'
import iconHotel from './icons/hotel.png'
export default function About(){
    return(
        <>
            <article id="articleServices">
                <section>
                    <div className="container">
                        <div className="row justify-content-center align-items-center text-center">
                            
                            <div data-aos='fade-up'>
                            <div>Oferecemos</div>
                            <h2 id='tittleArticle'><span>Serviços</span></h2>
                            <p id='pServices'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur sint facilis commodi velit deleniti laborum dolor dolore quis beatae. Consectetur minus fugiat eius cumque pariatur atque a soluta fugit?</p>
                            </div>
                            <div className="col-md-3">
                                <div id="sFirst" className="servicesFlexCard">
                                    <div className="cardImg">
                                        <img width='64px' height='64px' src={iconCruise} alt="ViagemIcon" />
                                    </div>
                                    <div className="cardTittle">
                                        <h3>Viagens</h3>
                                    </div>
                                    <div className="cardInfo">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="servicesFlexCard">
                                    <div className="cardImg">
                                    <img width='64px' height='64px' src={iconPacotes} alt="pacotesIcon" />
                                    </div>
                                    <div className="cardTittle">
                                        <h3>Pacotes</h3>
                                    </div>
                                    <div className="cardInfo">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="servicesFlexCard">
                                    <div className="cardImg">
                                    <img width='64px' height='64px' src={iconViagens} alt="CruzeirosIcon" />
                                    </div>
                                    <div className="cardTittle">
                                        <h3>Cruzeiros</h3>
                                    </div>
                                    <div className="cardInfo">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="servicesFlexCard">
                                    <div className="cardImg">
                                    <img width='64px' height='64px' src={iconHotel} alt="HospedagemIcon" />
                                    </div>
                                    <div className="cardTittle">
                                        <h3>Hospedagem</h3>
                                    </div>
                                    <div className="cardInfo">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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