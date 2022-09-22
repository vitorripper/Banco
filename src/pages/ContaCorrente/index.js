import { Link } from "react-router-dom";
import {useState} from 'react';

function ContaCorrente(){
    const[saldo,setSaldo] = useState('xxxxxxxxxxxxxxx')

    const[saldoCliente, setSaldoCliente]=useState({
        contaCliente:"XXXXXXXXXXXXXXXXXXXX"
    })
    


    return(
        <div>
            <h1 align='center'>Conta Corrente</h1>
            <form>

                <label> Déposito: </label>
                <input placeholder="Informe o valor do depósito">
                </input>

                <br></br>

                <label> Saque: </label>
                <input placeholder="Informe o valor do saque">
                </input>
                
                <br></br>
                <button type="submit">Atualizar Saldo</button>
                <br></br>


            </form>

            <br></br>

            <div>
                <span>Saldo Atual: {saldoCliente.contaCliente}</span>
            </div>
        </div>
    )
}

export default ContaCorrente;