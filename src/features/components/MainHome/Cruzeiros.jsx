import { Link } from 'react-router-dom'
import ic1 from './icons/ic1.png'
export default function Cruzeiros(){
    return(
        <>
            <article id="articleCruzeiros">
                <section className='h-100'>
                    <div className="container h-100">
                        <div data-aos-duration='1300' data-aos='fade-up' className='h-100' id='flexCruzeiros'>
                            <div>
                                <h2>Destinos</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda, perferendis incidunt eum ipsam expedita est eos quisquam vel dolore nemo architecto, perspiciatis minima placeat earum praesentium nostrum nam. Eveniet.</p>
                            </div>
                            <div>
                                <Link to='/'>Viajar</Link>
                            </div>
                        
                        </div>
                        
                    </div>
                </section>
            </article>
        </>
    )
}