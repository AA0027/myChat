import { useDispatch, useSelector } from 'react-redux';
import { setChannel, setMessages } from '../redux/store';
import axios from 'axios';
import "./css/SideBar.css";
import { Avatar } from '@mui/material';
import { Button } from 'react-bootstrap';
const Channel = (props) => {

    const {url, name, chatUsers, setChannels, channels} = props;
    const { user } = useSelector((store) => store);
    const dispatch = useDispatch();
    let num;
    if(chatUsers == null){      
        num = 0;
    }else{
        num=chatUsers.length;
    }
      
    const channel = {url: url, name: name, num: num};

    // 채털클릭
    const clickChannel = async () => {
        window.confirm("입장하시겠습니까?") && await goChannel();
    }

    // 채널값 설정
    const goChannel = async () => {
        await enterChannel();
        dispatch(setChannel(channel));
        axios({
            method: "get",
            url: `http://localhost:8080/messages/${channel.url}`,
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
                console.log(response);
                const {status, data} = response;
                console.log(data);
                if(status === 200){
                    const messages = data.map(e =>{ return {
                        userId: e.chatUser.userId,
                        name: e.chatUser.name,
                        content: e.content
                    }});

                    dispatch(setMessages(messages));
                }
        });
    };

    const enterChannel = async () => {
        axios({
            method: "post",
            url: "http://localhost:8080/entrance",
            data: {
                url: channel.url,
                userId: user.id,
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            const {status, data} = response;
            if(status === 200){
                const newChannels = channels.map(e => {
                    if(e.url === data.url){
                        return {...e, ...data};
                    }
                    else return e;
                });
                dispatch(setChannel(newChannels));
            }
        })
    }

    const deleteChannel = async (e) => {
        axios({
            method: "get",
            url: `http://localhost:8080/delete?url=${channel.url}`
        }).then((response) => {
            const {data, status} = response;
            if(status === 200){
                console.log(data);
                setChannels([...data]);
            }else{
                window.alert("No Channel");
            }
        });
    }
   

    return (
        <div className='channel' style={{display: "flex"}}>
            <Button onClick={async () => {
                await clickChannel()
            }} style={{ backgroundColor: "#CDA27D" , border: "none"}}>
                <Avatar  sx={{ bgcolor: "#CDA27D", width: "120px"
                    , whiteSpace: 'nowrap', fontSize: "1em"}} variant="square">
                    {name} 
                </Avatar>
                
           
            </Button>
            <Button variant="outlined" color="error" className='close' onClick={async () => {await deleteChannel()}}>
                delete
            </Button>
        </div>
    );
};

export default Channel;