import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Navbar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel, setUser } from '../redux/store';
import { useNavigate } from 'react-router-dom';


const Head = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const {user, channel} = useSelector((store) => store);
    const navigate = useNavigate();
    const change = (e) => {
        setName(e.target.value);
    }

    const createChannel =  async (e) => {
        axios({
            method: "post",
            url: "http://localhost:8080/chat-room",
            data: {
                name: name,
                maker: user.name,
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            dispatch(setChannel(response.data))
        });
    }

    const logout = () => {
        dispatch(setUser({id: 0, name: "", userId: ""}));
        navigate("/");
    }

    // const theme = createTheme({
    //     components: {
    //       MuiTextField: {
    //         styleOverrides: {
    //           root: {
    //             height: '0.5em', // 원하는 높이로 설정
    //           },
    //         },
    //       },
    //     },
    //   });

    return (
    <div className='top' style={{height: "100%"}}>
        <div className='current-channel'><b>{channel.name}</b></div>
        <div style={{display: "flex", gap: "5px"}}>
            <div className='create-channel'>
                <Form.Control size="sm" type="text" placeholder="채널 생성" style={{width: "100px"}} onChange={change}/>
                <Button onClick={async () =>{ await createChannel()}}>생성</Button>
            </div>
            
            <Button onClick={logout} >logout</Button>
        </div>
    </div>
    // <Navbar className="bg-body-tertiary top">
    
    // </Navbar>
    );
};

export default Head;