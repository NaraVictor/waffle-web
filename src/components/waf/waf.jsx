import dp from "../../static/img/pp.jpg";

import React, { Component } from "react";

class Waf extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="waf">
				<img src={dp} alt="user avatar" className="waf-avatar" />
				<div className="waf__text">
					<p className="waf-header">share or ask a question</p>
					<p className="waf-small">
						start questions with <strong>'what, why, how'</strong>, etc. and end
						with a question mark
					</p>
				</div>
			</div>
		);
	}
}

export { Waf };
