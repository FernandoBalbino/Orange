import Logo from '../Header/Logo.png'
import { Link } from 'react-router-dom'
import whatssap from './icons/whatsapp.png'
import email from './icons/email.png'
import phone from './icons/phone.png'
export default function Footer(){
    return(
        <>
            <footer id='footer'>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                <img id='logoFooter' width='260px' height='0' src={Logo} alt="" />
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ex cum dolor nobis quod soluta officiis dignissimos eveniet error perferendis architecto voluptatem voluptatum, eum repudiandae enim delectus exercitationem, veritatis temporibus.</p>
                                </div>
                                <div id='iconsFooter'>
                                    <Link><img width='24px' height='24px' src={whatssap} alt="iconWhatssap" /></Link>
                                    <Link><img width='24px' height='24px' src={email} alt="iconEmail" /></Link>
                                    <Link><img  width='24px' height='24px'src={phone} alt="iconTelefone" /></Link>
                                </div>
                            </div>
                            <div className="col-md">
                               <div className='divLinksFooter'>
                                <div>
                                    <p className='pFoMan'>Produtos</p>
                                    <ul>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                    </ul>
                                </div>
                               </div>
                            </div>
                            <div className="col-md">
                            <div className='divLinksFooter'>
                                <div>
                                    <p className='pFoMan'>Empresa</p>
                                    <ul>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        
                                        
                                    </ul>
                                </div>
                               </div>
                            </div>
                            <div className="col-md">
                            <div className='divLinksFooter'>
                                <div>
                                    <p className='pFoMan'>Recursos</p>
                                    <ul>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        
                                    </ul>
                                </div>
                               </div>
                            </div>
                            <div className="col-md">
                            <div className='divLinksFooter'>
                                <div>
                                    <p className='pFoMan'>Geral</p>
                                    <ul>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        <li><Link to='pacotes-especiais'>Link 1</Link></li>
                                        
                                    </ul>
                                </div>
                               </div>
                            </div>
                        </div>
                        <hr />
                        <div id='smallFooter'>
                        © 2023 OrangeTour.com – Pacotes de viagens, Serviços em gerais.
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}