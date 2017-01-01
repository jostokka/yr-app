import React from "react";
import {Router, Route} from "react-router";
import YrComponent from "../container/YrComponent";

var routes = (history) => {
	history = history || null;
	return (
	   <Router history={history}>
	     <Route path="/" component={YrComponent}>
	     </Route>
      </Router>
	);
};

export default routes;
