import React, { Component } from 'react'

export default class Contador extends Component{
    
    state = {
        numero : 10
    }

    maisUm = () => {

        this.setState({numero: this.state.numero+1})
        //this.state.numero++
        //console.log(this)
    }

    menosUm = () => {
        this.setState({numero:this.state.numero - 1})

    }

    alterar10 = (diferenca) => {
        this.setState({numero:this.state.numero+diferenca})
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button> 
                <button onClick={() => this.alterar10(10)}>Inc10</button>
                <button onClick={() => this.alterar10(-10)}>Dec10</button>
            </div>
        )
    }

}


/**Solucao para o this mais verbosa */
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    /**Solucao 2  menos verbosa com o arrow function abaixo */
    // <button onClick={() => this.maisUm()}>Inc</button>

    /**Solucao 3  atribuindo uma arrow function*/
    // maisUm = () => {
    //     //this.props.numero++
    //     console.log(this)
    // }

    