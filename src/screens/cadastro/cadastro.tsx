import { ChangeEvent, ChangeEventHandler, Component, useState } from "react";
import "../login/login.css"
import axios from "axios";

export function Cadastro (){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome (e.target.value);
    }
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail (e.target.value);
    }
    const onSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha (e.target.value);
    }

    const handleClick = ()=>{
        console.log("called")
        axios.post("http://localhost:5000/signup", {
            email: email,
            senha: senha,
            nome: nome,
            user: nome
        }).then(
            ()=>{console.log("finish")}
        )
    }

    return (
        <body>
        <div id="folder"></div>
        <div id="card">
            <h1>Login</h1>
                <input type="tezxt" placeholder="Nome" onChange={onNomeChange} name="name" />
                <input type="email" placeholder="Email" onChange={onEmailChange} name="email" />
                <input type="password" placeholder="Senha" onChange={onSenhaChange} name="senha"/>
                <div id="divButton">

                <button className="login" onClick={handleClick}>Cadastrar</button>
                <button className="cadastro" >Logar</button>
                </div>
        </div>
        </body>   
    )
}