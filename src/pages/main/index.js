import React, {Component} from 'react';
import {Container, SubmitButton} from './style';


class main extends Component{

    constructor(props){
        super(props);
        this.state ={
            input : '',
            cards:[]
        };
    }

    handlerOnInputChange = event =>{
        this.setState({input: event.target.value});
        
    }

    handleSubmit = (event) => {
        this.setState({card: this.state.cards.push(this.state.input)});
        console.log(this.state.cards);

        event.preventDefault(); 
    }

    renderCards = (cards)=>{
        
    }

    render(){
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <span>{
                        this.state.cards.map((number, index) =>
                            <li key={index}>{number}</li>
                        )}
                    </span>
                    <span>{this.state.input}</span>
                    <input onChange={this.handlerOnInputChange} placeholder="Criar"/>
                    <SubmitButton>Vai</SubmitButton>
                </form>
            </Container>
        )
    }
}

export default main;