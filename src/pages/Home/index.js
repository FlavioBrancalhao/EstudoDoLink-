import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <h1>Este é o home</h1>
      <span>Sujeito progamador</span>
      <br/>
      <br/>
      <Link to={"/sobre"}>Sobre</Link><br></br>
      <Link to={"/contato"}>Contato</Link>
      <hr/>
      <Link to={"/produto/123"}>Acessar o produto 123</Link><br/>
      <Link to={"/produto/1234"}>Acessar o produto 1234</Link>

    </div>
  );
}

export default Home;
