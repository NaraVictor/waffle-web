import React from "react";
import { Switch, Route } from "react-router-dom";

const SiteRoutes = (props) => {
	return (
		<Switch>
			<div className="page-container">
				<div className="page-content">
					{/* <Route path="/" exact component={HomePage} /> */}
				</div>
			</div>
		</Switch>
	);
};

export default SiteRoutes;
