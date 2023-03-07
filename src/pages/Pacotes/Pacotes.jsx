import { useParams } from "react-router-dom"
export default function Pacotes(){
    const {id} = useParams()
    return(
        <>
            <p>Pacotes</p>
            <p>ID {id}</p>
        </>
    )
}