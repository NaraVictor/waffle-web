import React, { Component } from "react";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Gemat",
		};
	}

	render() {
		return (
			<div className="post">
				<div className="post__head"></div>
				<div className="post__content">
					<h5>Post Content Area</h5>
				</div>
				<div className="post__footer">
					<p>Post Footer</p>
				</div>
			</div>
		);
	}
}

export { Post };
