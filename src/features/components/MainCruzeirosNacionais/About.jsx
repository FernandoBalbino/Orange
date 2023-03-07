import icon1 from './imagens/icon1.png'
import icon2 from './imagens/icon2.png'
import icon3 from './imagens/icon3.png'
export default function About(){
    return(
        <>
            <article id="articleCruzeirosNacionaisAbout">
                <section>
                    <div className="container">
                        <div>
                          <div data-aos='fade-up'>
                            <div id='infAboutNacionais'>
                                <p>Veja</p>
                            </div>
                            <div>
                                <h2>
                                    <span>
                                        Melhores Cruzeiros
                                    </span>
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eaque, doloribus corporis impedit quod, nobis dolorem laboriosam et quo maiores error illum necessitatibus maxime vitae velit quae? Laborum, nostrum incidunt?
                            </p>
                            </div>
                            <div id="flexAboutCardsCruzeirosNacionais">
                                <div className="cardAboutCruzeirosNacionais">
                                    <div className="iconCardNacionais">
                                        <img width='64px' height='64px' src={icon1} alt="iconLugar" />
                                    </div>
                                    <div className="titleCardNacionais">
                                        <h3>Lugar</h3>
                                    </div>
                                    <div className="infCardNacionais">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugit odit omnis unde asperiores et.</p>
                                    </div>
                                    
                                </div>
                                <div className="cardAboutCruzeirosNacionais">
                                <div className="iconCardNacionais">
                                        <img width='64px' height='64px' src={icon2} alt="iconProfissional" />
                                    </div>
                                    <div className="titleCardNacionais">
                                        <h3>Profissional</h3>
                                    </div>
                                    <div className="infCardNacionais">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugit odit omnis unde asperiores et.</p>
                                    </div>
                                    
                                </div>
                                <div className="cardAboutCruzeirosNacionais">
                                <div className="iconCardNacionais">
                                        <img width='64px' height='64px' src={icon3} alt="iconQualidade" />
                                    </div>
                                    <div className="titleCardNacionais">
                                        <h3>Qualidade</h3>
                                    </div>
                                    <div className="infCardNacionais">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugit odit omnis unde asperiores et.</p>
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