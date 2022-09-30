import { Link } from "react-router-dom";
import {useState} from 'react';
import './financiamento.css';




function Financiamento(){
    const [valorT, setValorT]= useState(0);

    const [parcela, setParcela]= useState(0);
    var juros = 0;
    if(valorT < 200){
        juros= 6.0
    
    }
    else if(valorT >= 200){
        juros = 11.0
    }

    function calcular(evento){
        evento.preventDefault();
        alert('Movimentação financeira feita com sucesso');

        
        
        
    }


    return(
    <div className="financiamento">
        <div className="dadosfinan">
            <h1 className="titulo1">Simulção de Financiamento</h1>
            <br></br>
            <div className="cadastrof">
            <span>Nome do cliente: Vitor Ripper Araujo  </span>
            <br></br>
            </div>
            <div>
            <label>Valor Solicitado: </label>
            <input className="valor" valeu={valorT}
                onChange={(evento) => setValorT(evento.target.value)} placeholder="Informe o valor do financiamento"></input>
                <button className='botaof' type="submit">Calcular</button>
            </div>
            
        </div>
        <div className="calculo">
            <h1 className="titulo2">Calculo do Financiamento</h1>
            <br></br>

            <span>Valor Solicitado: {valorT}</span>
            <br></br>
            
            <span onClick='botaof'>Taxa de Juros: </span>
            <br></br>

            <div className="parcela">
                <span>2ª Parcela:R$1.200,00 <br/> 3ª Parcela:R$1.200,00 <br/> 4ª Parcela:R$1.200,00</span>
            </div>

            <div className="total">
                <span>Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00</span>
            </div>

        </div>
                    
        

        </div>
    )
}

export default Financiamento;

