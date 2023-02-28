import { Link } from "react-router-dom";

function Contato(){
    return(
        <div><h1>Contato Da empresa</h1>
        <span>Contato (dd) xxxxx-xxxx</span>
        <br/>
      <br/>
        <Link to={"/"}>Home</Link><br/><br/>
        <Link to={"/sobre"}>Sobre</Link>
        </div>
    )
}
export default Contato;