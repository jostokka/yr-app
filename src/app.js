"use strict";

import React from "react";
import ReactDOM from "react-dom";
import YrComponent from "./container/YrComponent";
import {
   hashHistory
} from "react-router";
import routes from "./routes/routes";
import "!style!css!sass!./styles/style.scss";

if (navigator.geolocation) {
   navigator.geolocation.watchPosition(startApp, errorApp);
} else {
   errorApp();
}
// default Oslo
window.position = {
    coords :{
        latitude:59.922699,
        longitude:10.750092
    }
};
function startApp(pos) {
    window.position = pos;
    ReactDOM.render(React.createElement(YrComponent), document.getElementById('app_container'));
}
function errorApp() {
    ReactDOM.render(React.createElement(YrComponent), document.getElementById('app_container'));
}
