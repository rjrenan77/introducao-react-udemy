import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        {/* trazendo referencias de propriedades do elemento pai
        para o filho */}
        <h1>Família</h1>
        {/* para mais de um elemento */}
        {filhosComProps(props)}
        {/* Abaixo so serve para um elemento */}
        {/* {React.cloneElement(props.children, {...props})} */}

        {/* {React.cloneElement(props.children, */}
            {/* {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>