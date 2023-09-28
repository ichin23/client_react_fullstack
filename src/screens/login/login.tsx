import React, { Component, useState } from "react";
import "./login.css"
import axios from "axios";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import { checkEmail, host } from "../../utils/routes";


export function Login (){
    const [typePassword, changeType] = useState("password")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function change(){
        if(typePassword==="password"){
            changeType("text")
        }else{
            changeType("password")
        }
    }

    function check(email:any){
        if(email.target.value === undefined || email.target.value === "" ) return
        fetch(checkEmail+email.target.value).then(data =>{
            console.log(data)
        })
    }

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail (e.target.value);
    }
    const onSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha (e.target.value);
    }

    const handleClick = ()=>{
        console.log("called")

            axios.post("http://localhost:5000/signin", {
                email: email,
                senha: senha,
            }).then(
                ()=>{alert("logado")}
            ).catch((e)=> {
                if(e.response.status===406){
                    alert("Email ou senha inválidos")
                }
            })
        
    }
        return (
         <body>
            <div id="card">
                <h1>Login</h1>
                    <input type="email" onChange={onEmailChange} placeholder="Email" name="email" />

                    <div id="divPassword">
                        <input type="password" onChange={onSenhaChange}  placeholder="Senha" name="senha"/>
                        <label>{typePassword==="password"?<EyeSlashIcon onClick={()=>{}} /> :<EyeIcon />}</label>
                    </div>
                    <div id="divButton">
                        <button className="login" onClick={handleClick}>Login</button>
                        <button className="cadastro">Cadastro</button>
                    </div>
            </div>
         </body>   
        )
    
}