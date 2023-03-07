import {Link} from 'react-router-dom'
import img1 from './i1.jpg'
import img2 from './i2.jpg'
import img3 from './i3.jpg'
import './Main.css'
export default function CardsCruzeiros(){
    
    return(
        <>
            <article id='articleCruzeirosCardsNacionais'>
                <section>
                    <div className="container">
                        <div>
                            <div data-aos='fade-up'>
                                <h3>Incluso em todos <br /> os cruzeiros</h3>
                                <p id='infPp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor consequuntur blanditiis quod est. Delectus fuga, numquam voluptatem incidunt consequuntur odit voluptatibus quasi sit adipisci est suscipit quas explicabo iste.</p>
                            </div>
                            <div id='flexCardsDestaquesCruzeiros'>
                                <div className="cardDestaques">
                                    <div>
                                        <img width='620px' height='460px' src={img1} alt="Gastronomia" />
                                    </div>
                                    <div>
                                        <h4>Gastronomia</h4>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quis sit architecto similique soluta esse fugiat atque aliquam optio numquam praesentium sapiente culpa adipisci voluptates, dolorem veniam doloribus. Doloribus, consectetur.</p>
                                    </div>
                                </div>
                                <div className="cardDestaques">
                                    <div>
                                        <img width='620px' height='460px' src={img2} alt="Diversão a bordo" />
                                    </div>
                                    <div>
                                        <h4>Diversão a bordo</h4>
                                    </div>
                                    <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora labore necessitatibus magni recusandae, perspiciatis debitis totam, reprehenderit ut aliquam ducimus corporis voluptatibus, id ad alias blanditiis vel esse sunt?</p>
                                    </div>
                                </div>
                                <div className="cardDestaques">
                                    <div>
                                        <img width='620px' height='460px'  src={img3} alt="instalaçoes" />
                                    </div>
                                    <div>
                                        <h4>Instalaçoes</h4>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellat neque quia consequatur sapiente aliquid inventore quam adipisci, laborum laboriosam, sint laudantium ipsa, saepe nemo? Est, voluptatem. Autem, beatae sequi?</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='secCardsCruzeiros'>
                    
                        <div  data-aos-offset='370' className='cruzeiroInternacinalCardLink'>
                            <div className='container h-100'>
                                <div data-aos='fade-right' className='cardFlexNacionaisSec'>
                                    <h4 className='h4Pack'>Serviços</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores reprehenderit iste sint perferendis explicabo quidem ea beatae suscipit asperiores distinctio atque esse fuga fugiat odit ducimus pariatur, quos eos?</p>
                                    <Link to='/' >Ver</Link>
                                </div>  
                            </div>
                        </div>

                        <div className='cruzeiroInternacinalCardLink cruzeiroTematicoCardLink'>
                            <div className='container h-100'>
                                <div data-aos='fade-left' className='cardFlexNacionaisSec cardFlexTematicoSec'>
                                    <h4>Hospedagem</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores reprehenderit iste sint perferendis explicabo quidem ea beatae suscipit asperiores distinctio atque esse fuga fugiat odit ducimus pariatur, quos eos?</p>
                                    <Link to='/' >Ver</Link>
                                </div>  
                            </div>
                        </div>

                        <div  data-aos-offset='370' className='cruzeiroInternacinalCardLink cardFlexSeguranca'>
                            <div className='container h-100'>
                                <div data-aos='fade-right' className='cardFlexNacionaisSec'>
                                    <h4 className='h4Pack'>Segurança</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores reprehenderit iste sint perferendis explicabo quidem ea beatae suscipit asperiores distinctio atque esse fuga fugiat odit ducimus pariatur, quos eos?</p>
                                    <Link to='/' >Ver</Link>
                                </div>  
                            </div>
                        </div>
                </section>
            </article>
        </>
    )
}