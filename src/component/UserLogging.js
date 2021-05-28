import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function LoginPage() {
    const url = "https://reqres.in/api/login";
    const [data,setData] = useState({
        email: "",
        pwd: "",
    })
    function handleChange(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post(url,{
            email: data.email,
            pwd: data.pwd,
        })
        .then(res => {
            console.log(res.data)
        })
    }
    
    return (
        <div className="div-login">
                
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label className= "label" for="email">Username</label>
                    <input required onChange={(e)=>handleChange(e)} id='email' value={data.email} placeholder = 'Enter email' type='email'></input>
                    <label className= "label" for="pwd">Password</label>
                    <input required onChange={(e)=>handleChange(e)} id='pwd' value={data.pwd} placeholder = 'Enter password' type='password'></input>
                </div>
                <div>
                    <button onSubmit={(e)=> handleSubmit(e)}>Login</button>
                </div>
            </form>   
        </div>
    );
}

export default LoginPage;