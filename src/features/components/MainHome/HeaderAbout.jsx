import {Link} from 'react-router-dom'
export default function mainHeaderAbout(props){
    return(
        <>
        <article id='articleSlide'>
          <section id='sectionSlide'>
          <div id="slide">
              
              <div id="carouselExampleCaptions" className="carousel slide h-100">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner h-100">
      <div className="carousel-item active h-100">
        <img width="1400px" height="580px" src={props.img1} className="d-block w-100" alt="CruzeirosOfertas" />
        <div id="captionID">
          <h1>Cruzeiros</h1>
          <p className='lead'>Com os melhores preços e segurança, oferecemos os melhores cruzeiros para você e sua família ter uma divertida e prazerosa viagem</p>
          <div>
            <Link to='/pacotes-especiais'>Veja nossas ofertas</Link>
          </div>
        </div>
      </div>
      <div className="carousel-item  h-100">
        <img width="1400px" height="580px" src={props.img2} className="d-block w-100" alt="DestinosCruzeiros" />
        <div id="captionID">
          <h1>Destinos</h1>
          <p>Já imaginou poder viajar para qualquer lugar do mundo, para onde você gostaria de ir? Oferecemos as melhores viagens e com ótimos preços. </p>
          <div>
            <Link to='/pacotes-especiais'>Explorar destinos</Link>
          </div>
        </div>
      </div>
      <div className="carousel-item  h-100">
        <img width="1400px" height="580px"  src={props.img3} className="d-block w-100" alt="Pacotes" />
        <div id="captionID">
          <h1>Pacotes de viagem</h1>
          <p>10 anos oferecendo uma divertida, confortável e despreocupante viagem para você e sua família. Temos diversas opçoes de pacotes com vários beneficíos incluídos.</p>
          <div>
            <Link to='/pacotes-especiais'>Ver pacotes</Link>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
              </div>
              
          </section>
        </article>
            
            
        </>
    )
}