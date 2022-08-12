import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Erro from './Pages/Erro';
import Favoritos from './Pages/Favoritos';
import Filme from './Pages/Filme';
import Home from './Pages/Home';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element= {<Filme/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>

        <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;