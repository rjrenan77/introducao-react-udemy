import React from 'react';


export default (props) =>
    //as chaves indicam que é javascript puro
    <div>

        <h1>{props.valor}</h1>

        <h1>{props.abcd}</h1>

    </div>


/* arrow function/ */
// export default ()=>

// <div>

//     <h1>Primeiro Componente (Arrow)</h1>

// </div>



/* funcao anonima */
// export default function (){
//     return <h1>Primeiro Componente!</h1>

// }

/* funcao com nome */
// function primeiro(){
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro;