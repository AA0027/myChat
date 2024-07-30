import React from 'react';
import SideBar from './SideBar';
import Chat from './Chat';
import {  useDispatch } from 'react-redux';
import { setUser } from '../redux/store';
import { useLocation } from 'react-router-dom';
import "./css/SideBar.css";

const Home = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user } = location.state;
    dispatch(setUser(user));
   
    console.log(user);
    return (
        <>
            <div className='home' >
                    <div className='sidebar' style={{ backgroundColor: "#c8c8c8"}}>
                        <SideBar />
                    </div>
                    <Chat />
            </div>
        </>
    );
};

export default Home;