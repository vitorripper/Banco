import { Link } from "react-router-dom";
import './banco.css';
import cartao from'./banco.jpg';

function Home(){



    return(
        <div className="homep">
        
        <img className="imagemfundo" src= {cartao}/>
        
        <div className="texto">
        <h1 id="txt2">Home</h1>
        <br></br>
        <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </span>
        
        
        </div> 
                
    

        </div>
    )
}

export default Home;