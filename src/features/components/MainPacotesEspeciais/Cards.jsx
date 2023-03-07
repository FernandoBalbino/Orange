import {useState, useMemo, useEffect, createRef} from 'react'
import Details from '../../../API/details.json'
import './filterSCSS.css'
const Cards = (props) => {
    const [detail, setDetail] = useState(Details)
    const [busca, setBusca] = useState('')

    
    
    
    const filtered = useMemo(() =>{
       return detail.filter(item => {
            const lowerBusca = busca.toLowerCase();
            let itemBuscado = item.heading.toLowerCase();
            return itemBuscado.toLowerCase().includes(lowerBusca);
          });
          
    }, [busca])
    
        
        
       
   
    
    
      
  return (
    
    <>

    <section id='sectionCards' className="property">
    
    <div data-aos='fade-up' className="center">
        
    <h2>Pra onde deseja viajar?</h2>
    <div>
    <article id="articleFilter">
                <section>
                <div id="form" role="search">
  <label htmlFor="search">Search for stuff</label>
  <input
   value={busca} 
   onChange={(e) => setBusca(e.target.value)}
    id="search"
     type="text"
      placeholder="Procurar pacotes..."
       autoFocus required
       autoComplete='off' />
  <button id='btnExcluir'>Exluir</button>    
</div>
                </section>
            </article>
    </div>
    </div>
    
    <div className="rowCard">
    
    {
       
        filtered.map((detail)=>{
                
                return(
            
                
            
                    <div data-aos-offset='100' data-aos='fade-up' key={detail.id} className="columnCard">
                        
              <div className="single-property">
                <div className="cardPacotes">
    
                    <div className="property-thumb">
                        <div className="property-tag">
                            Popular
                            
                        </div>
                        <img width='640px' height='427px' src={detail.image} alt={detail.heading} title={detail.heading} />
                    </div>
    
                    <div className="property-content">
                        <h3>{detail.heading}</h3>
                        <div className="mark">
                           <span>{detail.span}</span>
                        </div>
                        <span className="amount">{detail.amount}</span>
                    </div>
    
                    <div className="property-footer">
                        <ul>
                            <li>
                                <img src={detail.icon} width='24px' height='24px' alt="possuiPassagemAereaIcon" />
                                <span>{detail.passagem}</span>
                            </li>
                            <li>
                                <img width='24px' height='24px' src={detail.icon2} alt="possuiTrasladoIcon" />
                                <span>{detail.traslado}</span>
                            </li>
                            <li>
                                <img width='24px' height='24px' src={detail.icon3} alt="" />
                                <span>{detail.hotel}</span>
                            </li>
                        </ul>
                    </div>
    
                </div>
              </div>
            </div>
            
                )
            
            
        })
    }

        
    </div>

    

    </section>
    
    </>
  )
}

export default Cards