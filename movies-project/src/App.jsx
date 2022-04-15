import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import { TestPage } from "./components/moviedetail/TestPage";
import { NavBar } from "./components/navBar/NavBar";
import { Login } from "./components/login/Login";
import { Signin } from "./components/signin/signin";

export function App() {
  return (
    <div className="mainBody">
      <NavBar></NavBar>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={TestPage} />
          <Route path="/testPage/:id" component={TestPage} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
