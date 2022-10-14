import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Mamaco/header";


import Rome from "./peides/Rome";
import Logins from "./peides/Logins";
import Sobre from "./peides/Sobre";
import Erro from "./peides/Erro";
import Frete from "./peides/Frete";
import Cadastro from "./peides/Cadastro";



function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Rome/>}/>
            <Route path="/Frete" element={<Frete/>}/>
            <Route path="/Login" element={<Logins/>}/>
            <Route path="/sobrenos" element={<Sobre/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )

}
export default RouterApp;
