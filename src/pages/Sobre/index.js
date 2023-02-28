import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div >
      <h1>Este é o sobre</h1>
      <br/>
      <br/>
      <Link to={"/"}>Home</Link><br/><br/>
      <Link to={"/contato"}>Contato</Link>
    </div>
  );

}

export default Sobre;