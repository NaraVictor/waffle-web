import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import { SecondaryNavigation } from "../components/index";

// views
import {
	HomePage,
	Classes,
	About,
	Help,
	ClassDetail,
	Institution,
	Login,
	SignUp,
} from "../views/index";

const SiteRoutes = (props) => {
	return (
		<div className="page-container">
			{/* <SecondaryNavigation /> */}
			<div className="mt-3">
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/help" component={Help} />
					<Route path="/classes" component={Classes} />
					<Route path="/home" component={HomePage} />
					<Route path="/signup" exact component={SignUp} />

					{/* parametized routes */}
					<Route path="/classes/:classname" component={ClassDetail} />
					<Route path="/:institution" component={Institution} />
					<Route path="/" exact component={Login} />
				</Switch>
			</div>
		</div>
	);
};

export default SiteRoutes;
