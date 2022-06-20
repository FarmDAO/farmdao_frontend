import Home from "./pages/home/Home.jsx";
import React, { Component }  from 'react';
import "./App.css";

import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import Single1 from "./pages/single/Single1.jsx";
import Single2 from "./pages/single/Single2.jsx";
import Single3 from "./pages/single/Single3.jsx";
import Single4 from "./pages/single/Single4.jsx";
import Single5 from "./pages/single/Single5.jsx";
import Single6 from "./pages/single/Single6.jsx";
// ,Single2,Single3,Single4,Single5,Single6 from "./pages/single/Single1.jsx";
import New from "./pages/new/New.jsx";
import Landing from "./pages/landing/Landing.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./pages/Sign In/index.js";
import SignUp from "./pages/SignUp/index.js";


function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/">
    <Route index element={<Landing />} />
    <Route path="/dashboard">
    <Route index element={<Home />} />
      <Route path="login" element={<Login/>}/>
      <Route path="test" element={<Landing/>}/>
      </Route>
    <Route path="users">
        <Route index element={<List/>}/>
        <Route path="1" element={<Single/>}/>
        <Route path="2" element={<Single1/>}/>
        <Route path="3" element={<Single2/>}/>
        <Route path="4" element={<Single3/>}/>
        <Route path="5" element={<Single4/>}/>
        <Route path="6" element={<Single5/>}/>
        <Route path="7" element={<Single6/>}/>
        <Route path="new" element={<New/>}/>
    </Route>
    <Route path="/SignIn">
    <Route index element={<SignIn />} />
    </Route>
    <Route path="/SignUp">
    <Route index element={<SignUp />} />
    </Route>
      <Route path="products">
        <Route index element={<List/>}/>
        <Route path=":productId" element={<Single/>}/>
        <Route path="new" element={<New/>}/>
      </Route>
    </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
