import React from 'react';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./components/css/Login.css";
import Register from './components/Register';
const App = () => {
  const store = createStore(reducer);
 

    return (
      <>
      <Provider  store={store}>
      <BrowserRouter>
       <Login/>
       <Routes>
           <Route path='/home' Component={Home}/> 
           <Route path='/register' Component={Register}/> 
       </Routes>
     </BrowserRouter>
      </Provider>
      
      </>
    );
  }


export default App;