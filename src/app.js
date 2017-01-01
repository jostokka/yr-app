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
   navigator.geolocation.watchPosition(startApp);
} else {
   x.innerHTML = "Geolocation is not supported by this browser.";
}
window.position = null;
function startApp(pos) {
    window.position = pos;
    ReactDOM.render(React.createElement(YrComponent), document.getElementById('app_container'));
}
