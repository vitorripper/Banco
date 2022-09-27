import { Link } from "react-router-dom";
import {useState} from 'react';
import './contacorrente.css';

function ContaCorrente(){
    const[deposito, setDeposito]= useState(0)
    const[saque, setSaque]= useState(0)
    
    
    

    const[saldoCliente, setSaldoCliente]=useState(1000)

    function movimentacao(evento){
        evento.preventDefault();
        alert('Movimentação financeira feita com sucesso');

        
        setSaldoCliente(parseInt(saldoCliente) + parseInt(deposito) - parseInt(saque))
        
    }
    


    return(
        <div className="conta">

            <div className="titulo">
                <h1 align='center'>Conta Corrente</h1>
            </div>
            <form onSubmit={movimentacao}>

                <div className="valor">
                <label> Déposito: </label>
                <input 
                type="number" 
                id ="deposito"
                name="deposito"
                valeu={deposito}
                onChange={(evento) => setDeposito(evento.target.value)}  
                placeholder="Informe o valor do depósito">
                
                </input>

                <br></br>

                <label> Saque: </label>
                <input
                type="number"
                format="currency"
                precision ='2' 
                id ="saque"
                name="saque"
                value = {saque}
                onChange={(evento) => setSaque(evento.target.value)}
                placeholder="Informe o valor do saque">
                </input>
                </div>
                
                <br></br>
                <button className="botao" type="submit">Atualizar Saldo</button>
                <br></br>


            </form>

            <br></br>

            <div className="mostrasaldo">
                <span>Saldo Atual: {saldoCliente.toLocaleString("pt-BR", 
     { style: "currency" , currency:"BRL"})}</span>
                

                

            </div>
        </div>
    )
}

export default ContaCorrente;