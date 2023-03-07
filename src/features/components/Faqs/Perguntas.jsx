import { useState } from 'react'
import faqs from '../../../API/faqs.json'
export default function Perguntas(){
    const [perguntas, setPerguntas] = useState(faqs)
    const [selected, setSelect] = useState(null)
    const toggle = i =>{
        if(selected == i){
            return setSelect(null)
        }
        console.log(i)
        setSelect(i)
    }
    return(
        <>
            <article>
                <section>
                    <div className="container">
                            <div className="wrapper">
                                <div className="accordion">
                                    {perguntas.map((item, i) =>{
                                        return(
                                           
                                            <div key={item.id} className='item' onClick={() => toggle(i)}>
                                                <div className='title'>
                                                    <h2>{item.pergunta}</h2>
                                                    <span>
                                                        {selected === i ? '-' : '+'}
                                                    </span>
                                                </div>
                                                <div className={selected === i ? 'content show' : 'content'}>
                                                    {item.resposta}
                                                </div>
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                            </div>
                    </div>
                </section>
            </article>
        </>
    )
}