import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const router = (
    <Router>
        <Switch>
            <Route path="/movie/:id" children={<App />} />
            <Route path="/movie/:id/*" children={<App />} />
        </Switch>
    </Router>
);

ReactDOM.render(router, document.getElementById("app"));
