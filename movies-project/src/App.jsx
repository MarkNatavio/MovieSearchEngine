import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import { TestPage } from "./components/moviedetail/TestPage";
import { NavBar } from "./components/navBar/NavBar";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/signup";
import { About } from "./components/About/About";

import { AuthProvider } from "./service/authContext";

export function App() {
  return (
    <div className="mainBody">
      <AuthProvider>
        <NavBar/>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:id" component={TestPage} />
            <Route path="/testPage/:id" component={TestPage} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
