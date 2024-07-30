import React, { useEffect, useState } from 'react';
import "./css/SideBar.css";
import Channel from './Channel';
import axios from 'axios';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useSelector } from "react-redux";
import { setUser } from '../redux/store';

const SideBar = () => {
    const { user } = useSelector((store) => store); 
    const [channels, setChannels] = useState([
        {
            id: "",
            name: "",
            url: "",
            chatUsers: null,
        }
    ]);

    useEffect(() => {

        axios({
        method: "get",
        url: "http://localhost:8080/chating-room/list",
        })
        .then(response => {
            console.log(response);
            const {data, status} = response;
            if(status === 200){
                console.log(data);
                setChannels([...data]);
            }else{
                window.alert("No Channel");
            }
            });
            
    },[ ]);

    
   
    console.log("console: " + channels);
   
    return (
        
        <>
        {/* { modal ? "hello" : null} */}
        <div style={{display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#c8c8c8"}}>

            <Avatar sx={{ bgcolor: deepPurple[500], width: "100px"
                , height: "100px", marginLeft: "auto", marginRight: "auto", marginBottom: "20px" ,
                marginTop: "20px"}}>
                    {user.name}
            </Avatar>
            {/* 새 채널 생성 */}
            
            <div className="channel-label">
                <div className='black-han-sans-regular'>생성된 방</div> 
            </div>
           
            
            {channels.map(c => {
                console.log(c);
                return <Channel key={c.name} name={c.name} url={c.url} chatUsers={c.chatUsers} setChannels={setChannels} channels={channels}/>
            })}
        </div>
            
        </>
      
    );
};

export default SideBar;