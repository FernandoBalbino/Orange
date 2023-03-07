import {Link} from 'react-router-dom'
export default function Sobre(props){
    return(
        <>
            <article id="articleAbout">
                <section className="container h-100">
                    <div id="flexAbout"  className='h-100'>
                        <div data-aos='fade-right' id="infoAbout">
                            
                            <h3>Sobre</h3>
                            <h2>Mar, água de coco e <strong>muita história</strong> para contar.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus, quia libero natus at officiis. </p>
                            <Link to='/sobre'>Conheça</Link>
                            
                        </div>
                        <div id="imgAbout">
                            <img width='1504px' height='1086px' className="img-fluid" src={props.sobre} alt="Sobre" />
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}