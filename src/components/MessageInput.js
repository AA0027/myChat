import { TextareaAutosize } from "@mui/material";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./css/Chat.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/store";
import axios from "axios";


const MessageInput = (props) => {
    const dispatch = useDispatch();
    const { user, channel, messages } = useSelector((store) => store);
    const { stompClient } = props;
    const [message, setMessage] = useState("");
    const myMessage = (e) => {
        setMessage(e.target.value)
    };

    const keyDownEvent = (e) => {
        if(e.nativeEvent.isComposing){
            return
        }

        if (e.key === 'Enter' && e.shiftKey) { 
            return;
          } else if (e.key === 'Enter') { 	   
            e.preventDefault();
            sendMessage();
          }

    }
    

    const sendMessage = async () => {
        const msg = {
            sender: user.userId,
            content: message
        }
        stompClient.current.send(`/pub/${channel.url}`, {}, JSON.stringify(msg));
       const newMessage = {
            userId: user.userId,
            name: user.name,
            content: message,
       }
       dispatch(setMessages([...messages, newMessage]));
        setMessage("");
    }  
    
    return (
        <>
        <Container fluid className="message-input">
            <Row >
                
                <Col className="p-0">
                    <TextareaAutosize  onKeyDown={keyDownEvent} onChange={myMessage} className="input" value={message} placeholder="write message..." name="content" />
                </Col>
                <Button variant="primary" className="msg-btn" onClick={async() =>  {await sendMessage();}} ><i className="bi bi-send go"></i></Button>
                
            </Row>
        </Container>
        </>
    );
};

export default MessageInput;