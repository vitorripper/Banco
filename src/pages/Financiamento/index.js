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
                    
        </div>

        </div>
    )
}

export default Financiamento;

