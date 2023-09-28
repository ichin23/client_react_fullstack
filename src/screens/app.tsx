import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';

export function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path='/cadastro' element={<Cadastro/>}></Route>
            <Route path='/log' element={<h1>Vai logar</h1>}></Route>
        </Routes>
        </BrowserRouter>
    );
}