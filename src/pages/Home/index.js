import { Link } from "react-router-dom";
import './banco.css';
import cartao from'./banco.jpg';

function Home(){



    return(
        <div className="homep">
            
        <img className="imagemfundo" src= {cartao}/>
        <div className="texto">
        <h1 id="titulo">Home</h1>
        </div> 
                
    

        </div>
    )
}

export default Home;