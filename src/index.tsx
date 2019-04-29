import "./scss/style.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";

ReactDOM.render(
    <section>
        <NavigationBar />
        <Home />
    </section>,
    document.getElementById("root")
)