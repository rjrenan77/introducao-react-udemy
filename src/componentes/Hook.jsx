import React, {useState, useEffect} from 'react'

export default props => {
    //operador destructing em useState, sendo o primeiro o
    //estado e o segundo o set desse estado
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState(100)

    //aparece após atualizar evento
    useEffect(()=>{
        contador % 2 === 0 ? setParOuImpar("Par") :setParOuImpar("Impar") 
    })

    return (
        <div>
            <h1>{contador}</h1>

            <h1>{status}</h1>
            <button onClick={() => setContador(contador-1)}>Dec
            </button>
            <button onClick={() => setContador(contador+1)}>Inc
            </button>
        </div>
    )
}