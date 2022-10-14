
import {useState} from 'react';
import './stylecontacorrente.css';

function Cadastro(){

    const [razaos, setRazaos]= useState('');
    const [cpf, setcpf]= useState('.....');
    const [endereco, setendereco]= useState('.....');


    const [dadosCliente, setDadosCliente]=useState({
        razaoSocial:"-----------",
        cpfCliente:"------------",
        enderecoCliente:"------------"
     })
     

    function cadastrarCliente(evento){

        


        evento.preventDefault();
        alert("Cliente cadastrado com sucesso!!!!");

        

        setDadosCliente({

            razaoSocial:razaos,
            cpfCliente:cpf,
            enderecoCliente:endereco

        })
    }



    return(
        
        <div className='login'>
            <h1 className='titulo' align='center'>Cadastro</h1>

            <form onSubmit={cadastrarCliente}> 
            <div className='cadastro'>
            <label> Razão Social: </label>
            <input className='nome' placeholder="Informe o nome do cliente"  value={razaos} 
            onChange={(evento)=>setRazaos(evento.target.value)}>

            </input>
            <br></br>

            <label> Numero do CPF: </label>
            <input placeholder="Informe o CPF do cliente" type="number" valeu={cpf} 
            onChange={(evento)=>setcpf(evento.target.value)}>

            
            </input>
            <br></br>

            <label> Endereco do cliente: </label>
            <input className='endereco' placeholder="Informe o endereco do cliente"  valeu={endereco} 
            onChange={(evento)=>setendereco(evento.target.value)}>

            </input>

            <br></br>
            
            <button className='botao' type="submit">Cadastrar</button>
            </div>
            
            </form>
            <br></br>

            <div className='mostracadastro'>

                <span>Razão Social: {dadosCliente.razaoSocial} </span>
                <br></br>
                <span>CPF do cliente: {dadosCliente.cpfCliente} </span>
                <br></br>
                <span>Endereço do cliente: {dadosCliente.enderecoCliente} </span>

            </div>

            
        </div>
        
    )
}
export default Cadastro;