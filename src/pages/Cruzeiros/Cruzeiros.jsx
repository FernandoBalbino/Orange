import { useParams } from "react-router-dom"
export default function Cruzeiros(){
    const {id} = useParams();
    return(
        <>
            <p>Cruzeiros</p>
            <p>ID: {id}</p>
        </>
    )
}