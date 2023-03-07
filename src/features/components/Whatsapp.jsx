import axios from 'axios'
import { useEffect, useState } from "react"
export default function Whatsapp(){
    const [funcionarios, setFuncionarios] = useState({});
    const getFuncionario = async () =>{
        try{
            const response = await axios.get("https://intranet.pacotes.travel/funcionario/whatsapp")
            setFuncionarios(response.data)
            console.log(response.data)
            if(funcionarios.length === 0){
                console.log('vazio')
            }else{
                console.log('tem funcionario')
            }
        } catch(e){
            console.log('Error...')
        }
    }
    useEffect(() =>{
        getFuncionario()
    }, [])
    return(
        <>
           
        </>
    )
}