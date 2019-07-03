import "./scss/style.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Contacts} from "./components/Contacts";
import {Footer} from "./components/Footer";
import {History} from "./components/History";
import {TrainingRides} from "./components/TrainingRides";
import {Price} from "./components/Price";
import {Gallery} from "./components/Gallery";

ReactDOM.render(
   <Router>
        <NavigationBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" component={History} />
            <Route path="/price" component={Price} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/training-rides" component={TrainingRides} />
            <Route path="/contacts" component={Contacts} />
        </Switch>

        <Footer />
   </Router>,
   document.getElementById("root")
);