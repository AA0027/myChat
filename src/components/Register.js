import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        userId: "",
        password: "",
        repassword: "",
    })


    

    const changeValue = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value,
        });
    };

    const goLogin = (e) => {
        e.preventDefault();
        if(user.password !== user.repassword){
            window.alert("비밀번호가 일치하지 않습니다. ");
            return;
        }
        axios({
            method: "get",
            url: `http://localhost:8080/login?userId=${user.userId}&password=${user.password}&name=${user.name}`
        })
        .then(response => {
            console.log(response);
            navigate('/');
        });    
        
    };

    if (window.location.pathname === "/register"){
        return (
      
       <div className='login' style={{width: "300px", height: "570px", marginTop: "10px"}}>

            <div className='app-name' style={{fontSize: "3em"}}>Register</div>
            <Form onSubmit={goLogin}>
                <Form.Group className="mb-3 d-block" controlId="formBasicTitle">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" onChange={changeValue} name="userId"/>
                </Form.Group>
                <Form.Group className="mb-3 d-block" controlId="formBasicTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={changeValue} name="name"/>
                </Form.Group>
    
                <Form.Group className="mb-3 d-block" controlId="formBasicAuthor">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={changeValue} name="password"/>
                </Form.Group>
                <Form.Group className="mb-3 d-block" controlId="formBasicAuthor">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={changeValue} name="repassword"/>
                </Form.Group>
                
                <Button variant="primary" className=' d-block' type="submit">
                    Register
                </Button>

               
            </Form>
       </div>
            
    
        
        );

    }else {
        return null;
    }
};

export default Register;