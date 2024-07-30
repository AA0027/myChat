import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React from 'react';

const Message = (prop) => {
    const { m_name, my_name, content } = prop;
    if(m_name === my_name){
        return (
            <div className='message my' >
                <div className='msg-bowl'>{content}</div> 
                <Avatar sx={{ bgcolor: deepPurple[500], width: "40px"
                    , height: "40px", }}>
                        <div className='name'>{m_name}</div>
                </Avatar>
           
            </div>
         );  
    }
    else {
        return (
            <div className='message you' >
                <Avatar sx={{ bgcolor: deepPurple[500], width: "40px"
                    , height: "40px", }}>
                        <div className='name'>{m_name}</div>
                </Avatar>
                <div className='msg-bowl'>{content}</div> 
            </div>
         );
    }
    
};

export default Message;

