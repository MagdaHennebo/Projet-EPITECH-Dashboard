import React from "react";
import login from "./login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import register from "./register";
import News from "../components/News/News";
import Home from "./home";
import Profile from "./profile";
import readDeleteServices from "./readDeleteServices";
import UpdateServices from "./updateServices";
import createServices from "./createServices";

const Views = () => {
  const accessToken = localStorage.getItem("token")
  return (
    <Router>

      <Route path="/my-dashboard" component={login} />
      <Route path="/register" component={register} />
     

      {accessToken ? (
      <>
      <Route path="/news" component={News} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile}/>
      <Route path="/adminservices" component={readDeleteServices} />
      <Route path="/updateservices" component={UpdateServices}/>
      <Route path="/createservices" component={createServices}/>
      </>
      ) : (
        <Redirect to="/my-dashboard" />
      )}
    </Router>
  );
};

export default Views;
