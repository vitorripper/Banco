import { Link } from "react-router-dom";
import {useState} from 'react';
import './financiamento.css';




function Financiamento(){
    


    return(
        <div className="financiamento">
        <div className="dadosfinan">
            <h1 className="titulo1">Simulção de Financiamento</h1>
            <br></br>
            <div className="cadastrof">
            <span>Nome do cliente:  </span>
            <br></br>
            <div>
            <label>Valor Solicitado: </label>
            <input className="valor" placeholder="Informe o valor do financiamento"></input>
            </div>
            </div>
            <button className='botaof' type="submit">Calcular</button>
            <div className="calculo">
                <h1 className="titulo2">Calculo do Financiamento</h1>
                <br></br>

                <span>Valor Solicitado:</span>
                <br></br>

                <span>Taxa de Juros: </span>
                <br></br>

                <div className="parcela">
                    <span>2ª Parcela:R$1.200,00 <br/> 3ª Parcela:R$1.200,00 <br/> 4ª Parcela:R$1.200,00</span>
                </div>

                <div className="total">
                    <span>Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00</span>
                </div>

            </div>
                    
        </div>

        </div>
    )
}

export default Financiamento;

