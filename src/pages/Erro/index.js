import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h1> Essa Pagina Não existe</h1>

            <span>Encontramos essas Paginas Aqui</span> <br/><br/>
            <Link to={"/"}>Home</Link><br/><br/>
            <Link to={"/sobre"}>Sobre</Link><br/><br/>
            <Link to={"/contato"}>Contato</Link><br/><br/>
        </div>
        
    )
}
export default Erro;