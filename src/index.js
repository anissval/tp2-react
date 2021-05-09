import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {heroesListManager} from "./reducer";

// Store, se crea el store con la funcion del reducer
var store = createStore(heroesListManager);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
