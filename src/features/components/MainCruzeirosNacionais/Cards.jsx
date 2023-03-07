import { useState, useMemo } from "react"
import details2 from '../../../API/details2.json'
import '../MainPacotesEspeciais/filterSCSS.css'
import './Main.css'
export default function Cards(){
    const [detail, setDetail] = useState(details2)
    const [busca, setBusca] = useState('')

    const filtered = useMemo(() =>{
        return detail.filter(item => {
             const lowerBusca = busca.toLowerCase();
             let itemBuscado = item.hospedagem.toLowerCase();
             return itemBuscado.toLowerCase().includes(lowerBusca);
           });
           
     }, [busca])

    return(
        <>
            <section id="sectionCardsCruzeiros" className="property">

            <div data-aos='fade-up' className="center">
        
        <h2>Escolha o Cruzeiro ideal</h2>
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
          placeholder="Procurar cruzeiros..."
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
                        <img width='640px' height='427px'  src={detail.image} alt={detail.hospedagem} title={detail.hospedagem} />
                    </div>
    
                    <div className="property-content">
                        <h3>{detail.hospedagem}</h3>
                        <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fuga eum natus.</p>
                        </div>
                        <span id="amt" className="amount">{detail.cidade1}</span>
                        <span className="amount">{detail.cidade2}</span>
                        <span className="amount">{detail.cidade3}</span>
                    </div>
    
                    <div className="property-footer">
                        <ul>
                            <li>
                                <img width='24px' height='24px' src={detail.icon} alt="possuiPassagemAereaIcon" />
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