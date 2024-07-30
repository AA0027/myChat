import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        userId: "",
        password: "",
    });
    

    const goHome = (user) => {
        
        navigate('/home', { state: {user}});
    }

    const goRegister = () => {
        navigate('/register');    
    }

    const login = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8080/user/login",
            data: {
                userId: user.userId,
                password: user.password,
            },
            headers: {
                "Content-Type": "application/json"
            }

       }).then((response) => {
            const { status } = response;
            console.log(status);
            // 403
            goHome(response.data.chatUser);
           
        });

    };


    const changeValue = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value,
        });
    };
    if (window.location.pathname === "/"){
        return (
      
            <div className='login'>
     
                 <div className='app-name'>Hello</div>
                 <Form onSubmit={login}>
                     <Form.Group className="mb-3 d-block" controlId="formBasicTitle">
                         <Form.Label>Id</Form.Label>
                         <Form.Control type="text" onChange={changeValue} name="userId"/>
                     </Form.Group>
         
                     <Form.Group className="mb-3 d-block" controlId="formBasicAuthor">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" onChange={changeValue} name="password"/>
                     </Form.Group>
                     <div style={{display: "flex", gap: "5px", justifyContent: "end"}}>
                         <Button variant="primary" className=' d-block' type="submit">
                         Login
                         </Button>
                         <Button variant="primary" className=' d-block' onClick={goRegister}>
                         Register
                         </Button>
     
                     </div>
                 </Form>
            </div>
         );
    }
    else{
        return null;
    }
    

    
};

export default Login;