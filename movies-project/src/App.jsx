import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import { TestPage } from "./components/moviedetail/TestPage";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={TestPage} />
        <Route path="/testPage/:id" component={TestPage} />
      </Switch>
    </main>
  );
}

export default App;
