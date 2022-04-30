import './App.css';
import React, {useState} from "react";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Withdraw from "./Pages/Withdraw";
import {UserContext} from "./Helper/Context";
import Deposit from "./Pages/Deposit";
import AllData from "./Pages/AllData";
import NavBar from "./Pages/NavBar";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (

    <UserContext.Provider value={{users:[]}}>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}> 
          <Route index element={<Home />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="alldata" element={<AllData />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </UserContext.Provider>
  ); 
}

export default App;
