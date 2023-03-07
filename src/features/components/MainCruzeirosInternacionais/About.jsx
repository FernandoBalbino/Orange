import svg from './imagens/map.svg'
export default function About(){
    return(
        <>
            <article>
                <section>
                    <div className="container">
                        <div id='flexCruzeirosInternacionaisAbout'>
                            <div data-aos='fade-up'>
                                <h2><span>Explore o mundo</span></h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate beatae quos, nobis delectus, nulla debitis autem nisi pariatur, accusantium optio tenetur tempore.</p>
                            </div>
                            <div>
                                <img src={svg} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}