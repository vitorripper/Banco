import {useState} from 'react';
import './login.css';


function Logins(){

    const marcos = {nome:"marcos", pass:"123"}
    const vitor = {nome : "vitor", pass: "santos2022"}
    const victoria = {nome: "victoria123", pass: "victoriaazeitaparis"}
    const victor = {nome: "victorM" , pass: "wondercoffee"}
    const thomas={nome:"ThomasCosta32", pass:"joaovitinhonaopresta"}
    const players=[marcos, vitor, victoria, victor, thomas]

    const [usuario, setUsuario]= useState();
    const [senha, setSenha]= useState();
    

    function entrar() {
        
        players.forEach(element => {

            if (usuario===element.nome && senha===element.pass) {
            alert("Usuário e Senha corretos")
            
            }

            else if(usuario===element.nome && senha!==element.pass){
                alert("Senha Incorreta")
            }
            
            else if(senha===element.pass && usuario!==element.nome){
                alert("Usuário incorreto")
            }
           
        });
    }


    return(
        
        <div className='login'>
            <h1 className='titulo' align='center'>Login</h1>

            <form onSubmit={entrar}> 
            <div className='cadastro'>
            <label> Login: </label>
            <input className='nome' placeholder="Informe seu Login"  value={usuario} 
            onChange={(evento)=>setUsuario(evento.target.value)}>

            </input>
            <br></br>

            <label> Senha: </label>
            <input placeholder="Informe sua Senha" type ="password"  valeu={senha} 
            onChange={(evento)=>setSenha(evento.target.value)}>

            </input>
            

            <br></br>
            
            <button className='botao' type="submit">Cadastrar</button>
            </div>
            
            </form>
           
            
        </div>
        
    )


}

export default Logins ;