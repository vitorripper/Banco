import "./frete.css"
import { useState } from "react";

function Frete(){

    


    const [toneladas, setToneladas]= useState();
    const [cidade, setCidade]= useState();
    


    const [conteudoValor, setConteudoValor]=useState({
        ton:"0",
        cid:"",
        val: 0
     })

    function salvarValor(evento){

        evento.preventDefault();
        
        setConteudoValor({ton:toneladas, cid:cidade, val:calcula(cidade,toneladas)})
        

        

    }
    function calcula(cidade, toneladas,) {
        switch (cidade) {
            case "São Paulo":
                return  parseFloat(toneladas) * 15 * 2.5
                
            case "Embu das Artes":
                 return parseFloat(toneladas) * 30 * 2.5
                
            case "Osasco":
                return  parseFloat(toneladas) * 23.4 * 2.5
                
            case "Diadema":
                return parseFloat(toneladas) * 22.4 * 2.5
                
            case "Praia Grande":
                return parseFloat(toneladas) * 80.9 * 2.5
                
            
            case "São Bernado do Campo":
                return  parseFloat(toneladas) * 30 * 2.5
                
            case "Barueri":
                return  parseFloat(toneladas) * 32.7 * 2.5
                
            case "Ouro Preto":
                return parseFloat(toneladas) * 629 * 2.5
                
            case "Pirassununga":
                return parseFloat(toneladas) * 212 * 2.5
                
                
            
            default:
                break;
        }
    }


    return(
        <div class="frete">
            
            <h1 class="titulo">Calculo do Frete</h1>
            
            <form onSubmit={salvarValor}> 
            
            <label> Peso: </label>
            <input placeholder="Informe um valor em Toneladas"  value={toneladas} 
            onChange={(evento)=>setToneladas(evento.target.value)}>
            </input>
            <br></br>
            <label>Destino:</label>
            <select class = "produtos" onChange={(evento)=>setCidade(evento.target.value)}>
                    <option value="" disabled selected>Selecione um Destino</option>
                    <option value = "São Paulo">São Paulo</option>
                    <option value = "Embu das Artes">Embu das Artes</option>
                    <option value = "Osasco">Osasco</option>
                    <option value = "Diadema">Diadema</option>
                    <option value = "Praia Grande">Praia Grande</option>
                    <option value = "São Bernado do Campo">São Bernado do Campo</option>
                    <option value = "Barueri">Barueri</option>
                    <option value = "Ouro Preto">Ouro Preto</option>
                    <option value = "Pirassununga">Pirassununga</option>
                </select>
                <br></br>
            <button type="submit" class="bottao">Aplicar</button>
            
            </form>
            <br></br>

            <div className="get">

                <span>Peso: {conteudoValor.ton}T</span>
                <br></br>
                <span>Destino: {conteudoValor.cid}</span>
                <br></br>
                <span>Valor do Frete: {conteudoValor.val.toLocaleString("pt-BR", 
        { style: "currency" , currency:"BRL"})}</span>
            </div>                     
        </div>
    )
}
export default Frete;