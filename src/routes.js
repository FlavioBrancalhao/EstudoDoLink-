import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Header from './Components/Header';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

function RoutesApp(){
    return(
        
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Produto/:id' element={<Produto/>}/>
        <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;
