import { Link } from "react-router-dom";
import './style.css';

function Header(){



    return(

        <header>
            
        <nav>
            <a href ="/"><img className = "logo"  src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="mestre"></img></a>
            

            <ul className="list">
                <li><a href ="/">Home</a></li>
                <li><a href ="/cadastro">Cadastro</a></li>
                <li><a href ="/contacorrente">Conta Corrente</a></li>
                <li><a href ="/sobrenos">Sobre Nós</a></li>
                    
            </ul>
            
        </nav>
        </header>
        
    )
}

export default Header;



