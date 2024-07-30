import React, { useEffect, useRef } from 'react';
import Head from './Head';
import MessageInput from './MessageInput';
import "./css/Chat.css";
import { Container } from 'react-bootstrap';
import Message from './Message';
import { useSelector } from 'react-redux';
import "../function/Connect";
import { Stomp } from '@stomp/stompjs';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Chat = () => {
    const { channel, messages, user } = useSelector((store) => store);
    const stompClient = useRef(null);
    const scrollRef = useRef();

    // 메시지 가져옴
    useEffect(()=>{

        const socket = new WebSocket("ws://localhost:8080/channel");
        stompClient.current = Stomp.over(socket);
        stompClient.current.connect({}, () => {
                stompClient.current.subscribe(`/sub/${channel.url}`,
                    ()=>
                        {
                            console.log("방 번호", channel.id);
                            console.log();
                        }
                );
        });
        if(scrollRef == null){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        
    },[ channel , messages]);
    if(messages.length === 0){
        return (
            <Container>
                <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div>
                        <Head />  
                    </div>
                    <div className='box'>
                        <div className='no-msg'>
                            <EmailOutlinedIcon sx={{width: "100px", height: "100px", color: "primary"}} />
                            <span>No Messages</span>
                        </div>
                    </div>
                    <div style={{width: "80%"}}>
                        <MessageInput stompClient={stompClient}/>
                    </div>   
                </div>
                
            </Container>
        );
    }
    else {

        return (
            <Container>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Head/>  
                    <div className='box' ref={scrollRef}>
                    {messages.map(m => <Message m_name={m.name} my_name={user.name} content={m.content}/>)}
                    </div>
                    
                    <div style={{width: "80%"}}>
                        <MessageInput stompClient={stompClient}/>
                    </div>   
                </div>
            
            </Container>
        );
    }
       
};

export default Chat;

