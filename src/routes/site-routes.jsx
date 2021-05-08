import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import { SecondaryNavigation } from "../components/index";

// views
import { HomePage, Classes, About, Help, ClassDetail } from "../views/index";

const SiteRoutes = (props) => {
	return (
		<Switch>
			<div className="page-container">
				<SecondaryNavigation />
				<div className="mt-3">
					<Route path="/about" component={About} />
					<Route path="/help" component={Help} />
					<Route path="/classes" exact component={Classes} />
					<Route path="/classes/:classname" component={ClassDetail} />
					<Route path="/" exact component={HomePage} />
				</div>
			</div>
		</Switch>
	);
};

export default SiteRoutes;
